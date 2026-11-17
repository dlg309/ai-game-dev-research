# Decision log

Record what we choose and why. An open question is better than an unsupported answer.

| Date | Decision | Reason | State |
| --- | --- | --- | --- |
| Nov 5, 2026 | Use VitePress for documentation | Requested documentation framework with Markdown pages | Accepted |
| Nov 5, 2026 | Host the notebook on GitHub Pages | Requested public hosting with versioned source | Accepted |
| Nov 5, 2026 | Focus on research and planning first | Game implementation will begin in a later phase | Accepted |
| Nov 10, 2026 | Select a turn-based procedural dungeon crawler | Discrete turn updates supported predictable testing, score calculations, persistence, and measurable AI experiments | Superseded by Echo Mountain |
| By Nov 11, 2026 | Use Echo Mountain's Unity snowboard game as the active project | Existing Glacier Pass implementation and QA evidence provide a bounded real-time game to evaluate; see the [game source](https://github.com/dlg309/EchoMountainGame) and [QA record](https://github.com/dlg309/EchoMountainGame/blob/main/docs/QA.md) | Current; source checked Nov 16 |
| Nov 17, 2026 | Stage surface integration before ghosts or expansion | Opt-in response already has simulated-input tests; visible zones, manual feel, and comparable records remain open. This is a sequence for evaluation, not approval to claim the feature complete. | Proposed; see [roadmap](/roadmap) |
| Pending | Decide whether accounts and remote scores are required | The Unity game currently uses local records, while the earlier account journey remains a course planning question | Open |
| Pending | Select AI tools | Requires task-specific evaluation | Open |

## Decision record template

- **Question:** What choice needs to be made?
- **Options:** At least two realistic alternatives.
- **Evidence:** Sources or experiment results.
- **Decision and reason:** Why this option fits the constraints.
- **Tradeoffs:** What we give up.
- **Revisit when:** New evidence or a changed requirement that would justify reconsideration.
