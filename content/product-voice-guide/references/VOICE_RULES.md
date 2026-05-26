# Compass Voice Rules — Quick Reference

> **Derived from** `../../compass/COMPASS_VOICE_AND_TONE.md` v2.1. This is a condensed extract — not the source of truth.
> For full detail (AI content, emails, consent patterns, content testing), read the master guide directly.
>
> **Maintenance:** When `COMPASS_VOICE_AND_TONE.md` is updated, review and update this file to keep it in sync. Sections most likely to drift: tone spectrum ranges, industry calibration table, style rules, and blocklist.

---

## The 4 voice attributes

These are fixed across every product, every register. Every piece of copy should reflect all four.

**Trustworthy** — Transparent, accurate, honest — especially when something goes wrong. Give users the information they need to make confident decisions. Never vague, never hiding what happened.

**Practical** — Focused on helping users accomplish their goal. Get to the point. Tell users what to do, not just what happened. Never robotic or so terse that users lack context to act.

**Innovative** — Forward-looking, clear about the value of what we offer. Explain capability in plain language. Never hype-driven or buzzword-heavy.

**Modern** — Current, clean, aware that users' time is valuable. Write for scanning. Never trendy or slang-heavy.

---

## Tone spectrum — valid ranges

No product sits outside these ranges. Higher number = more Serious/Formal/Detailed/Irreverent.

| Dimension | Floor | Default | Ceiling |
|---|---|---|---|
| Funny ↔ Serious | 4/10 | 6/10 | 8/10 |
| Formal ↔ Casual | 3/10 | 5/10 | 8/10 |
| Concise ↔ Detailed | 2/10 | 4/10 | 7/10 |
| Respectful ↔ Irreverent | 5/10 | 3/10 | 1/10 |

---

## Industry calibration — starting positions

Use these as anchors. The team confirms or adjusts based on their specific product and users.

| Industry | Formality | Seriousness | Notes |
|---|---|---|---|
| Life Sciences / Pharma | 8/10 | 8/10 | Regulatory submissions; errors have safety/compliance consequences. Precision signals reliability. |
| Legal | 8/10 | 8/10 | Legal translation carries liability; any informality reads as unprofessional. |
| Banking / Financial | 6–7/10 | 7/10 | Regulated domain. Internal tools can be more balanced (5–6); compliance-facing content leans formal. |
| Healthcare | 5–7/10 | 6–7/10 | Clinical content leans formal; internal workflow tools can be balanced. |
| Retail / E-commerce | 4–5/10 | 5–6/10 | Lower regulatory pressure. Never fully casual. |
| Technology / Software | 5/10 | 5–6/10 | Developer-adjacent users expect directness over warmth. |
| Media / Entertainment | 4–5/10 | 5/10 | Creative teams; warmer tone appropriate; still professional. |

---

## Tone registers — default characteristics

### Register A — Operator / Admin / Creator
The person running the platform. Domain expert. Accountable for outcomes.
- Get to the point; terse is not rude for this user
- No emoji, no exclamation points, no filler
- Name problems exactly — error codes welcome
- Assume competence and urgency
- Empty states push toward action, not reassurance

### Register B — User / Participant / Reviewer
Using the product, not administering it. Less context, less power to fix things.
- Slightly warmer than A, still professional
- One sentence of context is acceptable
- Error messages always include an escalation path
- Match their vocabulary, not the platform's internal language
- One useful fact per message

### Register C — Mobile / Real-time / High-urgency
At an event, during a broadcast, one hand, small screen, split attention.
- Ultra-concise — single-digit words per message when possible
- One actionable fact per notification
- Buttons must be self-explanatory; never rely on context
- Action verbs, not questions
- Time and location are more important than everything else

---

## Core principles (non-negotiable)

