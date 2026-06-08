# Compass — GlobalLink Voice & Tone

**Version 2.1** | For: All TransPerfect TechOps & GlobalLink Products
**Owned by**: TechOps Design Team | **Last Updated**: May 22, 2026

> This is the single source of truth for GlobalLink voice and tone. It covers who we are, how we adapt to context, how to write for specific scenarios, how to write for specific UI elements, and how to ensure everything survives translation.

---

## How to use this guide

This guide has two entry points — use whichever fits how you're thinking about the problem.

**"What am I communicating?"** → Start with [Talking to users](#6-talking-to-users). It answers scenario-based questions: how do we deliver bad news, handle urgency, celebrate a success, guide someone through onboarding.

**"What UI element am I writing for?"** → Start with [Product & UI](#7-product--ui). It answers element-based questions: how do we write a CTA, a tooltip, a destructive confirmation, an error message.

Both paths lead to the right guidance.

**By role:**

| Role | Start here |
|---|---|
| Product designer (writing copy) | [Voice & tone](#2-voice--tone) → [Product & UI](#7-product--ui) |
| Product designer (reviewing copy) | [Style & usage](#4-style--usage) → [Copy review checklist](#copy-review-checklist) |
| Product manager | [Voice & tone](#2-voice--tone) → [Talking to users](#6-talking-to-users) |
| Building a product voice guide | [Product Adaptation → Workbook](./COMPASS_PRODUCT_VOICE_WORKBOOK.md) |
| Writing for an AI feature | [AI content](#9-ai-content) → [Voice & tone](#2-voice--tone) |
| Writing or reviewing email copy | [Emails](#10-emails) → [Style & usage](#4-style--usage) |
| Testing copy before shipping | [Content testing](#11-content-testing) |
| New to GlobalLink content | [Foundations](#1-foundations) → [Voice & tone](#2-voice--tone) |

---

## Table of Contents

1. [Foundations](#1-foundations)
2. [Voice & tone](#2-voice--tone)
3. [Accessibility & inclusion](#3-accessibility--inclusion)
4. [Style & usage](#4-style--usage)
5. [Word list](#5-word-list)
6. [Talking to users](#6-talking-to-users)
7. [Product & UI](#7-product--ui)
8. [Translatability](#8-translatability)
9. [AI content](#9-ai-content)
10. [Emails](#10-emails)
11. [Content testing](#11-content-testing)

**Tools**
- [Product voice guide → Workbook](./COMPASS_PRODUCT_VOICE_WORKBOOK.md)
- [Copy review checklist](#copy-review-checklist)
- [Translatability checklist](#translatability-checklist)
- [Output format template](#output-format-template)
- [Governance](#governance)

---

# 1. Foundations

> **Why this section:** Before tone calibration and copy patterns, there are a few principles that shape everything. This section is about how we think, not just how we write. Read it once; return if something feels off about a draft.

---

## The north star

> **Our copy helps users feel more in control of their work, not less.**

Every product inherits this north star. Each product then specifies what "in control" means for their users:

- **Portal**: "I understand the data flow and how to integrate it"
- **GlobalLink Events**: "I own this event" (managers) / "I know what to do next" (attendees)
- **Compose**: "I can track and manage my content with confidence"
- **TV**: "I know what's happening right now"
- **AI Interpreter**: "I trust this translation and understand how it was created"
- **Share**: "I'm confident my content reached the right people"
- **GlobalLink Bookings**: "I can create or manage my booking efficiently"

---

## Emotional design

Designs that account for how people feel build relationships that last. When we write with emotions in mind, users are more likely to feel they're working with a product that understands them — not just software processing their request.

We empathise, we reassure, and we sometimes delight. We do not overpromise, manipulate, or manufacture warmth.

**Put user outcomes above product goals.** When we create content, we emphasise what users achieve, not what the product does. We want users to see the value of what we offer, not feel pushed through a funnel.

**Respect the emotional state.** Copy doesn't exist in a vacuum — it's read by a person in a specific moment. Someone processing a file the day before a deadline is not in the same place as someone exploring an empty dashboard for the first time. Tone should account for that.

**Don't shame or manipulate.** Never make users feel bad for saying no. Don't use confirm-shaming copy (buttons like "No, I don't want to save time"). Don't use urgency language that's false (fake countdown timers, inflated scarcity). That's not who we are.

**Acknowledge when something is hard.** We don't tell users how they're going to feel. We don't promise that something will be "easy" or "seamless" unless we're certain it is. When something genuinely is difficult — a regulatory submission, a complex integration, a painful cancellation — we acknowledge it and provide the right help.

**Delight when it's right.** Delight isn't just for celebration moments. A light touch — a specific word choice, a moment of warmth — can be exactly what a user needs in the middle of a complicated process. Know your audience and context. Delight is never appropriate in errors, data loss, or high-stakes failures.

> See [Talking to users — Success & celebrations](#success--celebrations) for how to express delight appropriately. See [Time pressure & urgency](#time-pressure--urgency) for how to handle high-stakes emotional moments.

---

## Writing for scanning, not reading

Users don't read interfaces — they scan. Every piece of copy competes with the user's cognitive load, context, and urgency. Write for the scan.

**Front-load the signal.** The most important word belongs at the start. "Sync failed. API key expired." — not "Due to a configuration issue, your sync has failed."

**One message, one meaning.** Each notification, error, or label carries one piece of information. If copy is trying to say two things, it should be two pieces of copy.

**Earn every word.** If a word doesn't change what the user does or understands, remove it. "Your data synchronization has been initiated and is currently in progress" → "Syncing…"

**Use progressive disclosure.** Surface the minimum needed to act. Detailed context lives in help text, tooltips, or documentation — not in primary UI copy.

---

## Writing for global reach

GlobalLink products serve users in dozens of countries across industries ranging from life sciences to retail, events to data integration. GlobalLink is primarily a B2B suite, with products increasingly serving B2C users and internal teams. Our users include project managers, IT administrators, event attendees, content creators, broadcast operators, and — in some products — the linguists who work in translation professionally.

All products are localised into multiple languages. This means our copy must work in English for non-native speakers first, and must then survive translation technically.

Full translatability rules are in [Section 8](#8-translatability). The basics to keep in mind while writing:

- **No idioms.** They don't translate reliably. "You're all set," "heads up," "hit the ground running" — avoid all of them.
- **No string concatenation.** Never build a sentence by joining separate UI strings in code.
- **Complete sentences.** Fragments that rely on English word order break in other languages.
- **Active voice.** It's easier to translate correctly.
- **Explicit pronouns.** "Delete this file" — not "Delete it."

---

# 2. Voice & tone

---

## GlobalLink voice

Voice is GlobalLink's **fixed personality** — it does not change by product, audience, or context. It is what makes GlobalLink recognisable across the entire product suite.

GlobalLink inherits the TransPerfect "friendly-professional" foundation but operates in a higher-stakes enterprise register. Our products manage global content, legal documents, regulated submissions, and mission-critical workflows — and some of them serve consumers at events and on the go. The voice reflects that range: trustworthy and precise, never stuffy; practical and direct, never cold.

### Trustworthy

- **We are:** Transparent, accurate, honest — especially when something goes wrong. We give users the information they need to make confident decisions.
- **We are not:** Vague, padded with disclaimers, or hiding what actually happened.

| ✓ | ✗ |
|---|---|
| "We couldn't save your changes due to a technical problem. Try again in a moment." | "An error has occurred. Please contact your system administrator." |
| "3 registrations couldn't be confirmed. Check that the email addresses are valid and try again." | "There was an issue processing your request. Please try again." |
| "Translation failed for 2 files. The format isn't supported. Upload XLIFF, DOCX, or PDF." | "Something went wrong. Please try again later." |

### Practical

- **We are:** Focused on helping users accomplish their goal. We get to the point. We tell users what to do, not just what happened.
- **We are not:** Robotic, dismissive, or so terse that users lack context to act. Efficiency is not the same as coldness.

| ✓ | ✗ |
|---|---|
| "Capacity limit reached. Remove 2 attendees or upgrade your plan to continue." | "In order to proceed, it is necessary to address the current capacity issue." |
| "3 files need review. Open the project to see what's flagged." | "We wish to inform you that 3 files have been flagged and require your attention." |
| "Select a target language to continue." | "In order to proceed, it is first necessary to select your desired target language." |

### Innovative

- **We are:** Forward-looking and clear about the value of what we offer. We explain capability in plain language.
- **We are not:** Hype-driven, buzzword-heavy, or claiming more than the product actually does.

| ✓ | ✗ |
|---|---|
| "GlobalLink automatically detects language pairs so you can start reviewing right away." | "Leverage our cutting-edge AI-powered paradigm-shifting translation ecosystem." |
| "Your broadcast is ready. Run a test before going live." | "Experience the revolutionary power of our next-generation streaming engine." |
| "Machine translation is ready. Review and post-edit before delivery." | "Experience the revolutionary power of our next-generation MT engine." |

### Modern

- **We are:** Current, clean, and aware that users' time is valuable. We write for scanning.
- **We are not:** Trendy, slang-heavy, or trying to sound younger than context warrants.

| ✓ | ✗ |
|---|---|
| "Your project is ready. 3 items complete, 1 needs review." | "We are pleased to inform you that your project has been successfully processed." |
| "No activity in the last 30 days." | "There has been a notable absence of user activity within your account over the past 30-day period." |
| "Booking confirmed for May 22, 2:00 PM EDT." | "We are pleased to confirm that your booking reservation has been successfully submitted for the specified date and time." |

---

## Tone

Tone is how the voice adjusts to context. The voice stays the same; the tone shifts.

### Tone registers

Every product has **at least 2 registers**, typically 3–4. A register is a user type combined with their context.

**Register A — Operator / Creator / Administrator**

Someone running the platform. Domain expert. Accountable for outcomes.

- Get to the point — terse is not rude for this user
- No emoji, no exclamation points, no filler
- Name the problem exactly — error codes welcome
- Assume competence and urgency
- Empty states push toward action

**Register B — User / Participant / Viewer**

Someone using the product but not administering it. Less context, less ability to fix problems.

- Slightly warmer than Register A but still professional
- One sentence of context is acceptable
- Error messages include an escalation path
- Plain vocabulary — match the language they use, not the platform's internal language
- One useful fact per message

**Register C — Mobile / Real-Time / High-Urgency**

Someone using the product in the moment: at an event, during a broadcast, one hand, small screen, high cognitive load.

- Ultra-concise — single-digit words per message when possible
- One actionable fact per notification
- Buttons are explicit — never rely on context
- Action verbs, not questions
- Time and location are more important than anything else

### Tone spectrum

Within any register, fine-tune tone across four dimensions. These define GlobalLink's **valid range** — no product sits outside these bounds.

| Dimension | Floor | Default | Ceiling |
|---|---|---|---|
| **Funny ↔ Serious** | 4/10 | 6/10 | 8/10 |
| **Formal ↔ Casual** | 3/10 | 5/10 | 8/10 |
| **Concise ↔ Detailed** | 2/10 | 4/10 | 7/10 |
| **Respectful ↔ Irreverent** | 5/10 | 3/10 | 1/10 |

**How to use the spectrum:** When you know the product's industry and user type, use them to position within the valid range. Life Sciences sits near the ceiling on formality and seriousness. A retail-facing B2C tool moves toward the floor. The default is the safe starting point when context is unclear.

### Tone by industry

| Industry | Tone position | Rationale |
|---|---|---|
| Life Sciences / Pharma | Formal (near ceiling) | Regulatory submissions — errors have safety and compliance consequences. Precision signals reliability. |
| Legal | Formal (near ceiling) | Legal translation carries liability. Any informality reads as unprofessional. |
| Banking / Financial Services | Formal to balanced | Regulated domain. Internal tools can sit at balanced; compliance-facing content leans formal. |
| Healthcare | Formal to balanced | Clinical content mirrors Life Sciences; internal workflow tools can be more balanced. |
| Retail / E-commerce | Balanced to slightly casual | Lower regulatory pressure. Content teams are comfortable with a lighter register. Never fully casual. |
| Technology / Software | Balanced | Developer-adjacent users expect directness and clarity over warmth. |
| Media / Entertainment | Balanced to slightly casual | Creative teams. A warmer tone is appropriate; still professional. |

### Tone by user profile

| User | Tone tendency |
|---|---|
| Project managers / program leads | Balanced; goal-oriented, action-forward |
| Linguists / translators | Balanced; practical and tool-focused; never condescending |
| IT / system administrators | Lean concise and direct; precision over warmth |
| Enterprise buyers / stakeholders | Lean formal; copy conveys quality, reliability, control |
| Content / marketing teams | Balanced to slightly casual; completion moments can be slightly celebratory |
| Event attendees | Balanced to warm; context-dependent (pre-event vs. at-event) |

---

## Product voice guides

Each GlobalLink product has its own voice guide, developed using the [Product Voice Workbook](./COMPASS_PRODUCT_VOICE_WORKBOOK.md). Reference tables below are orientation guides — not replacements for a full product voice guide.

### Portal — Data Integration Platform

**Stakes:** High | **Tone:** Formal-balanced (7/10 formality)

| Register | Context | Example |
|---|---|---|
| A — Administrator | Sync error | "Sync failed. API key expired. [Renew key]" |
| A — Administrator | Empty state | "No integrations yet. Connect your first API to start." |
| A — Administrator | Data conflict | "5 records have conflicting data in both systems. [Review conflicts]" |
| B — Reviewer | Sync pending | "Data is syncing. You'll see updates within 5 minutes." |
| B — Reviewer | Sync error | "Can't sync right now. Check back in 10 minutes or contact your admin." |

### Compose — Content Operations Platform

**Stakes:** Medium | **Tone:** Balanced (5/10 formality)

| Register | Context | Example |
|---|---|---|
| A — Editor | Save confirmation | "Saved. Your changes are live." |
| A — Editor | Document locked | "This is checked out by alex@company.com. [Request access]" |
| A — Editor | Publish blocked | "Can't publish. 2 required fields are empty: Headline, Meta description." |
| B — Reviewer | Pending review | "Document waiting for your review. 8 changes since last version. [Review changes]" |
| C — Mobile | New comment | "Jordan commented on para 2. [View]" |

### AI Interpreter — Translation Management Platform

**Stakes:** High | **Tone:** Formal (7–8/10 formality)

| Register | Context | Example |
|---|---|---|
| A — Translator/QA | Confidence low | "Segment 12: Confidence 76%. Multiple interpretations possible. [Review options]" |
| A — Translator/QA | Context missing | "Segment 18: No context available. Provide context for more accurate translation." |
| B — Project Manager | In progress | "Translation in progress. 450 of 1,200 words complete. Est. 45 minutes." |
| C — Mobile Reviewer | Alert | "Segment 8: Confidence 72%. [Review]" |

### GlobalLink Events — Event Management & Attendance Platform

**Stakes:** Medium | **Tone:** Balanced (5/10 formality)

| Register | Context | Example |
|---|---|---|
| A — Event Manager | Event published | "Event published. Share the registration link to accept attendees." |
| A — Event Manager | Capacity alert | "Registration at 95% capacity. 5 spots remaining. Fills at current rate: May 20." |
| B — Attendee (web) | Registration complete | "You're registered for [Event name]. Confirmation sent to your email." |
| C — Attendee (mobile) | Session reminder | "Keynote starts in 10 min. Room A." |

### TV — Live Broadcast Platform

**Stakes:** Medium-high | **Tone:** Ultra-concise-balanced (4–5/10 formality)

| Register | Context | Example |
|---|---|---|
| A — Broadcast Operator | Live | "Live. 2,450 viewers. 3 min 12 sec in." |
| A — Broadcast Operator | Issue | "Encoder disconnected. Reconnecting... Est. 5 seconds." |
| B — Viewer | Issue | "Can't play stream. Check your connection or try another browser. [Help]" |
| C — Viewer (mobile) | Starting soon | "Broadcast in 30 min." |

### Share — Content Distribution Platform

**Stakes:** Low-medium | **Tone:** Balanced (5–6/10 formality)

| Register | Context | Example |
|---|---|---|
| A — Uploader | Upload complete | "File uploaded. 3 people can access it now. [Share more]" |
| B — Viewer | File shared | "Sam shared [File name] with you. [Open file]" |
| C — Viewer (mobile) | Download done | "File downloaded." |

### GlobalLink Bookings — Scheduling & Booking Platform

**Stakes:** Medium | **Tone:** Balanced (5/10 formality)

| Register | Context | Example |
|---|---|---|
| A — Admin | No availability | "No open slots this week. Next available: May 25, 2:00 PM." |
| B — Booker | Confirmed | "Booked for May 22, 2:00 PM EDT. Confirmation sent to your email." |
| C — Booker (mobile) | Reminder | "Booking in 1 hour. Location: Room B." |

---

## Relationship to the TransPerfect brand

GlobalLink's voice is derived from, but more restrained than, the TransPerfect master brand. The parent brand's "friendly-professional" register is right for marketing. GlobalLink products are operational, not promotional. The default register is more formal, but never stiff.

**Always inherit from the TransPerfect brand:**
- Avoid superlatives ("the most accurate," "the best") unless supported by a verifiable claim
- Avoid trite phrases: "we are pleased to announce," "we are excited to share"
- Write plainly — no lofty vocabulary or unnecessary complexity
- Never lead with "We at GlobalLink…" or "We at TransPerfect…"
- Avoid clichés: "in this digital age," "in an increasingly global world"

**Where GlobalLink is more restrained than TransPerfect marketing:**
- Exclamation marks only in genuine celebration moments — never in errors, warnings, or instructional copy
- No emoji in product UI copy
- Default register is more formal than the parent brand's social and marketing voice

---

# 3. Accessibility & inclusion

---

## Accessible content

Content accessibility is not a separate checklist — it's part of writing clearly. Accessible copy benefits every user, not just users with disabilities.

**Reading level and plain language.** Write at the simplest level that preserves accuracy. Use the plain English principle: if there's a shorter, more common word, use it.

| Avoid | Prefer |
|---|---|
| "Subsequent" | "Next" or "After" |
| "Commence" | "Start" or "Begin" |
| "Terminate" | "End" or "Stop" |
| "Utilise" | "Use" |
| "Endeavour" | "Try" |
| "Facilitate" | "Help" or "Make possible" |

**Reading level target:** Aim for Grade 8–10 readability (Flesch-Kincaid) for general product UI. Technical documentation for power users (Portal, Life Sciences submissions) may run higher — but even technical copy should use plain language where precision doesn't require complexity.

**Avoid directional instructions.** Don't rely on visual position to explain UI: "Click the button on the left" fails for screen readers and reflows. Instead: "Select [Button name]."

**Meaningful link text.** "Click here" and "learn more" are meaningless out of context. Use descriptive link labels: "Read the API documentation" rather than "Click here to read more."

**Error messages and alerts.** Error messages must be perceivable (not just visual). They should describe the problem and the fix — screen readers need complete, self-contained error messages.

---

## Alt text

Images in documentation, help content, marketing, and product interfaces need descriptive alt text for screen readers.

**Rules:**
- Describe what the image *communicates*, not just what it depicts
- If the image is purely decorative, use an empty alt attribute (`alt=""`) — don't describe it
- Don't start with "Image of" or "Photo of" — screen readers announce the image type automatically
- Keep alt text under 125 characters where possible; for complex images (charts, diagrams), use a longer description in adjacent body text

| ✓ | ✗ |
|---|---|
| "Translation memory leverage chart showing 68% TM match rate" | "Chart" |
| "GlobalLink Events registration form with required fields highlighted" | "Image of a form" |
| "" (empty — decorative divider) | "Decorative line divider" |

**Charts and data visualisations.** Provide a text summary of the key insight alongside the visual. Example: "The chart above shows TM leverage increasing from 45% to 68% between Q1 and Q3 2026."

---

## Gender-neutral language

GlobalLink products serve teams across cultures, countries, and identities. All copy and documentation must default to gender-neutral language.

**Pronouns.** Use **"they / their / them"** as the singular third-person pronoun. Do not use "he / she" or "he or she" when referring to a user in general terms. When a named person appears in an example (e.g., an email address like alex@company.com), use their name or "they" — never a gendered pronoun.

| ✗ | ✓ |
|---|---|
| "The administrator can renew his API key." | "The administrator can renew their API key." |
| "Contact her to request access." | "Contact them to request access." |
| "Ask the reviewer to approve his draft." | "Ask the reviewer to approve their draft." |

**Role titles.** Use gender-neutral role titles: "the organizer," "the reviewer," "the administrator," "the translator," "the editor."

**Personas in examples.** When using placeholder names in examples, vary across cultures and naming conventions — not only English or Western names. Avoid assigning stereotypically gendered roles to personas.

---

## Inclusive copy

**Don't assume familiarity.** Not every user comes with the same background, language fluency, or prior experience with translation tools. Write for the user you have, not the user you imagine.

**Don't shame.** Never make users feel bad about their choice. Avoid language that implies a wrong answer (except where there genuinely is one — like a missing required field). Don't write "Uh oh, you forgot…" Write "Required field: Deadline."

**Avoid ableist language.** Don't use "blind spot," "crazy," "sanity check," or similar terms. Plain language alternatives exist for all of them.

**Acknowledge when something is genuinely difficult.** Regulatory submissions, complex integrations, and multi-step approvals are demanding tasks. Don't promise they're "simple" or "easy." You can say they're "straightforward" when they are. "Easy" is always a risk.

---

## Anti-racist and bias-free language

Avoid terms that carry racial, ethnic, or colonial associations — many are so embedded in technical language that they're easy to miss.

| Avoid | Use instead |
|---|---|
| "Blacklist" / "Whitelist" | "Blocklist" / "Allowlist" |
| "Master" / "Slave" (technical contexts) | "Primary" / "Secondary" or "Controller" / "Worker" |
| "Native" (as in "native integration") | "Built-in," "direct integration" |
| "Grandfathered in" | "Retained," "kept under the previous plan" |
| "Cakewalk" | "Simple," "straightforward" |
| "Blind spot" | "Gap," "oversight" |
| "Sanity check" | "Review," "verify," "confirm" |
| "Crazy" | "Unexpected," "surprising," or just remove it |

This list is not exhaustive. When in doubt, ask: does this term carry associations that a reasonable person from a marginalised group would find exclusionary or harmful?

---

## Global audiences

GlobalLink products operate worldwide. Cultural assumptions embedded in copy create friction for international users.

**Dates and times.** Always use variables — never hardcode date formats. What's 01/02/03 in the US is different in the UK and elsewhere. Use ISO format when no variable is available: "2026-01-02."

**Cultural references.** Avoid references that are specific to one country, culture, or region. US sports metaphors ("hit it out of the park"), UK colloquialisms, and regional idioms all fail globally.

**Names and titles.** Don't assume Western name order (first name / last name). Don't assume all users have a first name and a last name. Use flexible field labels: "Full name" over "First name / Last name" where appropriate.

**Currency and units.** Use variables. Never hardcode "$" or "USD" in UI strings.

> See also [Translatability](#8-translatability) for structural and vocabulary rules that ensure copy translates correctly.

---

# 4. Style & usage

---

## Core principles

Seven principles that apply to every product, every register, every piece of copy. They are non-negotiable.

**1. Clear.** Say exactly what happened or what to do. No jargon, no ambiguity, no passive constructions.

**2. Concise.** Use the fewest words that carry full meaning. Cut anything that doesn't help the user act.

**3. Consistent.** Same terms for the same things everywhere. If it's a "project" on one screen, it's a "project" everywhere.

**4. Actionable.** Every message confirms, instructs, or guides. If copy doesn't help the user know what to do next, it's not done.

> **When Concise and Actionable are in tension:** Clarity beats concision — a shorter version that leaves users uncertain is not better. Actionability beats brevity — if providing the most helpful next step requires more words, use them.

**5. Authority through specificity.** Replace marketing adjectives with verifiable facts. "Seamless integration" → "Connect your CMS in 3 steps. Sync updates every 5 minutes."

**6. Respect the reader's expertise.** Assume competence. Don't hand-hold. Efficiency is our gesture of respect.

**7. Global-first & translatable.** No idioms, culture-specific references, or US-centric language. Copy must survive translation. See [Section 8](#8-translatability) for full rules.

---

## Capitalisation

Use **sentence case** for all UI copy. Capitalise only the first word of a sentence, title, label, or button, plus proper nouns and product names.

| ✗ | ✓ |
|---|---|
| "Upload Your Files" | "Upload your files" |
| "Create New Project" | "Create new project" |
| "Add Target Language" | "Add target language" |
| "Translation Memory" (as a UI label) | "Translation memory" |
| "Review And Approve" | "Review and approve" |

> Acronyms and initialisms retain their standard form: API, CMS, AI, ID.
> Product names follow the conventions in [Product names](#product-names) below.

---

## Punctuation

| Context | Rule | Example |
|---|---|---|
| Page headings and titles | No period | "No projects yet" |
| Section headings | No period | "Your recent files" |
| Body text | End with a period | "This action cannot be undone." |
| Multi-sentence messages | Period on each sentence | "Upload failed. Check the file format and try again." |
| CTA / button labels | No period | "Upload files" |
| Field labels | No period | "Target language" |
| Tooltip — complete sentence | Period | "Matches content against your existing translation memory." |
| Tooltip — fragment / label | No period | "TM leverage %" |
| Error — one sentence | Period | "File upload failed." |
| Error — two sentences | Period on each | "Upload failed. Check the file format and try again." |

---

## Numbers and dates

**Numbers.** Spell out one through nine in body text. Use numerals from 10 upward, and always in technical contexts (error codes, versions, percentages, file sizes, counts).

| ✗ | ✓ |
|---|---|
| "3 documents need review" (in body text, informal) | "Three documents need review" |
| "You have 9 unread notifications" (technical count) | "You have 9 unread notifications" |
| "Upload complete. 15 files synced." | "Upload complete. 15 files synced." |

**Dates.** Always use variables in product UI to account for regional formats. In documentation, use unambiguous formats: "May 22, 2026" or "2026-05-22." Avoid "05/22/26."

**Time.** Include the timezone for user-facing time displays. "2:00 PM" alone is ambiguous. "2:00 PM EDT" or "14:00 UTC" is not.

---

## "Please" — context-based guidance

"Please" is not banned — but it must be purposeful. In button labels and error messages it creates distance without warmth. In instructional body text for warmer, lower-stakes flows, it can be appropriate.

**The test:** Write without "please" first. Add it only if removing it makes the message feel cold or abrupt in that specific context.

| Context | Use "please"? | Why |
|---|---|---|
| CTA / button label | No | Buttons are actions, not requests. |
| Error message | No | Errors need clear instruction, not politeness. |
| Formal or high-stakes instructional copy | No | Formality already signals respect. |
| Warmer instructional body text | Occasionally | Can add genuine warmth in lower-stakes B2C contexts. |

---

## Product names

GlobalLink product names are written with the **GlobalLink prefix**, spelled out in full. Never use "GL" as a prefix in client-facing content.

| ✗ | ✓ |
|---|---|
| "GL Events" | "GlobalLink Events" |
| "GL Bookings" | "GlobalLink Bookings" |
| "Events" (in cross-product references) | "GlobalLink Events" |
| "GLE," "GLB" (abbreviated) | Not acceptable |

**In product UI:** Within the product itself, where the GlobalLink brand is established, the short form ("Events," "Bookings," "Compose") is acceptable in navigation and labels.

**In documentation and cross-product references:** Always use the full name: "GlobalLink Events," "GlobalLink Bookings," "GlobalLink Compose," "Portal."

**Never** abbreviate "GlobalLink" to "GL" in external or client-facing content.

---

## Emoji

GlobalLink's default position is no emoji in product UI copy. This applies across all registered products.

**In product UI:** No emoji — not in errors, not in success states, not in notifications, not in labels. A well-calibrated tone never requires emoji to land. If copy needs an emoji to feel warm, the copy is doing the wrong job.

**In emails:** Follow the product's register. Formal products (Life Sciences, Legal, Banking) do not use emoji in any email. Balanced or consumer-facing products may use emoji sparingly in subject lines — one maximum, only when it adds meaning rather than decoration. When in doubt, don't.

**In marketing and social content:** Use the TransPerfect brand standards. GlobalLink's more restrained register still applies — avoid emoji clusters and maintain professionalism throughout.

**The test:** Cover the emoji. If the copy reads the same or better without it, remove it.

| ✓ | ✗ |
|---|---|
| "Event confirmed. See you on May 22." | "Event confirmed 🎉 See you on May 22! 😊" |
| Subject: "Your export is ready" | Subject: "Your export is ready 🚀" |
| "Submission complete. All documents submitted for review." | "Submission complete ✅ All documents submitted for review." |

---

## What we never sound like

- ❌ Hollow enthusiasm: "Amazing! You did it!"
- ❌ Vague apology: "Oops! Something went wrong"
- ❌ Corporate filler: "Leverage best-in-class functionality"
- ❌ US idioms: "Let's hit the ground running"
- ❌ Emoji as tone: "Your file is live 🎉"
- ❌ Passive errors: "An error has occurred"
- ❌ Unverifiable claims: "The most powerful platform"
- ❌ Gendered pronouns for unnamed users: "Contact her" / "Ask him to review"
- ❌ Title case in UI labels: "Upload Your Files" / "Create New Project"
- ❌ Cold indifference in critical moments: bare error with no path forward

---

# 5. Word list

> A living reference — update as product terminology evolves. Each product team owns their terminology table; this section captures cross-product standards.

---

## Cross-product approved terms

| Concept | Use | Never use | Why |
|---|---|---|---|
| The person using the platform | "User" (generic) | "Customer" in product UI | "Customer" belongs to marketing and sales contexts |
| Removing something permanently | "Delete" | "Remove" (when permanent) | "Remove" implies it can be undone. "Delete" signals permanence. |
| Non-permanent removal | "Remove" | "Delete" (when reversible) | Same logic inverted |
| A step requiring user action | "Review," "Complete," "Approve" | "Action required" | Vague; doesn't specify what |
| Something wrong | "Failed," "Error," "Issue" | "Problem," "Trouble," "Hiccup" | Casual diminutives undermine trust |
| Something in progress | "In progress," "Processing," "Syncing" | "Loading" (unless literally loading) | Be specific about what's happening |
| Something finished | "Complete," "Done," "Ready" | "Finished," "Successful" | "Successful" is unnecessary when the context already implies success |

---

## Terms to avoid — across all products

| Avoid | Why | Use instead |
|---|---|---|
| "Seamless" | Meaningless marketing | Describe what's actually easy and how |
| "Powerful" | Unverifiable | Name the specific capability |
| "Effortless" | Promises an experience we may not deliver | "Straightforward" if appropriate |
| "World-class" | Unverifiable | Don't say it |
| "Easy" | Often untrue; sounds condescending | "Straightforward" — or just show it |
| "Just" ("just click here") | Minimises something that may not be minimal | Remove it |
| "Simply" | Same as "just" | Remove it |
| "Please note that" | Filler | Start with the thing they need to note |
| "In order to" | Wordy | "To" |
| "At this time" | Wordy | "Now" or remove |
| "Utilize" | Formal when "use" works | "Use" |

---

## Product-specific terminology

Each product maintains its own terminology table in its voice guide. Core terms by product:

| Product | Key term | Example | Never use |
|---|---|---|---|
| **Portal** | Sync | "Sync your data" | Push, Integrate |
| **Portal** | Integration | "Create an integration" | Connection, Link |
| **GlobalLink Events** | Register | "Register for [Event]" | Sign up, Join |
| **GlobalLink Events** | Session | "Add a session to the agenda" | Talk, Presentation |
| **GlobalLink Events** | Attendee | "Attendees can save sessions" | Participant, Guest |
| **Compose** | Edit | "Edit this document" | Write, Modify |
| **Compose** | Document | "Create a new document" | File, Content |
| **AI Interpreter** | Segment | "Review this segment" | Sentence, Unit, String |
| **GlobalLink Bookings** | Book | "Book a slot" | Reserve, Sign up |

> For full product terminology tables, see each product's voice guide. Use the [Product Voice Workbook](./COMPASS_PRODUCT_VOICE_WORKBOOK.md) to build and maintain yours.

---

# 6. Talking to users

> **How to use this section:** Find the scenario you're in. Each section describes what the user is experiencing, what they need from us, and how to write the copy. For the specific UI element (tooltip, notification, CTA), also check [Product & UI](#7-product--ui).

---

## Errors & failures

**What the user is experiencing:** Something went wrong. They may be frustrated, confused, or worried. They need to understand what happened and what to do.

**Structure:** What failed → Why (only if it helps the user act) → What to do next

**Rules:**
- Lead with what failed, not with an apology
- Be specific enough that the user knows what to fix
- Never blame the user — prefer "We couldn't…" over "You did…"
- Never use humour in error states
- Always include a next step or escalation path

| ✓ | ✗ |
|---|---|
| "We couldn't process the file. The format isn't supported. Upload an XLIFF, DOCX, or PDF." | "Oops! Something went wrong. Please try again later." |
| "Connection lost. Your changes weren't saved. Reconnect and try again." | "Error: connection failure. Code: NET_ERR_502." |
| "We couldn't send the invitation. Check that the email address is correct and try again." | "Invitation error." |

**Industry calibration:**

| Industry | Error copy | Tone |
|---|---|---|
| Life Sciences | "Upload failed. The file does not meet submission requirements. Verify the file format and size limits before resubmitting." | Formal |
| Legal | "Upload failed. Check that the file format and size comply with project requirements before resubmitting." | Formal |
| Banking | "Upload failed. The file format isn't supported. Upload an XLIFF, DOCX, or PDF file." | Formal to balanced |
| Retail | "We couldn't upload that file. Try an XLIFF, DOCX, or PDF — those work best." | Balanced to slightly casual |

---

## Time pressure & urgency

**What the user is experiencing:** An error or blocker in a high-stakes moment — an event starting tomorrow, a regulatory deadline approaching, a critical file failing to process. The content of the message is the same; the stakes change what they need from us.

**This is a GlobalLink-specific pattern.** Our products manage live events, regulated submissions, and time-sensitive workflows. The same upload error at 2:00 PM on a Tuesday is a different user experience than the same error at 8:00 PM the night before a live broadcast.

**Rules:**
- The message still leads with the fact and the fix — don't lead with empathy
- An escalation path is not optional — it's required when stakes are high
- "We couldn't" is softer than "Failed" — use judgment based on stakes
- One clear next step is always more valuable than extra reassurance
- Never manufacture warmth — "we're so sorry this happened" without something useful after it adds nothing
- Avoid "unfortunately" — it adds length without adding help

| Moment | Too cold | Right calibration |
|---|---|---|
| File error, event tomorrow | "File format not supported." | "We couldn't process this file. Upload an XLIFF, DOCX, or PDF — or [contact support] if you need help now." |
| Sync failure, critical deadline | "Sync failed." | "Sync failed. API key expired. [Renew key] — or [contact your admin] if you need help urgently." |
| Event at capacity, filling fast | "At 95% capacity." | "Registration at 95% capacity. 5 spots remaining. Fills at current rate: May 20. [Manage capacity]" |
| Payment fails near deadline | "Payment failed." | "Payment didn't go through. Update your payment method to continue. [Update now]" |

> **See also:** [Product & UI — Errors](#errors-1) for the structural pattern. This section is about the emotional and contextual calibration.

---

## Success & celebrations

**What the user is experiencing:** They completed something. The emotional response depends on what it was — routine task, long-delayed milestone, or first-time success.

**Rules:**
- Confirm what happened; guide to the next step if there is one
- Match the celebration to the moment — a file uploading does not warrant "Amazing!" but a first project submission might warrant a warmer confirmation
- Formal products (Life Sciences, Legal) simply confirm. Consumer-facing products can be slightly warmer.
- Never use exclamation marks in formal contexts
- No emoji in product UI

| Moment | Formal | Balanced | Warm (B2C/casual) |
|---|---|---|---|
| File uploaded | "Upload complete. Files are queued for translation." | "Files uploaded and ready for translation." | "Files uploaded. Ready to go." |
| Project submitted | "Submission complete. Your team will be notified when review begins." | "Project submitted. Review begins shortly." | "Submitted. Your team is on it." |
| First event published | "Event published. Share the registration link to accept attendees." | "Event published. Share the link to get registrations." | "Event is live. Share your link to get started." |
| Registration confirmed | "Confirmed: May 22, 2:00 PM EDT." | "You're registered for [Event]. Confirmation sent to your email." | "You're in. Check your email for the confirmation." |

---

## Destructive actions

**What the user is experiencing:** They're about to do something irreversible, or are being warned that something they chose will have permanent consequences. They need complete information before acting.

**Structure:** Name the action → State the consequences explicitly → Label the buttons with the action

**Rules:**
- The confirm button label matches the action: "Delete project" not "Confirm" or "OK"
- The cancel button preserves: "Keep project" not "Cancel"
- Surface non-obvious consequences — users assume they know what "delete" means; tell them what they don't know
- No humour, no softening of consequences

| ✓ | ✗ |
|---|---|
| Title: "Delete this project?" Body: "This will permanently remove all files and translation memory. This cannot be undone." Buttons: "Delete project" / "Keep project" | Title: "Are you sure?" Body: "This action cannot be reversed." Buttons: "Yes" / "No" |
| Title: "Remove this user?" Body: "They will lose access to all projects immediately." Buttons: "Remove user" / "Keep access" | Buttons: "Confirm" / "Cancel" |
| "Delete session? Registered attendees will be notified. This cannot be undone." | "Are you sure you want to delete this?" |

---

## Onboarding

**What the user is experiencing:** They're building confidence in a new context. They're probably uncertain whether they're doing the right thing, and they're scanning quickly.

**Structure:** Welcome → What they can do here → The first action to take

**Rules:**
- One concept at a time — progressive disclosure over front-loading
- Frame around what the user achieves, not what the product does
- Use the warmest tone the product allows
- Don't over-promise the experience

| Industry | Onboarding copy | Tone |
|---|---|---|
| Life Sciences | "Welcome to GlobalLink. Set up your first submission to begin managing regulatory translation workflows." | Formal |
| Legal | "Welcome to GlobalLink. Set up your first matter to start managing translation projects." | Formal |
| Retail | "Welcome to GlobalLink. Set up your first campaign to start reaching customers in new markets." | Balanced to slightly casual |

---

## Empty states

**What the user is experiencing:** They've arrived at a screen with no content. This is often a first-impression moment — the first time they see a section of the product. They need to understand what this area is for and how to get started.

**Structure:** What this area is for → Why it's empty → What to do to get started

**Rules:**
- Use the warmest tone the product allows — this is not an error
- Always include a clear action; never leave users at a dead end
- Don't make the empty state feel like something went wrong

| ✓ | ✗ |
|---|---|
| "No files yet. Upload files to start a new project." | "Nothing here." |
| "No team members added. Invite your team to collaborate on projects." | "No data available." |
| "No notifications. We'll let you know when something needs your attention." | "No results found." |
| "The agenda is coming soon. Sessions will appear here once the organizer publishes." | "Empty" |

---

## Security & permissions

**What the user is experiencing:** They've hit an access wall — something they can't see, do, or access. This is frustrating and often confusing. They need to understand why, and what to do.

**Rules:**
- Tell users what they can't do (clearly), not just that they can't do it
- Always give a path forward — who to contact, what permission is needed, or what to do instead
- Never imply the user did something wrong (they may simply lack permissions)
- Don't expose security details in UI copy

| Scenario | ✓ | ✗ |
|---|---|---|
| Insufficient permissions | "You don't have access to this project. Contact your administrator to request access." | "Access denied." |
| Locked by another user | "This document is checked out by alex@company.com. [Request access]" | "Locked." |
| Session expired | "Your session expired after 30 minutes of inactivity. Sign in again to continue." | "Authentication error. Code 401." |
| File access restricted | "You don't have permission to download this file. Contact the file owner." | "Forbidden." |

---

## Regulated vs. consumer tone

**What the user is experiencing:** The same product or message, but in a radically different professional context.

This pattern is GlobalLink-specific. We serve Life Sciences teams managing regulatory submissions in the same product suite as retail content teams creating market campaigns. The same scenario — a file upload error, an onboarding welcome, a success state — is written differently depending on which context we're in.

**The rule:** The facts don't change. The register does.

| Scenario | Regulated context | Consumer context |
|---|---|---|
| File upload error | "Upload failed. The file does not meet submission requirements. Verify the file format and size limits before resubmitting." | "We couldn't upload that file. Try an XLIFF, DOCX, or PDF — those work best." |
| Empty state | "No active submissions. Create a submission to begin the translation and review workflow." | "No campaigns yet. Create your first campaign to start translating content for your markets." |
| Success | "Submission complete. All required documents have been submitted for review." | "All done. Your translated files are ready." |
| Onboarding | "Welcome to GlobalLink. Set up your first submission to begin managing regulatory translation workflows." | "Welcome to GlobalLink. Set up your first campaign to start reaching customers in new markets." |

> For full industry calibration, see [Tone by industry](#tone-by-industry) in Section 2.

---

# 7. Product & UI

> **How to use this section:** Find the UI element you're writing for. Each section describes what the element does, how to structure its copy, and what to include or exclude. For the scenario or emotional context, also check [Talking to users](#6-talking-to-users).

---

## Actions (CTAs)

CTAs drive the primary action on a screen. Copy must be specific enough that users know exactly what will happen when they click.

**Structure:** Verb + object

**Rules:**
- Start with a verb: "Submit project", "Upload files", "Add language pair"
- Match the label to the outcome — if clicking sends something, say "Send"
- Be specific: "Create account" not "Submit"; "Download report" not "Continue"
- No "please" in button labels — buttons are actions, not requests
- Avoid filler: not "Click here to…" or "Proceed to…"

| ✓ | ✗ |
|---|---|
| "Submit for review" | "Proceed" |
| "Add target language" | "Click here" |
| "Create project" | "Get started!" |
| "Download report" | "Continue" |
| "Delete project" | "Confirm" |

---

## Confirmations

Confirmations tell users what happened and what comes next. They close a loop.

**Rules:**
- Confirm the specific action: "Project submitted" not "Done"
- Guide to the next step if one exists
- Match the register's tone — Life Sciences confirms plainly; Retail can be slightly warmer

| ✓ | ✗ |
|---|---|
| "Project submitted. Your team will be notified when review begins." | "Woohoo! You're done! 🎉" |
| "Submission complete. All documents submitted for review." | "You're crushing it! 🚀" |
| "Confirmed: May 22, 2:00 PM EDT." | "You're all set! See you soon! 😊" |

---

## Empty states

See [Talking to users — Empty states](#empty-states) for the full guidance. In the UI element context, apply this structure:

1. What this area is for (one phrase)
2. Why it's empty (optional — only if not obvious)
3. The first action

---

## Errors

See [Talking to users — Errors & failures](#errors--failures) and [Time pressure & urgency](#time-pressure--urgency) for scenario-specific guidance. In the UI element context:

**Structure:** What failed → Why (only if actionable) → What to do next

**For inline field errors (form validation):**
- State what's wrong, not just that something is wrong
- Position adjacent to the field
- Don't use "Error:" as a prefix — start with the problem

| ✓ | ✗ |
|---|---|
| "Email must include @. Example: name@company.com" | "Invalid entry" |
| "Paragraph 3 exceeds the character limit by 45 characters." | "Character limit exceeded" |
| "File size exceeds 50 MB. Try a smaller file or contact support." | "File too large" |

---

## Fields & labels

Field labels tell users what to put in a field. Help text (below or inline) provides context the label alone doesn't.

**Rules:**
- Labels: concise, sentence case, no period
- Placeholder text: use sparingly — it disappears when users type and should never carry required information
- Help text: only when the label genuinely needs explanation; one sentence maximum
- Error messages adjacent to the field: see [Errors](#errors-1) above

| Element | ✓ | ✗ |
|---|---|---|
| Label | "Target language" | "Target Language" / "Select your desired target language" |
| Placeholder | "name@company.com" (example format) | "Enter your email address here" |
| Help text | "Add multiple languages to run parallel workflows." | "Please use this field to select the language you would like to translate your content into." |

---

## Mobile & real-time

Mobile copy operates under different constraints: small screens, one-handed use, split attention, real-time context.

**Rules:**
- Every message competes with the user's physical environment — act accordingly
- Ultra-concise: target single-digit words for notifications
- Time and location are the most important facts — lead with them
- Buttons must be explicit — never rely on surrounding context to explain what a button does

| ✓ | ✗ |
|---|---|
| "Keynote starts in 10 min. Room A." | "Your saved session is coming up soon, don't forget to check in!" |
| "Broadcast in 30 min." | "The broadcast you're interested in watching is starting in approximately 30 minutes" |
| "File downloaded." | "Your file has been successfully downloaded to your device." |

---

## Notifications

Notifications interrupt. That means they must earn the interruption.

**Rules:**
- Lead with the change or action, not a preamble
- One piece of information per notification
- Include a next step or link when the user needs to act
- Don't pad with filler greetings or sign-offs

| ✓ | ✗ |
|---|---|
| "Review complete. 3 segments require your attention. [View segments]" | "Hello! We wanted to let you know that your review has been completed." |
| "New submission received. [Review now]" | "You've got mail! A new submission is waiting for you." |
| "Export ready. Your TM file is available to download. [Download]" | "Good news! We have some great news — your export is done!" |

---

## Tooltips

Tooltips add context the label alone doesn't provide — they're not a restatement of the label.

**Rules:**
- Concise, genuinely helpful, never obvious
- Add context the label alone doesn't provide — not a restatement of it
- One sentence. If a useful tooltip requires more, the UI element probably needs a better label.
- Periods on complete sentences; no period on fragments

| Element | ✓ | ✗ |
|---|---|---|
| TM leverage field | "Percentage of new content matched against existing translation memory. Higher leverage reduces cost and turnaround time." | "Translation memory leverage." |
| Submit button (disabled) | "Complete all required fields to submit." | "This button submits your project." |
| Target language selector | "Choose the language this content will be translated into. Add multiple target languages to run parallel workflows." | "Select language." |

---

## Consent & permissions

Consent copy covers cookie notices, data-sharing requests, notification opt-ins, and any moment where users are asked to agree to something.

**Rules:**
- Be specific about what you're asking for and why
- Never bury the trade-off — if data is collected and used, say so plainly
- The decline path must be as visible and accessible as the accept path — no dark patterns
- Match the ask to the need — don't ask for camera access when you only need a notification permission

| ✓ | ✗ |
|---|---|
| "Allow GlobalLink Events to send reminders for sessions you've saved?" [Allow] [Not now] | "Enable notifications for a better experience" [OK] |
| "We use analytics cookies to understand how you use the product. [Manage preferences] [Accept all]" | "We value your privacy. By clicking OK you agree to our cookie policy." [OK] |
| "This will share your file with the project owner. Only proceed if you consent." | "Sharing enabled! Let's collaborate." |

**Decline labels.** Always label the decline path honestly: "Not now," "Decline," "Skip." Never use confirm-shaming labels like "No thanks, I don't want reminders."

---

# 8. Translatability

> GlobalLink is a B2B product suite at its core, with products increasingly serving B2C users and internal teams. All products are localised into many languages, and some — particularly those serving linguists — are used by people who work in translation professionally. Translatability is not a technical constraint. It is a quality signal and a brand value. Copy that can't be translated correctly is copy that doesn't work.

---

## Why it matters

Every string we write is a potential source segment. GlobalLink products are localised into many languages for B2B enterprise clients, and increasingly for B2C users. Translation errors downstream — caused by English fragments, idioms, or concatenated strings — create rework and undermine trust. Writing translatably from the start is the highest-leverage habit a GlobalLink content designer can build.

---

## Structural rules

**Use complete sentences.** Fragments that rely on English word order break in other languages, where verbs and nouns inflect differently.

**Pair verbs with their objects.** Strings that join dynamically (e.g., "Delete [project name]?") break when target-language nouns inflect by gender or case.

**Use active voice.** "GlobalLink saved your file" is easier to translate correctly than "Your file was saved."

**Do not concatenate strings.** Never build a sentence from separate UI strings joined by code. "You have" + [number] + "files" produces wrong results in most languages.

---

## Vocabulary rules

**Avoid idioms.** "You're all set," "heads up," "touch base," "out of the box" do not translate reliably.

**Avoid metaphors.** "Your pipeline is empty" — prefer "No projects in progress."

**Avoid culture-specific references.** Dates, currency, local organisations — use variables or keep generic.

**Prefer explicit over implied.** "Delete it" → "Delete this project." Pronouns without clear antecedents are error-prone in translation.

**Avoid phrasal verbs where a single verb works.** "Set up" → "Configure." "Kick off" → "Start." "Log in" → "Sign in" (this one is fine as it's standard in software).

| ✗ | ✓ |
|---|---|
| "Get your API key up and running in no time" | "Configure your API key in 3 steps" |
| "Let's kick off the broadcast" | "Start the broadcast" |
| "You're all set to roll" | "Your file is ready to share" |

---

## Character and length

**Plan for text expansion.** Translated text is typically longer than English. German and Finnish run 30–40% longer; Arabic and Thai have different character and word-boundary rules. Design containers that accommodate expansion.

**Flag character limits in copy deliverables.** Note limits so translators can adapt rather than truncate blindly.

**Avoid relying on line breaks for meaning.** Multi-line copy that depends on a specific break for readability will render unpredictably in other languages.

---

## Pluralisation

**Never hardcode plural logic.** Many languages have 3–6 plural forms. Use variables and let the localisation system handle pluralisation.

**Avoid "s" workarounds.** "File(s)" does not work in other languages. Use a variable or write for one form and flag it for translators.

---

# 9. AI content

> GlobalLink is building AI into its products — and AI is becoming a content layer in its own right. This section covers how to write for AI-powered features, how to communicate AI's role to users, and how to maintain trust when the product generates, suggests, or interprets content on the user's behalf.

---

## AI principles

These four principles apply to every AI feature across the GlobalLink suite.

**Foster trust through transparency.**
Tell users when AI is involved. Tell them what it did. Tell them when they're reading AI-generated content. Never obscure AI's role — users who discover it was hidden will feel deceived. Transparency is non-negotiable.

**Focus on user benefit, not technology.**
Users don't care that we use a transformer model. They care whether their segment is accurate, their event is scheduled correctly, or their broadcast stays live. Lead with what the feature does for the user, not what technology powers it.

**Reduce cognitive load.**
AI features often surface complexity. Copy should do the opposite: surface the most useful signal, hide the noise, and make the right action obvious. If an AI output requires extensive explanation, the UI isn't working.

**Be brief and clear.**
AI-related copy follows the same concision rules as all GlobalLink copy — with extra discipline. Explanations of AI reasoning should be one sentence if possible.

---

## Conversation design for AI features

When users interact with AI conversationally (chat interfaces, prompting, voice input), apply these principles.

**Goal-oriented.** Every AI response should move the user toward their goal. Avoid filler responses, restating what the user said, or preamble before the substance.

**Quick and clear.** Match the complexity of the response to the complexity of the request. Long responses are rarely the right answer.

**Polite, not obsequious.** Polite means respectful and helpful. It does not mean starting every response with "Of course!" or "Great question!" These phrases are hollow and add friction.

**Error-tolerant.** When a user is imprecise, help them rather than failing. "I didn't quite understand — did you mean you want to filter by language pair?" is better than an error state.

**Turn-based.** In conversational interfaces, avoid flooding the user with information in a single response. One thing at a time.

| ✓ | ✗ |
|---|---|
| "3 segments need review. They scored below your confidence threshold." | "Of course! I've completed the analysis. Great news — I found 3 segments you might want to look at!" |
| "I couldn't find a time slot that works for all attendees. Show available slots anyway?" | "I'm sorry, but unfortunately I was unable to locate a suitable time slot that meets the criteria you specified." |
| "Suggested: 'The report was filed on time.' Review and accept or edit." | "I have generated a suggestion for your consideration. Please review the following AI-generated candidate and use your professional judgment to determine whether it meets your quality standards." |

---

## When to use AI-generated content

Not all content should be AI-generated. Use this framework to decide.

| Type | Definition | Use AI? |
|---|---|---|
| **Static content** | Fixed UI labels, navigation, instructions, error messages | No — write by hand |
| **Dynamic content** | Personalised messages, summaries, digests, recommendations | AI may be appropriate — validate carefully |
| **Generated content** | Full drafts, suggested translations, auto-summaries | Yes, with transparency and user control |

**Key rule:** When AI writes something a user will act on or publish, they must be able to review, edit, or reject it. Never auto-commit AI-generated content without user confirmation.

---

## Voice & tone for AI features

AI features inherit the GlobalLink voice. There is no separate "AI assistant" persona with a different personality. The same voice attributes apply: Trustworthy, Practical, Innovative, Modern.

**Confidence calibration.** When AI is unsure, say so — briefly. Don't fake confidence.

| ✓ | ✗ |
|---|---|
| "Suggested translation. Confidence: 78%. Review before accepting." | "Here is the translation for this segment." (when confidence was low) |
| "I couldn't determine the source language from this transcript. Confirm the language before proceeding." | "Translation complete." |

**No AI personality tricks.** Don't give AI features catch phrases or a personality that clashes with the product register. An AI feature in a Life Sciences workflow does not have a casual mascot voice.

---

## UX patterns for AI

### Trust, transparency, and control

Users need to understand what AI did and be able to override it.

- **Label AI-generated content** clearly — "AI-suggested," "Generated summary," "Machine translation" are all acceptable. Don't bury this information.
- **Expose confidence signals** where relevant — especially in translation, classification, or scheduling contexts.
- **Give users control** — always offer a way to edit, reject, or override AI output.
- **Explain limitations briefly** — one sentence, placed where it's useful, not as a disclaimer block.

| ✓ | ✗ |
|---|---|
| "AI-suggested: 'Regulatory submission complete.' Edit or accept." | "Your copy: 'Regulatory submission complete.'" (no AI attribution) |
| "Confidence: 84%. Review recommended for regulated content." | "Confidence: 84%. Please note that AI translation may not always be accurate and you should carefully review all generated content before use in regulated contexts." |

### Errors in AI features

AI errors are not the same as system errors. When AI can't complete a task, be specific about why and what the user can do.

| Scenario | ✓ | ✗ |
|---|---|---|
| Low confidence | "Confidence too low for auto-accept. Review and confirm." | "Error: translation failed." |
| Missing context | "Need more context to suggest a translation. Add a description of the source document." | "Unable to process." |
| Model unavailable | "AI suggestions unavailable right now. Continue with manual review." | "AI error. Try again later." |

### Escalation and fallback

When AI can't help, give users a clear path to a non-AI option.

- Always offer a manual fallback when AI fails
- Don't leave users at a dead end with "AI failed — try again"
- Frame the fallback as a genuine option, not a consolation

| ✓ | ✗ |
|---|---|
| "AI suggestions are unavailable. Continue with manual translation — your work will be saved." | "AI is not available. Please try again." |

### Welcome states for AI features

First-time use of an AI feature needs to set expectations clearly.

- State what the feature does
- State what it needs to work (input quality, format, etc.)
- State what the user controls

**Example (AI Interpreter onboarding):**
> "AI Interpreter analyses your source content and suggests translations. Review each suggestion before accepting — you're always in control of what goes out."

---

## Writing about AI — mentioning AI in copy

When copy refers to AI in UI, documentation, or marketing:

**Use plain descriptors, not hype.** "AI-assisted," "AI-generated," "machine translation" — not "revolutionary AI," "cutting-edge intelligence," or "powered by our proprietary neural engine."

**Be specific about what AI does.** "AI checks segment confidence scores" is better than "AI helps with translation quality."

**Don't anthropomorphise excessively.** "AI suggests" is fine. "Our AI friend has a great idea for you!" is not.

| ✓ | ✗ |
|---|---|
| "Machine translation is ready. Review before accepting." | "Our AI has worked its magic on your content!" |
| "AI-generated summary. Verify before sharing." | "Powered by revolutionary deep learning intelligence." |
| "AI Interpreter analyses confidence scores segment by segment." | "AI Interpreter uses advanced AI to deliver industry-leading results." |

---

# 10. Emails

> GlobalLink products send emails across multiple types: transactional (confirmations, receipts), operational (notifications, alerts), onboarding, and — increasingly — marketing. Email copy inherits the GlobalLink voice but has its own structural rules.

---

## Email types

| Type | Purpose | Tone |
|---|---|---|
| **Transactional** | Confirms an action the user took (booking confirmed, project submitted, export ready) | Matches the product's register. Formal products stay formal. |
| **Operational** | Informs users of a change they need to know about (sync error, deadline approaching, access updated) | Clear and action-oriented. Never alarming without reason. |
| **Onboarding** | Welcomes and guides new users through first steps | Warmest register the product allows. Goal-oriented. |
| **Marketing** | Promotes features, announces new products, drives re-engagement | TransPerfect brand register — warmer than product UI. Still never hollow enthusiasm. |

---

## Subject lines

Subject lines are the most-read piece of email copy. They determine whether the email is opened.

**Rules:**
- Specific, not clever — tell users what's in the email
- Front-load the most important information
- Sentence case
- No "!" except in genuine celebration emails (and rarely even then)
- Under 50 characters for reliable display on mobile

| ✓ | ✗ |
|---|---|
| "Your export is ready to download" | "Great news from GlobalLink!" |
| "Action required: project deadline tomorrow" | "Important update regarding your account status" |
| "Your registration is confirmed — [Event name]" | "You're all set! See you soon! 🎉" |
| "3 files need your review" | "We have some news to share with you" |

---

## Email body structure

**Transactional / Operational:**
1. What happened (one sentence)
2. What the user needs to do (if anything)
3. Key details (structured, scannable)
4. CTA if action required

**Onboarding:**
1. Welcome (brief, genuine)
2. What they can do now (one clear first step)
3. Where to get help

**Marketing:**
1. The value proposition (what's in it for them)
2. Supporting detail
3. Clear CTA

---

## Email copy rules

**Open with what matters, not pleasantries.** "Your project was submitted" is the right opening. "Hello [Name], we hope this email finds you well" is not.

**One email, one purpose.** Don't combine a confirmation, an upsell, and a survey in a single email. Each message should have one clear job.

**CTAs in email are buttons, not bare links.** "Download report" is better than "You can download your report here: [URL]."

**Sign-offs.** Keep minimal. "The GlobalLink team" or the product name is sufficient. Never sign off with "Warm regards" if the product tone is formal.

| ✓ | ✗ |
|---|---|
| Subject: "Your file export is ready" / Body: "Your export is complete. [Download files] — Available for 7 days." | Subject: "Hi there!" / Body: "Hope you're doing well! We wanted to reach out because we have some exciting news about your recent GlobalLink activity." |
| Subject: "Action required: 2 projects awaiting approval" / Body: "2 projects are waiting for your approval. [Review projects]" | Subject: "Reminder!" / Body: "Just a friendly reminder that you have some things to do in GlobalLink." |

---

# 11. Content testing

> Copy isn't final until it's been read by a real user. Content testing closes the gap between what we think we wrote and what users actually understand. It doesn't require a lab or a large budget — it requires the right question and the right person.

---

## Know what you're testing

Before running any test, state one specific question. Vague goals produce vague insights.

| Goal | Test question |
|---|---|
| Error message comprehension | "What does this message tell you to do?" |
| CTA clarity | "What do you expect to happen when you click this?" |
| Label clarity | "What do you think goes in this field?" |
| Tone fit | "Does this feel appropriate for a [formal / casual / urgent] context?" |
| Terminology | "What does 'segment' mean to you in this context?" |

---

## Choosing a test method

| Method | Best for | What you need |
|---|---|---|
| **5-second test** | Subject lines, headings, primary CTAs | A design or screenshot; a few participants |
| **Cloze test** | Vocabulary and terminology | Written copy; participants from the user group |
| **First-click test** | CTA placement and clarity | Prototype or screenshot |
| **Moderated usability test** | Complex flows, onboarding, errors | Prototype; 5–8 participants; a facilitator |
| **Desirability test** | Tone and register fit | Copy samples; participants rate tone descriptors |
| **A/B test** | Validating a hypothesis in production | Live traffic; A/B infrastructure |

---

## Finding the right participants

Test with users who represent the real audience for that copy.

- Error messages in Portal → test with IT administrators or integration engineers
- Onboarding copy in GlobalLink Events → test with first-time event managers
- B2C mobile copy → test with non-power users, ideally including non-native English speakers
- Regulated content (Life Sciences) → test with the actual professional user group — terminology that sounds right to a general user may be wrong for a regulatory submission manager

**Minimum:** 5 participants for moderated testing; 20+ for unmoderated or survey-based tests.

---

## Analysing findings

Look for patterns, not individual opinions. One person finding a label confusing is noise. Three out of five people attempting the wrong action because of a CTA is a signal that requires action.

**Ask:** What did users try to do? Where did they pause? What did they say the copy meant, compared to what it actually means?

**Report:** State findings as observed behaviours ("3 of 5 users clicked 'Cancel' instead of 'Keep project', suggesting the button labels don't distinguish the actions clearly"), not as quotes.

**Prioritise:**
1. Fix copy that causes task failure
2. Fix copy that causes confusion
3. Fix copy that feels tonally off

---

# Tools

---

## Output format template

When delivering copy as a design or content artefact, use this structure:

```markdown
## Copy: [Screen / Feature / Flow]

**Product:** [GlobalLink product name]
**Industry:** [Vertical]
**User:** [Primary user type]
**Content type:** [Error / Empty state / CTA / Onboarding / etc.]
**Tone position:** [e.g. "formal–balanced"]
**Character limit:** [If applicable]
**Will be translated:** [Yes / No / Language count if known]

### Recommended copy
**[UI element]:** [Copy]

### Alternatives
| Option | Copy | Tone | Best for |
|--------|------|------|----------|
| A | [Copy] | [Tone descriptor] | [Context] |
| B | [Copy] | [Tone descriptor] | [Context] |

### Rationale
[Why this copy works — voice alignment, user context, action-orientation, what was rejected and why]

### Localisation notes
[Idioms avoided, character limits, plural handling, variables used, cultural considerations]
```

---

## Copy review checklist

Before shipping copy, confirm:

**Voice & tone**
- [ ] Does it pass the north star test? (Does it help users feel more in control?)
- [ ] Does it match the register (A, B, or C)?
- [ ] Does it align with the product's tone position?
- [ ] Is it consistent with product terminology?

**Writing quality**
- [ ] Is it specific, not vague?
- [ ] Is the next action clear?
- [ ] Would a non-native English speaker understand it instantly?
- [ ] Does it account for the user's emotional state, especially in errors?

**Style**
- [ ] Is it in sentence case?
- [ ] Does punctuation follow the rules (period in body text; none in titles/CTAs)?
- [ ] Is it gender-neutral?
- [ ] Is the product name written correctly?

**Translatability**
- [ ] Does it pass the Translatability checklist?

---

## Translatability checklist

**Structural:**
- [ ] Complete sentences (no fragments)
- [ ] Verbs paired with objects
- [ ] Active voice preferred
- [ ] No string concatenation

**Vocabulary:**
- [ ] No idioms ("all set," "heads up," "hit the ground running")
- [ ] No metaphors used to replace plain language
- [ ] No culture-specific references (use variables for dates, times, currencies)
- [ ] Explicit pronouns ("Delete this file" not "Delete it")
- [ ] No phrasal verbs where a single verb works ("Set up" → "Configure")

**Character & length:**
- [ ] Character limits noted
- [ ] Text expansion accounted for (German +30–40%, Finnish similar)
- [ ] No line-break dependencies

**Pluralisation:**
- [ ] Never hardcoded plural logic (use variables)
- [ ] No "File(s)" workarounds

---

## Governance

**Voice review hierarchy:**

| Copy type | Owner | Escalate if |
|---|---|---|
| UI labels | Designer + PM | Vague, inconsistent, or unclear |
| Error messages | Designer + PM | No next step, sounds blame-y, too cold for the emotional context |
| Marketing claims | PM + Legal | Unverifiable |
| Help text | Designer | >2 sentences, uses jargon |
| Emails | PM | Unclear next step |
| Public copy | Designer + PM | Anything user-facing before it ships |

**Quarterly sync:** Schedule a voice review between the designer and PM every quarter to audit new copy, check terminology consistency, and update the product voice guide.

**Ownership:**
- **Compass Master Guide** (this document): TechOps Design Team
- **Product voice guides**: Product designer + PM for each product — built using the [Product Voice Workbook](./COMPASS_PRODUCT_VOICE_WORKBOOK.md)
- **Voice decisions**: Designer + PM (joint ownership; design lead has final call)

---

**Version 2.1** | May 22, 2026 — Added sections 9 (AI content), 10 (Emails), 11 (Content testing). Added to existing sections: alt text, anti-racist language, consent & permissions, emoji guidance, readability/plain language table. De-centred translation framing: "Writing for translation" renamed "Writing for global reach"; voice attribute examples diversified across product domains. Role table and ToC updated.

**Version 2.0** | May 22, 2026 — Full restructure: 8-section architecture adapted from Intuit Content Design System. New sections: Emotional design, Word list, Talking to users (scenario-based), Time pressure & urgency, Regulated vs. consumer tone, Accessibility & inclusion. All previous content preserved and reorganised. Product & UI separated from scenario-based guidance. Translatability promoted to dedicated section.

**Version 1.3** | May 22, 2026 — Added Section 9 Writing Conventions (capitalisation, punctuation, gender-neutral language, product naming); updated examples for gender-neutral language and emotional calibration; added clarity/actionability hierarchy

**Version 1.2** | May 19, 2026 — Restructured into Guidelines / Examples Library / Tools
**Version 1.1** | May 19, 2026 — Consolidated globallink-voice guidelines
**Version 1.0** | May 18, 2026 — Created
