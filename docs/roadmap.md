# Project Roadmap

**Status:** Planning and research. No playable game, account system, or production stack has been selected or implemented.

## Project journey

The target course journey is **Account access → Play Game → Save Score → Player Dashboard → Account settings**. It is a planning requirement, not a claim that those features exist today. See the [technical specification](./spec/tech-spec.md) for staged scope and validation.

## Current gates

| Phase | Deliverable | Status |
| --- | --- | --- |
| Documentation foundation | Public VitePress research and planning site | Complete |
| Concept selection | Select a bounded concept and record its rationale | Complete: turn-based procedural dungeon crawler |
| Technical feasibility | Test a small gameplay loop and assess account/persistence scope | Planned |
| Prototype specification | Define rules, states, and acceptance checks | Planned |
| Implementation | Build only after scope and technology decisions are recorded | Later |
| Evaluation | Peer review and playtest with recorded outcomes | Planned |

## Open decisions

- Is account access and persistent scoring required in the prototype, or only part of the end-to-end plan?
- Which engine and deployment path fit the course scope?
- What procedural-generation constraints keep room layouts playable and testable?
- Can probabilistic enemy movement remain within grid bounds and terminate predictably?

See the [concept comparison](./spec/concepts.md), [technical specification](./spec/tech-spec.md), and [peer review log](./reviews/) for current details.