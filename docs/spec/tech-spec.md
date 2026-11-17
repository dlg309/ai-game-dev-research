# Technical Specification

## EchoMountain3D engineering plan

**Source audit: November 17, 2026.** [Game source](https://github.com/dlg309/EchoMountainGame), [README](https://github.com/dlg309/EchoMountainGame/blob/main/README.md), [PLANS.md](https://github.com/dlg309/EchoMountainGame/blob/main/PLANS.md), [AGENTS.md](https://github.com/dlg309/EchoMountainGame/blob/main/AGENTS.md), [status](https://github.com/dlg309/EchoMountainGame/blob/main/docs/STATUS.md), and [QA](https://github.com/dlg309/EchoMountainGame/blob/main/docs/QA.md) were inspected at commit `7a22c7b`. `[Fact]` means present in source; `[Tested]` means the linked QA record reports a run; `[Proposed]` and `[Unverified]` are not acceptance claims. The QA record's latest surface build was still pending at its November 13 checkpoint.

### Vision and scope

**Promise:** Find your line. Ride it better. The original 3D snowboard game targets a **Windows desktop build**. Its three pillars are **Feel the Edge** (grip, momentum, readable snow response), **Own the Line** (approach, pop, spin, grab, land), and **Ride Your Echo** (compare and improve a run). The loop is **choose Pine or Summit → descend → attempt and land a trick → inspect time, speed, and score → retry or replay**. Jump practice is a shorter route. See the [original brief](https://github.com/dlg309/EchoMountainGame/blob/main/docs/BUILD_BRIEF.md) and [current run controller](https://github.com/dlg309/EchoMountainGame/blob/main/Assets/EchoMountain/Runtime/MountainRun.cs).

| Scope | Current evidence | Next gate |
| --- | --- | --- |
| Glacier Pass, two lines, practice, results, retry | [Fact] Source; [Tested] route and retry PlayMode checks | Repeat complete menu-to-results flow in a fresh Windows build. |
| Rigidbody riding, spins, Indy/Melon grabs, landing score | [Fact] Source; [Tested] simulated-input PlayMode checks | Physical controls, terrain feel, and camera playtest. |
| Local records/preferences and current-run replay | [Fact] [Store](https://github.com/dlg309/EchoMountainGame/blob/main/Assets/EchoMountain/Runtime/LocalRunStore.cs), [recording](https://github.com/dlg309/EchoMountainGame/blob/main/Assets/EchoMountain/Runtime/RunRecording.cs); [Tested] automated checks | [Unverified] Standalone save/restart/replay interaction. Replay is memory-only. |
| Packed/powder/ice response | [Tested] Opt-in classifier and supported-force fixture, 38/38 full and 2/2 focused PlayMode tests in [QA](https://github.com/dlg309/EchoMountainGame/blob/main/docs/QA.md) | [Proposed] Visible authored zones and boundary/airborne/feel checks. Glacier Pass still uses packed snow. |
| Previous/best ghost and session markers | [Proposed] in [PLANS.md](https://github.com/dlg309/EchoMountainGame/blob/main/PLANS.md) | Comparable metadata, persistence, and user review. |
| Rails, physical halfpipe, progression, larger world | [Proposed] future demo | Only after the vertical slice passes its gates. |

The **MVP** is the existing short, replayable course with trustworthy controls, scoring, results, retry, and a verified Windows player. Surface zones and local ghosts are staged improvements. Accounts, a server, multiplayer, and remote scores are outside the offline scope; the earlier browser plan below is historical.

### Technology and ownership

| Choice | Rationale and current status |
| --- | --- |
| Unity **6.3 LTS**, project version **6000.3.28f1**, C# | [Fact] `ProjectVersion.txt` pins the editor; C# runtime components already exist. Retain this project and its asset GUIDs. |
| URP **17.3.0** | [Fact] Pinned in [manifest](https://github.com/dlg309/EchoMountainGame/blob/main/Packages/manifest.json); supports the existing 3D scene and materials. |
| Rigidbody, fixed 60 Hz physics, Input System **1.20.1** | [Fact] Existing rider and semantic controls; use Unity's solver and fixed-tick forces, then assess real input and performance. |
| Unity Test Framework **1.6.0** | [Fact] Pinned package and PlayMode assembly. Add focused EditMode tests for pure rules when useful; keep scene/physics tests in PlayMode. |
| Git/GitHub and Windows x64 builds | [Fact] Source, review, QA history, and `LabBuild` entry point exist. A build and launch are separate from a complete gameplay pass. |

No new runtime framework or LLM service is required. Keep the current Unity components and use a new dependency only when a measured gap warrants it.

### Existing architecture and design rules

| Module | Responsibility | Evidence |
| --- | --- | --- |
| `LabRideControls`, `LabRider`, `SnowSurfaceMap` | Semantic inputs, Rigidbody/contact forces, optional surface lookup | [Runtime source](https://github.com/dlg309/EchoMountainGame/tree/main/Assets/EchoMountain/Runtime) |
| `LabLandingRules`, `TrickScore` | Classify landing and bank/cancel points | [Landing](https://github.com/dlg309/EchoMountainGame/blob/main/Assets/EchoMountain/Runtime/LabLandingRules.cs), [score](https://github.com/dlg309/EchoMountainGame/blob/main/Assets/EchoMountain/Runtime/TrickScore.cs) |
| `MountainRun`, `MountainCourse`, `LabHud` | Route and session phase, course geometry, on-screen state | [Run controller](https://github.com/dlg309/EchoMountainGame/blob/main/Assets/EchoMountain/Runtime/MountainRun.cs) |
| `RunRecording`, `MountainReplay`, `LocalRunStore` | Bounded snapshots, playback, offline records/preferences | [Recording](https://github.com/dlg309/EchoMountainGame/blob/main/Assets/EchoMountain/Runtime/RunRecording.cs), [store](https://github.com/dlg309/EchoMountainGame/blob/main/Assets/EchoMountain/Runtime/LocalRunStore.cs) |
| `LabCamera`, `LabRiderVisual`, audio/spray, Editor tools | Presentation and reproducible scene/build tooling | [Runtime](https://github.com/dlg309/EchoMountainGame/tree/main/Assets/EchoMountain/Runtime), [Editor](https://github.com/dlg309/EchoMountainGame/tree/main/Assets/EchoMountain/Editor) |

Apply **single responsibility** by keeping score, save I/O, input, and physics in their existing owners; **dependency inversion** only at real storage or input seams; and **open/closed** extension through authored surface data before branching the rider into separate implementations. The current `MountainPhase` enum and transitions form a simple phase model; use a formal **State** pattern only if transition rules become hard to maintain. `SurfaceRules.Response` uses a switch; a **Strategy** interface is justified only if independently authored surface behaviors exceed this small table. Use **Observer** callbacks only where a verified one-to-many event (for example landing feedback to HUD/audio/VFX) reduces coupling. Reuse existing modules before refactoring.

### Agile delivery contract

Each row is a theme → initiative → epic → user story → developer task. Acceptance checks are proposed release gates; existing test evidence is identified above.

| Theme / initiative / epic | User story | Developer task and measurable acceptance |
| --- | --- | --- |
| Ride / reliable slice / route flow | As a player, I can choose Pine, Summit, or practice and finish or retry a run. | Audit scene, transitions, and buttons; both full routes reach Results and retry resets route, timer, score, and rider. Record PlayMode result and one Windows walkthrough. |
| Control / dependable feel / input and camera | As a player, I can steer, brake, pop, pause, and see my landing. | Test keyboard and a physical controller on Windows; record device, disconnect/focus behavior, camera obstruction and switch views; no stuck input or hidden landing in the reviewed run. |
| Terrain / meaningful lines / snow surfaces | As a player, I can see and feel packed, powder, and ice. | Author visible, colliding-match zones; verify each zone changes supported grip/roll/braking, airborne motion ignores surface forces, and transitions preserve finish/retry. Record speed/side-slip measurements and player feedback. |
| Progress / honest comparison / records and replay | As a player, I can compare my run with local records and watch it again. | Complete standalone save/restart/replay check; reject incompatible course/rules metadata. For a later ghost, compare only equal route, mode, course/rules version, and assists. |
| Craft / polished demo / feedback | As a player, I can read results and hear/see ride feedback without losing the line. | Review HUD, sound, spray, contrast, and frame pacing in the player; log defects and a short gameplay capture. |

### Quality gates

1. **Fast feedback:** compile in the pinned Unity editor; use IDE/compiler diagnostics and formatting for changed C# only. Review changed files and Unity Console warnings. Add static analyzers only for a specific recurring defect, without a redundant lint stack.
2. **Rules:** use focused EditMode tests for pure scoring, surface lookup, and save validation when extracted from scene dependencies. Do not copy PlayMode cases merely to increase counts.
3. **Integration:** run the narrow affected PlayMode fixture first, then full route/physics/score/save/replay regression at a gate. Record Unity version, command, XML counts, and failures in game [QA](https://github.com/dlg309/EchoMountainGame/blob/main/docs/QA.md).
4. **Player:** build Windows x64 from a clean isolated project, inspect build result and startup log, then play menu → Pine/Summit/practice → result → retry/replay → restart/save with keyboard and real controller when available. Capture visible defects and listening feedback. A smoke launch alone does not satisfy this gate.
5. **Performance:** profile the standalone course on a named machine at 1080p; report median/low frame rate and frame-time spikes against the proposed 60 FPS target. The target is unverified until measured.

See the [gated roadmap](/roadmap), [snow experiment](/research/snowboarding#surface-response-experiment), and [AI workflow](/research/overview#current-ai-first-delivery-loop).

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
