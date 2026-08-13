#!/usr/bin/env node

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const query = 'topic:dsh-plugin';
const fetchedAt = new Date().toISOString();

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

const first = await fetchPage(1);
const pageCount = Math.ceil(first.total_count / 100);
const remaining = await Promise.all(
  Array.from({ length: Math.max(0, pageCount - 1) }, (_, index) => fetchPage(index + 2)),
);
const items = [first, ...remaining].flatMap((page) => page.items);

const categoryRules = [
  ['ecosystem-resources', '生态与资源', 'Ecosystem & Resources', /awesome|hub|find-plugin|omdsh|component|fabric|101|workshop|community/i],
  ['ui-experience', '界面与体验', 'UI & Experience', /\bui\b|web-ui|sidebar|side-panel|skin|theme|css|chat-width|focus-chat|input|paste|status|notification|split-pane|artifact|genui|emoji|sticker|pet|mygo/i],
  ['web-browser', '网页与浏览器', 'Web & Browser', /web|browser|archive|openpencil|computer-use|spotlight|launcher|desktop|deeplink|drag-and-drop/i],
  ['integrations-sharing', '集成与分享', 'Integrations & Sharing', /share|github|telegram|qq|zotero|acp|connect|remote|teleport|tonghuashun|stock-market|identity/i],
  ['knowledge-research', '知识与研究', 'Knowledge & Research', /knowledge|research|kb|distill|mnemon|math|lean|sieve|mineru|tool-browser/i],
  ['media-vision', '媒体与视觉', 'Media & Vision', /vision|photo|canvas|aigc|visual|multimodal|qwen-mm|image|ads/i],
  ['developer-tools', '开发者工具', 'Developer Tools', /vscode|git|diff|inspect|plugin-dev|plugin-check|custom-tool|tool-search|doctor|runtime|sandbox|template|encoding|schema|regex|json|csv|calculator|\bstat\b/i],
  ['agents-workflows', 'Agent 与工作流', 'Agents & Workflows', /agent|workflow|harness|advisor|approval|subagent|budget|fallback|deep-research|evolve|team/i],
];

function categoryFor(repo) {
  const haystack = [repo.name, repo.description, ...(repo.topics || [])].filter(Boolean).join(' ');
  return categoryRules.find((rule) => rule[3].test(haystack)) || [
    'utilities',
    '实用工具与其他',
    'Utilities & Other',
    null,
  ];
}

const repositories = items
  .map((repo) => {
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
  })
  .sort((a, b) => b.stargazers_count - a.stargazers_count || a.full_name.localeCompare(b.full_name));

const snapshot = {
  source: 'https://github.com/topics/dsh-plugin',
  query,
  fetched_at: fetchedAt,
  total_count: repositories.length,
  repositories,
};

const date = fetchedAt.slice(0, 10);
const totals = {
  stars: repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0),
  languages: new Set(repositories.map((repo) => repo.language).filter(Boolean)).size,
  licenses: repositories.filter((repo) => repo.license).length,
};
const featured = repositories
  .filter((repo) => !repo.archived && !/^awesome-/i.test(repo.full_name.split('/')[1]))
  .slice(0, 12);

const esc = (value) => String(value ?? '').replaceAll('|', '\\|').replaceAll('\n', ' ');
const fallbackZh = (repo) => `面向 DSH 的${repo.category_zh}项目；仓库暂未提供简介。`;
const fallbackEn = (repo) => `A DSH project in ${repo.category_en}; no GitHub description is available yet.`;
const descZh = (repo) => repo.description
  ? `${repo.category_zh}：${esc(repo.description)}`
  : fallbackZh(repo);
const descEn = (repo) => repo.description ? esc(repo.description) : fallbackEn(repo);
const updated = (repo) => repo.updated_at.slice(0, 10);

function categorySections(language) {
  return categoryRules
    .map(([key, zh, en]) => [key, zh, en])
    .concat([['utilities', '实用工具与其他', 'Utilities & Other']])
    .map(([key, zh, en]) => {
      const group = repositories.filter((repo) => repo.category === key);
      if (!group.length) return '';
      const title = language === 'zh' ? zh : en;
      const header = language === 'zh'
        ? '| 项目 | 推荐说明 | 语言 | Stars | Forks | 许可证 | 更新日期 |\n| --- | --- | --- | ---: | ---: | --- | --- |'
        : '| Project | Why it may help | Language | Stars | Forks | License | Updated |\n| --- | --- | --- | ---: | ---: | --- | --- |';
      const rows = group.map((repo) =>
        `| [${repo.full_name}](${repo.html_url}) | ${language === 'zh' ? descZh(repo) : descEn(repo)} | ${repo.language || '—'} | ${repo.stargazers_count} | ${repo.forks_count} | ${repo.license || '—'} | ${updated(repo)} |`,
      );
      return `## ${title}\n\n${header}\n${rows.join('\n')}`;
    })
    .filter(Boolean)
    .join('\n\n');
}

