---
name: research-readout
description: >
  Use this skill whenever anyone on the team is preparing, writing, or reviewing a research readout,
  report, or findings presentation. Triggers include: "I finished the research and need to write the
  report", "help me structure the findings", "I need to present results to the PM", "how do I write
  the executive summary", "my findings are ready but I don't know how to present them", or any moment
  after fieldwork is done and the team needs to communicate what they learned. Also triggers when
  reviewing an existing report that lacks clear takeaways, business impact, or actionable proposals.
  This skill focuses on content and synthesis — not visual presentation.
---

**Version:** 1.0.0 | **Author:** TechOps Experience Design
**Last Updated:** 2026-05-18 | **Workspace:** TransPerfect User Research (Condens)

# Research Readout Skill

A guide for turning research findings into clear, actionable readouts that PMs and business stakeholders can actually use to make decisions.

---

## How Claude Should Behave When This Skill Is Active

Claude's role is to help the researcher structure and communicate what they already know — not to generate, invent, or fill in content. Everything in the readout must come from the researcher: the findings, the impact, the proposals, the business connections. Claude does not have access to the research sessions, the product context, or the team's knowledge. It cannot supply what the researcher hasn't provided.

**The default posture is: ask first, structure together, never invent.**

1. **Ask who the audience is before anything else.** A readout for a PM working on the product daily is different from one for a business stakeholder who has no product context. Don't proceed without knowing this — the framing, level of detail, and amount of background all depend on the answer.

2. **Ask what decision this readout needs to support.** Research exists to inform decisions. If the researcher can't name the decision, help them find it before writing anything. A readout without a decision to support is just a document.

3. **Ask the researcher to share their findings before suggesting any structure.** Don't propose a readout shape until you understand what the researcher actually learned. Structure should serve the findings, not the other way around.

4. **Work only with what the researcher provides.** If a section requires information the researcher hasn't given — the business impact of a finding, the reason behind a user behavior, a recommendation — ask for it. Never fill the gap with assumptions or plausible-sounding content. A blank that gets flagged is better than an invention that gets published.

5. **Push for synthesis by asking questions, not by supplying answers.** When a finding reads as pure observation ("4/6 users struggled with X"), ask: "what does that mean for the product or the business?" and "what would you suggest based on this?" The researcher has the answer — Claude's job is to make sure it gets surfaced and written down.

6. **Flag when impact is missing, but don't invent it.** If a finding has no consequence attached, name the gap and ask the researcher to fill it. Do not write a plausible impact statement based on what seems likely. The researcher was in the sessions — Claude was not.

7. **Only draft when explicitly asked.** If the researcher asks Claude to help write a section, do it using only the information they have provided — clearly marked as a draft. Always invite correction. Flag any place where Claude had to make an assumption to complete the draft, so the researcher can review and correct it.

8. **Keep it lean.** A readout that is too long won't be read. Help the researcher prioritize what matters most for the audience, and question anything that doesn't serve the decision.

---

## Quick Start

**Readout for a PM (working on the product):**
Ask for → audience confirmation, decision to support, original goals. Then: executive summary → key findings with impact → prioritized proposals → next steps.

**Readout for a business stakeholder (less product context):**
Ask for → audience confirmation, what they care about (revenue, retention, risk). Then: business context → what we learned → why it matters → what we recommend. Less task detail, more strategic framing.

**Not sure where to start?**
Tell Claude: who is reading this, what decision it needs to support, and what the 2-3 most important things you learned are. Claude will help structure from there.

---

## Why Synthesis Is the Hard Part

Researchers often produce excellent analysis — detailed task breakdowns, well-tagged quotes, accurate observations. The gap is in synthesis: connecting what happened to why it matters and what to do about it.

The difference:

| What the researcher writes (observation only) | What the readout needs (observation + impact + direction) |
|---|---|
| "4/6 users couldn't find the forwarding option" | "4/6 users couldn't find the forwarding option — [researcher adds: what this means for support / drop-off / launch readiness] — [researcher adds: what the team should do about it]" |
| "Users preferred the form over the AI prompt (46% vs 17%)" | "Users preferred the form over the AI prompt — [researcher adds: why, based on what they said] — [researcher adds: what this means for how we introduce the feature]" |
| "Awareness of pricing tiers was critically low" | "Awareness of pricing tiers was critically low — [researcher adds: what this blocks or costs the business] — [researcher adds: where the intervention should happen]" |

The right column cannot be completed by Claude. Only the researcher knows what the finding means for this product, this team, and this moment. Claude's job is to ask the questions that make the researcher write it.

---

## Readout Structure

### 1. Metadata Block

Fill this in first. It anchors the readout in Condens and makes it findable.

```
Published date:
Product:
Researcher(s):
PM:
Stakeholders:
Designer:
Method:
Status: [Draft / Review / Published]
Study dates:
```

---

### 2. 🎯 Goals

Restate the research goals from the plan. This reminds the audience what questions the study was designed to answer and lets them assess whether the findings actually address them.

If goals shifted during the study, note it briefly here.

---

### 3. 📌 Method + Participants

One short paragraph. State what you did and who you did it with. Include participant count and any relevant diversity criteria (role, industry, experience level).

This section should be short — it's context, not the story.

---

