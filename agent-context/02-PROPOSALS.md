# Technical Proposals

These are options for research, not selected technologies. The public-facing specification is [`docs/spec/tech-spec.md`](../docs/spec/tech-spec.md).

## Candidate implementation path

- **[Proposed] Frontend/game:** Phaser with TypeScript for a browser-playable 2D prototype.
- **[Proposed] Backend:** A Node.js + Express API for mock-session checks, score validation, and player settings.
- **[Proposed] Persistence:** Compare local SQLite with hosted Supabase for account and high-score records; neither is selected.
- **[Proposed] Deployment:** GitHub Pages for this documentation site; evaluate a separate application host for the game API and database.
- **[Assumption]** Keeping the game browser-based will simplify sharing and peer review. Validate this against engine setup effort and course constraints.

## Boundaries and checks

- Keep game rules and score validation server-authoritative when a backend is introduced; never trust a client-submitted score as proof of play.
- A client-provided hash or encrypted payload is not proof that the submitted score is valid. Validate/replay legal actions and compute the score on the server.
- Do not collect real passwords directly. Use a maintained authentication provider or a proven authentication library if accounts are implemented.
- Separate the static documentation site from the future interactive application deployment.
- Before selecting this stack, compare a tiny playable loop in at least two feasible approaches and record setup, iteration, and deployment evidence.

## Open decisions

- Engine and language.
- Authentication approach and minimum account data.
- Whether a backend is justified for the course scope.
- Hosting, database provider, cost, privacy, and retention requirements.