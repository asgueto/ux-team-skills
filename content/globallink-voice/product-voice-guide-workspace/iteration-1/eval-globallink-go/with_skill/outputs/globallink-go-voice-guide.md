# GlobalLink Go — Voice & Tone Guide

**Version 1.0** | Product: GlobalLink Go
**Extends**: Compass Master Guide v2.1
**Created**: 2026-05-22 | **Next review**: 2026-08-22
**Product owner**: Product lead, GlobalLink Go | **Content owner**: Design lead, GlobalLink Go

---

## 1. Product context

GlobalLink Go is a mobile-first app for conference attendees. It helps them browse the event agenda, save sessions, get reminders before sessions start, and find rooms and directions — all from their phone, in the moment, during the event.

| | |
|---|---|
| **Stakes** | Low-to-medium — missing a session is frustrating but not catastrophic; incorrect schedule information or a sudden cancellation creates real stress in the moment |
| **Industry** | General / Events (consumer-facing B2C product, outside the standard GlobalLink B2B suite) |
| **Registers** | Attendee – Mobile (C, primary), Attendee – Pre-event planning (B) |

**North star**: Attendees should feel oriented and in control — confident they know where to be and when, and calm rather than anxious when something changes unexpectedly.

**Highest-stakes moments**:
1. A saved session is cancelled or rescheduled — the attendee finds out late or from the app, and needs to replan quickly
2. The attendee can't find the room and the session is about to start — location and wayfinding under time pressure
3. The app displays wrong or outdated schedule information — the attendee loses trust and questions everything else the app tells them

---

## 2. Registers

### Register B — Attendee (Pre-event / Web or home screen planning)

| | |
|---|---|
| **Profile** | A conference attendee — professional, mix of experience levels, non-technical. Using the app before the event to plan their day: browsing the agenda, saving sessions, reviewing their saved list. They have time and attention to read more than a push notification. |
| **Context** | Sitting down, relaxed, planning ahead. Phone or possibly tablet. Low urgency. May be doing this the night before or in a quiet moment between sessions. |
| **North star** | "I know what I want to see and I have a plan for the day." |

**Tone markers**: Warm and welcoming. Clear and helpful. Not patronising. Confident without being stiff. Organised.

**Tone position**:

| Dimension | Position | Notes |
|---|---|---|
| Funny ↔ Serious | 5/10 | Approachable, not comedy — this is a planning tool, not entertainment. Slightly lighter than the GlobalLink B2B default because it's B2C and consumer-facing. |
| Formal ↔ Casual | 4/10 | Noticeably casual for GlobalLink — this is a consumer product for a general audience, not a regulatory workflow. Stays professional but feels human. |
| Concise ↔ Detailed | 4/10 | A little more context is acceptable when the attendee is in planning mode and has time to read. Still efficient — no padding. |
| Respectful ↔ Irreverent | 2/10 | Warm and respectful throughout. No sarcasm, no irony. People use this to navigate their day. |

**Examples**:

| Context | Copy | Why it works |
|---|---|---|
| Error | "Your saved sessions didn't load. Check your connection and try again." | Names what failed, gives one clear action. No blame. No vague apology. |
| Success | "Session saved. It's been added to your schedule." | Confirms the specific action with brief reinforcement. Warm without being gushing. |
| Empty state | "Your schedule is empty. Browse the agenda and save the sessions you want to attend." | States what this area is for, why it's empty, and what to do — all in two sentences. No dead end. |
| CTA | "Browse agenda" | Verb-first. Specific. No "please". Matches the outcome exactly. |
| Notification | "Reminder: 'The Future of Live Events' starts in 15 minutes — Room 4B." | Leads with the time-critical fact. Session name and location in one line. Action implicit (go now). |
| Destructive action | "Remove this session from your schedule? It won't affect the event — you can save it again any time." | Names the action, surfaces the consequences (or lack thereof), reassures without softening the action label. |
| Onboarding | "Browse the agenda and save the sessions you want to attend. We'll remind you before each one starts." | One concept at a time. Frames around what the user achieves. Warmest tone without hollow enthusiasm. |

---

### Register C — Attendee (Mobile / In-event / Real-time)

