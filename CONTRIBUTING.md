# 贡献指南 / Contributing

感谢你帮助维护 Awesome DSH Plugin。

Thank you for helping maintain Awesome DSH Plugin.

## 收录标准 / Inclusion criteria

- 仓库必须公开，并带有 `dsh-plugin` GitHub Topic。
- 项目说明应准确、简洁，不使用无法核实的宣传语。
- 请披露归档、许可证缺失或明显安全风险等重要状态。
- A repository must be public and carry the `dsh-plugin` GitHub topic.
- Descriptions should be accurate and concise, without unverifiable marketing claims.
- Important status such as archival, missing license, or evident security risk should be disclosed.

## 更新数据 / Refreshing data

```bash
node scripts/update.mjs
```

人工推荐、场景导航和分类覆盖写在 `data/curated.json`；不要直接编辑生成后的推荐区块。

Curated recommendations, scenario navigation, and category overrides live in `data/curated.json`; do not edit generated recommendation sections directly.

刷新最新 GitHub 数据：

```bash
node scripts/update.mjs
```

仅使用现有快照重新生成页面：

```bash
node scripts/update.mjs --from-snapshot
```

提交前请确认 `README.md`、`README_EN.md`、`CATALOG.md` 与 `data/repositories.json` 保持一致。

Before submitting, make sure `README.md`, `README_EN.md`, `CATALOG.md`, and `data/repositories.json` stay in sync.
