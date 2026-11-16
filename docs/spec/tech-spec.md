# Technical Specification

## Current game: Echo Mountain (Unity)

**[Fact] Checked November 16, 2026.** [Echo Mountain](https://github.com/dlg309/EchoMountainGame) is a Unity desktop snowboarding game. On Glacier Pass, the player chooses the Pine or Summit line (or Summit jump practice), rides in real time, attempts spins and grabs, earns points on landing, then sees results and can retry or replay. The loop is **choose a line → ride and attempt a trick → land → finish and compare → retry or replay**. See the [game source](https://github.com/dlg309/EchoMountainGame/blob/main/Assets/EchoMountain/Runtime/MountainRun.cs) and [snowboard research](/research/snowboarding).

| Current feature | Status | Evidence or next check |
| --- | --- | --- |
| Two selectable lines, jump practice, riding, results, and retry | [Fact] Implemented | [Run controller](https://github.com/dlg309/EchoMountainGame/blob/main/Assets/EchoMountain/Runtime/MountainRun.cs) and [QA record](https://github.com/dlg309/EchoMountainGame/blob/main/docs/QA.md) |
| Spins, grabs, and landing-based trick points | [Fact] Implemented | [Scoring rules](https://github.com/dlg309/EchoMountainGame/blob/main/Assets/EchoMountain/Runtime/TrickScore.cs) |
| Per-line records saved on the player's machine; bounded replay kept in memory | [Fact] Implemented | [Local record store](https://github.com/dlg309/EchoMountainGame/blob/main/Assets/EchoMountain/Runtime/LocalRunStore.cs) and [replay recording](https://github.com/dlg309/EchoMountainGame/blob/main/Assets/EchoMountain/Runtime/RunRecording.cs) |
| Packed-snow, powder, and ice response | [Tested] Opt-in code and simulated-input tests; [Proposed] for Glacier Pass gameplay | The [QA record](https://github.com/dlg309/EchoMountainGame/blob/main/docs/QA.md) reports 38/38 PlayMode tests on November 13, but says the zones are not enabled on the course. Course integration and player feel still need checking. |
| Physical controller feel and a manual standalone save/restart and replay playthrough | [Planned] Verification | These checks are not established by the automated suite or startup check in the [QA record](https://github.com/dlg309/EchoMountainGame/blob/main/docs/QA.md). |

**Current architecture:** Unity handles rider physics, landing rules, scoring, results, local files, and in-memory replay. There is no implemented account login, server API, database, or player dashboard in Echo Mountain. The local record book is not a server account system. The [game QA record](https://github.com/dlg309/EchoMountainGame/blob/main/docs/QA.md) reports automated and Windows startup checks; this documentation build cannot verify game behavior.

## Historical browser-game plan (not Echo Mountain requirements)

The remainder of this page preserves an earlier IS218 turn-based browser-game proposal. Its five user stories, staged journey, stack, architecture, and enemy experiment do **not** describe implemented Unity features. Their planning labels are historical. See the [decision log](/planning/decisions) for the change in direction.

### Proposed stack for the earlier browser game

| Layer | Candidate | Status and reason to test |
| --- | --- | --- |
| Game frontend | Phaser + TypeScript | [Proposed] Browser-first 2D loop; compare setup and iteration against another engine before selection. |
| Backend | Node.js + Express API | [Proposed] A server boundary could own session checks, game-rule validation, and score persistence. |
| Database | SQLite or Supabase | [Proposed] Compare a local SQLite database with hosted Supabase persistence; no provider or schema is selected. |
| Documentation deployment | GitHub Pages + VitePress | [Fact] Existing repository configuration builds and deploys the public documentation site. This does not deploy the future game API. |
| Game/API deployment | Undecided | [Open] Evaluate cost, security, database connectivity, and course constraints after validating the need. |

No credentials or real personal data should be collected during a prototype. If accounts are implemented, use a maintained authentication solution and minimize stored data.

### Five historical user stories

1. **Account Access:** As a player, I can log into a mock account session so my game progress is attributed to me. `[Proposed]`
2. **Useful Interaction:** As a player, I can make turn-based tactical moves on a grid to defeat obstacles. `[Historical decision]`
3. **Saved Record:** As a player, my final session score and turn count are validated and saved upon game over. `[Historical decision]`
4. **Player Dashboard:** As a player, I can view my personal high-score history and game statistics. `[Proposed]`
5. **Account Maintenance:** As a player, I can update my display name and clear my local session history. `[Proposed]`

The labels describe planning status, not implementation status. A mock session is for a clearly labeled prototype only. Clearing local session history must not be presented as deleting persisted server records.

### Historical staged user journey (IS218 plan)

The earlier course proposal staged this journey to limit scope:

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

### Historical browser-game architecture diagram

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

### Historical enemy-movement experiment

**Experiment:** Procedural enemy movement powered by probabilistic decision trees. `[Assumption]`

**Risk:** An opponent may choose an invalid move or create an infinite turn loop.

**Evaluation test:** `[Planned]` Run 100 simulated turns with fixed seeds. Assert every enemy position remains inside the generated grid and every turn cycle terminates. Set a maximum number of AI actions per turn to detect loops; measure enemy decision time against a target of less than 50 ms per turn on a recorded local test environment. The timing target is not a measured result and may need adjustment for the test machine.

No experiment or automated test has been run yet.
