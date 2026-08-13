#!/usr/bin/env node

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const query = 'topic:dsh-plugin';
const fromSnapshot = process.argv.includes('--from-snapshot');

const categoryRules = [
  ['ecosystem-resources', '生态与资源', 'Ecosystem & Resources', /awesome|hub|find-plugin|plugin-registry|plugin-check|plugin-dev|template|community/i],
  ['ui-experience', '界面与体验', 'UI & Experience', /\bui\b|web-ui|sidebar|navbar|side-panel|skin|theme|css|chat-width|focus-chat|input|paste|status|notification|split-pane|annotation|genui|emoji|sticker|pet|whale/i],
  ['media-vision', '设计、媒体与视觉', 'Design, Media & Vision', /vision|photo|canvas|aigc|visual|multimodal|qwen-mm|image|openpencil|design/i],
  ['web-browser', '网页与浏览器', 'Web & Browser', /web|browser|archive|computer-use|spotlight|launcher|desktop|deeplink|drag-and-drop/i],
  ['integrations-sharing', '集成与分享', 'Integrations & Sharing', /share|github|telegram|qq|zotero|acp|connect|remote|teleport|tonghuashun|stock-market|identity/i],
  ['knowledge-research', '知识与研究', 'Knowledge & Research', /knowledge|research|kb|distill|mnemon|math|lean|sieve|mineru|memory|scholar/i],
  ['developer-tools', '开发者工具', 'Developer Tools', /vscode|git|diff|inspect|custom-tool|tool-search|doctor|runtime|sandbox|encoding|schema|regex|json|csv|calculator|\bstat\b/i],
  ['agents-workflows', 'Agent、自动化与工作流', 'Agents, Automation & Workflows', /agent|workflow|harness|advisor|approval|subagent|budget|fallback|deep-research|evolve|team|loop|sentinel|checkpoint/i],
];

const categoryFallback = ['utilities', '实用工具与其他', 'Utilities & Other'];
const curated = JSON.parse(await readFile(resolve(root, 'data/curated.json'), 'utf8'));
const categoryOverrides = new Map(
  Object.entries(curated.category_overrides || {}).map(([fullName, category]) => [fullName.toLowerCase(), category]),
);

async function fetchPage(page) {
  const response = await fetch(
    `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&per_page=100&page=${page}`,
    {
      headers: {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'awesome-dsh-plugin',
        'X-GitHub-Api-Version': '2022-11-28',
      },
    },
  );
  if (!response.ok) throw new Error(`GitHub API ${response.status}: ${await response.text()}`);
  return response.json();
}

function categoryFor(repo) {
  const override = categoryOverrides.get(repo.full_name.toLowerCase());
  if (override) {
    const match = categoryRules.find(([key]) => key === override);
    if (match) return match;
  }
  const haystack = [repo.name, repo.description, ...(repo.topics || [])].filter(Boolean).join(' ');
  return categoryRules.find((rule) => rule[3].test(haystack)) || categoryFallback;
}

function normalizeRepository(repo) {
  const category = categoryFor(repo);
  return {
    id: repo.id,
    full_name: repo.full_name,
    html_url: repo.html_url,
    description: repo.description,
    homepage: repo.homepage || null,
    category: category[0],
    category_zh: category[1],
    category_en: category[2],
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    open_issues_count: repo.open_issues_count,
    license: repo.license?.spdx_id || null,
    archived: repo.archived,
    disabled: repo.disabled,
    created_at: repo.created_at,
    updated_at: repo.updated_at,
    pushed_at: repo.pushed_at,
    default_branch: repo.default_branch,
    size_kb: repo.size,
    topics: repo.topics || [],
  };
}

async function refreshSnapshot() {
  const first = await fetchPage(1);
  const pageCount = Math.ceil(first.total_count / 100);
  const remaining = await Promise.all(
    Array.from({ length: Math.max(0, pageCount - 1) }, (_, index) => fetchPage(index + 2)),
  );
  const repositories = [first, ...remaining]
    .flatMap((page) => page.items)
    .map(normalizeRepository)
    .sort((a, b) => b.stargazers_count - a.stargazers_count || a.full_name.localeCompare(b.full_name));
  return {
    source: 'https://github.com/topics/dsh-plugin',
    query,
    fetched_at: new Date().toISOString(),
    total_count: repositories.length,
    repositories,
  };
}