| | |
|---|---|
| **Profile** | The same attendee as Register B — but now they're at the conference, on foot, one hand on their phone, possibly in a noisy corridor between sessions. They need an answer in two seconds or they're walking past the door. Non-technical. Under mild-to-moderate time pressure. |
| **Context** | Walking, standing in a hallway, phone in one hand. Small screen. Glancing, not reading. Notifications arriving mid-session or between sessions. High cognitive load — physical environment competing with screen. |
| **North star** | "I know where to go and when, and I found out fast enough to get there." |

**Tone markers**: Ultra-concise. Direct. Location and time first. Calm under pressure. Action-oriented — never a question when a statement will do.

**Tone position**:

| Dimension | Position | Notes |
|---|---|---|
| Funny ↔ Serious | 6/10 | Leans serious in real-time moments — when someone is navigating a building, levity gets in the way. Not cold, just focused. |
| Formal ↔ Casual | 4/10 | Same warmth as Register B but even more stripped back — every word must earn its place. |
| Concise ↔ Detailed | 2/10 | Maximum concision. Single-digit words where possible. Time and location beat everything. Details go in a secondary screen, not the notification or alert. |
| Respectful ↔ Irreverent | 2/10 | Warm and calm — especially in stress moments (cancellation, wrong room). Attendees under pressure need a steady voice, not a jokey one. |

**Examples**:

| Context | Copy | Why it works |
|---|---|---|
| Error | "Schedule couldn't update. Showing last saved version." | States what happened and what the user is seeing. One sentence. No "please try again" — they're in the middle of an event and may not have control over their connection. |
| Success | "Reminder set." | Confirms the action. Nothing extra. Register C users are glancing, not reading. |
| Empty state | "No sessions saved yet. Add sessions from the agenda." | Short. Tells them what to do. Never feels like an error. |
| CTA | "Get directions" | Verb-first. The most important action in real-time context. Self-explanatory with no surrounding context needed. |
| Notification — schedule change | "Change: 'AI in Healthcare' moved to Room 7A. Was Room 3B." | Leads with "Change" so the eye catches it instantly. New info before old info. No preamble. |
| Notification — cancellation | "Cancelled: 'Opening Keynote Recap' at 2:00 PM. Check the agenda for alternatives." | Leads with the key fact. Includes a next step so the attendee isn't stranded. |
| Notification — reminder | "'Design Thinking Workshop' in 10 min — Level 2, Room 12." | Time and location are the whole message. Session name for confirmation. |
| Destructive action | "Remove 'UX Research Methods' from your schedule?" | Short question is appropriate here — destructive actions warrant a pause even in Register C. Button labels: "Remove" / "Keep it". |

---

## 3. Terminology

| Concept | Use | Never use | Why |
|---|---|---|---|
| A scheduled talk, panel, or workshop | Session | Talk, event, ticket, class | "Session" is the established product term. "Event" refers to the whole conference, not an individual item. "Ticket" implies a transaction. |
| The attendee's list of saved sessions | Schedule | Agenda, calendar, itinerary, favorites | "Schedule" is what the user builds. "Agenda" is the master event programme (see below). |
| The full programme of all sessions | Agenda | Schedule, programme, timetable | "Agenda" = the event-wide list. "Schedule" = the user's personal selections. This distinction is load-bearing for navigation. |
| Where a session is held | Room | Hall, space, location, venue | "Room" is direct and wayfinding-friendly. "Location" is vague. "Venue" refers to the whole building. |
| Saving a session to your schedule | Save | Bookmark, add to favorites, star, register | "Save" implies intent to attend. "Bookmark" suggests passive interest. "Register" implies a separate sign-up action that may not exist. |
| When a session is cancelled | Cancelled | Removed, deleted, unavailable | "Cancelled" is unambiguous. "Removed" sounds like a user action. "Unavailable" is vague. |
| When a session moves to a new time or room | Moved / rescheduled | Updated, changed | "Moved" is spatial and temporal — clear for wayfinding. "Updated" is too generic; it could mean anything. |
| The reminder sent before a session | Reminder | Alert, ping, notification | "Reminder" is warm and purposeful. "Alert" implies urgency or error. "Ping" is informal slang. |
| The conference as a whole | Event | Conference, show, summit | "Event" is neutral and covers all conference types. Specific event names use their proper names (e.g., "TechSummit 2026"). |

