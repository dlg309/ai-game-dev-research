# EchoMountain3D roadmap

**Plan audited November 17, 2026 against [game source](https://github.com/dlg309/EchoMountainGame), [milestones](https://github.com/dlg309/EchoMountainGame/blob/main/PLANS.md), [status](https://github.com/dlg309/EchoMountainGame/blob/main/docs/STATUS.md), and [QA](https://github.com/dlg309/EchoMountainGame/blob/main/docs/QA.md) at `7a22c7b`.** Gates are ordered by evidence needed, not a claim that every earlier milestone is complete. See the [engineering specification](/spec/tech-spec) for scope, architecture, stories, and acceptance checks.

The player journey is **choose a line → ride and land → results → retry or replay**. The older **account → browser game → remote score → dashboard → settings** journey is preserved as historical material in the [technical specification](/spec/tech-spec#historical-browser-game-plan-not-echo-mountain-requirements); it is not an Echo Mountain release gate.

| Gate | Deliverable and exit evidence | Status |
| --- | --- | --- |
| 1. Audit implementation | Inventory current scene, modules, package versions, controls, test XML, build provenance, and open QA; reproduce the baseline in Unity. | [Fact] Source/records audited for this plan; [Unverified] fresh reproduction and standalone walkthrough. |
| 2. Finalize specifications and quality standards | Agree on MVP stories, measurable criteria, evidence labels, test commands, target machine, and frame-time target. | [Proposed] This plan is the draft; gameplay targets need measurement. |
| 3. Integrate visible snow surfaces | Author packed/powder/ice visuals and zones; test boundaries, flight, route completion, and versioned record comparability; playtest feel. | [Tested] Opt-in logic; [Proposed] course integration. |
| 4. Validate riding slice | Physical keyboard/controller, physics seams, landing, switch camera, pause/focus/disconnect, full Windows runs, and 1080p performance. | [Tested] Simulated PlayMode and some Windows flows; [Unverified] complete hardware/performance gate. |
| 5. Polish the slice | Improve UI readability, audio mix, spray/visual clarity, accessibility, and actionable feedback; capture a reviewed run. | [Fact] Basic HUD/audio/spray exist; [Proposed] polish and listening pass. |
| 6. Improve replay and local comparison | Verify current memory replay and saved records across restart; then add comparable previous/best ghosts and safe retry markers. | [Fact] Replay and local records; [Unverified] standalone persistence; [Proposed] ghosts/markers. |
| 7. Consider expansion | Evaluate rails and a physical halfpipe, then challenges, cosmetics, weather, and tools against playtest value and cost. | [Proposed] Future work only. |

**Gate rule:** advance after recording the implementation commit, exact automated result, Windows build identity, observed gameplay result, known limitations, and decision in the [game QA record](https://github.com/dlg309/EchoMountainGame/blob/main/docs/QA.md) and [decision log](/planning/decisions). A documentation build verifies site compilation only.

## Portfolio evidence

For each gate, link the problem and decision, a focused diff/commit, tests with failures and fixes, peer feedback and its retry status, and a short gameplay capture from the tested build. This demonstrates architecture judgment, AI review, debugging, QA, and communication without claiming a reviewer retest that has not happened. The resolved documentation feedback remains in the [peer-review log](/reviews/); issue/commit links for future game work stay pending until created.
