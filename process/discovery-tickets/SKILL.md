---
name: discovery-tickets
description: >
  Guides researchers and designers through creating discovery tickets for Azure DevOps — Feature tickets and PBIs (Research, Design, Validation). Use when someone needs to write a Feature ticket, create a Research PBI, write a Design PBI, create a Validation PBI, or isn't sure what level of ticket they need. Trigger with phrases like "help me write a PBI", "I need to create a ticket for this feature", "how do I structure this discovery ticket", "create a research PBI", "write a design ticket", or "I need to document this feature". Also trigger when someone shares a vague task description and needs to turn it into a properly structured ticket.
---

# Discovery Tickets

Guides researchers and designers through creating well-structured discovery tickets for Azure DevOps. Produces ready-to-paste content for Feature tickets and PBIs (Research, Design, Validation).

This skill is a thinking partner, not a form. The goal is clarity and efficiency, not compliance. If a section doesn't apply, skip it. If information is missing, document that it's missing — never pretend to know something you don't.

## Reference files

- `references/TEMPLATES.md` — complete field-by-field templates for Feature tickets and all three PBI types
- `references/SCENARIOS.md` — how to handle the four most common messy situations (no research, vague ask, undisclosed constraints, imperfect handoff)

---

## How to run the session

### Step 1 — Orient

Start by understanding where they are. Ask:

1. **What are we creating today?**
   - A new Feature ticket (and probably some PBIs underneath it)
   - PBIs only — Feature ticket already exists
   - Just one specific PBI

2. **Describe the work in one or two sentences.** This gives context for everything that follows. Don't demand a polished brief — a rough description is enough to start.

3. **Which PBI types will they need?** Research / Design / Validation — or a combination. Not every feature needs all three.

Summarise what you've heard and confirm before moving on.

---

### Step 2 — Feature ticket (skip if Feature already exists)

Walk through each section conversationally. Don't present the full template at once — move section by section and ask targeted questions. Read `references/TEMPLATES.md` for the full field list.

**What and why**
- "What's the problem you're solving? What's the actual gap for users?"
- "What do you know from research or data? A quote, a number, an observation?"
- If there's no research: "What's the assumption you're working from? Who told you this was a problem?"
- "Which business or product goal does this support?"
- "How will you know if this worked? What's the primary metric?"

**Scope and constraints**
- "What's specifically in scope for this discovery phase? Try to name the screens or flows."
- "What are you explicitly NOT doing — and why?"
- "Any constraints the team needs to know about? Technical, timeline, regulatory?"
- If a constraint will affect design decisions, flag it explicitly.

**Assumptions and unknowns**
- "What are you confident about? What data or feedback backs that up?"
- "What are you still figuring out? What gaps remain?"
- **GO / NO-GO**: "Do you have enough to start discovery work?"
  - YES: even with gaps, name what lets you move forward
  - NO: name the specific blocker and what needs to happen first

If the problem statement is vague, don't paper over it. Surface the vagueness explicitly in the ticket — see `references/SCENARIOS.md` (Scenario 2).

Summarise the full Feature ticket back before moving to PBIs.

---

### Step 3 — Definition of Ready check

Before drafting any PBI, run through the Definition of Ready. If something is missing, surface it rather than skipping it:

- [ ] Goal is clear and Feature ticket is linked (or will be)
- [ ] Scope is bounded — what are they NOT doing in this PBI?
- [ ] Acceptance criteria can be defined
- [ ] Owner is assigned
- [ ] Timeline is realistic
- [ ] No unaddressed blockers

If blockers exist, document them in the PBI rather than assuming they'll resolve themselves.

---

### Step 4 — PBI content

Work through each PBI the user needs. Read `references/TEMPLATES.md` for the complete field structure for each type.

For each PBI, gather:

**Research PBI**
- What specific research question does this PBI answer? (The Feature explains *why*; this PBI focuses on *what we need to learn*)
- Method: user interviews / usability test / survey / competitive analysis / heuristic evaluation?
- Who are the participants? How many? How will they recruit?
- Timeline: recruitment, sessions, analysis, report delivery
- Acceptance criteria: what has to be true for this PBI to be done?
- Deliverables: interview guide, synthesis doc, findings presentation, links to recordings

**Design PBI**
- What specific design outcome? (screen, flow, component — be specific)
- Design scope: lo-fi exploration / interactive prototype / full responsive spec / component?
- User stories or requirements — or a link to PM's requirements if they're documented elsewhere
- Constraints specific to this PBI (timeline, dependencies, Compass compliance)
- Acceptance criteria: which screens, which states, which reviews needed?
- Deliverables: Figma file link, design decisions documented

**Validation PBI**
- What are they validating — and what's the success threshold?
- Method: moderated / unmoderated, and why
- Participants: who, how many, desktop/mobile mix
- What does pass look like? What triggers an iterate vs. ship decision?
- Deliverables: test results, synthesis, recommendations

For each PBI, also ask: "Is this PBI sized right? If it's too big, should we add tasks inside it to track sub-work?"

---

### Step 5 — Output

Once all content is gathered and confirmed, produce the formatted ticket content.

**Format rules for Azure DevOps:**
- Each ticket is a separate block, clearly labelled at the top
- Use `##` for section headers within the description field
- Use `**bold**` for field labels
- Use `- [ ]` for acceptance criteria checkboxes
- Mark placeholder fields with `[Add link]` or `[TBC]`
- Acceptance Criteria in PBIs goes in a **separate block** — Azure DevOps has a dedicated Acceptance Criteria field separate from Description

Present tickets in this order:
1. Feature ticket (if created)
2. Research PBI (if applicable)
3. Design PBI (if applicable)
4. Validation PBI (if applicable)

Each ticket starts with a clear divider and type label:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FEATURE TICKET — [Feature name]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[content]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RESEARCH PBI — [short title]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESCRIPTION FIELD:
[content]

ACCEPTANCE CRITERIA FIELD:
[checkboxes]
```

After presenting the output, ask: "Does this capture everything? Anything that feels off or missing?" Adjust before the session ends.

---

## Common failure modes

**Information is missing.** Never invent it. Either ask a targeted question to surface it, or document it as an explicit unknown in the ticket. A ticket that says "Assumption: X — validation needed" is more honest and useful than one that states X as fact.

**The problem statement is vague.** Don't smooth it over. If the PM said "improve onboarding" without specifics, document that vagueness in the ticket and make it a GO/NO-GO blocker. See `references/SCENARIOS.md`.

**They want to skip sections.** That's fine. The only non-negotiable is: every PBI must have a clear goal, bounded scope, and acceptance criteria. Everything else is optional.

**The scope is too big for one PBI.** Suggest splitting or adding tasks. A design PBI covering 12 screens with 3 responsive breakpoints probably needs sub-tasks to stay trackable.

**They ask what goes at Feature vs PBI level.** The rule: if the answer would be the same whether you're in a Research PBI or a Design PBI, it belongs on the Feature. If it's specific to this piece of work and will change as the work progresses, it belongs on the PBI.