const snapshot = fromSnapshot
  ? JSON.parse(await readFile(resolve(root, 'data/repositories.json'), 'utf8'))
  : await refreshSnapshot();
const repositories = snapshot.repositories
  .map((repo) => {
    const category = categoryFor({ ...repo, name: repo.name || repo.full_name.split('/')[1] });
    return {
      ...repo,
      category: category[0],
      category_zh: category[1],
      category_en: category[2],
    };
  })
  .sort((a, b) => b.stargazers_count - a.stargazers_count || a.full_name.localeCompare(b.full_name));
snapshot.repositories = repositories;
snapshot.total_count = repositories.length;
const repoMap = new Map(repositories.map((repo) => [repo.full_name.toLowerCase(), repo]));
const date = snapshot.fetched_at.slice(0, 10);
const totals = {
  languages: new Set(repositories.map((repo) => repo.language).filter(Boolean)).size,
  licenses: repositories.filter((repo) => repo.license).length,
  active: repositories.filter((repo) => !repo.archived && !repo.disabled).length,
};

const esc = (value) => String(value ?? '').replaceAll('|', '\\|').replaceAll('\n', ' ');
const repoName = (fullName) => fullName.split('/')[1];
const repoFor = (fullName) => {
  const repo = repoMap.get(fullName.toLowerCase());
  if (!repo) throw new Error(`Curated repository is missing from the topic snapshot: ${fullName}`);
  return repo;
};
const repoLink = (fullName) => {
  const repo = repoFor(fullName);
  return `[${repoName(repo.full_name)}](${repo.html_url})`;
};
const updated = (repo) => repo.updated_at.slice(0, 10);

function scenarioTable(language) {
  const header = language === 'zh'
    ? '| 我想要…… | 推荐从这里开始 | 为什么 |\n| --- | --- | --- |'
    : '| I want to… | Start here | Why |\n| --- | --- | --- |';
  const rows = curated.scenarios.map((item) => {
    const links = item.repos.map(repoLink).join(' · ');
    return `| ${item[`goal_${language}`]} | ${links} | ${item[`why_${language}`]} |`;
  });
  return `${header}\n${rows.join('\n')}`;
}

function starterKits(language) {
  return curated.starter_kits.map((kit) => {
    const links = kit.repos.map(repoLink).join(' · ');
    return `### ${kit[`title_${language}`]}\n\n${kit[`summary_${language}`]}\n\n${links}`;
  }).join('\n\n');
}

function editorPicks(language) {
  return curated.editor_picks.map((pick) => {
    const repo = repoFor(pick.repo);
    const labels = pick[`labels_${language}`].map((label) => `\`${label}\``).join(' ');
    return `### [${pick[`title_${language}`]}](${repo.html_url})\n\n${pick[`summary_${language}`]}\n\n${labels}`;
  }).join('\n\n');
}

function recentProjects(language) {
  const recent = [...repositories]
    .filter((repo) => !repo.archived && repo.full_name !== 'bruc3van/awesome-dsh-plugin')
    .sort((a, b) => b.created_at.localeCompare(a.created_at))
    .slice(0, 8);
  const header = language === 'zh'
    ? '| 项目 | 简介 | 创建日期 |\n| --- | --- | --- |'
    : '| Project | Description | Created |\n| --- | --- | --- |';
  const rows = recent.map((repo) => `| [${repo.full_name}](${repo.html_url}) | ${esc(repo.description || (language === 'zh' ? '仓库暂未提供简介。' : 'No description provided yet.'))} | ${repo.created_at.slice(0, 10)} |`);
  return `${header}\n${rows.join('\n')}`;
}

