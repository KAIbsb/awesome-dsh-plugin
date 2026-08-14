#!/usr/bin/env node

// Validates data/curated.json before it reaches main.
//
// category_overrides references are checked against the live GitHub API rather
// than data/repositories.json: the stored snapshot always lags behind, so a
// freshly submitted repository would otherwise look invalid. Archived or
// disabled repositories are not flagged — they stay listed in the catalog with
// their status, and their overrides remain meaningful. The exclusion list is
// intentionally not checked against the API: entries may be deleted or renamed,
// and keeping them out of the catalog by name is still correct.

import { readFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { categoryKeys } from './categories.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const validCategories = new Set(categoryKeys);
const ownerRepoPattern = /^[\w.-]+\/[\w.-]+$/;

let curated;
try {
  curated = JSON.parse(await readFile(resolve(root, 'data/curated.json'), 'utf8'));
} catch (error) {
  console.error(`data/curated.json could not be parsed: ${error.message}`);
  process.exit(1);
}

const referenced = new Set();

for (const [fullName, category] of Object.entries(curated.category_overrides || {})) {
  if (!ownerRepoPattern.test(fullName)) {
    errors.push(`category_overrides key "${fullName}" is not a valid owner/repo reference`);
    continue;
  }
  if (!validCategories.has(category)) {
    errors.push(`category_overrides["${fullName}"]: unknown category "${category}" (valid: ${categoryKeys.join(', ')})`);
    continue;
  }
  referenced.add(fullName);
}

for (const fullName of Object.keys(curated.excluded_repos || {})) {
  if (!ownerRepoPattern.test(fullName)) {
    errors.push(`excluded_repos key "${fullName}" is not a valid owner/repo reference`);
  }
}

const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'awesome-dsh-plugin',
  'X-GitHub-Api-Version': '2022-11-28',
};
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

await Promise.all([...referenced].map(async (fullName) => {
  let response;
  try {
    response = await fetch(`https://api.github.com/repos/${fullName}`, { headers });
  } catch (error) {
    errors.push(`${fullName}: GitHub API request failed (${error.message})`);
    return;
  }
  if (response.status === 404) {
    errors.push(`${fullName}: repository not found — deleted, renamed, or not public`);
    return;
  }
  if (!response.ok) {
    errors.push(`${fullName}: GitHub API ${response.status} ${await response.text()}`);
    return;
  }
  const repo = await response.json();
  if (repo.private) errors.push(`${fullName}: repository is private`);
  if (!(repo.topics || []).includes('dsh-plugin')) {
    errors.push(`${fullName}: missing the "dsh-plugin" topic, so the override never applies`);
  }
  if (repo.full_name.toLowerCase() !== fullName.toLowerCase()) {
    errors.push(`${fullName}: repository was renamed to "${repo.full_name}" — update the reference`);
  }
}));

if (errors.length) {
  console.error(`data/curated.json validation failed with ${errors.length} problem(s):\n`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(`data/curated.json is valid — ${referenced.size} category-override repositories checked against the GitHub API.`);