---

## 4. Key patterns

### Schedule changes (cancellations and moves)

This is the highest-stress moment in the product. An attendee who saved a session and planned around it now needs to replan — quickly, on their phone, possibly mid-event. The pattern must deliver the critical fact first, make the impact immediately clear, and give them a useful next step.

**Structure**: What changed → What's new (specific) → What to do next

**Cancellation example**:
> "Cancelled: 'AI in Healthcare' at 11:00 AM. Check the agenda for sessions at the same time."

**Reschedule example**:
> "Moved: 'Opening Keynote' is now at 2:00 PM in Room 7A. It was at 11:00 AM in the Main Hall."

**Rules for this pattern**:
- Lead with the change type in a single word: "Cancelled:" or "Moved:"
- New information before old information
- Include room when location changed; include time when time changed; include both when both changed
- Never bury the changed detail after a preamble
- Always offer a next step — "Check the agenda" is the minimum; a deep link to filtered alternatives is better

---

### Wayfinding copy

Directions in a conference venue are high-stakes for the Register C user. The session is starting; they need to move. Copy must be location-specific, not generic.

**Structure**: Room identifier → Floor or building if needed → Any landmark if helpful

**Example**:
> "Room 12B — Level 3, North Wing"

**Rules for this pattern**:
- Room number or name first
- Floor and wing only when the venue has multiple levels or wings
- Never "near the registration desk" as the primary locator — secondary guidance only
- If the app has a map, the CTA is "Get directions" (not "View map", "See location", or "Navigate")

---

### Trust recovery after wrong information

If the app shows a schedule error (wrong time, wrong room, session that was cancelled but still shown), the attendee's trust is damaged. The correction message must be calm, specific, and not make them feel the app is unreliable more broadly.

**Structure**: What was wrong → What's correct now → How to check

**Example**:
> "Schedule updated. 'Design Sprint Workshop' is in Room 9, not Room 4B. Tap to view your updated schedule."

**Rules for this pattern**:
- Don't lead with an apology — lead with the correction
- Be specific about what changed; vague "schedule updated" messages erode trust
- Offer a tap-through so they can verify the rest of their schedule
- Never say "we apologise for the confusion" — it's hollow and unhelpful

---

## 5. Cross-references

- **Voice attributes, tone spectrum, core principles**: Compass Master Guide §2 (Voice & tone) and §4 (Style & usage)
- **Accessibility & inclusion** (gender-neutral language, alt text, anti-racist language): Compass Master Guide §3
- **Style & usage** (capitalisation, punctuation, product naming, emoji, "please"): Compass Master Guide §4
- **Scenario patterns** (errors, success, onboarding, destructive actions): Compass Master Guide §6 (Talking to users)
- **UI element patterns** (CTAs, confirmations, fields, tooltips, consent): Compass Master Guide §7 (Product & UI)
- **AI features** (if this product uses AI-generated content, e.g., personalised recommendations): Compass Master Guide §9
- **Email copy** (for pre-event and post-event transactional emails): Compass Master Guide §10
- **Translatability**: Compass Master Guide §8 — particularly relevant for GlobalLink Go if used at multilingual international events

---

## 6. Review & maintenance

**Review cadence**: Quarterly
**Next review**: 2026-08-22
**Last updated**: 2026-05-22

Update this guide when:
- A new user type is added (e.g., event organisers managing the agenda from within the app)
- A new feature changes the nature of key moments (e.g., in-app navigation, AI-powered recommendations, social features)
- GlobalLink Go expands into new event types with different stakes profiles (e.g., medical conferences, legal summits)
- The Compass master guide updates a rule this guide inherits
- The quarterly review flags inconsistencies with shipped copy, or user research surfaces friction with specific messages

---

*Built using the [Compass Product Voice Workbook](../COMPASS_PRODUCT_VOICE_WORKBOOK.md). Extends [Compass Voice & Tone v2.1](../COMPASS_VOICE_AND_TONE.md).*
