---
name: research-plan
description: Use this skill whenever anyone on the team touches a research study — from the first conversation about scoping to reviewing a draft plan to choosing a method. Triggers include: starting a new study,writing or refining research goals, choosing a method, defining participants, aligning with a PM or stakeholder before fieldwork, or asking "what should go in the plan?" Activate also when someone says "I'm planning a study on X", "can you help me scope this?", "I'm not sure what method to use", "my goals feel too broad", or shares a draft plan for review — even if they don't use the words "research plan".
---

**Version:** 1.1.0 | **Author:** TechOps Experience Design
**Last Updated:** 2026-05-18

# Research Plan Skill

A guide for writing research plans that align the team, set clear expectations, and make the research itself easier to execute.

---

## How Claude Should Behave When This Skill Is Active

Claude's role here is to support thinking, not replace it. Researchers and designers have product context, team history, and user knowledge that Claude does not have. Claude should ask questions, flag issues, and offer structure — but never fill in gaps with assumptions or produce a plan that looks complete when it isn't.

**The default posture is: ask first, draft second.**

1. **Ask for product context before doing anything** — what decision will this research inform? What is the PM or stakeholder waiting to know? What does the team already believe to be true? Don't start writing goals until this is clear. If the context is thin, ask more questions rather than inferring.

2. **Prompt a Condens check before writing anything** — remind the researcher to look for existing studies on the same product or topic before starting fresh. The team has real archives. This can be done directly in Condens or by asking a researcher who knows the archive. Claude cannot do this check on behalf of the team — the researcher needs to do it.

3. **Ask questions when anything is unclear** — if the product, the user, the decision, or the scope is ambiguous, ask. Do not make assumptions to fill the gap. A wrong assumption in a research plan causes problems downstream that are expensive to fix.

4. **Check goal quality by asking, not rewriting** — if goals look task-framed or too broad, flag it and ask the researcher what they're actually trying to learn. Don't rewrite goals unilaterally. The researcher has context Claude doesn't have.

5. **Flag method-goal mismatches as a question** — rather than declaring a mismatch, ask: "This method tends to answer X — is that what you need, or are you trying to get at Y?" Let the researcher decide.

6. **Flag missing sections without filling them in** — point out what's missing (assumptions, success criteria, deliverables) and ask if the researcher wants to address them, rather than generating placeholder content.

7. **Only draft when explicitly asked** — if the researcher asks Claude to draft a section, do it clearly marked as a starting point, not a finished output. Always invite the researcher to correct, reframe, or reject it. They know more than Claude does about their product and their users.

8. **Keep it lean** — the plan is a tool for alignment, not a form-filling exercise. Help write the minimum that creates shared understanding.

9. **Surface Condens examples as prompts, not templates** — when relevant, reference similar studies from Condens or `references/EXAMPLES.md` to prompt thinking. Present them as "here's how the team approached something similar" not "here's what you should do".

---

## Quick Start

**For a quick evaluative study (time-pressured):**
Fill in the metadata block → write 2–3 goals → confirm method → define participants → use the minimal checklist. Skip assumptions and success criteria if you're truly time-pressed, but note they're missing.

**For a generative or multi-method study:**
Work through all 8 sections. Use the goal/question table format. Define assumptions explicitly. State deliverables before fieldwork starts.

**Not sure where to start?**
Tell Claude: what product, what decision needs to be made, and how much time you have. Claude will draft the goals section first and work outward from there.

---

## Why the Plan Matters

A research plan is not bureaucracy — it's a forcing function. It gets everyone's assumptions out on paper before research starts. Without one, you risk:
- Scope creep mid-study
- Mismatched expectations (stakeholders expected a journey map, you delivered a report)
- Inability to focus during sessions because goals were too broad
- Research that doesn't connect back to a product decision

The plan is also how you get buy-in. Sharing it before fieldwork invites pushback early, when it's still cheap to change course.

---

## Plan Structure

### 1. Metadata Block

Always fill this in first. It anchors the plan in Condens and makes it findable later.

```
Published date:
Product:
Researcher(s):
PM:
Stakeholders:
Designer:
Method:
Status: [Planning / In progress / Finished]
Start date:
End date:
```

**TechOps convention:** Include links to related artifacts — previous research on the same topic, the script, the Figma prototype if applicable.

---

### 2. Background / Context

1–2 sentences on what prompted this research. What decision needs to be made? What product moment is this tied to?

This section helps new team members and future researchers understand *why* this study happened. It also forces the researcher to connect the study to a real product question before writing a single goal.

---

### 3. 🎯 Goals

The most important section. Goals define what the team will **learn**, not what they will **do**.

**How to write a good goal:**
- Start with an action verb: *Understand, Evaluate, Identify, Discover, Validate*
- Describe what you want to know, not the activity
  - ✅ "Understand why users drop off before completing a share"
  - ❌ "Do user interviews about sharing"
- Aim for 3–5 goals per study. More than 5 usually signals scope creep.

**TechOps pattern — versioning goals:**
The team often iterates goals as scope sharpens (v1 → v2 → v3). This is encouraged. Keep earlier versions in the document — they show how thinking evolved and are useful when stakeholders ask why scope changed.

**Optional: goal/question table**
For generative or stakeholder-facing plans, map each goal to a driving question:

