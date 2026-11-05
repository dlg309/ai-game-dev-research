# AI in game development

**Research opened:** November 5, 2026 · **Status:** initial framing

## Two different uses of AI

**AI as a development assistant:** help with brainstorming, explaining unfamiliar systems, drafting specifications, generating candidate assets, reviewing code later, and proposing tests.

**AI inside the game:** behavior that runs while someone plays. This could mean familiar rule-based enemies, or a model-driven feature such as generated dialogue. These are separate design choices; using AI to help build a game does not require a live AI service in the game.

## Our proposed workflow

| Stage | Possible AI contribution | Human check |
| --- | --- | --- |
| Research | Suggest questions and summarize sources | Open the original source and verify the claim |
| Design | Offer mechanics, rules, and alternatives | Explain the core loop and why it could be fun |
| Planning | Break a feature into small tasks | Define clear success and failure behavior |
| Assets | Explore visual or audio directions | Check consistency, provenance, and applicable usage terms |
| Implementation, later | Draft small changes and explain them | Inspect the change and run meaningful checks |
| Evaluation, later | Suggest edge cases | Playtest and record actual outcomes |

This table is a proposed method, not a claim that every tool performs every task reliably.

## Questions to investigate

- Which tasks save time after review and correction are included?
- Can generated assets stay visually consistent across a whole scene?
- How do we keep the game rules understandable as the project grows?
- Would a model-driven feature improve the experience enough to justify its dependencies?
- What can we test automatically, and what needs a player?

## One current research lead

Unity documents tools for AI-assisted development, including an assistant, generators, and agent integration. We should inspect their current requirements and try a bounded task before choosing a workflow. Availability, pricing, and model behavior require a fresh check when we evaluate them.

Source: [Unity AI tools](https://unity.com/features/ai), reviewed November 5, 2026. No hands-on evaluation has been completed.
