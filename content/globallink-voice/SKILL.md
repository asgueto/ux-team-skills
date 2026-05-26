---
name: globallink-voice
description: >
  Defines GlobalLink's voice personality, valid tone ranges, copy patterns, and translatability rules for all in-product content. Use when writing, reviewing, or evaluating any UX copy, microcopy, error messages, notifications, onboarding text, or any written content that appears inside a GlobalLink product. Also use when adapting tone for a specific product, user type, or industry vertical. If the product has a product-specific voice guide, this skill will load it as a product overlay and apply both layers together — always trigger this skill first when writing product copy. Trigger when writing or auditing copy for any GlobalLink product, or when asked "how should this sound in GlobalLink?" For worked copy examples, Do/Don't pairs, and industry-specific illustrations, also load references/EXAMPLES.md.
---

**Version:** 1.2.0 | **Author:** TechOps Design Team
**Last Updated:** 2026-05-18

# globallink-voice

> For worked copy examples, Do/Don't pairs, and industry-specific illustrations, see [references/EXAMPLES.md](./references/EXAMPLES.md).

---

## When to use this skill

Load this skill when you need to:
- Write or review any in-product copy for a GlobalLink product
- Decide how formal, casual, concise, or detailed a piece of copy should be
- Adapt the default GlobalLink tone for a specific product, audience, or industry
- Audit existing copy for voice consistency or translatability
- Define the output format for copy deliverables

---

## Product layer — apply your product voice guide

GlobalLink voice rules are the foundation. If the product you're writing for has a product-specific voice guide, that guide is the overlay — it narrows and specifies the base rules for that product's users, tone positions, and terminology.

**At the start of every product copy session:**

1. Ask which product this is for (e.g. "GlobalLink Events", "GlobalLink Bookings").
2. Look for a product voice guide in the workspace. It will be named `[product-name]-voice-guide.md` (e.g. `globallink-events-voice-guide.md`) and typically lives in the product's own repository — often in a `docs/`, `content/`, or `design/` folder.
3. If a guide is found, read it before writing. If it's not in the workspace, ask: "Do you have a product voice guide? Share the path or paste it in and I'll apply it."
4. If no guide exists yet, proceed with GlobalLink base rules only and note that the product may want to create one using the `product-voice-guide` skill.

**When a product guide is loaded, apply it as follows:**

| What the product guide defines | How to apply it |
|---|---|
| Tone positions (e.g. 7/10 Formal for Register A) | Use the product's calibration — it overrides the GlobalLink defaults |
| Registers (user types and their profiles) | Write to the relevant register's north star and tone markers |
| Terminology (approved terms and never-use terms) | Follow exactly — product terminology is authoritative |
| Key patterns (product-specific copy patterns) | Apply in addition to GlobalLink's scenario patterns |
| Anything not covered by the product guide | Fall back to GlobalLink base rules |

The product guide does not replace these GlobalLink rules — it adds precision to them. If a product guide says nothing about destructive actions, the GlobalLink destructive action pattern still applies.

---

## Before you write — what to gather

Before writing or reviewing copy, establish:

1. **Product and feature** — Which GlobalLink product? Which screen or flow?
2. **Product voice guide** — Has one been loaded? (See product layer section above.)
3. **Industry vertical** — Life Sciences, Legal, Banking, Retail, Media, Tech?
4. **Primary user** — Which register does this copy target? (Check the product guide; if none exists, use the industry and user role to calibrate.)
5. **Content type** — Error, empty state, CTA, onboarding, notification, confirmation? (See Part 4)
6. **User's emotional state** — Are they completing a routine task, recovering from an error, seeing a screen for the first time, about to do something irreversible?
7. **Constraints** — Character limits, truncation risk, screen size, platform?
8. **Translation scope** — Will this copy be translated? Into how many languages? (See Part 5)

If you are missing industry, user type, or content type, ask before writing. Tone calibration depends on all three.

---

## Core principles

Every word in a GlobalLink product should pass these five tests:

