# GlobalLink TV — Voice & Tone Guide

**Version 1.0** | Product: GlobalLink TV
**Extends**: Compass Master Guide v2.1
**Created**: 2026-05-22 | **Next review**: 2026-08-22
**Product owner**: [PM name or role] | **Content owner**: [Design lead name or role]

---

## 1. Product context

GlobalLink TV is a live broadcast platform for corporate and event video streaming. Broadcast operators manage the technical side of going live — monitoring viewer counts, managing encoder connections, and keeping streams running. Viewers watch corporate all-hands meetings, conference keynotes, and product launches.

| | |
|---|---|
| **Stakes** | High (operators) / Medium (viewers) — a broadcast dropping mid-event is a public failure for operators; buffering or a stopped stream is frustrating but recoverable for viewers |
| **Industry** | Corporate communications, events |
| **Registers** | Broadcast Operator (A), Viewer — web (B), Viewer — mobile (C) |

**North star**: "I can watch and find the content relevant to me easy and fast" (viewers) / "I am in control of this broadcast and I can respond to any issue in real time" (operators).

**Highest-stakes moments**:
1. Encoder disconnects or stream drops during a live event — operator is exposed, audience is watching, every second of downtime is visible
2. Stream buffers or stops mid-broadcast with no explanation for the viewer — they have no self-service path and no way to know if the issue is on their end or the platform's
3. Operator attempts to go live and the system fails to start — an audience may already be waiting

---

## 2. Registers

### Register A — Broadcast Operator

| | |
|---|---|
| **Profile** | Technical professional managing the live broadcast. Accountable for stream uptime and quality. Experienced with encoders, viewer metrics, and live event logistics. Operates under real-time pressure with zero tolerance for ambiguity. |
| **Context** | At a workstation during an active event. Monitoring a dashboard across multiple screens. Any message competes with a live feed, viewer count, and encoder status. Interruptions are unwelcome unless they require action. |
| **North star** | "I know the exact state of this broadcast and I can act on any issue within seconds." |

**Tone markers**: Terse and precise. Status-first. Technical vocabulary welcome. No hand-holding. Urgency acknowledged, not dramatised.

**Tone position**:

| Dimension | Position | Notes |
|---|---|---|
| Funny ↔ Serious | 8/10 | A stream dropping is a public failure. Nothing about this context invites levity. |
| Formal ↔ Casual | 6/10 | Professional and direct. Not stiff — operators work fast and need copy that keeps pace. |
| Concise ↔ Detailed | 3/10 | Maximum signal per word. Error codes and technical specifics are appropriate and expected. |
| Respectful ↔ Irreverent | 5/10 | Full respect for expertise. No softening, no reassurance, no filler. |

**Examples**:

| Context | Copy | Why it works |
|---|---|---|
| Error — encoder disconnected | Encoder disconnected. Reconnecting… Est. 5 seconds. | Leads with the fact, not an apology. Gives status in real time. Operator knows what happened and what the system is doing. |
| Error — stream failed to start | Stream failed to start. Check encoder connection and retry. [Retry] | States the failure, names the likely cause, gives the next action. No ambiguity. |
| Error — stream dropped during live event | Stream interrupted. Duration: 14 seconds. Reconnecting. [View logs] | Quantifies the interruption (operators need this for incident reporting). Shows system is acting. Provides access to diagnostic data. |
| Success — stream started | Live. 2,450 viewers. 0:00:08. | Confirms live status with the two metrics operators need immediately: viewer count and elapsed time. No congratulations. |
| Success — encoder reconnected | Encoder reconnected. Stream resumed. No viewers lost. | Confirms resolution. The "no viewers lost" detail reduces anxiety without being warm — it's a technical fact. |
| Empty state — no broadcasts scheduled | No broadcasts scheduled. [Schedule a broadcast] | States the state, provides the action. No filler. |
| CTA — primary action, pre-event | Start broadcast | Verb-first, explicit. Not "Go live" (informal, less translatable). |
| Notification — viewer count milestone | 1,000 viewers connected. | Factual alert. Operator can use this for client reporting. No exclamation mark. |
| Notification — health warning | Stream health: degraded. Bitrate below threshold (1.2 Mbps). | Specific: names the metric and the current value. Operator can act without clicking through to investigate. |
| Destructive action — end broadcast | End broadcast? This will disconnect all 2,450 viewers immediately. This cannot be undone. [End broadcast] [Cancel] | Names the consequence in concrete terms — "2,450 viewers" not "all viewers". States irreversibility. Button label matches the action, not "Confirm". |
| Onboarding — first broadcast setup | Connect your encoder to start streaming. [View encoder settings] | Single instruction. Links to the technical step. No welcome speech. |

