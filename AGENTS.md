# Agent Working Rules

This repository is both the AI Game Lab's working context and the public IS 218 project plan.

## Read first

Before changing project direction or writing game code, read the relevant files in `agent-context/`. Start with `01-GAME-IDEAS.md` and `02-PROPOSALS.md`; read the prompt or scratchpad file when the task touches those topics.

## Keep records synchronized

- Record a new idea in `agent-context/01-GAME-IDEAS.md` and summarize the public-facing version in the matching page under `docs/`.
- Keep proposed technologies and experiments in `agent-context/02-PROPOSALS.md`; update `docs/spec/tech-spec.md` when a proposal changes.
- Save reusable generation prompts in `agent-context/03-PROMPTS.md`.
- Put temporary investigation notes in `agent-context/04-SCRATCHPAD.md`. Move durable decisions into `docs/roadmap.md` or the appropriate public specification page.
- Mark unverified claims `[Assumption]`, externally documented claims `[Documented]`, and directly checked implementations or results `[Fact]` or `[Tested]` with evidence. A proposal is not a fact.
- When changing a project decision, update both its rationale and status. Do not silently turn an open proposal into an accepted decision.

## Boundaries

`docs/` is the public VitePress site. Do not put private notes, credentials, or unpublished personal information there. `agent-context/` is outside the VitePress source directory and is not published by the current build. Do not add game implementation under `src/` until the project plan records an engine, scope, and acceptance checks.

## Verification

For documentation changes, run `npm run docs:build`. For code changes, also run the narrowest relevant tests and report what was actually checked.

## IS218 review record

- Keep the five user stories, architecture, staged journey, and source log in `docs/` synchronized with the current plan.
- Peer-review checks use `[Planned]`, `[Attempted]`, or `[Observed]`. Do not claim a reviewer retest, published change, or commit hash without evidence.
- Source findings require a direct primary-source check and access date. A build verifies documentation compilation, not game behavior or security.
- Keep the submission helper's Changed, Checked, and Next lines factual; leave links pending when no issue, commit, or reviewer verification is available.