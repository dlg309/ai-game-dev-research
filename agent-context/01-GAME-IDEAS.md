# Game Ideas

Working notes for possible game concepts. The public comparison and current rationale live in [`docs/spec/concepts.md`](../docs/spec/concepts.md).

## Bounded concepts

- **[Decided] Turn-based procedural dungeon crawler:** Grid-based movement, turn-based combat, and procedurally generated room layouts. The initial prototype should be bounded to a small dungeon run with explicit win/loss conditions.
- **[Proposed] Real-time physics arcade game:** Continuous motion, collision detection, and high-score speed runs. This remains the alternative considered during concept selection.

## Decision rationale and current direction

- **[Decided]** Use the turn-based dungeon crawler for the initial prototype because discrete state updates support predictable testing, score calculation, persistence, and AI experimentation.
- This is a concept decision, not evidence that the game or secure server-side validation has been implemented or tested.
- **[Assumption]** The player is a beginner who values understandable rules and short sessions; confirm this with peer feedback or a small playtest.
- The engine and detailed game rules are still open. Update this note and the public concept page when evidence changes the direction.

## Questions

- What procedural-generation constraints prevent unwinnable or confusing room layouts?
- Which player actions are understandable without a tutorial?
- Does an adaptive opponent improve the encounter compared with a fixed rule set?