# Technical Proposals

The active game and the earlier research proposal are separate. The public-facing specification is [`docs/spec/tech-spec.md`](../docs/spec/tech-spec.md).

## Current Echo Mountain technology and experiment

- **[Proposed] November 17, 2026 engineering sequence:** Audit/reproduce the Unity baseline, finalize checks, integrate visible authored surface zones, validate Windows controls/physics/performance, polish, then consider local ghosts and expansion. Rationale: the opt-in surface code already exists, while course visuals and player-feel evidence do not. Status remains proposed; see the [public roadmap](../docs/roadmap.md).

- **[Fact] Checked November 16, 2026:** The active game is a Unity desktop project. Its runtime owns riding, scoring, local records, and in-memory replay; see the [game repository](https://github.com/dlg309/EchoMountainGame) and [QA record](https://github.com/dlg309/EchoMountainGame/blob/main/docs/QA.md).
- **[Tested]** Packed-snow, powder, and ice response has opt-in code and simulated-input PlayMode coverage (38/38 full suite reported November 13). **[Proposed]** Enable authored zones on Glacier Pass after course and player-feel checks. The tested code is not evidence that zones are already in the course.
- **[Open]** Decide whether accounts and remote score persistence are required for the course prototype. Neither is part of the implemented Unity game.

## Historical browser-game candidate implementation path

- **[Historical proposal] Frontend/game:** Phaser with TypeScript for a browser-playable 2D prototype.
- **[Historical proposal] Backend:** A Node.js + Express API for mock-session checks, score validation, and player settings.
- **[Historical proposal] Persistence:** Compare local SQLite with hosted Supabase for account and high-score records; neither is selected.
- **[Historical proposal] Deployment:** GitHub Pages for this documentation site; evaluate a separate application host for the game API and database.
- **[Assumption]** Keeping the game browser-based will simplify sharing and peer review. Validate this against engine setup effort and course constraints.

## Boundaries and checks

- Keep game rules and score validation server-authoritative when a backend is introduced; never trust a client-submitted score as proof of play.
- A client-provided hash or encrypted payload is not proof that the submitted score is valid. Validate/replay legal actions and compute the score on the server.
- Do not collect real passwords directly. Use a maintained authentication provider or a proven authentication library if accounts are implemented.
- Separate the static documentation site from the future interactive application deployment.
- Before selecting this stack, compare a tiny playable loop in at least two feasible approaches and record setup, iteration, and deployment evidence.

## Historical browser-game open decisions

- Engine and language.
- Authentication approach and minimum account data.
- Whether a backend is justified for the course scope.
- Hosting, database provider, cost, privacy, and retention requirements.
