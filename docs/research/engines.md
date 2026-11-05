# Engine comparison

**Status:** research shortlist · **No engine selected**

Start with the kind of game we want to make. Evaluate the tools against the same small gameplay loop.

| Candidate | Documented starting point | Research question |
| --- | --- | --- |
| Phaser | A 2D web game framework using JavaScript or TypeScript | Would a browser-first game make sharing and testing easier for this project? |
| Godot | A general-purpose 2D and 3D engine with GDScript and C# options | Would a scene-based editor help us organize the planned mechanics? |
| Unity | An engine with documented AI-assisted development tools | Do its editor workflow and AI tools justify the setup for our scope? |

These are candidates, not rankings. We have not benchmarked them.

## Decision criteria

Score each candidate only after collecting evidence. Leave unknowns blank.

| Criterion | Evidence to collect |
| --- | --- |
| Target platform | A documented path to the device or browser we want |
| Learning effort | A beginner workflow we can explain end to end |
| Core mechanic | A credible approach to movement, collision, and game state |
| AI collaboration | Whether suggested changes use valid APIs for the chosen version |
| Debugging | How we would reproduce and inspect a failure |
| Delivery | Export steps, hosting requirements, and current terms |

## Primary sources

- [Phaser: What is Phaser?](https://docs.phaser.io/phaser/getting-started/what-is-phaser)
- [Godot: Introduction to Godot](https://docs.godotengine.org/en/stable/getting_started/introduction/introduction_to_godot.html)
- [Unity AI tools](https://unity.com/features/ai)

Initial review: November 5, 2026. Verify current versions and export restrictions before committing to an engine.