function catalogSections() {
  return categoryRules
    .map(([key, zh, en]) => [key, zh, en])
    .concat([categoryFallback])
    .map(([key, zh, en]) => {
      const group = repositories.filter((repo) => repo.category === key);
      if (!group.length) return '';
      const rows = group.map((repo) => `| [${repo.full_name}](${repo.html_url}) | ${esc(repo.description || '—')} | ${repo.language || '—'} | ${repo.stargazers_count} | ${repo.license || '—'} | ${updated(repo)} |`);
      return `## ${zh} / ${en} (${group.length})\n\n| Project | Description | Language | Stars | License | Updated |\n| --- | --- | --- | ---: | --- | --- |\n${rows.join('\n')}`;
    })
    .filter(Boolean)
    .join('\n\n');
}

const badgeDate = date.replaceAll('-', '--');
const badges = `[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)\n![Plugins](https://img.shields.io/badge/plugins-${repositories.length}-2563eb)\n![Updated](https://img.shields.io/badge/updated-${badgeDate}-16a34a)\n[![Catalog refresh](https://github.com/bruc3van/awesome-dsh-plugin/actions/workflows/update-catalog.yml/badge.svg)](https://github.com/bruc3van/awesome-dsh-plugin/actions/workflows/update-catalog.yml)\n![License](https://img.shields.io/badge/license-MIT-f59e0b)`;

const readmeZh = `# Awesome DSH Plugins\n\n> 用 30 秒找到适合你的 DeepSeek Harness 插件。\n> 不只是仓库列表：这里告诉你插件解决什么问题、适合谁，以及从哪里开始。\n\n${badges}\n\n[English](./README_EN.md) · [浏览全部 ${repositories.length} 个插件](./CATALOG.md) · [推荐一个插件](./CONTRIBUTING.md) · [机器可读数据](./data/repositories.json)\n\n**如果这个列表帮你找到一个有用的插件，欢迎点一个 Star ⭐。它能帮助更多 DSH 用户发现这个生态。**\n\n## 你想让 DSH 做什么？\n\n${scenarioTable('zh')}\n\n## 第一次使用 DSH 插件？\n\n不需要一次装很多。先选一个与你当前问题最接近的组合：\n\n${starterKits('zh')}\n\n## 编辑推荐\n\n这里不是按 Stars 自动排名。我们优先选择解决明确问题、说明完整、仍在维护且具有代表性的项目。收录不等于安全或兼容性背书。\n\n${editorPicks('zh')}\n\n## 最近加入生态\n\n${recentProjects('zh')}\n\n## 为什么维护这个列表？\n\n- **面向使用者，而不是爬虫：** 从“我想完成什么”出发，而不是让你阅读几百行仓库名称。\n- **人工推荐 + 全量索引：** 首页提供选择建议，[CATALOG.md](./CATALOG.md) 保留完整 Topic 快照。\n- **中文默认，中英双语：** 普通用户可以直接理解，英文读者也有独立入口。\n- **结构化且可复现：** 推荐配置在 [data/curated.json](./data/curated.json)，原始元数据在 [data/repositories.json](./data/repositories.json)。\n- **持续更新：** 目录每天从 GitHub \`dsh-plugin\` Topic 自动刷新；当前数据时间为 **${date} UTC**。\n\n当前索引包含 **${repositories.length}** 个仓库、**${totals.languages}** 种主要语言；其中 **${totals.licenses}** 个声明了许可证，**${totals.active}** 个未归档且未禁用。\n\n## 使用与安全\n\n第三方插件可能读取会话、文件、网络或系统资源。安装前请检查源码、权限、许可证、安装方式和最近更新情况，并优先在隔离环境中试用。本列表仅做发现与整理，不代表 DSH 官方认可。\n\n## 推荐或修正插件\n\n发现遗漏、分类不准确或说明过时？欢迎提交 Issue 或 Pull Request。公开仓库只要带有 \`dsh-plugin\` Topic，就会进入全量目录；编辑推荐需要补充清晰的使用场景和中英文理由。详见 [CONTRIBUTING.md](./CONTRIBUTING.md)。\n\n## License\n\n本列表采用 [MIT License](./LICENSE) 发布；各收录项目遵循其各自许可证。\n`;

