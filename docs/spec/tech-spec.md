# Technical Specification

> **Current direction:** Historical browser-game architecture study. The current Echo Mountain implementation is a Unity desktop snowboard game; its local records are not a server account system. See the [current snowboard research](/research/snowboarding) and [implementation repository](https://github.com/dlg309/EchoMountainGame). The account-to-dashboard architecture below remains a proposed course requirement, not an implemented Echo Mountain feature.

**Status:** Proposed architecture for research. No game backend, database, or account flow has been implemented.

## Proposed stack

| Layer | Candidate | Status and reason to test |
| --- | --- | --- |
| Game frontend | Phaser + TypeScript | [Proposed] Browser-first 2D loop; compare setup and iteration against another engine before selection. |
| Backend | Node.js + Express API | [Proposed] A server boundary could own session checks, game-rule validation, and score persistence. |
| Database | SQLite or Supabase | [Proposed] Compare a local SQLite database with hosted Supabase persistence; no provider or schema is selected. |
| Documentation deployment | GitHub Pages + VitePress | [Fact] Existing repository configuration builds and deploys the public documentation site. This does not deploy the future game API. |
| Game/API deployment | Undecided | [Open] Evaluate cost, security, database connectivity, and course constraints after validating the need. |

No credentials or real personal data should be collected during a prototype. If accounts are implemented, use a maintained authentication solution and minimize stored data.

## 2. Five User Stories

1. **Account Access:** As a player, I can log into a mock account session so my game progress is attributed to me. `[Proposed]`
2. **Useful Interaction:** As a player, I can make turn-based tactical moves on a grid to defeat obstacles. `[Decided]`
3. **Saved Record:** As a player, my final session score and turn count are validated and saved upon game over. `[Decided]`
4. **Player Dashboard:** As a player, I can view my personal high-score history and game statistics. `[Proposed]`
5. **Account Maintenance:** As a player, I can update my display name and clear my local session history. `[Proposed]`

The labels describe planning status, not implementation status. A mock session is for a clearly labeled prototype only. Clearing local session history must not be presented as deleting persisted server records.

## 1. Staged User Journey (IS218 Compliance)

To prevent scope creep while fulfilling course requirements, the project journey is staged:

```text
Account Access ──► Useful Interaction ──► Saved Record ──► Player Dashboard ──► Account Maintenance
  (Auth Mock)       (Turn Game Loop)      (Score Submission)  (High Scores)       (Profile/Settings)
```

| Stage | Planned behavior | Minimum check |
| --- | --- | --- |
| 1. Account access | Authenticate or use a clearly labeled local demo identity | Unauthorized requests do not expose another player's records |
| 2. Play Game | Complete one bounded encounter and reach a terminal result | Rules, restart, win, and loss behavior are reproducible |
| 3. Save Score | Submit the result to a server-owned validation path | Invalid or client-forged results are rejected; duplicate handling is defined |
| 4. Player Dashboard | Read the signed-in player's persisted records | Results are scoped to that player and have clear empty/loading/error states |
| 5. Account settings | View and update only approved profile preferences | Inputs are validated and changes persist only for the signed-in player |

The early prototype may validate the gameplay loop without accounts or remote persistence. Any such simplification must be explicit and must not be presented as completing the full journey.

## 3. Architecture Diagram

```text
[ Client UI (Browser) ]
         | 1. Auth request (mock session; JWT is a later option)
         | 2. Game action (grid-based turn state machine)
         | 3. Score, turn count, and action log over HTTPS
         |    (client-provided result remains untrusted)
         v
[ Node.js / Express Backend ]
         | validates session and legal action sequence
         | recomputes score and turn count from server rules
         | optional server-generated record digest for audit
         v
[ Database Layer: SQLite (local) or Supabase (hosted), undecided ]
         |-- Account / mock-session records
         `-- High-score records and session statistics
```

The API, not the browser, must authorize access and validate writes. HTTPS encrypts data in transit; it does not make a client-computed score trustworthy. A hash of client-controlled data is not proof of a valid score, so the server must replay or otherwise validate legal actions and recompute the result. Any digest would be generated server-side after validation and would be an audit aid, not a substitute for authorization or validation. Keep secrets server-side and return only records authorized for the current player. This architecture is proposed, not deployed.

## 4. Uncertain Creative Experiment

**Experiment:** Procedural enemy movement powered by probabilistic decision trees. `[Assumption]`

**Risk:** An opponent may choose an invalid move or create an infinite turn loop.

**Evaluation test:** `[Planned]` Run 100 simulated turns with fixed seeds. Assert every enemy position remains inside the generated grid and every turn cycle terminates. Set a maximum number of AI actions per turn to detect loops; measure enemy decision time against a target of less than 50 ms per turn on a recorded local test environment. The timing target is not a measured result and may need adjustment for the test machine.

No experiment or automated test has been run yet.