| 🎯 Goal | ❓ Driving question |
|---|---|
| Understand the type of feedback clients leave | What is the feedback about, in general? |
| Identify how clients can leave feedback | What are the different ways clients can leave feedback? |

See `references/EXAMPLES.md` → *Example 2* for a full goal/question table from a real TechOps study.

**Two additions from best practice (not yet standard in TechOps plans, worth adding):**

*Assumptions:* List what the team believes to be true going in. Being explicit helps during analysis — you can track which assumptions were confirmed, contradicted, or incomplete.

*Success criteria:* What does "done" look like for this study? What would make it successful? This prevents the "we did the research but no one used it" outcome. See `references/EXAMPLES.md` → *Example 3* for a strong expected-outcomes statement.

---

### 4. 📡 Method

State the research method(s) clearly. Match the method to the goal type:

| Goal type | Appropriate methods |
|---|---|
| Understand behaviors / mental models | User interviews, shadowing, diary studies |
| Evaluate usability | Usability testing (moderated or unmoderated), UT with prototype |
| Validate a concept or preference | Preference test, A/B test, concept test |
| Measure satisfaction or scale | Survey, NPS |
| Understand workflows in context | Shadowing, contextual inquiry |

**TechOps method vocabulary (use these consistently in Condens for filtering):**
User interviews · User Testing · Shadowing · Unmoderated testing · Preference test · Survey · Generative research

If combining methods (e.g., interviews + prototype test), explain the logic: which method answers which goal.

---

### 5. 🤸 Participants

Define who you're recruiting and why. Include:
- **Type / role** — who they are (e.g. "client users of GL Share", "production PMs", "vendors")
- **Quantity** — be specific. If unknown, write "TBD, target N"
- **Recruitment source** — user club, internal team, client contacts, external panel
- **Incentive** — amount and format (e.g. "$50 gift card via user club")
- **Diversity criteria** — any relevant variation to ensure (industry, role, experience level, region)

**TechOps convention:** For unmoderated tests, note participant count prominently — it affects how findings are weighted. See `references/EXAMPLES.md` → *Participant Descriptions* section for real patterns.

---

### 6. 📝 Steps / Checklist

A lightweight execution checklist. Use checkboxes so the researcher and PM can track progress at a glance.

**Minimal (quick evaluative study):**
- [ ] Goals defined and aligned with PM
- [ ] Participants recruited
- [ ] Script reviewed
- [ ] Sessions conducted
- [ ] Report shared

**Standard (moderated UT or interviews):**
- [ ] Kick-off with PM and stakeholders
- [ ] Goals defined (versioned if needed)
- [ ] Participants identified and recruited
- [ ] Script written and reviewed
- [ ] Prototype / materials ready
- [ ] Sessions conducted
- [ ] Analysis
- [ ] Report / readout in Condens
- [ ] Findings shared

**Extended (generative / shadowing / multi-method):**
- [ ] Kick-off
- [ ] Goals (v1 → iterate)
- [ ] Stakeholder alignment on scope
- [ ] Assumptions documented
- [ ] Participants identified and recruited
- [ ] Consent forms prepared
- [ ] Script / discussion guide written
- [ ] Note-taking structure set up in Condens
- [ ] Sessions conducted
- [ ] Debrief after each session
- [ ] Full analysis
- [ ] Deliverables defined (format, audience)
- [ ] Report in Condens
- [ ] Findings shared with stakeholders
- [ ] Next steps / follow-up documented

---

### 7. Deliverables

What will be produced? State format and audience **before fieldwork starts**.

Examples:
- Condens report shared with PM + designer
- Executive summary for leadership
- Figma annotations on the prototype
- Presentation for broader team

**Why this matters:** Stakeholders often assume different outputs. Making this explicit prevents disappointment and ensures the research actually gets used.

---

### 8. Related Links

Always include:
- Link to the script
- Link to previous research on the same topic or product
- Link to Figma prototype (if applicable)
- Link to session recordings folder

---

## Common Failure Modes

**Goals that are actually tasks:**
❌ "Conduct 5 interviews about the booking flow"
✅ "Understand where users lose confidence during the booking flow and why"

**Too many goals:**
If you have 8+ goals, this is probably two studies. Split it or prioritize ruthlessly. Ask: which 3 goals, if answered, would most change the product decision?

**Missing stakeholder alignment:**
Share the plan with the PM before starting. If they read the goals and say "that's not what I expected", that's a win — you caught the mismatch early, not mid-fieldwork.

**Method-goal mismatch:**
A survey won't tell you *why* users abandon. Interviews won't give you statistical confidence. Match the method to what you actually need to know.

**No previous research check:**
Before writing goals, check Condens for related studies on the same product or topic — directly in the tool or by asking a researcher who knows the archive. The team has deep archives — avoid re-asking questions already answered.

**Deliverables undefined:**
If the output format isn't agreed before sessions start, the research often doesn't land. State it in the plan.

---

## Reference Files and Live Data

**Condens (primary source)** — The team's full research archive. Check Condens for existing studies, published artifacts, and past plans whenever starting a new study or reviewing goals. Search by product name, method, or topic. This is always more current than any static file.

→ `references/EXAMPLES.md` — Curated, annotated examples from GL Share, GL Live, and InterAct studies. Use as a quick reference for goal/question table format, participant description patterns, and expected-outcomes statements. Annotations explain *why* each example works.