const readmeEn = `# Awesome DSH Plugins\n\n> Find the right DeepSeek Harness plugin in 30 seconds.\n> More than a repository dump: learn what each plugin solves, who it is for, and where to start.\n\n${badges}\n\n[中文](./README.md) · [Browse all ${repositories.length} plugins](./CATALOG.md) · [Recommend a plugin](./CONTRIBUTING.md) · [Machine-readable data](./data/repositories.json)\n\n**If this list helps you discover something useful, consider leaving a Star ⭐ so more DSH users can find the ecosystem.**\n\n## What do you want DSH to do?\n\n${scenarioTable('en')}\n\n## New to DSH plugins?\n\nYou do not need to install everything. Start with the kit closest to the problem you have today:\n\n${starterKits('en')}\n\n## Editor's picks\n\nThese are not ranked automatically by stars. We favor projects that solve a clear problem, explain themselves well, remain active, and represent a distinctive capability. Inclusion is not a security or compatibility endorsement.\n\n${editorPicks('en')}\n\n## Recently added\n\n${recentProjects('en')}\n\n## Why this list?\n\n- **Built for users, not crawlers:** start from the job you want to accomplish instead of scanning hundreds of repository names.\n- **Human guidance plus complete coverage:** the home page helps you choose; [CATALOG.md](./CATALOG.md) preserves the full topic snapshot.\n- **Bilingual by design:** Chinese is the default, with an independent English entry point.\n- **Structured and reproducible:** curation lives in [data/curated.json](./data/curated.json), while source metadata lives in [data/repositories.json](./data/repositories.json).\n- **Continuously refreshed:** the catalog updates daily from GitHub's \`dsh-plugin\` topic. Current data timestamp: **${date} UTC**.\n\nThe index currently covers **${repositories.length}** repositories across **${totals.languages}** primary languages. **${totals.licenses}** declare a license, and **${totals.active}** are neither archived nor disabled.\n\n## Usage and safety\n\nThird-party plugins may access conversations, files, networks, or system resources. Review source code, permissions, installation steps, licenses, and recent activity before installing, and test in an isolated environment when possible. Inclusion does not imply official DSH endorsement.\n\n## Recommend or correct a plugin\n\nFound a missing project, stale description, or incorrect category? Issues and pull requests are welcome. Public repositories carrying the \`dsh-plugin\` topic enter the full catalog automatically; editor's picks require a clear use case and bilingual rationale. See [CONTRIBUTING.md](./CONTRIBUTING.md).\n\n## License\n\nThis list is released under the [MIT License](./LICENSE). Included projects retain their respective licenses.\n`;

const catalog = `# DSH 插件全量目录 / Complete DSH Plugin Catalog\n\n[返回中文首页](./README.md) · [Back to English home](./README_EN.md) · [JSON data](./data/repositories.json)\n\n本页自动收录 GitHub [\`dsh-plugin\` Topic](https://github.com/topics/dsh-plugin) 下的全部公开仓库。它是完整索引，不代表人工推荐、兼容性验证或安全背书。\n\nThis page automatically lists every public repository under GitHub's [\`dsh-plugin\` topic](https://github.com/topics/dsh-plugin). It is a complete index, not a claim of editorial recommendation, compatibility, or security review.\n\n- Repositories: **${repositories.length}**\n- Primary languages: **${totals.languages}**\n- Declared licenses: **${totals.licenses}**\n- Refreshed: **${date} UTC**\n\n${catalogSections()}\n\n## Data source\n\nGenerated by \`node scripts/update.mjs\`. Complete metadata is available in [data/repositories.json](./data/repositories.json).\n`;

await mkdir(resolve(root, 'data'), { recursive: true });
if (!fromSnapshot) {
  await writeFile(resolve(root, 'data/repositories.json'), `${JSON.stringify(snapshot, null, 2)}\n`);
}
await writeFile(resolve(root, 'README.md'), readmeZh);
await writeFile(resolve(root, 'README_EN.md'), readmeEn);
await writeFile(resolve(root, 'CATALOG.md'), catalog);

console.log(`${fromSnapshot ? 'Generated from snapshot' : 'Updated'} ${repositories.length} repositories at ${snapshot.fetched_at}`);
