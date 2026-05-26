---
name: product-voice-guide
description: >
  Creates a product-specific voice & tone guide for any GlobalLink or TransPerfect TechOps product, based on the Compass master guide. Use this skill whenever a product team wants to create a voice guide, define tone of voice for their product, adapt GlobalLink voice to a specific product, document how their product should sound, define copy guidelines or registers for their users, or produce a product-specific extension of the Compass guide. Trigger when someone says things like "create a voice guide for [product]", "we need tone of voice guidelines for our product", "help us define how [product] should sound", "adapt the Compass voice for our product", "let's build a voice guide", or "we want to document our product's tone". Also trigger when the user starts filling in the Product Voice Workbook and asks for help completing it.
---

# Product Voice Guide

This skill walks a product team through a guided working session to build their product-specific voice & tone guide — a document that extends the Compass master guide (`COMPASS_VOICE_AND_TONE.md`) for their particular product, users, and context.

## What you will produce

A complete, ready-to-use product voice guide saved as a markdown file. It will cover:
- Product context (what it does, who it serves, what the stakes are)
- Tone registers (one profile per user type, with tone markers and examples)
- Tone position (calibrated on the 4 Compass dimensions for each register)
- Terminology (approved terms, terms to avoid, product-specific language)
- Microcopy examples (errors, success states, empty states, CTAs, notifications — per register)

## Reference files

Before starting the session, read:
- `references/VOICE_RULES.md` — condensed key rules, tone spectrum, voice attributes, industry calibration, and style rules. This is your primary reference during the session.
- `references/GUIDE_TEMPLATE.md` — the output template. Use it when generating the final guide.

For full detail on any topic (AI content, emails, consent patterns, content testing), the complete master guide is at:
`../compass/COMPASS_VOICE_AND_TONE.md`

---

## How to run the session

You're facilitating a working session — not running a form. Keep the conversation natural. Summarise what you've heard after each step and ask for confirmation before moving on. This catches misunderstandings early and builds the team's confidence in what they're creating.

Work through the five steps below in order. Each step builds on the last. If the product is one of the known GlobalLink products (Events, Bookings, Compose, AI Interpreter, Portal, TV, Share), the master guide has orientation context for it — use that as a starting point and ask the team to confirm or refine.

---

## Step 1 — Product context

Understand what you're writing for. Ask the team to describe their product. You need:

- **Product name** — the full name (e.g., "GlobalLink Events") and the short in-product name (e.g., "Events")
- **What it does** — one or two sentences: what does it help users accomplish?
- **Product type** — pick the closest fit: workflow/content management, booking/scheduling, live/broadcast, analysis/intelligence, data integration, marketplace/collaboration, or other
- **Industry** — who are the typical customers? Life Sciences, Legal, Banking, Healthcare, Retail, Tech, Media, or a mix?
- **Stakes** — how serious are mistakes? High (data loss, regulatory consequences, live events, financial transactions), medium (delays, rework, user frustration), or low (minor friction)?
- **Highest-stakes emotional moments** — what 2–3 situations would put users under real pressure or stress? (e.g., "file error the night before a live event", "sync fails on a regulatory deadline")
- **North star** — what should users feel after using this product? Frame it as what "feeling in control" means specifically for these users.

At the end of this step, write back a short summary of what you've understood about the product. Invite corrections before moving on.

---

## Step 2 — Users and registers

Every product has 2–4 registers — a register is a user type combined with their context. Most GlobalLink products have Register A (the person running the platform) and Register B (the person using it). Many have Register C (someone using the product on mobile, in real time, under pressure).

For each register, gather:
- **Profile** — who is this person? What's their role, expertise, accountability?
- **Context** — how do they use the product? What's their environment: at a desk, on mobile, in the middle of an event, under a deadline?
- **North star** — what should they feel after each interaction with this product?
- **Tone markers** — 3–5 descriptors that capture the right vibe for this user (e.g., "terse and direct", "warm but efficient", "ultra-concise, time-critical")

Use these patterns as a starting point. The team will know their users better than any template does.

**Register A — Operator / Admin / Creator:** Runs the platform. Domain expert. Accountable for outcomes. Needs precision. Hates hand-holding. Empty states push toward action.

**Register B — User / Participant / Reviewer:** Using the product but not administering it. Less context, less ability to fix problems. Needs one clear next step and an escalation path when things go wrong.

**Register C — Mobile / Real-time / High-urgency:** Using the product in the moment: at an event, during a live session, one hand, small screen, high cognitive load. Time and location beat everything. Ultra-concise.