const featuredZh = featured.map((repo) =>
  `- [${repo.full_name}](${repo.html_url}) — ⭐ ${repo.stargazers_count}；${descZh(repo)}`,
).join('\n');
const featuredEn = featured.map((repo) =>
  `- [${repo.full_name}](${repo.html_url}) — ⭐ ${repo.stargazers_count}; ${descEn(repo)}`,
).join('\n');

const readmeZh = `# Awesome DSH Plugin\n\n> 精选并完整收录 GitHub [dsh-plugin Topic](https://github.com/topics/dsh-plugin) 下的公开仓库。\n\n[English](./README_EN.md) | [贡献指南](./CONTRIBUTING.md) | [结构化数据](./data/repositories.json)\n\n本列表既提供按用途整理的推荐入口，也保留 Topic 中的全部仓库，避免只展示热门项目。仓库描述来自 GitHub；中文条目补充了用途分类，但不对未经仓库作者声明的功能做推断。\n\n- 仓库：**${repositories.length}**\n- Stars 合计：**${totals.stars}**\n- 主要语言：**${totals.languages}** 种\n- 已声明许可证：**${totals.licenses}** 个\n- 数据更新时间：**${date} UTC**\n\n## 精选推荐\n\n以下项目按当前 Stars 排序，适合作为探索生态的起点；Stars 仅代表社区关注度，不等同于质量或安全背书。\n\n${featuredZh}\n\n## 使用与安全提示\n\n第三方插件可能读取会话、文件、网络或系统资源。安装前请检查源码、权限、许可证和最近更新情况，并优先在隔离环境中试用。本列表仅做信息整理，不代表 DSH 官方认可。\n\n${categorySections('zh')}\n\n## 数据来源与更新\n\n数据通过 GitHub Search API 的 \`topic:dsh-plugin\` 查询生成。运行 \`node scripts/update.mjs\` 可刷新列表；完整字段见 [data/repositories.json](./data/repositories.json)。\n\n## 贡献\n\n欢迎通过 Issue 或 Pull Request 修正分类、补充说明或改进推荐。仓库必须公开且带有 \`dsh-plugin\` Topic。详见 [CONTRIBUTING.md](./CONTRIBUTING.md)。\n\n## License\n\n本列表采用 [MIT License](./LICENSE) 发布；各收录项目遵循其各自许可证。\n`;

const readmeEn = `# Awesome DSH Plugin\n\n> A curated and complete index of public repositories under GitHub's [dsh-plugin topic](https://github.com/topics/dsh-plugin).\n\n[中文](./README.md) | [Contributing](./CONTRIBUTING.md) | [Structured data](./data/repositories.json)\n\nThis list combines curated discovery with complete topic coverage, so less popular projects remain visible. Descriptions come from GitHub; category labels aid discovery without inventing features not claimed by repository owners.\n\n- Repositories: **${repositories.length}**\n- Combined stars: **${totals.stars}**\n- Primary languages: **${totals.languages}**\n- Repositories declaring a license: **${totals.licenses}**\n- Data refreshed: **${date} UTC**\n\n## Featured picks\n\nThese currently lead by stars and are useful starting points for exploring the ecosystem. Stars indicate attention, not a quality or security endorsement.\n\n${featuredEn}\n\n## Usage and safety\n\nThird-party plugins may access conversations, files, networks, or system resources. Review source code, permissions, licenses, and recent activity before installation, and test in an isolated environment when possible. Inclusion does not imply official DSH endorsement.\n\n${categorySections('en')}\n\n## Data source and updates\n\nThe list is generated from GitHub Search API query \`topic:dsh-plugin\`. Run \`node scripts/update.mjs\` to refresh it. See [data/repositories.json](./data/repositories.json) for the complete metadata snapshot.\n\n## Contributing\n\nIssues and pull requests are welcome for classification fixes, clearer summaries, and curation improvements. Repositories must be public and tagged with \`dsh-plugin\`. See [CONTRIBUTING.md](./CONTRIBUTING.md).\n\n## License\n\nThis list is released under the [MIT License](./LICENSE). Included projects retain their respective licenses.\n`;

await mkdir(resolve(root, 'data'), { recursive: true });
await writeFile(resolve(root, 'data/repositories.json'), `${JSON.stringify(snapshot, null, 2)}\n`);
await writeFile(resolve(root, 'README.md'), readmeZh);
await writeFile(resolve(root, 'README_EN.md'), readmeEn);

console.log(`Updated ${repositories.length} repositories at ${fetchedAt}`);
