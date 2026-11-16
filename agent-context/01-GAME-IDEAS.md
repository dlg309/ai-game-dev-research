# Game Ideas

Working notes for possible game concepts. The public comparison and current rationale live in [`docs/spec/concepts.md`](../docs/spec/concepts.md).

## Current direction

- **[Fact] Checked November 16, 2026:** Echo Mountain is the active Unity desktop snowboard game. Its Glacier Pass loop is line choice, real-time descent, tricks and landings, results, and retry or replay. The [game repository](https://github.com/dlg309/EchoMountainGame) and [public specification](../docs/spec/tech-spec.md) record the evidence and scope.
- **[Proposed]** Add authored packed-snow, powder, and ice zones to Glacier Pass. The surface response exists as opt-in code with simulated-input tests, but course integration and player-feel checks remain open in the [QA record](https://github.com/dlg309/EchoMountainGame/blob/main/docs/QA.md).

## Historical bounded concepts

- **[Decided] Turn-based procedural dungeon crawler:** Grid-based movement, turn-based combat, and procedurally generated room layouts. The initial prototype should be bounded to a small dungeon run with explicit win/loss conditions.
- **[Proposed] Real-time physics arcade game:** Continuous motion, collision detection, and high-score speed runs. This remains the alternative considered during concept selection.

## Historical decision rationale

- **[Superseded]** The November 10 turn-based dungeon-crawler choice favored discrete state updates for predictable testing, score calculation, persistence, and AI experimentation. Echo Mountain's implemented Unity snowboard loop is now the active direction; keep this rationale as the prior decision record.
- This is a concept decision, not evidence that the game or secure server-side validation has been implemented or tested.
- **[Assumption]** The player is a beginner who values understandable rules and short sessions; confirm this with peer feedback or a small playtest.
- The earlier browser-game engine and rules were not selected or implemented. They are not open decisions for the active Unity game.

## Questions

- What procedural-generation constraints prevent unwinnable or confusing room layouts?
- Which player actions are understandable without a tutorial?
- Does an adaptive opponent improve the encounter compared with a fixed rule set?