---

### Register B — Viewer (web)

| | |
|---|---|
| **Profile** | Employee, conference delegate, or invited attendee watching a corporate broadcast. Not a technical user. Has no ability to fix stream issues. Accountability is low — they are audience, not operator. |
| **Context** | Watching on a desktop or laptop, often from a corporate network. May be watching solo or in a group. Likely focused on the content, not the interface. Notices the platform only when something goes wrong. |
| **North star** | "I can follow the broadcast without interruption, and if something goes wrong I know what to do next." |

**Tone markers**: Calm and informative. One clear next step. Warm enough to not feel cold; professional enough to match a corporate event. Never alarmist.

**Tone position**:

| Dimension | Position | Notes |
|---|---|---|
| Funny ↔ Serious | 7/10 | Corporate broadcast context. The viewer may be watching a CEO address or an industry keynote — the tone must match the event. |
| Formal ↔ Casual | 5/10 | Balanced. Professional but not stiff. This is not a consumer app, but it's also not a compliance tool. |
| Concise ↔ Detailed | 4/10 | One sentence of context is appropriate when something fails — viewers need enough to know whether to wait or act. |
| Respectful ↔ Irreverent | 5/10 | Respectful throughout. The viewer has no power to fix issues — don't make them feel responsible for things they didn't cause. |

**Examples**:

| Context | Copy | Why it works |
|---|---|---|
| Error — stream not loading | Can't load the stream. Check your connection or try another browser. [Get help] | States the problem. Gives two actionable options. Provides an escalation path. Does not blame the user or suggest the fault is theirs. |
| Error — stream stopped mid-broadcast | Stream interrupted. We're working to restore it. [Refresh] | Acknowledges the interruption. States the system is acting. Gives one action the viewer can try. No alarm, no apology spiral. |
| Error — access denied | You don't have access to this broadcast. Contact your event organiser for an invitation link. | Explains the state clearly. Gives a next step that's within the viewer's reach. Does not suggest a bug. |
| Success — stream loaded | [No copy needed — the stream plays. UI should not interrupt a successfully loaded broadcast.] | Copy that confirms "stream is playing" would interrupt the viewing experience. Silence is the right UX here. |
| Success — registration confirmed | You're registered for [Event name]. The broadcast begins on [Date] at [Time]. You'll receive a reminder by email. | Confirms the action, sets expectations, tells them what happens next. |
| Empty state — no live broadcast yet | This broadcast hasn't started yet. It's scheduled to begin at [Time]. [Add to calendar] | Tells the viewer where they are, when to come back, and gives them a useful action. Does not feel like an error. |
| CTA — join broadcast | Watch broadcast | Explicit. Present-tense action verb. Not "Join" (implies social context) or "View" (too passive for a live event). |
| Notification — broadcast starting soon | [Event name] starts in 5 minutes. [Watch now] | Time-bound, specific. Includes the event name so the viewer doesn't have to remember which tab to open. |

---

### Register C — Viewer (mobile)

| | |
|---|---|
| **Profile** | Same viewer as Register B but watching on a mobile device. Often multitasking — in a meeting room watching a keynote on their phone, or commuting and checking in on a company all-hands. |
| **Context** | Small screen, likely portrait orientation, likely one hand. Notifications are push alerts, not in-app banners. Cognitive load is high. The broadcast competes with the physical environment for attention. |
| **North star** | "I can follow what's happening with a glance, and I know immediately if I need to act." |

**Tone markers**: Ultra-concise. One fact per message. Action verbs. Time and status beat everything.

**Tone position**:

