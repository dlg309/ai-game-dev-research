# Research & Sourcing Log

Use primary sources where possible. Record what a source actually says separately from what we infer for this project. Existing research notes remain available for the [AI workflow](./overview) and [engine comparison](./engines).

## Current Echo Mountain research

The [snowboard game research page](./snowboarding) compares five public game patterns and maps them to the current Unity project. Official developer and publisher sources were checked November 11, 2026. The next surface-response feature remains proposed; the integrated game's 32/32 Unity PlayMode result is an observed software check, not a playtest of that proposed feature.

## Source log

| Primary source | Evidence captured | Checked | Limitation / next check |
| --- | --- | --- | --- |
| [Phaser 3.88.2 Tilemap API](https://docs.phaser.io/api-documentation/3.88.2/class/tilemaps-tilemap) | [Documented] The API describes map dimensions in tiles and tile-coordinate operations such as `getTileAt`, `putTileAt`, and coordinate conversion. It provides grid primitives; deterministic turn rules must be implemented by the game. | Nov 10, 2026 | Phaser 3.88.2 is no longer actively maintained according to the docs. Compare the current Phaser version before selecting a release. |
| [Express session middleware](https://expressjs.com/en/resources/middleware/session.html) | [Documented] Session data is stored server-side and the cookie carries a signed session ID. The docs do not say that hashing a client score payload prevents score spoofing. | Nov 10, 2026 | Session middleware does not validate game rules or scores. The API must authorize the session and recompute or validate results. |
| [Phaser: What is Phaser?](https://docs.phaser.io/phaser/getting-started/what-is-phaser) | [Documented] The official introduction describes Phaser as a framework for 2D browser games. This supports evaluating it for a browser prototype, not selecting it by itself. | Nov 5, 2026 | Verify current version, TypeScript workflow, and deployment details during a hands-on comparison. |
| [Godot: Introduction](https://docs.godotengine.org/en/stable/getting_started/introduction/introduction_to_godot.html) | [Documented] Official engine introduction and getting-started material provide a basis for evaluating its editor and scene workflow. | Nov 5, 2026 | Build the same tiny loop before comparing learning effort or suitability. |
| [Unity AI](https://unity.com/features/ai) | [Documented] Official product page describes Unity AI-assisted development features. | Nov 5, 2026 | Recheck availability, requirements, pricing, and a real task before making claims about usefulness. |
| [VitePress: GitHub Pages deployment](https://vitepress.dev/guide/deploy#github-pages) | [Documented] Official deployment guide describes a GitHub Actions workflow for publishing VitePress to Pages. | Nov 5, 2026 | Existing project configuration and build should be checked when deployment changes. |

Dates are the recorded access dates for each row. Extracts are concise summaries, not direct quotations. Phaser and Express pages were checked on November 10, 2026; older entries retain their original November 5, 2026 review date.

## AI Assistance Audit

**AI tools used:** GitHub Copilot assisted the earlier documentation draft. A Codex assistant helped synthesize the November 11 snowboard references, inspect Echo Mountain source, and draft the new research page. The listed game-feature claims were checked against linked publisher and developer pages. This record does not attribute any unconfirmed work to other contributors.

**Generative role:** Drafted user stories, the ASCII architecture, experiment criteria, and source-log summaries. No game code or probabilistic decision-tree implementation was generated in this task.

**Prompt structure:** Provide the current concept, scope boundary, accepted decisions, desired artifact, and verification constraints; request that assumptions be labeled. Reusable templates are in the private `agent-context/03-PROMPTS.md` file, outside the VitePress site.

**Verification process:** Phaser tilemap-coordinate claims were checked against its official API documentation; Express session claims were checked against the official middleware documentation. Those sources do not establish end-to-end score security. The VitePress production build verifies documentation compilation and links, not game behavior or security. The planned 100-turn test has not been run.

## Related project pages

- [Concept comparison](../spec/concepts)
- [Technical specification and experiment](../spec/tech-spec)
- [Project roadmap](../roadmap)
- [AI-assisted development notes](./overview)
- [Snowboard game research and surface-response experiment](./snowboarding)