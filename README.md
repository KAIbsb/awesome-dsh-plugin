# Awesome DSH Plugins

> 用 30 秒找到适合你的 DeepSeek Harness 插件。
> 不只是仓库列表：这里告诉你插件解决什么问题、适合谁，以及从哪里开始。

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
![Plugins](https://img.shields.io/badge/plugins-212-2563eb)
![Updated](https://img.shields.io/badge/updated-2026--08--13-16a34a)
[![Catalog refresh](https://github.com/bruc3van/awesome-dsh-plugin/actions/workflows/update-catalog.yml/badge.svg)](https://github.com/bruc3van/awesome-dsh-plugin/actions/workflows/update-catalog.yml)
![License](https://img.shields.io/badge/license-MIT-f59e0b)

[English](./README_EN.md) · [浏览全部 212 个插件](./CATALOG.md) · [推荐一个插件](./CONTRIBUTING.md) · [机器可读数据](./data/repositories.json)

**如果这个列表帮你找到一个有用的插件，欢迎点一个 Star ⭐。它能帮助更多 DSH 用户发现这个生态。**

## 你想让 DSH 做什么？

| 我想要…… | 推荐从这里开始 | 为什么 |
| --- | --- | --- |
| 更方便地管理和发现插件 | [plugin-registry](https://github.com/vlln/plugin-registry) | 在浏览器面板中管理 repository 插件，并提供开发引导。 |
| 看清后台任务进度 | [dsh-task-status](https://github.com/vlln/dsh-task-status) | 在对话页显示任务进度和实时输出 tail。 |
| 定时或按事件唤醒 Agent | [dsh-loop](https://github.com/vlln/dsh-loop) · [dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) | 覆盖周期任务，以及文件、命令、HTTP、进程和 Webhook 事件。 |
| 更顺手地阅读和操作长对话 | [dsh-navbar](https://github.com/vlln/dsh-navbar) · [dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | 快速跳转用户消息节点，并像 Codex 一样选中文本批注。 |
| 在对话中生成交互式界面 | [dsh-genui](https://github.com/omdsh-dev/dsh-genui) | 在回复中渲染图表、表单、测验、Mermaid 和 3D 场景。 |
| 让 Agent 操作真实设计画布 | [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | 创建、编辑、预览和验证可交互的多页面 OpenPencil 设计稿。 |
| 给 DSH 增加视觉理解能力 | [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | 覆盖图片问答、长截图 OCR、UI 还原、定位和像素对比。 |
| 给工作区增加一个陪伴型宠物 | [whale-girl](https://github.com/vlln/whale-girl) | 可拖拽、投喂和玩耍的积累型鲸鱼娘桌面伙伴。 |

## 第一次使用 DSH 插件？

不需要一次装很多。先选一个与你当前问题最接近的组合：

### 日常体验套装

先解决插件管理、后台状态和长对话导航这三个最常见的问题。

[plugin-registry](https://github.com/vlln/plugin-registry) · [dsh-task-status](https://github.com/vlln/dsh-task-status) · [dsh-navbar](https://github.com/vlln/dsh-navbar)

### 自动化套装

同时拥有定时循环和事件驱动唤醒，适合长时间、无人值守任务。

[dsh-loop](https://github.com/vlln/dsh-loop) · [dsh-sentinel](https://github.com/fuhefei/dsh-sentinel)

### 创作与界面套装

让 Agent 生成交互式 UI、操作真实设计画布，并理解视觉内容。

[dsh-genui](https://github.com/omdsh-dev/dsh-genui) · [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) · [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit)

## 编辑推荐

这里不是按 Stars 自动排名。我们优先选择解决明确问题、说明完整、仍在维护且具有代表性的项目。收录不等于安全或兼容性背书。

### [plugin-registry — 从看仓库到真正管理插件](https://github.com/vlln/plugin-registry)

面向普通用户的可视化插件管理入口，同时给开发者提供 make-dsh-plugin 引导。适合第一次进入 DSH 插件生态的人。

`新手友好` `插件管理` `开发引导`

### [dsh-sentinel — 让 Loop 从定时升级为事件驱动](https://github.com/fuhefei/dsh-sentinel)

监听文件、命令、HTTP、进程或 Webhook，在条件满足时唤醒 DSH。适合自动化监控、长任务和无人值守工作流。

`事件驱动` `持久监控` `自动化`

### [dsh-task-status — 不再猜后台任务跑到哪了](https://github.com/vlln/dsh-task-status)

把后台任务进度和实时输出 tail 放回对话页面，尤其适合构建、下载、测试等长时间命令。

`后台任务` `实时输出` `可观察性`

### [dsh-annotation — 像 Codex 一样批注对话内容](https://github.com/omdsh-dev/dsh-annotation)

选中文字、添加批注并随消息发送，回复可以逐条对照 Annotation，适合审稿、代码评审和精确反馈。

`批注` `精确反馈` `零核心改动`

### [dsh-genui — 让回复变成可交互界面](https://github.com/omdsh-dev/dsh-genui)

在对话中直接呈现图表、表单、测验、Mermaid、3D 场景，并把用户操作重新送回模型。

`生成式 UI` `交互` `可视化`

### [DSH OpenPencil — 让 Agent 操作真实设计画布](https://github.com/ZSeven-W/dsh-openpencil)

连接 DSH 与 OpenPencil，让 Agent 理解画布结构、节点和组件关系，直接创建、修改、预览并验证可编辑的多页面设计，而不是只返回一张图片。

`设计画布` `多页面` `可编辑`

### [dsh-vision-toolkit — 给纯文本模型补上视觉工具箱](https://github.com/Anionex/dsh-vision-toolkit)

覆盖图片问答、长截图 OCR、UI 还原、视觉定位、像素对比和 Artifacts，适合前端与视觉任务。

`视觉理解` `OCR` `UI 还原`

### [whale-girl — 陪你 Vibe Coding 的鲸鱼娘](https://github.com/vlln/whale-girl)

可拖拽、投喂和玩耍的 DSH Web GUI 桌面宠物，为长时间 Agent 工作增加一点陪伴感。

`桌面宠物` `陪伴` `Web UI`

## 最近加入生态

| 项目 | 简介 | 创建日期 |
| --- | --- | --- |
| [LingLambda/dsh-undo](https://github.com/LingLambda/dsh-undo) | Context undo/redo plugin for DeepSeek Harness (dsh): roll the model context back to the last completed step and restore it again. | 2026-08-13 |
| [YYTbit/dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) | Bridge Claude Code memory, skills, and config into DeepSeek Harness | 2026-08-13 |
| [titanwings/dsh-better-browser](https://github.com/titanwings/dsh-better-browser) | DSH 真实浏览器插件：通过 Kimi WebBridge 让 Agent 操作用户已登录的浏览器，并提供 13 个 webbridge_* 工具。 / Let DSH Agents use your signed-in browser through thirteen Kimi WebBridge tools. | 2026-08-13 |
| [orriduck/dsh-tui](https://github.com/orriduck/dsh-tui) | A small, session-aware terminal UI for DeepSeek Harness | 2026-08-13 |
| [FlashingChen/dsh-worktree](https://github.com/FlashingChen/dsh-worktree) | Codex-style permanent git worktrees for DeepSeek Harness: worktree_create/list/remove agent tools, a /worktree chat command, and durable per-repo manifests. | 2026-08-13 |
| [yoke233/dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) | OpenAI Codex OAuth login and usage card plugin for DeepSeek Harness | 2026-08-13 |
| [awesome-dsh-plugin/awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) | A curated list of plugins for DeepSeek Harness (dsh) · DeepSeek Harness 插件精选列表 | 2026-08-13 |
| [Dominic789654/awesome-deepseek-harness](https://github.com/Dominic789654/awesome-deepseek-harness) | A curated list of plugins, skills, MCP servers, orchestrators & UIs for DeepSeek Harness (DSH). Visualization · PPT · Coding · Agents · Loops (auto-research) and more. #dsh | 2026-08-13 |

## 为什么维护这个列表？

- **面向使用者，而不是爬虫：** 从“我想完成什么”出发，而不是让你阅读几百行仓库名称。
- **人工推荐 + 全量索引：** 首页提供选择建议，[CATALOG.md](./CATALOG.md) 保留完整 Topic 快照。
- **中文默认，中英双语：** 普通用户可以直接理解，英文读者也有独立入口。
- **结构化且可复现：** 推荐配置在 [data/curated.json](./data/curated.json)，原始元数据在 [data/repositories.json](./data/repositories.json)。
- **持续更新：** 目录每天从 GitHub `dsh-plugin` Topic 自动刷新；当前数据时间为 **2026-08-13 UTC**。

当前索引包含 **212** 个仓库、**10** 种主要语言；其中 **158** 个声明了许可证，**212** 个未归档且未禁用。

## 使用与安全

第三方插件可能读取会话、文件、网络或系统资源。安装前请检查源码、权限、许可证、安装方式和最近更新情况，并优先在隔离环境中试用。本列表仅做发现与整理，不代表 DSH 官方认可。

## 推荐或修正插件

发现遗漏、分类不准确或说明过时？欢迎提交 Issue 或 Pull Request。公开仓库只要带有 `dsh-plugin` Topic，就会进入全量目录；编辑推荐需要补充清晰的使用场景和中英文理由。详见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## License

本列表采用 [MIT License](./LICENSE) 发布；各收录项目遵循其各自许可证。
