# Discovery Ticket Templates

Complete field-by-field reference for Feature tickets and all three PBI types. Used by the `discovery-tickets` skill when generating output.

---

## Feature ticket

> Single source of truth for context. Created before discovery starts — usually in a kick-off with the product trio. All PBIs underneath it reference this ticket instead of repeating the same information.

---

**DESCRIPTION FIELD:**

## Problem statement
[1–2 sentences. What user problem are we solving? What's the actual gap?]
*If unclear: "We believe [X], but we need to validate with users."*

## User insights and findings
[Link to research, quote, or data point that supports this work]
*If no research yet: "Assumption based on [PM feedback / stakeholder input / support data]: [X]. Validation planned: [when/how]."*

## Business goal
**Primary goal:** [Which TechOps/product goal does this support?]
**Secondary impact:** [Any secondary effects, if relevant]

## Success metrics
**Primary metric:** [What are we measuring?]
**Measurement:** [How will we know this worked? Where will we look?]

## Scope

**In scope (this discovery phase):**
- [Specific screen, flow, or component — e.g. "Configuration screen, NOT the chatbot design"]

**Out of scope:**
- [What are we explicitly not doing?] — *Why: [reason]*

## Constraints
- **Technical:** [Integrations, limitations, platform requirements]
- **Timeline:** [Key dates or deadlines]
- **Design:** [Anything that constrains design decisions — third-party tools, Compass requirements, accessibility mandates]

## Assumptions and unknowns

**What we're confident about:**
- [Research, feedback, or data that supports moving forward]

**What we're still figuring out:**
- [Open questions, gaps, things that need validation]

## GO / NO-GO
**Do we have enough to start discovery work?**

- [ ] YES — [Explain why you can move forward even with gaps]
- [ ] NO — **Blocker:** [Specific blocker] | **Next step:** [What has to happen first]

---

## Research PBI

> Specific to the research work in this PBI. The Feature ticket holds the *why*; this ticket holds the *what we need to learn* and the *how*.

**Suggested title format:** `UR | [Research goal in plain language]`
*Example: `UR | Understand why users drop off during onboarding`*

---

**DESCRIPTION FIELD:**

## What are we doing?
[1–2 sentences on the specific focus of this research. The Feature link provides broader context.]

## Why are we doing it?
**Business goal:** [From Feature — or brief restatement if no Feature ticket exists]
**User goal:** [What user behaviour or experience are we trying to understand?]
**Related work:** Feature: [link] | Research archive: [Condens link if applicable]

## What we are NOT doing
*Out of scope for this PBI:*
- [Be explicit. This prevents scope creep.]

## Research question(s)
- [Primary question: the one thing this PBI must answer]
- [Secondary questions, if any]

## Methodology
[Usability test / User interviews / Survey / Competitive analysis / Heuristic evaluation / Desk research / Other]
*Rationale: [Why this method for this question?]*

## Participants
- **Target users:** [Who are we researching with?]
- **Sample size:** n=[X]
- **Recruitment plan:** [How will we find them? Internal panel, Maze, agency, PM contact?]
- **Screening criteria:** [Any inclusion/exclusion criteria]

## Research plan
- [ ] Create discussion guide / script
- [ ] Recruit participants
- [ ] Schedule sessions
- [ ] Conduct sessions *(Date range: [X] to [Y])*
- [ ] Synthesise findings
- [ ] Create research report / presentation
- [ ] Share insights with team

## Deliverables
- [ ] Interview guide / script: [link when ready]
- [ ] Session recordings: [storage location]
- [ ] Synthesis document: [Condens link or doc link]
- [ ] Research readout / presentation: [link when ready]
- [ ] Recommendations for next steps

## Timeline
- **Recruitment:** [dates]
- **Sessions:** [dates]
- **Analysis:** [dates]
- **Report delivery:** [date]

## Constraints
- Timeline: [X days / weeks]
- [Any other constraints specific to this PBI]

## Open questions
- [Anything you need to clarify before starting]
*Write "None" if everything is clear.*

**Research estimate:** [1w / 2w / 3w — including recruitment]

---

**ACCEPTANCE CRITERIA FIELD:**

- [ ] Research question answered with confidence
- [ ] Minimum [X] participants interviewed / tested
- [ ] Findings synthesised and documented in Condens
- [ ] Insights are actionable (not just observations)
- [ ] Recommendations documented and shared with PM and stakeholders
- [ ] Product designer briefed and ready to move to design phase

---

## Design PBI

> Specific to the design work in this PBI. Documents the design scope, decisions, iterations, and handoff artefacts for this piece of work only.

**Suggested title format:** `DE | [What is being designed]`
*Example: `DE | Welcome screen + template selection flow`*

---

**DESCRIPTION FIELD:**

Figma WIP: [Add link when you start work]
Aha! link: [Add if there's a related Aha idea]

## What are we doing?
[1–2 sentences on the specific design scope. The Feature link provides broader context.]

## Why are we doing it?
**Business goal:** [From Feature — or brief restatement]
**User goal:** [What problem does this design solve for users?]
**Related work:** Feature: [link] | Research findings: [link]

## What we are NOT doing
*Out of scope for this PBI:*
- [Be explicit. Scope creep in design is common — name what's excluded.]

## Design scope
[What needs to be produced? Check all that apply:]
- [ ] Information architecture / flows
- [ ] Low-fidelity wireframes
- [ ] High-fidelity designs
- [ ] Interactive prototype
- [ ] Responsive variants (desktop / tablet / mobile)
- [ ] Component design / Compass contribution
- [ ] Handoff specs (states, edge cases, accessibility)

## User stories / requirements
- As a [user type], I need to [action] so that [benefit]
- As a [user type], I need to [action] so that [benefit]
*[Or: "PM requirements documented at [link] — referenced here, not duplicated."]*

## Constraints
- **Technical:** [Limitations, integrations, platform constraints]
- **Compass:** [Must use Compass components — or document deviations with rationale]
- **Timeline:** [X days / weeks]
- **Dependencies:** [Other PBIs or decisions this work depends on]

## Open questions
- [Anything you need to clarify with PM or stakeholders before starting]
*Write "None" if everything is clear.*

## Design plan (optional — add when PBI is too big to track without sub-tasks)
- [ ] Information architecture and first concepts
- [ ] PM + tech lead feedback on first ideas
- [ ] Create final designs (desktop + responsive)
- [ ] Accessibility review
- [ ] Organise Figma and add annotations
- [ ] Define what needs to be validated

**Design estimate:** [2h / 4h / 8h / 2d / 1w / 2w]

---

**ACCEPTANCE CRITERIA FIELD:**

- [ ] All required screens designed (specify: [desktop / tablet / mobile])
- [ ] Responsive behaviour specified
- [ ] Edge cases and error states covered
- [ ] Accessibility checklist completed
- [ ] Figma file organised and annotated (follows documentation standard)
- [ ] Design uses Compass components (or deviations documented with rationale)
- [ ] Handoff specs include states, edge cases, and accessibility requirements
- [ ] PM reviewed and approved
- [ ] Tech lead reviewed (feasibility confirmed)

---

## Validation PBI

> Specific to the validation work in this PBI. Documents what is being tested, with whom, what success looks like, and the resulting decision.

**Suggested title format:** `UT | [What is being validated]`
*Example: `UT | Test onboarding flow with new users`*

---

**DESCRIPTION FIELD:**

## What are we doing?
[1–2 sentences on what's being validated. The Feature link provides broader context.]

## Why are we doing it?
**Business goal:** [From Feature — what success metric are we checking?]
**Design goal:** [What does the design aim to achieve? What's the hypothesis?]
**Related work:** Feature: [link] | Design PBI: [link] | Design file: [Figma link]

## What we are NOT doing
*Out of scope for this PBI:*
- [What are we not testing or measuring here?]

## Validation scope
- **What we're testing:** [Specific screens, flows, or interactions]
- **Method:** [Moderated usability test / Unmoderated / A-B test / Survey / Other]
  - *Rationale: [Why this method?]*
- **Participants:** n=[X] | [Desktop / Mobile / Both] | [User type]
- **Recruitment:** [How will participants be found?]

## Success criteria
**What does PASS look like?**
- [Metric 1: e.g. completion rate ≥ 85%]
- [Metric 2: e.g. time-to-complete < X minutes]
- [Qualitative: e.g. no more than 2 participants confused at template selection step]

**Decision rule:**
- PASS → [ship / move to development]
- FAIL → [iterate, then retest] — specific threshold: [define it]

## Timeline
- **Test sessions:** [dates]
- **Analysis:** [dates]
- **Recommendations delivered:** [date]

## Constraints
- Timeline: [X days]
- [Any other constraints for this PBI]

**Validation estimate:** [X days including recruitment and analysis]

---

**ACCEPTANCE CRITERIA FIELD:**

- [ ] [X] participants completed the test
- [ ] Success metrics measured and documented
- [ ] Synthesis completed: what worked, what didn't, why
- [ ] Recommendations documented: iterate or ship — with rationale
- [ ] Results shared with PM and stakeholders
- [ ] Next step agreed and documented in ticket