Not every product needs all three. If the product only has power users (e.g., a tool only IT administrators use), it may only need Register A.

After gathering registers, summarise each one back to the team. Confirm before moving to tone calibration.

---

## Step 3 — Tone position

Calibrate where this product sits on the 4 Compass tone dimensions, for each register. Read `references/VOICE_RULES.md` for the valid range on each dimension and the industry calibration starting points.

Walk the team through each dimension. Propose a starting position based on the industry and stakes from Step 1, then let them adjust. The reason to do it this way: many teams don't have intuitive opinions about "6/10 formality" — they have opinions about whether a specific example sounds right. Anchor the conversation in examples from `references/VOICE_RULES.md` and let the numbers follow from agreement on the copy.

The four dimensions to calibrate:
1. **Funny ↔ Serious** — valid range 4–8 (default 6)
2. **Formal ↔ Casual** — valid range 3–8 (default 5)
3. **Concise ↔ Detailed** — valid range 2–7 (default 4)
4. **Respectful ↔ Irreverent** — valid range 5–1 (default 3; lower = more respectful)

If the product spans industries with very different formality expectations (e.g., it serves both Life Sciences and Retail users), ask whether a single tone position covers all users or whether different user groups need separate calibration.

---

## Step 4 — Terminology

Ask the team about the words that define their product's language:

- **Core terms** — 5–8 important product-specific terms. What do users and the team call the main objects and actions? (e.g., "segment", "sync", "session", "booking slot", "workflow")
- **Terms to standardise away from** — what do people sometimes say that you want to move away from? (e.g., "ticket" when you mean "session", "push" when you mean "sync")
- **Terms that confuse** — any words that mean something different inside the product than in general usage?

Generate a terminology table:

```
| Concept | Use | Never use | Why |
|---|---|---|---|
```

After showing the table, ask: "Does this capture the most important terms? Anything missing or wrong?" Adjust before moving to examples.

---

## Step 5 — Microcopy examples

Generate copy examples for each register. This is the most valuable part of the session — it takes the abstract tone decisions from Steps 2–4 and makes them concrete and testable.

For each register, generate examples covering:
- **Error / failure** — something went wrong; what do we say?
- **Success / confirmation** — something completed; how do we confirm it?
- **Empty state** — the user lands on a screen with no content; how do we orient them?
- **CTA (primary action)** — the main thing we want users to do on a screen
- **Notification or alert** — something the user needs to know about
- **Destructive action** — something irreversible (if relevant to this product)
- **Onboarding / first-time use** — the user sees a feature for the first time (if relevant)

For each example, show: the context, the copy, and a brief rationale explaining why this copy fits this register and tone position.

Apply these rules to every example:
- Sentence case (not title case)
- No periods on CTAs, button labels, headings
- Gender-neutral pronouns (they / their / them)
- No "please" in CTAs or error messages
- No emoji
- Active voice, explicit pronouns, no idioms (translatability)

After showing all examples, ask: "Does this sound like your product and your users? Any examples that feel off?" Adjust based on feedback.

---

## Generating the guide

Once all five steps are confirmed, generate the product voice guide using `references/GUIDE_TEMPLATE.md` as the structure.

**Filename**: `[product-name]-voice-guide.md` (lowercase, hyphenated — e.g., `globallink-events-voice-guide.md`)
**Save to**: the product's own repository. The guide should live where the team will actually use it — typically a `docs/`, `content/`, or `design/` folder within the product repo. Ask the team where they keep design documentation if unsure.

After saving, share a link to the file and give the team a one-paragraph summary of what's in it. Remind them of two things:
1. The guide is designed to be used alongside the `globallink-voice` skill — when writing copy, load that skill and point it to this guide. It will apply both layers together.
2. It should be reviewed quarterly, and any time a new user type or major feature is added. The review cadence is already documented at the bottom of the guide.

---

## If the team gets stuck

- **Tone position feels too abstract**: Show two short copy examples from `references/VOICE_RULES.md` — one from each end of the relevant dimension — and ask which feels closer to right.
- **Can't decide on registers**: Ask "Who would be most affected if this product had a bug?" That person is usually Register A.
- **Unsure about stakes**: Ask "What's the worst thing that could happen if copy in this product was wrong or unclear?" The answer will calibrate stakes immediately.
- **Terminology disagreements**: Default to what users call things, not what the team calls things internally. The user's language wins.