1. **Clear** — Say exactly what happened or what to do. No jargon, no ambiguity, no passive constructions that hide the subject.
2. **Concise** — Use the fewest words that carry the full meaning. Cut anything that doesn't help the user act.
3. **Consistent** — Same terms for the same things everywhere. If it's a "project" on one screen, it's a "project" everywhere — never a "job," "task," or "request" for the same concept.
4. **Actionable** — Every message should either confirm, instruct, or guide. If copy doesn't help the user know what to do next, it's not done.
5. **Translatable** — GlobalLink products are translated. Copy must survive that process — no idioms, no culture-specific metaphors, no English-dependent fragments. (See Part 5 for full rules.)

---

## Part 1 — The GlobalLink Voice (who we are)

Voice is GlobalLink's personality. It is **fixed** — it does not change by product, audience, or context. It is what makes GlobalLink recognisable across the entire suite.

GlobalLink is a sub-brand of TransPerfect. The parent brand is "friendly-professional" — casual, conversational, and confident. GlobalLink inherits that foundation but operates in a higher-stakes. Our users manage global content, legal documents, regulated submissions, and mission-critical workflows. The voice reflects that: trustworthy and precise, never stuffy; practical and direct, never cold. But also some of our products are B2C. We want to be "friendly-professional" but also engaging and exciting for our users (event attendees, users that want to share a file with friends,...). Avoid a B2B voice that sounds old and boring, B2B can also be interesting.

### Voice attributes

---

**Trustworthy**
- **We are:** transparent, accurate, and honest — especially when something goes wrong. We give users the information they need to make confident decisions.
- **We are not:** overly cautious, vague, or padded with disclaimers that obscure what actually happened.

---

**Practical**
- **We are:** focused on helping users accomplish their goal. We get to the point. We tell users what to do, not just what happened.
- **We are not:** robotic, dismissive, or so terse that users are left without enough context to act.

---

**Innovative**
- **We are:** forward-looking and clear about the value of what we offer. We explain capability in plain language, not marketing speak.
- **We are not:** hype-driven, buzzword-heavy, or claiming more than the product actually does.

---

**Modern**
- **We are:** current, clean, and aware that users' time is valuable. We write for how people actually read interfaces — scanning, not reading word by word.
- **We are not:** trendy, slang-heavy, or trying to sound younger than our users' context warrants.