### 4. 📄 Executive Summary

**This is the most important section.** It should stand alone. A stakeholder who only reads this section should walk away knowing:

- What the study found (the headline, not the detail)
- Why it matters for the product or business
- What the team recommends doing about it

**Structure:**
- 3–5 bullet points maximum
- Each bullet = one key finding + its business or product impact
- End with the top recommendation or the most urgent decision

**TechOps pattern:** The GL Share Go-to-Core report has the strongest executive summary in the archive. It connects findings directly to revenue implications and names a strategic recommendation ("efforts need to focus on awareness first"). Use it as a reference → Condens: *Share - Discover opportunities for GO to convert to Core*

**What to avoid:**
- Listing every finding (that's what the body is for)
- Observations without impact ("users had trouble with X" — so what?)
- Vague recommendations ("we should improve the UX")

---

### 5. 🔍 Findings

The body of the report. Each finding section should follow this pattern:

**Finding = Observation + Evidence + Impact + Direction**

```
[Finding headline — one sentence stating what you learned]

Observation: What happened. Specific. Include numbers when available.
             → Comes from: the researcher's data and session notes.

Evidence:    Quote, task result, or data point that supports it.
             → Comes from: actual sessions, recordings, or survey results.

Impact:      What this means for the product, user, or business.
             → Comes from: the researcher's judgment and product knowledge.
             → Claude will ask for this if it's missing. Claude will not invent it.

Direction:   What it suggests the team should do.
             → Comes from: the researcher's recommendation.
             → Claude will ask for this if it's missing. Claude will not invent it.
```

**TechOps priority system — use consistently:**
- 🔴 Major — critical to address, blocks progress or has significant user/business impact
- 🟠 Medium — important but not urgent
- 🟢 Minor — nice to have, low risk if not addressed

**On balance:** Not every finding needs all four elements developed in full. Use judgment. A minor finding might just need observation + direction. A major finding needs all four.

**On quotes:** One strong quote per finding is usually enough. A quote illustrates — it doesn't replace synthesis.

**On tasks (for UT reports):** Task results go here, structured as: task description → success rate → what went wrong → what it means. Don't just report pass/fail — explain the implication.

---

### 6. 🏹 Conclusions and Proposals

Synthesize across findings. This is where patterns across individual observations become strategic direction.

**Structure:**
- Group proposals by priority (🔴 / 🟠 / 🟢)
- Each proposal = a clear, specific action (not a vague suggestion)
- Where relevant, note what needs to be decided vs. what the team can act on immediately

**What makes a good proposal:**
- ✅ "Revisit the forwarding permission label and placement before launch — 4/6 users couldn't find it without assistance"
- ✅ "Focus awareness-building efforts on the personal share link entry point — it's the most common interaction path and currently does no upselling"
- ❌ "Improve the onboarding experience"
- ❌ "Consider updating the copy"

---

### 7. 🔜 Next Steps

Who does what, and when. Keep it short.

Include:
- Research team actions (integrate in AHA, follow-up studies needed)
- Product/design actions (what the team is being asked to do)
- Open questions that need a decision from the PM or stakeholders

---

### 8. Appendix (optional)

Raw data, full quote sets, participant breakdowns, task-by-task detail for those who want to go deeper. Move anything that's evidence-level (not insight-level) here to keep the body clean.

---

## Common Failure Modes

**Claude inventing content the researcher didn't provide:**
Claude does not know what happened in the sessions. It does not know the product roadmap, the business context, or what the team has already tried. If Claude produces impact statements, proposals, or business connections that the researcher didn't give it — those are inventions, not findings. Review everything Claude drafts against the actual research data before publishing.

**Executive summary that's a contents page:**
Listing what sections the report contains is not a summary. A summary tells the audience what they need to know and what to do about it.

**Findings without impact:**
"X% of users did Y" is an observation. Without the "therefore" attached, it's not a finding — it's a data point. Every observation needs a consequence.

**Proposals that are vague:**
"Improve the UX of the onboarding flow" is not actionable. Name the specific problem, the specific screen or interaction, and the specific direction. The PM shouldn't have to interpret it.

**Too much detail for the audience:**
A business stakeholder doesn't need task-by-task UT results. A PM working on the product does. Know who you're writing for and cut accordingly.

**Missing the business connection:**
Research findings that don't connect to revenue, retention, conversion, support load, or user trust are harder for stakeholders to act on. Ask yourself: what does this finding mean for the business? Even qualitative studies should have an answer to this.

**AI-generated summaries used without review:**
Condens generates AI summaries for reports. These are starting points, not finished synthesis. Always review and rewrite them. They tend to describe what the study covered, not what it means.

---

## Reference Files and Live Data

**Condens (primary source)** — Check Condens for existing reports on the same product before starting. The team has a deep archive. Strong synthesis examples to look at:
- *Share - Discover opportunities for GO to convert to Core* — strongest executive summary + business impact framing
- *GL Live - Preference test and Mental Models* — good actionable insights structure (🏹 markers)
- *March 2026 - ReefCentral Usage Final Report* — good use of 🔴/🟠/🟢 priority system in conclusions

→ `references/EXAMPLES.md` — Annotated readout examples with notes on what works and why. Load when drafting the executive summary or conclusions section.
