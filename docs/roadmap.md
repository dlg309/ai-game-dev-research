# Project Roadmap

**Status:** Echo Mountain is an implemented Unity desktop snowboard game. The earlier browser-game account and database journey remains a historical plan; no account system or game backend has been implemented. See the [current technical specification](./spec/tech-spec.md) and [game QA record](https://github.com/dlg309/EchoMountainGame/blob/main/docs/QA.md), checked November 16, 2026.

## Project journey

The current game journey is **choose a line → ride and attempt a trick → land → finish and compare → retry or replay**. The older course journey, **Account access → Play Game → Save Score → Player Dashboard → Account settings**, is preserved in the [historical section of the technical specification](./spec/tech-spec.md#historical-browser-game-plan-not-echo-mountain-requirements). Its account and dashboard stages are not implemented Echo Mountain features.

## Current gates

| Phase | Deliverable | Status |
| --- | --- | --- |
| Documentation foundation | Public VitePress research and planning site | Complete |
| Current concept and engine | Unity desktop snowboarding on Glacier Pass | Implemented; source checked November 16, 2026 |
| Current gameplay | Two lines, jump practice, tricks, results, local records, and replay | Implemented; see the game QA record |
| Surface response | Test packed-snow, powder, and ice behavior | Opt-in code tested; course integration planned |
| Evaluation | Peer review and manual controller/save/replay playthrough | Planned; automated checks do not establish player feel |

## Open decisions

- Are account access and remote scores required for the course prototype, or only the historical end-to-end plan?
- When should the opt-in surface response be enabled on Glacier Pass, and how will player feel be assessed?
- What do physical controller and standalone save/restart/replay checks reveal?

See the [concept comparison](./spec/concepts.md), [technical specification](./spec/tech-spec.md), and [peer review log](./reviews/) for current details.
