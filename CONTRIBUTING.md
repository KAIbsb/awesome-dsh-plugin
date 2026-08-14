# 贡献指南 / Contributing

感谢你帮助维护 Awesome DSH Plugin。

Thank you for helping maintain Awesome DSH Plugin.

## 收录标准 / Inclusion criteria

- 仓库必须公开，并带有 `dsh-plugin` GitHub Topic。
- 仓库必须填写 GitHub 项目简介（description）；没有简介的仓库不予收录，补充后会在下次刷新时自动加入。
- 仓库本身必须是可安装的 DSH 插件（或明确的 DSH 生态资源），而不是另一个插件目录/榜单站点，也不是蹭 `dsh-plugin` Topic 的其他 Agent 工具或无关项目（即使带了 `dsh-plugin` Topic）。明显不符合的仓库可以登记在 `data/curated.json` 的 `excluded_repos` 中并注明原因。
- 项目说明应准确、简洁，不使用无法核实的宣传语。
- 请披露归档、许可证缺失或明显安全风险等重要状态。
- A repository must be public and carry the `dsh-plugin` GitHub topic.
- A repository must have a GitHub description set; repositories without one are excluded until a description is added, then included automatically on the next refresh.
- The repository must be an installable DSH plugin itself (or a clear DSH ecosystem resource), not another plugin directory/leaderboard site, and not another agent tool or unrelated project riding the `dsh-plugin` topic for reach. Clear mismatches can be listed with a reason in `excluded_repos` in `data/curated.json`.
- Descriptions should be accurate and concise, without unverifiable marketing claims.
- Important status such as archival, missing license, or evident security risk should be disclosed.

## 推荐一个插件 / Recommending a plugin

首页的场景导航、入门套装、编辑推荐、热度榜（[README.md](./README.md) / [README_EN.md](./README_EN.md)）和 [TOP100.md](./TOP100.md) 都是人工维护页面：直接编辑对应 Markdown，并附上清晰的使用场景和理由（首页内容请同时提供中英文）。分类覆盖和蹭 Topic 排除名单写在 `data/curated.json`。

The home-page scenarios, starter kits, editor's picks, star board ([README.md](./README.md) / [README_EN.md](./README_EN.md)), and [TOP100.md](./TOP100.md) are hand-maintained pages: edit the corresponding Markdown directly and include a clear use case and rationale (bilingual wording for the home pages). Category overrides and the topic-rider exclusion list live in `data/curated.json`.

**提交人工页面或 `data/curated.json` 的 PR 不要提交生成文件。** `CATALOG.md` 和 `data/repositories.json` 由每日 `update-catalog` 工作流统一刷新；随 PR 附带它们会产生大量噪音 diff，并与自动提交冲突。

**Pull requests touching the hand-maintained pages or `data/curated.json` should not include generated files.** `CATALOG.md` and `data/repositories.json` are refreshed by the daily `update-catalog` workflow; committing them alongside a curation change creates a large noise diff and conflicts with the automated commit.

提交前本地自检 / Check your change locally before submitting:

```bash
node scripts/validate-curated.mjs
```

它会校验分类名和 `owner/repo` 引用格式，并通过 GitHub API 确认分类覆盖引用的仓库公开存在且带有 `dsh-plugin` Topic。同样的检查会在 PR 上自动运行。

It validates category names and `owner/repo` reference formats, and confirms through the GitHub API that category-override repositories are public and carry the `dsh-plugin` topic. The same check runs automatically on pull requests.

## 更新数据 / Refreshing data

从 GitHub 刷新原始快照并重新生成全量目录页（`README.md`、`README_EN.md`、`TOP100.md` 由人工维护，不会被触碰）：

```bash
node scripts/update.mjs
```

仅使用现有快照重新生成全量目录页：

```bash
node scripts/update.mjs --from-snapshot
```

原始快照保留 Topic 下的全部仓库（含未填简介和已列入排除名单的条目），过滤只发生在目录页渲染阶段，便于人工分析时看到完整数据。刚创建的仓库会晚于 `data/repositories.json` 快照，因此 `--from-snapshot` 重建的目录看不到它；这属于正常现象，用完整的 `node scripts/update.mjs` 验证即可。

A newly created repository is younger than the stored `data/repositories.json` snapshot, so it does not appear in a `--from-snapshot` rebuild — that is expected; verify with a full `node scripts/update.mjs` run instead.

## 修改生成逻辑 / Changing the generator

改动 `scripts/` 时，请在 PR 中附带重新生成的 `CATALOG.md`，以便审阅者看到输出变化。

When changing `scripts/`, include the regenerated `CATALOG.md` in the pull request so reviewers can see how the output changes.