| Dimension | Position | Notes |
|---|---|---|
| Funny ↔ Serious | 7/10 | Same event context as Register B. Mobile does not make the event less serious. |
| Formal ↔ Casual | 4/10 | Slightly more casual than web — shorter sentences read as more casual by default. Still professional. |
| Concise ↔ Detailed | 2/10 | Absolute minimum. Every word competes with real-world attention. |
| Respectful ↔ Irreverent | 5/10 | Respectful. No sarcasm, no informality that could read as flippant during a corporate event. |

**Examples**:

| Context | Copy | Why it works |
|---|---|---|
| Error — stream stopped | Stream stopped. [Retry] | Two words and one action. On mobile, anything longer will be skimmed past. |
| Error — no connection | No connection. Connect to Wi-Fi or mobile data to watch. | One cause, one fix. No word wasted. |
| Success — broadcast resumed | Stream restored. | Confirmation in two words. Viewer can return to watching. |
| Empty state — broadcast not yet live | Starts at [Time]. [Add to calendar] | Time is the only information a mobile viewer needs before a broadcast. |
| CTA — join from push notification | Watch now | Two words. Self-explanatory regardless of context. |
| Notification — broadcast starting | Broadcast in 30 min. | Matches the orientation example from the Compass master guide. Time is the lead. No filler. |
| Notification — stream resumed after interruption | Stream back. [Watch] | Acknowledges the interruption is resolved. Returns control to the viewer with one tap. |

---

## 3. Terminology

| Concept | Use | Never use | Why |
|---|---|---|---|
| The act of going live | "Start broadcast" | "Go live", "Kick off the stream", "Launch" | "Start broadcast" is translatable and precise. "Go live" is an idiom. "Launch" is ambiguous (could mean a product launch, not a stream action). |
| The video feed | "Stream" | "Feed", "Channel", "Video" | "Stream" is the product-established term. "Feed" can mean social media. "Channel" implies a TV channel metaphor that doesn't map to the platform. |
| The encoder connection | "Encoder" | "Input device", "Hardware", "Camera" | Operators are technical users who know the term. Using anything else loses precision. |
| A scheduled live event | "Broadcast" | "Event", "Session", "Show", "Live" (as a noun) | "Broadcast" is specific to the platform type. "Event" conflicts with GlobalLink Events. "Session" conflicts with conference/event terminology. |
| The live count of people watching | "Viewers" | "Audience", "Participants", "Attendees", "Users" | "Viewers" is specific to the passive watch context. "Participants" implies interactivity. "Attendees" belongs to GlobalLink Events. |
| The duration a broadcast has been running | Elapsed time (display as h:mm:ss) | "Runtime", "Duration" (while live), "Time live" | Elapsed time displayed as a running clock is the standard for live broadcast tools. "Runtime" implies post-production. |
| Stream quality / health | "Stream health" | "Signal strength", "Video quality", "Connection strength" | "Stream health" is the platform term and maps to the metrics shown in the dashboard. |
| The process of reconnecting after a drop | "Reconnecting" | "Recovering", "Retrying", "Buffering" | "Reconnecting" is accurate and active. "Buffering" is what the viewer experiences; operators need the system-level term. |

---

## 4. Key patterns

### Encoder disconnection during a live broadcast

This is the highest-stakes moment for a broadcast operator. The platform must communicate status in real time, with no ambiguity, and with enough information to decide whether to wait or intervene.

**Structure**: Status → Duration/elapsed → System action → Escalation if needed

**Example — auto-recovery in progress**:
> Encoder disconnected. Reconnecting… Est. 5 seconds.

**Example — recovery taking longer than expected**:
> Encoder disconnected. Reconnecting… 12 seconds elapsed. [View connection logs] [Contact support]

**Example — manual intervention needed**:
> Encoder connection failed. Reconnect your encoder manually, then select Retry. [Retry] [View setup guide]

**Rules for this pattern**:
- Lead with the failure state, not an apology
- Quantify elapsed time when recovery is taking longer than the initial estimate
- Surface diagnostics (logs) before the operator needs to ask for them
- Escalation path is required if auto-recovery fails after the initial estimate

---

### Stream interruption — viewer-facing

When a stream stops for a viewer, the most important thing the platform can communicate is: whether the problem is likely on their side or the platform's, and whether they should wait or act.

**Structure**: What happened → Likely cause or system status → One action