1. **Clear** — Say exactly what happened or what to do. No jargon, no ambiguity, no passive constructions.
2. **Concise** — Fewest words that carry full meaning. Cut anything that doesn't help the user act.
3. **Consistent** — Same terms for the same things everywhere.
4. **Actionable** — Every message confirms, instructs, or guides. If copy doesn't tell users what to do next, it's not done. *When Concise and Actionable conflict: clarity beats concision; actionability beats brevity.*
5. **Authority through specificity** — Replace marketing adjectives with verifiable facts. "Seamless integration" → "Connect your CMS in 3 steps. Sync updates every 5 minutes."
6. **Respect the reader's expertise** — Assume competence. Don't hand-hold.
7. **Global-first & translatable** — No idioms, no culture-specific references. Copy must survive translation.

---

## Style rules — apply to all examples

**Capitalisation:** Sentence case only. First word + proper nouns. Never title case for UI labels or CTAs.

| ✗ | ✓ |
|---|---|
| "Upload Your Files" | "Upload your files" |
| "Create New Project" | "Create new project" |

**Punctuation:**
- Headings / titles / CTAs / field labels / button labels: no period
- Body text / tooltip (complete sentence) / error (one sentence): period
- Error with two sentences: period on each

**Gender-neutral pronouns:** "they / their / them" always. Never "he / she" or "he or she." When a named user appears in examples (e.g., alex@company.com), use their name or "they."

**"Please":** Not in CTAs or error messages. Occasionally appropriate in warmer instructional body text for lower-stakes B2C contexts. Test: write without "please" first; add it only if removing it makes the message feel cold.

**Product names:** Full name in cross-product references and documentation ("GlobalLink Events", "GlobalLink Bookings"). Short name ("Events", "Bookings") acceptable within the product UI where context is established. Never "GL Events" or any "GL" prefix in client-facing content.

**Emoji:** None in product UI copy — not in errors, success states, notifications, or labels.

---

## Scenario patterns — what to include

**Errors:** What failed → Why (only if it helps the user act) → What to do next. Never blame the user. Always include a next step or escalation path. Never use humour.

**Success:** Confirm the specific action. Guide to the next step if one exists. Match the register's tone. Formal products confirm plainly; consumer-facing products can be slightly warmer.

**Empty states:** What this area is for → Why it's empty → What to do to get started. Use the warmest tone the product allows. Always include a clear action. Don't make it feel like an error.

**Destructive actions:** Name the action → State consequences explicitly → Label buttons with the action (not "Confirm" / "Cancel"). Surface non-obvious consequences. No softening, no humour.

**CTAs:** Start with a verb. Match the label to the outcome. Be specific. No "please". No "Click here".

**Notifications:** Lead with the change or action, not a preamble. One piece of information. Include a next step when action is needed.

**Onboarding:** Welcome → What they can do here → First action. Warmest tone the product allows. One concept at a time. Frame around what the user achieves, not what the product does.

---

## Translatability essentials

- Complete sentences only — no fragments that rely on English word order
- Active voice
- No string concatenation (never build a sentence from separate UI strings joined by code)
- No idioms ("all set", "heads up", "hit the ground running")
- No metaphors substituting for plain language ("your pipeline is empty" → "no projects in progress")
- Explicit pronouns ("Delete this project" not "Delete it")
- Avoid phrasal verbs where a single verb works ("Set up" → "Configure", "Kick off" → "Start")
- Plan for text expansion: German / Finnish run 30–40% longer than English
- Never hardcode plural logic — use variables

---

## What we never sound like

- ❌ Hollow enthusiasm: "Amazing! You did it!"
- ❌ Vague apology: "Oops! Something went wrong"
- ❌ Corporate filler: "Leverage best-in-class functionality"
- ❌ Idioms: "Let's hit the ground running"
- ❌ Passive errors: "An error has occurred"
- ❌ Unverifiable claims: "The most powerful platform"
- ❌ Gendered pronouns for unnamed users: "Contact her" / "Ask him to review"
- ❌ Title case in UI labels: "Upload Your Files"
- ❌ Cold indifference in critical moments: an error with no path forward
