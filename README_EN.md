# Awesome DSH Plugins

> Find the right DeepSeek Harness plugin in 30 seconds.
> More than a repository dump: learn what each plugin solves, who it is for, and where to start.

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
![Plugins](https://img.shields.io/badge/plugins-1123-2563eb)
![Updated](https://img.shields.io/badge/updated-2026--08--14-16a34a)
[![Catalog refresh](https://github.com/bruc3van/awesome-dsh-plugin/actions/workflows/update-catalog.yml/badge.svg)](https://github.com/bruc3van/awesome-dsh-plugin/actions/workflows/update-catalog.yml)
![License](https://img.shields.io/badge/license-MIT-f59e0b)

[中文](./README.md) · [Browse all 1123 plugins](./CATALOG.md) · [Star Top 100](./TOP100.md) · [Recommend a plugin](./CONTRIBUTING.md) · [Machine-readable data](./data/repositories.json)

**If this list helps you discover something useful, consider leaving a Star ⭐ so more DSH users can find the ecosystem.**

## What do you want DSH to do?

| I want to… | Start here | Why |
| --- | --- | --- |
| Run DSH as a standalone desktop app, not a browser tab | [dsh-desktop](https://github.com/bruc3van/dsh-desktop) | An out-of-the-box desktop experience: auto-reuse a running local instance or launch the bundled runtime with no Node.js/CLI install required, plus remote-instance connections, tray residency, and crash recovery. |
| Manage and discover plugins | [plugin-registry](https://github.com/vlln/plugin-registry) | Manage repository plugins in a browser console with plugin-development guidance. |
| Track background tasks | [dsh-task-status](https://github.com/vlln/dsh-task-status) | Show task progress and a live output tail in the conversation view. |
| Wake an agent on a schedule or event | [dsh-loop](https://github.com/vlln/dsh-loop) · [dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) | Cover scheduled runs plus file, command, HTTP, process, and webhook events. |
| Navigate and annotate long conversations | [dsh-navbar](https://github.com/vlln/dsh-navbar) · [dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | Jump between user-message nodes and attach Codex-style annotations. |
| Render interactive UI in chat | [dsh-genui](https://github.com/omdsh-dev/dsh-genui) | Render charts, forms, quizzes, Mermaid diagrams, and 3D scenes inline. |
| Let agents operate a real design canvas | [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | Create, edit, preview, and validate interactive multi-page OpenPencil designs. |
| Add visual understanding to DSH | [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) · [dsh-luna-vision-bridge](https://github.com/ycp424c/dsh-luna-vision-bridge) | Add image Q&A, long-screenshot OCR, UI restoration, grounding, and pixel diffs — or bridge pure-text models to image input via a Luna transcription adapter. |
| Inspect and operate the current web page from your dev conversation | [dsh-browser-bridge](https://github.com/ycp424c/dsh-browser-bridge) | Embeds the full DSH Web in a Chrome side panel; grant the current tab per prompt so DSH can read the DOM, styles, and console errors and interact with the page inside your existing conversation instead of a separate browser chat. |
| Add a companion to the workspace | [whale-girl](https://github.com/vlln/whale-girl) | A draggable companion with feeding, play, and persistent progression. |
| Migrate chat histories from other tools into DSH | [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | Full-fidelity import of Claude Code / Codex / ChatGPT / Cursor transcripts (tools + thinking) as resumable DSH sessions. |
| Change the skin / set a custom wallpaper | [dsh-skin](https://github.com/KinGao294/dsh-skin) | One-click --dsw-alias-* palette switching plus a translucent wallpaper with opacity and blur controls (Codex-style). |
| Track token usage and costs | [dsh-web-billing](https://github.com/bpc-oss/dsh-web-billing) | Auto-bill per message with official pricing (incl. peak/off-peak hours), keep a persistent cost ledger, show the account balance, and switch ¥/$ with the UI language. |
| Drive Harness from an external agent | [dsh-harness-mcp-server](https://github.com/chushixixin/dsh-harness-mcp-server) | Runs an MCP server inside Harness so any MCP client (e.g. Hermes) can delegate coding tasks to Harness — a 'brain + arms' setup. |

## New to DSH plugins?

You do not need to install everything. Start with the kit closest to the problem you have today:

### Everyday experience kit

Start with plugin management, background-task visibility, and long-conversation navigation.

[plugin-registry](https://github.com/vlln/plugin-registry) · [dsh-task-status](https://github.com/vlln/dsh-task-status) · [dsh-navbar](https://github.com/vlln/dsh-navbar)

### Automation kit

Combine scheduled loops with event-driven wakeups for long-running or unattended work.

[dsh-loop](https://github.com/vlln/dsh-loop) · [dsh-sentinel](https://github.com/fuhefei/dsh-sentinel)

### Creation and interface kit

Let agents render interactive UI, operate a real design canvas, and understand visual content.

[dsh-genui](https://github.com/omdsh-dev/dsh-genui) · [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) · [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit)

## Editor's picks

These are not ranked automatically by stars. We favor projects that solve a clear problem, explain themselves well, remain active, and represent a distinctive capability. Inclusion is not a security or compatibility endorsement.

### [dsh-desktop — a standalone desktop client for DSH](https://github.com/bruc3van/dsh-desktop)

A community-maintained unofficial desktop client that loads DSH's official Web UI directly — auto-reuse a running local instance, or launch the bundled dsh runtime with no Node.js/CLI install required. Includes smart connect, remote-instance support, tray residency, and crash recovery.

`desktop client` `zero-install` `smart connect`

### [plugin-registry — move from browsing to managing plugins](https://github.com/vlln/plugin-registry)

A visual plugin-management entry point for users, paired with make-dsh-plugin guidance for developers. A strong first stop for the ecosystem.

`beginner-friendly` `plugin management` `developer guidance`

### [dsh-sentinel — event-driven wakeups beyond schedules](https://github.com/fuhefei/dsh-sentinel)

Watch files, commands, HTTP endpoints, processes, or webhooks and wake DSH when conditions match. Built for monitoring and unattended workflows.

`event-driven` `durable watches` `automation`

### [dsh-task-status — see what background work is doing](https://github.com/vlln/dsh-task-status)

Bring background-task progress and a live output tail into the conversation view, especially for builds, downloads, and long-running tests.

`background tasks` `live output` `observability`

### [dsh-annotation — Codex-style annotations for DSH](https://github.com/omdsh-dev/dsh-annotation)

Select text, attach annotations to the next message, and receive annotation-aware replies. Useful for review and precise feedback.

`annotations` `precise feedback` `zero core changes`

### [dsh-genui — turn replies into interactive interfaces](https://github.com/omdsh-dev/dsh-genui)

Render charts, forms, quizzes, Mermaid diagrams, and 3D scenes inline, with user actions flowing back to the model.

`generative UI` `interactive` `visualization`

### [DSH OpenPencil — let agents work on a real design canvas](https://github.com/ZSeven-W/dsh-openpencil)

Connect DSH to OpenPencil so agents can understand canvas structure and directly create, edit, preview, and validate editable multi-page designs instead of returning a flat image.

`design canvas` `multi-page` `editable`

### [dsh-vision-toolkit — a vision toolbox for text-first models](https://github.com/Anionex/dsh-vision-toolkit)

Cover image Q&A, long-screenshot OCR, UI restoration, grounding, pixel diffs, and artifacts for frontend and visual work.

`vision` `OCR` `UI restoration`

### [whale-girl — a companion for vibe coding](https://github.com/vlln/whale-girl)

A draggable DSH Web GUI companion with feeding and play interactions for a little personality during long agent sessions.

`desktop pet` `companion` `Web UI`

### [dsh-mneme — memory sovereignty: human-editable cross-session memory](https://github.com/modusensus/dsh-mneme)

SQLite + human-editable Markdown mirror keeps memory transparent — you hold the memory, not the agent. autoDream consolidates in the background; 106 tests back it up.

`memory sovereignty` `cross-session` `autoDream`

### [dsh-TUI — a full-screen terminal UI for DSH](https://github.com/ccch1mneyyy/dsh-TUI)

A Claude Code-style full-screen terminal UI for DSH — pixel-whale header, a live status line, streaming thought expansion, double-Esc rollback, and a context/TPS gauge. One-command npm install, filling the TUI gap for CLI-first users.

`terminal UI` `full-screen` `CLI-first`

### [dsh-web-ui — a plugin and skin bundle for the DSH Web UI](https://github.com/zhu1090093659/dsh-web-ui)

An all-in-one bundle for the DSH Web UI — task board, git graph, a side panel, a remote mobile UI, a desktop pet, live token stats, and a skin center — covering several common UI needs in a single install.

`all-in-one` `skin center` `mobile UI`

## Recently added

| Project | Description | Created |
| --- | --- | --- |
| [mbj733/dsh-hermes-memory](https://github.com/mbj733/dsh-hermes-memory) | DSH (DeepSeek Harness) agent preset + plugin: Hermes-style cross-session memory & autonomous skill learning. | 2026-08-14 |
| [SnowAmberX/dsh-role-router](https://github.com/SnowAmberX/dsh-role-router) | Role-based model routing plugin for DeepSeek Harness: planner/subagent roles plus a settings card and composer summary | 2026-08-14 |
| [Yee-h/dsh-zen-proxy](https://github.com/Yee-h/dsh-zen-proxy) | dsh plugin: in-process proxy that injects official OpenCode Zen client headers, enabling Zen free models in dsh without the 429 FreeUsageLimitError | 2026-08-14 |
| [khiqwq/dsh-credentials-system](https://github.com/khiqwq/dsh-credentials-system) | System-bound encrypted credential provider for DeepSeek Harness | 2026-08-14 |
| [CodePrometheus/dsh-observability](https://github.com/CodePrometheus/dsh-observability) | Observability for DeepSeek Harness (dsh), use the OpenTelemetry Protocol | 2026-08-14 |
| [mixin-ai/dsh-file-changes](https://github.com/mixin-ai/dsh-file-changes) | DeepSeek Harness web plugin: per-turn file-change panel with diff viewing and filesystem reveal | 2026-08-14 |
| [pineapple880066/dsh-desktop-pets](https://github.com/pineapple880066/dsh-desktop-pets) | Codex-style desktop pets for DeepSeek Harness (dsh-plugin) | 2026-08-14 |
| [sherconan/dsh-web-recon](https://github.com/sherconan/dsh-web-recon) | 网页系统侦察 · DeepSeek Harness 插件：摸清一个网页系统怎么运作，只摸一次。抓真实接口与可访问性树，固化成可复用的作战手册。零依赖，不用 Playwright。 | 2026-08-14 |

## Why this list?

- **Built for users, not crawlers:** start from the job you want to accomplish instead of scanning hundreds of repository names.
- **Human guidance plus complete coverage:** the home page helps you choose; [CATALOG.md](./CATALOG.md) preserves the full topic snapshot.
- **Bilingual by design:** Chinese is the default, with an independent English entry point.
- **Structured and reproducible:** curation lives in [data/curated.json](./data/curated.json), while source metadata lives in [data/repositories.json](./data/repositories.json).
- **Continuously refreshed:** the catalog updates daily from GitHub's `dsh-plugin` topic. Current data timestamp: **2026-08-14 UTC**.

The index currently covers **1123** repositories across **19** primary languages. **942** declare a license, and **1121** are neither archived nor disabled.

## Usage and safety

Third-party plugins may access conversations, files, networks, or system resources. Review source code, permissions, installation steps, licenses, and recent activity before installing, and test in an isolated environment when possible. Inclusion does not imply official DSH endorsement.

## Recommend or correct a plugin

Found a missing project, stale description, or incorrect category? Issues and pull requests are welcome. Public repositories carrying the `dsh-plugin` topic enter the full catalog automatically; editor's picks require a clear use case and bilingual rationale. See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

This list is released under the [MIT License](./LICENSE). Included projects retain their respective licenses.