> See [EXAMPLES.md § Voice attribute examples](./references/EXAMPLES.md#voice-attribute-examples) for "This sounds like / This does NOT sound like" copy pairs for each attribute.

---

## Part 2 — The Tone Spectrum (how we adapt)

Tone is how the voice adjusts to context. The voice stays the same; the tone shifts.

The four dimensions below define GlobalLink's **valid range**. Each has a default score and explicit floor and ceiling. No GlobalLink product should sit outside these bounds — regardless of how casual or specialised it feels.

**How to read the ranges:** When you know the product's industry and user type (Part 3), use those to determine where within the valid range to position. Life Sciences sits near the ceiling; a retail-facing tool can move toward the floor. The default is the safe starting point when context is unclear.

---

### Dimension 1 — Funny ↔ Serious

| Default | Floor (most casual allowed) | Ceiling (most formal allowed) |
|---|---|---|
| 6 / 10 | 4 / 10 | 8 / 10 |

Translation and content management are high-accuracy domains — errors have real consequences. Light moments are acceptable where context genuinely calls for it (a completion state, a first-time empty state), but humour is **never used in error states, data loss, or anything requiring user action**.

---

### Dimension 2 — Formal ↔ Casual

| Default | Ceiling (most formal allowed) | Floor (most casual allowed) |
|---|---|---|
| 5 / 10 | 8 / 10 | 3 / 10 |

GlobalLink defaults to balanced: professional but approachable. Even at its most casual, GlobalLink does not use slang, exclamation-heavy copy, or overly familiar address. Even at its most formal, it does not use institutional stiffness, passive constructions, or unexplained jargon.

---

### Dimension 3 — Concise ↔ Detailed

| Default | Floor (most concise allowed) | Ceiling (most detailed allowed) |
|---|---|---|
| 4 / 10 | 2 / 10 | 7 / 10 |

GlobalLink leans concise. Users are task-focused professionals who scan interfaces. Default to the minimum words needed for clarity and action. More detail is appropriate in documentation, onboarding, and complex error recovery — never pad with filler.

---

### Dimension 4 — Respectful ↔ Irreverent

| Default | Ceiling (most respectful) | Floor (most relaxed allowed) |
|---|---|---|
| 3 / 10 | 1 / 10 | 5 / 10 |

GlobalLink is strongly respectful by default. Our products operate across cultures, languages, and regulated industries. Irreverence, sarcasm, and overly casual language carry cultural risk and undermine user trust. The tone **never becomes irreverent**.

> See [EXAMPLES.md § Tone spectrum examples](./references/EXAMPLES.md#tone-spectrum-examples) for copy pairs illustrating the floor, default, and ceiling of each dimension.

---

## Part 3 — Tone adaptation by industry and user

The spectrum defines what is possible. Where a specific product sits within that range depends on industry context, user profile, and product purpose. These usually overlap — a product serving legal users in a regulated context will sit near the formal ceiling across all four dimensions. A sharing-files platform for B2C users will be the contrary.

### By industry

| Industry | Tone position | Rationale |
|---|---|---|
| Life Sciences / Pharma | Formal (near ceiling) | Regulatory submissions and clinical content — errors have safety and compliance consequences. Precision and formality signal reliability. |
| Legal | Formal (near ceiling) | Legal translation carries liability. Users expect institutional precision. Any informality reads as unprofessional. |
| Banking / Financial Services | Formal to balanced | High-trust, regulated domain. Internal workflow tools can sit at balanced; compliance-facing content leans formal. |
| Healthcare | Formal to balanced | Clinical content mirrors Life Sciences; internal workflow tools can be more balanced. |
| Retail / E-commerce | Balanced to slightly casual | Lower regulatory pressure. Content and marketing teams are comfortable with a lighter register. Never fully casual. |
| Technology / Software | Balanced | Developer-adjacent users expect directness and clarity over warmth. |
| Media / Entertainment | Balanced to slightly casual | Creative teams. A warmer tone is appropriate; still professional. |

### By user profile

- **Project managers / program leads** — balanced; goal-oriented, action-forward copy
- **Linguists / translators** — balanced; practical and tool-focused; never condescending or over-simplified
- **IT / system administrators** — lean concise and direct; precision over warmth
- **Enterprise buyers / stakeholders** — lean formal; copy should convey quality, reliability, and control
- **Content / marketing teams** — balanced to slightly casual; completion moments can feel more celebratory
- **Event attendees** -

> See [EXAMPLES.md § Industry copy examples](./references/EXAMPLES.md#industry-copy-examples) for side-by-side copy pairs showing the same message written for different industry contexts.

---

## Part 4 — Copy patterns by content type

These structures define what to include in each content type. Tone is set by Parts 2–3; structure is set here. Use both.

### Error messages
**Structure:** What failed → Why (only if it helps the user act) → What to do next

- Lead with what failed, not with an apology.
- Be specific enough that the user knows what to fix.
- Never blame the user. Prefer "We couldn't…" over "You did…"
- Never use humour in error states.

### Destructive action confirmations
**Structure:** Name the action → State consequences → Label buttons with the action

- The confirm button label matches the action: "Delete project", not "Confirm" or "OK".
- The cancel button preserves: "Keep project", not "Cancel".
- Make consequences explicit before the user acts.

### Empty states
**Structure:** What this area is for → Why it's empty → What to do to get started

- Use the warmest tone the product allows — empty states are a first-impression moment.
- Always include a clear action. Never leave users at a dead end.
- Do not make the empty state feel like an error.

### CTAs (calls to action)
- Start with a verb: "Submit project", "Upload files", "Add language pair"
- Match the label to the outcome: if clicking sends something, say "Send"
- Be specific: "Create account" not "Submit"; "Download report" not "Continue"
- Avoid filler: not "Click here to…" or "Please proceed to…"

### Onboarding
**Structure:** Welcome → What they can do here → The first action to take

- Use the warmest tone the product allows.
- One concept at a time — progressive disclosure over front-loading.
- Frame around what the user achieves, not what the product does.

### Success and completion states
- Acknowledge the moment briefly.
- Confirm what happened, then guide to the next step if there is one.
- At the casual end of the spectrum, a small celebration is acceptable. Formal products simply confirm.

### Notifications
- Lead with the change or action, not a preamble.
- One piece of information per notification.
- Include a next step or link when the user needs to act.

### Tooltips
- Concise, genuinely helpful, never obvious.
- Add context the label alone doesn't provide — not a restatement of it.
- If a useful tooltip requires more than one sentence, the UI element probably needs a better label.

> See [EXAMPLES.md § Copy pattern examples](./references/EXAMPLES.md#copy-pattern-examples) for worked ✓/✗ examples for each content type, including industry-specific variants.

---

## Part 5 — Translatability rules

GlobalLink products are localised. Copy written for GlobalLink will be translated, and some times machine translated. Violations here create rework and undermine the quality signal GlobalLink sends to its own customers.

### Structural rules

- **Use complete sentences.** Fragments that rely on English word order break in other languages.
- **Avoid separating verbs from their objects across UI elements.** Strings that join dynamically (e.g., "Delete [project name]?") break when target-language nouns inflect by gender or case.
- **Use active voice.** "GlobalLink saved your file" is easier to translate correctly than "Your file was saved."
- **Do not concatenate strings.** Never build a sentence from separate UI strings joined by code. Concatenated strings produce incorrect results in many languages.

### Vocabulary rules

- **Avoid idioms.** "You're all set," "heads up," "touch base," "out of the box" do not translate reliably.
- **Avoid metaphors.** "Your pipeline is empty" — prefer "No projects in progress."
- **Avoid culture-specific references.** Dates, currency, local organisations — use variables or keep generic.
- **Prefer explicit over implied.** "Delete it" → "Delete this project." Pronouns without clear antecedents are error-prone in translation.
- **Avoid phrasal verbs where a single verb works.** "Set up" → "Configure". "Kick off" → "Start".

### Character and length

- **Plan for text expansion.** Translated text is typically longer than English. German and Finnish run 30–40% longer; Arabic and Thai have different character and word-boundary rules.
- **Flag character limits in copy deliverables.** Note limits so translators can adapt rather than truncate blindly.
- **Avoid relying on line breaks for meaning.** Multi-line copy that depends on a specific break for readability will render unpredictably in other languages.

### Pluralisation

- **Never hardcode plural logic.** Many languages have 3–6 plural forms. Use variables and let the localisation system handle pluralisation.
- **Avoid "s" workarounds.** "File(s)" does not work in other languages. Use a variable or write for one form and flag it.

---

## Part 6 — Relationship to the TransPerfect parent brand

GlobalLink's voice is derived from, but more restrained than, the TransPerfect master brand. The parent brand's "friendly-professional" register is right for marketing and external communications. GlobalLink products are enterprise software — the context is operational, not promotional. Globallink also have marketing and external communications, take this into account when creating the content to ensure which type of tone is needed.

**Always inherit from the TPT brand voice:**
- Avoid superlatives ("the most accurate," "the best") unless supported by a verified claim
- Avoid trite phrases: "we are pleased to announce," "we are excited to share"
- Write plainly — no lofty vocabulary or unnecessary complexity
- Never lead with "We at GlobalLink…" or "We at TransPerfect…"
- Avoid clichés: "in this digital age," "in an increasingly global world"

**Where GlobalLink is more restrained than TPT marketing:**
- Exclamation marks only in genuine celebration moments — never in errors, warnings, or instructional copy
- No emoji in product UI copy (just apply to specific products and needs to be indicated)
- Default register is more formal than the parent brand's social and marketing voice, but still similar
---

## Output format

When delivering copy as a design or content artefact, use this structure for consistency and reviewability:

```markdown
## Copy: [Screen / Feature / Flow]

**Product:** [GlobalLink product name]
**Industry:** [Vertical]
**User:** [Primary user type]
**Content type:** [Error / Empty state / CTA / Onboarding / etc.]
**Tone position:** [Where on the spectrum for this product, e.g. "formal–balanced"]
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
[Anything translators need to know: idioms avoided, character limits, plural handling, variables used, cultural considerations]
```
