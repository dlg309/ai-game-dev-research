# Creative Concept Comparison

> **Current direction:** Historical planning comparison (November 2026). The active implementation is the Unity snowboarding game [Echo Mountain](https://github.com/dlg309/EchoMountainGame). See the [current snowboard research](/research/snowboarding). The turn-based selection below documents an earlier direction and is not the current project decision.

## Option 1: Turn-Based Procedural Dungeon Crawler `[Decided]`

- **Core Mechanics:** Grid-based movement, turn-based combat, and procedurally generated room layouts.
- **Pros:** A deterministic state machine makes unit testing straightforward and supports predictable score calculations.
- **Cons:** Requires clear sprite loading and map-rendering logic.

## Option 2: Real-Time Physics Arcade Game `[Proposed]`

- **Core Mechanics:** Continuous motion, collision detection, and high-score speed runs.
- **Pros:** Highly dynamic and immediate gameplay feel.
- **Cons:** Non-deterministic collision states make remote state validation and automated score verification more complex.

## Selection Rationale

Option 1 was chosen for the initial prototype because turn-based state updates allow for reliable server-side validation, clean score persistence, and measurable AI experimentation. The decision selects the concept direction; the game, server validation, and procedural generation have not yet been implemented or tested.

## Audience and research question

**[Assumption] Audience:** IS 218 classmates and other casual players who want a short browser-playable game with rules they can understand quickly. This audience description needs peer feedback; it is not based on completed user research.

**Research question:** Can AI-assisted development help us build and evaluate a small game while keeping its rules, generated changes, and limitations understandable to the student developer and players?

**Gameplay question:** Can procedural room layouts and AI-assisted opponent behavior be integrated while preserving predictable turn resolution, understandable rules, and verifiable scores? The adaptive-opponent comparison is one proposed experiment in the [technical specification](./tech-spec).

The concept is decided, but its detailed rules, procedural-generation constraints, and engine remain open to research and testing. Engine choice is separate from concept choice; see the [existing engine research](../research/engines).