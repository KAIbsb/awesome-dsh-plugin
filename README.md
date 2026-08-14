# Awesome DSH Plugins

> 用 30 秒找到适合你的 DeepSeek Harness 插件。
> 不只是仓库列表：这里告诉你插件解决什么问题、适合谁，以及从哪里开始。

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
![Plugins](https://img.shields.io/badge/plugins-883-2563eb)
![Updated](https://img.shields.io/badge/updated-2026--08--14-16a34a)
[![Catalog refresh](https://github.com/bruc3van/awesome-dsh-plugin/actions/workflows/update-catalog.yml/badge.svg)](https://github.com/bruc3van/awesome-dsh-plugin/actions/workflows/update-catalog.yml)
![License](https://img.shields.io/badge/license-MIT-f59e0b)

[English](./README_EN.md) · [浏览全部 883 个插件](./CATALOG.md) · [推荐一个插件](./CONTRIBUTING.md) · [机器可读数据](./data/repositories.json)

**如果这个列表帮你找到一个有用的插件，欢迎点一个 Star ⭐。它能帮助更多 DSH 用户发现这个生态。**

## 你想让 DSH 做什么？

| 我想要…… | 推荐从这里开始 | 为什么 |
| --- | --- | --- |
| 想要独立的桌面客户端，而不是浏览器标签页 | [dsh-desktop](https://github.com/bruc3van/dsh-desktop) | 开箱即用的桌面体验：自动复用本机已运行的实例，或用内置运行时一键启动，无需安装 Node.js/CLI；支持远程实例连接、托盘常驻和异常恢复。 |
| 更方便地管理和发现插件 | [plugin-registry](https://github.com/vlln/plugin-registry) | 在浏览器面板中管理 repository 插件，并提供开发引导。 |
| 看清后台任务进度 | [dsh-task-status](https://github.com/vlln/dsh-task-status) | 在对话页显示任务进度和实时输出 tail。 |
| 定时或按事件唤醒 Agent | [dsh-loop](https://github.com/vlln/dsh-loop) · [dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) | 覆盖周期任务，以及文件、命令、HTTP、进程和 Webhook 事件。 |
| 更顺手地阅读和操作长对话 | [dsh-navbar](https://github.com/vlln/dsh-navbar) · [dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | 快速跳转用户消息节点，并像 Codex 一样选中文本批注。 |
| 在对话中生成交互式界面 | [dsh-genui](https://github.com/omdsh-dev/dsh-genui) | 在回复中渲染图表、表单、测验、Mermaid 和 3D 场景。 |
| 让 Agent 操作真实设计画布 | [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | 创建、编辑、预览和验证可交互的多页面 OpenPencil 设计稿。 |
| 给 DSH 增加视觉理解能力 | [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | 覆盖图片问答、长截图 OCR、UI 还原、定位和像素对比。 |
| 给工作区增加一个陪伴型宠物 | [whale-girl](https://github.com/vlln/whale-girl) | 可拖拽、投喂和玩耍的积累型鲸鱼娘桌面伙伴。 |
| 把其他工具的历史会话搬进 DSH | [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | 全保真导入 Claude Code / Codex / ChatGPT / Cursor 的聊天记录（含工具调用/思考块），导入后可直接续聊。 |
| 换皮肤、自定义背景 | [dsh-skin](https://github.com/KinGao294/dsh-skin) | 内置多套 --dsw-alias-* 配色一键切换，半透明壁纸支持透明度与模糊调节（Codex 风格）。 |
| 查看 Token 用量与费用 | [dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) | 按官方政策自动计价（含峰谷时段），逐条消息记账，显示账号余额；界面语言自动切换人民币/美元。 |
| 让外部 Agent 驱动 Harness 执行任务 | [dsh-harness-mcp-server](https://github.com/chushixixin/dsh-harness-mcp-server) | 在 Harness 内部启动 MCP server，让任意 MCP 客户端（如 Hermes）下发任务给 Harness 执行，实现「大脑 + 胳膊」协作。 |

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

### [dsh-desktop — DSH 的独立桌面客户端](https://github.com/bruc3van/dsh-desktop)

社区维护的非官方桌面客户端，直接加载官方 Web UI：自动复用本机已运行的实例，也可用安装包内置的 dsh 运行时一键启动，无需额外安装 Node.js 或 CLI；支持智能连接、远程实例连接、托盘常驻和异常恢复。

`桌面客户端` `开箱即用` `智能连接`

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

### [dsh-mneme — 记忆主权还给你：可读可改的跨会话记忆](https://github.com/modusensus/dsh-mneme)

SQLite + 可人工编辑的 Markdown 镜像，记忆不再黑盒；autoDream 后台自动去重/合并/裁决，越用越精炼。106 个测试护航，记忆这回事不该让 agent 一个人说了算。

`记忆主权` `跨会话记忆` `autoDream`

### [dsh-TUI — 给 DSH 补上全屏终端体验](https://github.com/ccch1mneyyy/dsh-TUI)

Claude Code 风格的全屏交互终端插件：像素鲸鱼顶栏、实时工作状态行、思考流式展开、双击 Esc 回滚、上下文进度条与 TPS 仪表，npm 一键安装，为偏爱 CLI 的用户补上 DSH 官方尚缺的 TUI 体验。

`终端 TUI` `全屏交互` `CLI 优先`

### [dsh-web-ui — DSH Web UI 插件与皮肤合集](https://github.com/zhu1090093659/dsh-web-ui)

一站式功能合集：任务看板、Git 关系图、侧边面板、远程移动端界面、桌面宠物、实时 Token 用量统计与皮肤中心，一次安装覆盖多个常见的界面与体验诉求。

`功能合集` `皮肤中心` `移动端`

## 最近加入生态

| 项目 | 简介 | 创建日期 |
| --- | --- | --- |
| [Aloneswork/deepseek-harness-codex-bridge](https://github.com/Aloneswork/deepseek-harness-codex-bridge) | Bidirectional MCP bridge for DeepSeek Harness and Codex collaboration | 2026-08-14 |
| [slhssb/dsh-advisor](https://github.com/slhssb/dsh-advisor) | Independent-model advisory review for DeepSeek Harness: after each tool step, a reviewer model audits the agent's operations and injects concerns/guidance into the next step. | 2026-08-14 |
| [zuoguyoupan2023/adhdgofly-dsh-ext](https://github.com/zuoguyoupan2023/adhdgofly-dsh-ext) | ADHDGoFly POS highlighting plugin for DeepSeek Harness Web: nouns green, verbs red, adjectives/adverbs purple, others gray in rendered Markdown | 2026-08-14 |
| [kam74515-boop/dsh-everything-oauth](https://github.com/kam74515-boop/dsh-everything-oauth) | Import local Codex / Grok / Claude / OpenCode / CC Switch logins into DeepSeek Harness | 2026-08-14 |
| [yingjunnan/dsh-deepseek-quota](https://github.com/yingjunnan/dsh-deepseek-quota) | DeepSeek API quota (balance) widget for the DSH web GUI: a floating bottom-right card showing remaining DeepSeek API balance. | 2026-08-14 |
| [onlca/dsh-ssh](https://github.com/onlca/dsh-ssh) | DeepSeek Harness 插件:远程主机目录作为工作区,零目标主机安装 | 2026-08-14 |
| [zeroa234/dsh-preset-minimal-windows](https://github.com/zeroa234/dsh-preset-minimal-windows) | Minimal Windows agent preset + Git Bash tool for DeepSeek Harness: gitbash & pwsh & str_replace_editor, drop-in replacement for the official minimal preset on win32 / DeepSeek Harness 极简模式（Windows）Agent 预设 + Git Bash 工具：Git Bash + PowerShell + str_replace_editor 三工具，官方 minimal 预设的 win32 平替 | 2026-08-14 |
| [XJungit/omdp](https://github.com/XJungit/omdp) | only my DSH plugins — monorepo of DeepSeek Harness plugin bundles | 2026-08-14 |

## 为什么维护这个列表？

- **面向使用者，而不是爬虫：** 从“我想完成什么”出发，而不是让你阅读几百行仓库名称。
- **人工推荐 + 全量索引：** 首页提供选择建议，[CATALOG.md](./CATALOG.md) 保留完整 Topic 快照。
- **中文默认，中英双语：** 普通用户可以直接理解，英文读者也有独立入口。
- **结构化且可复现：** 推荐配置在 [data/curated.json](./data/curated.json)，原始元数据在 [data/repositories.json](./data/repositories.json)。
- **持续更新：** 目录每天从 GitHub `dsh-plugin` Topic 自动刷新；当前数据时间为 **2026-08-14 UTC**。

当前索引包含 **883** 个仓库、**18** 种主要语言；其中 **746** 个声明了许可证，**882** 个未归档且未禁用。

## 使用与安全

第三方插件可能读取会话、文件、网络或系统资源。安装前请检查源码、权限、许可证、安装方式和最近更新情况，并优先在隔离环境中试用。本列表仅做发现与整理，不代表 DSH 官方认可。

## 推荐或修正插件

发现遗漏、分类不准确或说明过时？欢迎提交 Issue 或 Pull Request。公开仓库只要带有 `dsh-plugin` Topic，就会进入全量目录；编辑推荐需要补充清晰的使用场景和中英文理由。详见 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## License

本列表采用 [MIT License](./LICENSE) 发布；各收录项目遵循其各自许可证。
