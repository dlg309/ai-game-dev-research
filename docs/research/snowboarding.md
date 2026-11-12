# Snowboard game research for Echo Mountain

**Question.** What makes a short snowboard run worth repeating, and which mechanics can Echo Mountain implement and verify first?

**Audience.** IS218 classmates and developers evaluating a small, testable Unity game. This page explains the current project direction. The earlier [turn-based concept comparison](/spec/concepts) records a prior planning option.

**Checked November 11, 2026.** This is a synthesis of public features and Echo Mountain source, not a claim about another game's private code. **Documented** means a cited source or linked project file supports the statement. **Proposed** is an Echo Mountain design. **Assumption** requires playtesting.

## Five reference patterns

| Style | Documented evidence | Echo Mountain interpretation |
| --- | --- | --- |
| Arcade racing and spectacle | [EA describes SSX](https://news.ea.com/press-releases/press-releases-details/2012/Defy-Reality-Own-the-Planet-EA-Sports-SSX-in-Stores-Now/default.aspx) as Race, Trick, and Survive descents. | **Proposed:** offer distinct time and trick objectives on one authored course. |
| Freeride and replay | [Ubisoft describes Steep](https://news.ubisoft.com/en-us/article/7jAdiKBdiUehSiZK3OWO2Z/steep-action-sports-go-open-world) with open slopes, challenges, and editable replays. | **Proposed:** keep line choice compact, then add a local previous-run ghost. |
| Expressive style | The [Shredders developer FAQ](https://i-illusions.com/faq/shredders) calls it a balance of arcade and simulation; its [publisher describes](https://www.microids.com/us/shredders-us/) park, powder, rails, and rider control. | **Proposed:** keep approach, pop, rotation, grab, and landing readable as separate decisions. |
| Repeatable park sessions | The [developer-authored listing for The Snowboard Game](https://store.steampowered.com/app/803830/The_Snowboard_Game/) describes session spawn points and placeable jumps. | **Proposed:** expand jump practice into short, repeatable challenges. |
| Accessible freestyle | [Ubisoft's Riders Republic Q&A](https://www.ubisoft.com/en-sg/game/riders-republic/news-updates/2HFvoOtBvWRtrlXOF8ZXjo/answering-your-riders-republic-questions) describes automatic landing help and a manual option. | **Proposed:** evaluate an optional assist only after the unassisted landing rules remain stable. |

These sources establish player-facing features. They do **not** disclose proprietary physics formulas, tuning values, or state machines.

## What Echo Mountain already does

**Observed in project source, November 11.** [EchoMountainGame](https://github.com/dlg309/EchoMountainGame) is a Unity 6000.3.28f1/URP desktop project. Glacier Pass has two selectable lines, a jump-practice segment, real-time riding, spins and grabs, landing-based score, results, retry, local route records, bounded in-memory replay, and cosmetic snow spray. The relevant modules include [LabRider.cs](https://github.com/dlg309/EchoMountainGame/blob/main/Assets/EchoMountain/Runtime/LabRider.cs), [TrickScore.cs](https://github.com/dlg309/EchoMountainGame/blob/main/Assets/EchoMountain/Runtime/TrickScore.cs), [MountainRun.cs](https://github.com/dlg309/EchoMountainGame/blob/main/Assets/EchoMountain/Runtime/MountainRun.cs), and [RunRecording.cs](https://github.com/dlg309/EchoMountainGame/blob/main/Assets/EchoMountain/Runtime/RunRecording.cs).

The current loop is **choose a line → ride and attempt a trick → land → finish and compare → retry or replay**. The rider uses four ground probes, bounded lateral grip and braking forces, a buffered pop, and landing classification. [Unity's AddForce documentation](https://docs.unity3d.com/6000.3/Documentation/ScriptReference/Rigidbody.AddForce.html) explains the force modes used by the project's Rigidbody. The code and tests, rather than reference-game marketing, establish Echo Mountain's actual behavior.

**Observed check.** The integrated Unity PlayMode suite passed 32/32 tests. A Windows build started responsively and initialized Direct3D 11 and input. See the [QA evidence](https://github.com/dlg309/EchoMountainGame/blob/main/docs/QA.md). **Unrun checks:** physical controller feel, listening, and a manual standalone save/restart and replay playthrough.

## Design choice and next experiment

**Proposed:** add authored packed-snow, powder, and ice zones to the existing course before expanding into a larger mountain. This tests whether terrain response makes line choice meaningful while preserving the current landing and score rules.

The existing ground model can be summarized as:

```text
lateral speed = dot(velocity, board-side direction)
grip acceleration = clamp(-lateral speed × edgeGrip, -maxGrip, +maxGrip)
rolling acceleration = -sign(forward speed) × bounded resistance
```

A fixed-tick surface lookup would multiply grip, rolling resistance, and braking only while the board is supported. Airborne motion and score evaluation would stay separate. **Assumption:** powder should have more resistance and ice less grip; exact multipliers and region boundaries are untested. The [full research and implementation blueprint](https://github.com/dlg309/EchoMountainGame/blob/main/agent-context/01-GAME-IDEAS.md) includes the state diagram, starter C# classifier, code mapping, and test cases.

```text
input → rider physics + ground probes → surface response → board motion
                                 ↘ landing rules → trick score → run result
                                                     ↘ local record / replay
```

**Planned check:** verify surface boundaries, compare lateral and forward speed on a controlled fixture, cross a zone while airborne, rerun both complete course tests, and inspect a fresh Windows build. The earlier Pine and Summit automated durations provide baselines, not a promise that new tuning will match them.

## AI assistance and review

An AI coding assistant helped compare source descriptions, inspect the Unity code, draft the proposed surface model, and write tests. Claims about the five reference games were checked against the linked publisher or developer pages on November 11, 2026. The assistant cannot establish game feel from source code or a headless test.

For peer review, ask a classmate to open one source above, explain why the surface experiment follows from it, and identify one assumption or confusing claim. Record their actual feedback and retry in [the review log](/reviews/) and a GitHub issue. This peer check is **planned** here; AI critique is not a substitute.
