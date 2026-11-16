# Creative Concept Comparison

> **Current direction:** Historical planning comparison (November 2026). The active implementation is the Unity snowboarding game [Echo Mountain](https://github.com/dlg309/EchoMountainGame). See the [current snowboard research](/research/snowboarding). The turn-based selection below documents an earlier direction and is not the current project decision.

## Option 1: Turn-Based Procedural Dungeon Crawler `[Superseded]`

- **Core Mechanics:** Grid-based movement, turn-based combat, and procedurally generated room layouts.
- **Pros:** A deterministic state machine makes unit testing straightforward and supports predictable score calculations.
- **Cons:** Requires clear sprite loading and map-rendering logic.

## Option 2: Real-Time Physics Arcade Game `[Historical proposal]`

- **Core Mechanics:** Continuous motion, collision detection, and high-score speed runs.
- **Pros:** Highly dynamic and immediate gameplay feel.
- **Cons:** Non-deterministic collision states make remote state validation and automated score verification more complex.

## Selection Rationale

On November 10, Option 1 was chosen for the initial prototype because turn-based state updates would support predictable testing, score calculations, persistence, and measurable AI experimentation. That decision was superseded when Echo Mountain became the active Unity snowboard game. The browser-game server, procedural generation, and turn-based loop were not implemented.

## Audience and research question

**[Assumption] Audience:** IS 218 classmates and other casual players who want a short browser-playable game with rules they can understand quickly. This audience description needs peer feedback; it is not based on completed user research.

**Research question:** Can AI-assisted development help us build and evaluate a small game while keeping its rules, generated changes, and limitations understandable to the student developer and players?

**Gameplay question:** Can procedural room layouts and AI-assisted opponent behavior be integrated while preserving predictable turn resolution, understandable rules, and verifiable scores? The adaptive-opponent comparison is one proposed experiment in the [technical specification](./tech-spec).

These audience and gameplay questions belong to the earlier browser-game proposal. See the [current Echo Mountain specification](./tech-spec.md) for the active scope.