**Example — platform-side issue, system acting**:
> Stream interrupted. We're working to restore it. [Refresh]

**Example — likely viewer-side issue**:
> Stream stopped. Check your connection, then refresh. [Refresh] [Get help]

**Example — broadcast ended by operator**:
> This broadcast has ended. [Watch the recording] (if available) or [Return to broadcasts]

**Rules for this pattern**:
- Never leave a viewer with an error and no next step
- If the platform is aware of the issue (i.e., the stream dropped on the operator's end), say so — don't let the viewer think the fault is theirs
- If the broadcast ended deliberately, say so clearly — "Stream interrupted" is alarming if the event just ended on schedule

---

### Status displays (operator dashboard)

The live status bar is not copy in the traditional sense — it is a real-time display of system state. These follow different rules than error messages or notifications.

**Format**: State · Metric 1 · Metric 2 (no punctuation at end of display strings)

**Examples**:
- `Live · 2,450 viewers · 3:12`
- `Reconnecting · 8 sec elapsed`
- `Paused · Last live: 2 min ago`
- `Offline · Last broadcast: May 22 at 14:30`

**Rules for status displays**:
- Status is always first
- Viewer count uses comma separators, no abbreviation below 10,000 (use "9,873" not "9.9K")
- Elapsed time format: h:mm:ss when over 1 hour, m:ss otherwise
- Reconnecting state always shows elapsed seconds so the operator can decide when to intervene manually

---

### Time-pressure escalation

When a broadcast is live and an issue persists past the auto-recovery window, copy must escalate in specificity and urgency — while remaining factual and not alarmist.

**Escalation sequence for encoder disconnect**:

| Time elapsed | Copy |
|---|---|
| 0–5 sec | Encoder disconnected. Reconnecting… |
| 5–15 sec | Reconnecting… 10 seconds elapsed. [View logs] |
| 15–30 sec | Encoder not responding. Reconnect manually and select Retry. [Retry] [Contact support] |
| 30+ sec | Broadcast interrupted for 30+ seconds. Reconnect your encoder or end the broadcast. [Retry] [End broadcast] |

**Rules**: Each escalation step adds one piece of information or one new option. Never repeat the initial message — progress must be visible. The "End broadcast" option should appear when the operator may need to cut their losses — withholding it forces them to hunt for it under pressure.

---

## 5. Cross-references

- **Voice attributes, tone spectrum, core principles**: Compass Master Guide §2 (Voice & tone) and §4 (Style & usage)
- **Accessibility & inclusion** (gender-neutral language, alt text, anti-racist language): Compass Master Guide §3
- **Style & usage** (capitalisation, punctuation, product naming, emoji, "please"): Compass Master Guide §4
- **Scenario patterns** (errors, success, onboarding, destructive actions): Compass Master Guide §6 (Talking to users)
- **Time pressure & urgency pattern**: Compass Master Guide §6 — this is the primary framework for escalating encoder/stream failure copy
- **UI element patterns** (CTAs, confirmations, fields, tooltips): Compass Master Guide §7 (Product & UI)
- **Mobile / real-time register patterns**: Compass Master Guide §7 (Register C guidance)
- **Translatability**: Compass Master Guide §8 — applies with full force; broadcast terminology must survive translation for the global corporate events market
- **Product naming rules**: Compass Master Guide §4 — always "GlobalLink TV" in cross-product references; "TV" within the product UI where context is established; never "GL TV"

---

## 6. Review & maintenance

**Review cadence**: Quarterly
**Next review**: 2026-08-22
**Last updated**: 2026-05-22

Update this guide when:
- A new user type is added (e.g., a broadcast moderator role with interactive capabilities)
- The platform adds features that create new copy contexts (e.g., on-demand playback, live Q&A, chapter markers)
- The platform expands to new industry verticals with different formality expectations
- The Compass master guide updates a rule this guide inherits
- The quarterly review flags inconsistencies between this guide and shipped copy

---

*Built using the [Compass Product Voice Workbook](../../../../../../../design-system/docs/COMPASS_PRODUCT_VOICE_WORKBOOK.md). Extends [Compass Voice & Tone v2.1](../../../../../../../design-system/docs/COMPASS_VOICE_AND_TONE.md).*
