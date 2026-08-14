# Awesome DSH Plugins

> Find the right DeepSeek Harness plugin in 30 seconds.
> More than a repository dump: learn what each plugin solves, who it is for, and where to start.

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
![Plugins](https://img.shields.io/badge/plugins-913-2563eb)
![Updated](https://img.shields.io/badge/updated-2026--08--14-16a34a)
[![Catalog refresh](https://github.com/bruc3van/awesome-dsh-plugin/actions/workflows/update-catalog.yml/badge.svg)](https://github.com/bruc3van/awesome-dsh-plugin/actions/workflows/update-catalog.yml)
![License](https://img.shields.io/badge/license-MIT-f59e0b)

[中文](./README.md) · [Browse all 913 plugins](./CATALOG.md) · [Recommend a plugin](./CONTRIBUTING.md) · [Machine-readable data](./data/repositories.json)

**If this list helps you discover something useful, consider leaving a Star ⭐ so more DSH users can find the ecosystem.**

## What do you want DSH to do?

| I want to… | Start here | Why |
| --- | --- | --- |
| Manage and discover plugins | [plugin-registry](https://github.com/vlln/plugin-registry) | Manage repository plugins in a browser console with plugin-development guidance. |
| Track background tasks | [dsh-task-status](https://github.com/vlln/dsh-task-status) | Show task progress and a live output tail in the conversation view. |
| Wake an agent on a schedule or event | [dsh-loop](https://github.com/vlln/dsh-loop) · [dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) | Cover scheduled runs plus file, command, HTTP, process, and webhook events. |
| Navigate and annotate long conversations | [dsh-navbar](https://github.com/vlln/dsh-navbar) · [dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | Jump between user-message nodes and attach Codex-style annotations. |
| Render interactive UI in chat | [dsh-genui](https://github.com/omdsh-dev/dsh-genui) | Render charts, forms, quizzes, Mermaid diagrams, and 3D scenes inline. |
| Let agents operate a real design canvas | [dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | Create, edit, preview, and validate interactive multi-page OpenPencil designs. |
| Add visual understanding to DSH | [dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | Add image Q&A, long-screenshot OCR, UI restoration, grounding, and pixel diffs. |
| Add a companion to the workspace | [whale-girl](https://github.com/vlln/whale-girl) | A draggable companion with feeding, play, and persistent progression. |
| Migrate chat histories from other tools into DSH | [dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | Full-fidelity import of Claude Code / Codex / ChatGPT / Cursor transcripts (tools + thinking) as resumable DSH sessions. |

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

## Recently added

| Project | Description | Created |
| --- | --- | --- |
| [KeLearns/dsh-update-checker](https://github.com/KeLearns/dsh-update-checker) | DeepSeek Harness official runtime update checker plugin | 2026-08-14 |
| [Shmilyol/dsh-skin](https://github.com/Shmilyol/dsh-skin) | No description provided yet. | 2026-08-14 |
| [hccccc01333/dsh-analytics](https://github.com/hccccc01333/dsh-analytics) | No description provided yet. | 2026-08-14 |
| [skyzhao1223/dsh-plugin-scaffold](https://github.com/skyzhao1223/dsh-plugin-scaffold) | Minimal runnable DeepSeek Harness (dsh) plugin scaffold: one model-facing tool via ctx.tools | 2026-08-14 |
| [TheYoungChen/dsh-plugin-market](https://github.com/TheYoungChen/dsh-plugin-market) | DeepSeek Harness plugin market - browse, search & install dsh-plugin topic plugins (dsh 插件市场：浏览/搜索/安装插件) | 2026-08-14 |
| [Nunchakus888/dsh-turn-budget](https://github.com/Nunchakus888/dsh-turn-budget) | Fail-closed per-turn step, tool-call, and provider-token budgets for DeepSeek Harness | 2026-08-14 |
| [EvilIrving/dsh-repro](https://github.com/EvilIrving/dsh-repro) | No description provided yet. | 2026-08-14 |
| [EvilIrving/dsh-context-proxy](https://github.com/EvilIrving/dsh-context-proxy) | No description provided yet. | 2026-08-14 |

## Why this list?

- **Built for users, not crawlers:** start from the job you want to accomplish instead of scanning hundreds of repository names.
- **Human guidance plus complete coverage:** the home page helps you choose; [CATALOG.md](./CATALOG.md) preserves the full topic snapshot.
- **Bilingual by design:** Chinese is the default, with an independent English entry point.
- **Structured and reproducible:** curation lives in [data/curated.json](./data/curated.json), while source metadata lives in [data/repositories.json](./data/repositories.json).
- **Continuously refreshed:** the catalog updates daily from GitHub's `dsh-plugin` topic. Current data timestamp: **2026-08-14 UTC**.

The index currently covers **913** repositories across **17** primary languages. **764** declare a license, and **912** are neither archived nor disabled.

## Usage and safety

Third-party plugins may access conversations, files, networks, or system resources. Review source code, permissions, installation steps, licenses, and recent activity before installing, and test in an isolated environment when possible. Inclusion does not imply official DSH endorsement.

## Recommend or correct a plugin

Found a missing project, stale description, or incorrect category? Issues and pull requests are welcome. Public repositories carrying the `dsh-plugin` topic enter the full catalog automatically; editor's picks require a clear use case and bilingual rationale. See [CONTRIBUTING.md](./CONTRIBUTING.md).

## License

This list is released under the [MIT License](./LICENSE). Included projects retain their respective licenses.
