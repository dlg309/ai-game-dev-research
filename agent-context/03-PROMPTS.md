# Reusable Prompts

Store prompts that are tied to the project's current rules. Re-check assumptions and constraints before reuse. Generated output is a draft, not verified project truth.

## Mechanics exploration

```text
Given this game concept and its explicit constraints, propose three small mechanics.
For each, state the player action, game-state change, win/loss effect, likely edge cases,
and one observable playtest question. Label any unverified claim [Assumption].
Do not add systems outside the stated prototype boundary.

Concept: [paste current concept]
Prototype boundary: [paste boundary]
Rules already decided: [paste decisions]
```

## Code review

```text
Review this change against the stated acceptance checks. Identify correctness risks,
missing edge cases, and tests that would detect them. Do not assume the code works
because it compiles. Separate confirmed behavior from hypotheses, and cite the exact
function or file involved.

Acceptance checks: [paste checks]
Change: [paste diff or source]
```

## Source-grounded research

```text
Answer the question using only the supplied primary source. Give the exact supporting
passage or section, what it establishes, what it does not establish, and the access date.
Do not infer project suitability from a feature listing alone.

Question: [research question]
Source URL and excerpt: [paste verified material]
```