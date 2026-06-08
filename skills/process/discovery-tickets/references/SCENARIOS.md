# Discovery Ticket Scenarios

How to handle the four most common messy situations. Each scenario includes what to watch for, how to handle it in the session, and how to document it in the ticket so the problem is visible rather than hidden.

---

## Scenario 1 — No user research yet

**What it looks like**

The PM says "let's start design now, we'll validate later." There's no research to cite in the Feature ticket. The team is working from assumptions, stakeholder input, or support data — not validated user insight.

**Why it matters**

A Feature ticket that states assumptions as facts misleads everyone who reads it. The risk is that discovery work starts on a shaky foundation and nobody notices until much later.

**How to handle it in the session**

Don't leave "User insights and findings" blank or invent something. Instead:

1. Ask: "What are you basing this on? Who told you this was a problem?"
2. Get the source: PM feedback, support tickets, stakeholder request, benchmark data, prior research in a related area.
3. Document it explicitly as an assumption.

**How to write it in the ticket**

In "User insights and findings":
```
Assumption based on [source — e.g., "PM feedback from Q1 stakeholder review"]: [statement of the assumed problem].
Validation planned: [Research PBI / unmoderated test / survey] — [when, e.g., "before design moves to hi-fi"].
```

**GO / NO-GO guidance**

This is usually a GO — but only if the assumption is clearly documented and a validation plan exists. A Research PBI should be linked or planned.

If the team can't articulate even a basic assumption ("we just think this needs improving"), that's a NO-GO. Document the specific blocker: "Problem statement needs to be defined before discovery can start."

---

## Scenario 2 — Vague business ask

**What it looks like**

The PM has given a direction like "improve onboarding", "make the dashboard more useful", or "fix the workflow." No specific screens. No specific user problem. No success metric. Just a direction.

**Why it matters**

A vague ask makes it impossible to bound scope, write acceptance criteria, or know when you're done. Any work you do is technically "in scope" — and that means no scope at all.

**How to handle it in the session**

Don't smooth over the vagueness. Surface it. Ask:

- "What would 'improved onboarding' actually look like? What's the specific gap right now?"
- "Which users are affected? Which part of the flow?"
- "How will you know if it's fixed? What would you measure?"
- "What's the worst thing that happens if this doesn't change?"

If the PM can't answer these, the problem statement isn't ready.

**How to write it in the ticket**

In "Problem statement":
```
[Write what you do know, even if partial.] 
Note: Problem statement is not yet specific enough to bound discovery scope. Specific gap and affected user group TBC before design work starts.
```

In "GO / NO-GO":
```
- [ ] NO — Blocker: Problem statement is too broad to scope discovery work.
  Next step: PM to define specific user gap and target screen/flow by [date].
```

**What not to do**

Don't invent a problem statement to fill the gap. Don't restate the vague ask as if it were specific ("improve onboarding" → "users need a better onboarding experience" is still vague). A ticket that reads as confident when it isn't is worse than a ticket that says "we don't know yet."

---

## Scenario 3 — Undisclosed constraint discovered mid-work

**What it looks like**

Mid-design (or mid-research), the team discovers a constraint nobody mentioned upfront: a third-party tool has limitations, legal has a requirement, an integration won't support a specific pattern, or another team owns a component and won't change it.

**Why it matters**

Design decisions made without knowing the constraint may be invalid. If the constraint affects the problem framing — not just a design detail — it may change what's in scope entirely.

**How to handle it in the session**

When a constraint surfaces:

1. Ask whether it affects the problem framing or just the solution space.
   - If it only constrains solution options: document it in Constraints and continue.
   - If it changes what can actually be solved: pause and resurface as a GO/NO-GO blocker.

2. Ask who needs to confirm the constraint. Often constraints are reported secondhand ("I heard legal won't allow…") and need verification before acting on them.

**How to write it in the ticket**

In "Constraints":
```
- [Type — Technical / Legal / Design]: [Constraint statement].
  Source: [Who told you / where to verify]. Confirmed: [Yes / Pending confirmation from X].
```

If the constraint invalidates previous decisions, add a note in "Assumptions and unknowns":
```
NEW: [Constraint] was identified after design started. [Design decision X] may need to be revisited. 
Confirmation pending from [person/team] by [date].
```

**GO / NO-GO guidance**

If the constraint is confirmed and the current design direction is still viable: GO, with constraints documented.

If the constraint invalidates the current direction or is still unconfirmed and significant: NO-GO until confirmed. Don't keep building on an unknown foundation.

---

## Scenario 4 — Imperfect handoff to development

**What it looks like**

Design is "done" — but when the team looks closely, there are open questions: edge cases that aren't designed, behaviour for empty states that was assumed but not specified, an interaction that was described verbally but not documented, or a component state that exists in Figma but isn't annotated.

**Why it matters**

Developers will make decisions to fill the gaps. Sometimes those decisions are fine. Often they're not what the designer intended — and they're discovered in QA, or worse, in production.

**How to handle it in the session**

Before marking a Design PBI done, run through the acceptance criteria checklist and ask specifically:

- "Are all states covered — empty, error, loading, edge cases?"
- "Is responsive behaviour specified or assumed?"
- "Are there any interactions or decisions you described verbally but haven't written down?"
- "Has the tech lead confirmed feasibility on anything non-standard?"

Surface gaps as open questions, not as things to fix later.

**How to write it in the ticket**

In "Open questions" (on the Design PBI or as comments on the ticket):
```
- [Specific gap]: [What's unresolved]. Owner: [Designer / PM / Dev]. Needed before: [dev starts / sprint end].
```

In Acceptance Criteria: mark specific items as incomplete rather than deleting them. A checkbox left unchecked is more honest than removing the criterion.

```
- [ ] Edge cases and error states covered — NOTE: [specific scenario] still needs design. Blocked by [reason].
```

**When to hold the PBI vs. ship it**

If the gap is minor and the developer can make a reasonable call: document it in comments, hand off, and plan a follow-up.

If the gap affects a core flow or a high-stakes interaction: hold the PBI. An imperfect handoff in a high-stakes area creates rework that costs more than the delay.

The rule: if you'd be uncomfortable if a developer made the wrong call on this gap, it needs to be resolved before handoff.
