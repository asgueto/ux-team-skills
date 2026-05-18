# Research Readout Examples

Real sections from TechOps Condens reports. No single report is perfect — this file pulls the strongest example of each section from different studies and explains what makes it work. Use these as reference when writing or reviewing a specific part of a readout.

---

## Executive Summary

**Best example: Share - Discover opportunities for GO to convert to Core**
→ Condens: [Share - GO to Core](https://share.condens.io/aFMzjQwITobVJCoBlBbGu)

```
- Efforts to increase revenue from Clients of GL Share need to be focused on
  increasing awareness and adoption first.
- Majority of our clients don't perceive enough value and usage to justify
  upgrading. Their file-sharing needs are already covered by their own tools.
- Awareness of the capabilities of GL Share is critically low. They don't know
  about the expiration date, the received shares tab, the analytics, or the tiers.
- Main use case is limited as a fallback tool when their main product doesn't
  allow to send big files.
- Conversion to Core or Enterprise is unlikely to happen without fixing those
  issues first.
```

**Why this works:**
- Each bullet connects an observation to a business consequence. "Awareness is low" is followed by what that means for revenue strategy.
- It makes a clear strategic call: fix awareness before fixing the product. That's a decision the PM can act on.
- It doesn't list all findings — it names the headline and the implication.
- A stakeholder who reads only this section walks away knowing what to do.

**What to avoid (from the same archive):**
The GLTV 2nd Iteration report has a well-structured exec summary but no 🔴 Major conclusion — it was left blank. An executive summary with a gap is worse than a short one. If you don't know the major finding yet, don't publish.

---

## Finding Structure (Observation + Evidence + Impact + Direction)

**Best example: Jan 2024 Report - Stylus - Deposition Billing**
→ Condens: [Stylus Deposition Billing](https://share.condens.io/aYPQlKDCuEnH3cnXjRJ0I)

```
No Integration Between Stylus and Project A
Frequency: Every job

The billing team manually re-enters all job information from Stylus into
Project A. No data flows automatically between systems. This creates:
- Redundant data entry consuming 50%+ of billing time
- High error risk from manual transcription
- Inability to track Project A numbers in Stylus
- Difficult vendor payment inquiries requiring spreadsheet searches
```

**Why this works:**
- The finding headline is specific — not "integration issues" but exactly which two systems and what's missing between them.
- Frequency grounds it immediately: this isn't an edge case, it happens on every job.
- The consequence list is concrete. "50%+ of billing time" is a business cost, not a usability observation.
- A PM reading this knows the scope of the problem without reading the full report.

**What the impact layer adds:**
Compare these two versions of the same observation:

| Without impact | With impact |
|---|---|
| "The billing team manually re-enters data from Stylus into Project A" | "The billing team manually re-enters data from Stylus into Project A — this consumes 50%+ of billing time and creates error risk on every job, while competitors bill 30+ jobs per person per day vs. the team's current 4." |

The second version names the business cost and the competitive gap. That's what makes it actionable.

---

## Conclusions and Priority System

**Best example: SxS User Journey Report**
→ Condens: [SxS User Journey](https://share.condens.io/ayojupdoi6LdZ8L2SEAcy)

```
Major
- Workflow allowing only redaction is needed. Users have adjusted the flow for
  their needs, but SxS should be able to offer this option.
  Note: This point is already being addressed by the redaction-only feature,
  scheduled for Q1 2025.
- General layout should be reviewed to give further options for users.
  One interviewed user suggested a vertically stacked view — this was the
  second most voted feature in the survey.
- Saving mechanisms should be reviewed. Several users have reported crashes,
  time outs, and lack of save, which undermines their work and trust in the product.
- Spellcheck mechanics should be reinstated and reviewed.

Minor
- An onboarding process or user guide should be implemented.
- Zoom should be further developed.
- Loading times should be improved.
```

**Why this works:**
- Each proposal is specific enough to hand to a PM or developer. Not "improve saving" but "saving mechanisms should be reviewed — crashes and time outs undermine trust."
- The note inside the Major section ("already being addressed, Q1 2025") shows the researcher connected findings to what's already in progress. This builds credibility and saves the PM from re-explaining context.
- Minor items are short — they don't need the same depth as major ones.

**What to avoid:**
Vague proposals don't give the team anything to act on:
- ❌ "Improve the onboarding experience"
- ✅ "An onboarding process or user guide should be implemented — 57% of users learned SxS on their own, leading to underuse of available features"

---

## Actionable Insights Inside Findings

**Best example: GL Live - Preference Test and Mental Models**
→ Condens: [GL Live Preference Test](https://share.condens.io/afHIiZyO1pJCcDESRY7hk)

```
🏹 Actionable insights
- When (if) using an AI prompt to request interpretation services, use
  trust-building elements (explanations, previews, reviews, ability to edit).
- Transparency over human intervention: how do we want to communicate the
  absence or presence of a human in this request flow?
- We could allow for the 3 methods and explain the benefits of one or the other.

⚠️ Caution: We are measuring preference, not effectiveness. This will allow
us to pick one method to start with. But to measure which one is best we should
develop multiple methods and see which one is faster, creates less tickets, and
has fewer drop-offs.
```

**Why this works:**
- The 🏹 marker signals to the reader: this is what to do with this finding. It separates the interpretation from the recommendation.
- The ⚠️ caution flag is honest about the limits of the method. It tells the PM what this finding can and cannot support as a decision.
- Both are short — they add direction without inflating the section.

**The caution flag is underused across the archive.**
When a finding has limits (small sample, unmoderated test, one-off request), say so explicitly. It builds trust and prevents findings from being over-applied.

---

## Iteration Comparison (for studies that test a second design)

**Best example: GLTV - 2nd Iteration Landing Marketing Page**
→ Condens: [GLTV 2nd Iteration](https://share.condens.io/a6MLOdsL0jTJGmULXZRQz)

```
| | 1st Iteration | 2nd Iteration |
| Correct understanding of the tool | 33% | 60% |
| Mentions of "bland" branding | 2 | 0 |
| Impressions of missing clarity | 3 mentions | 0 mentions |
| Tone perceived as modern | 3 mentions | 8 mentions |
```

**Why this works:**
- Side-by-side comparison makes progress visible at a glance. The PM doesn't need to read two reports — the delta is right there.
- Numbers are specific. "Improved" means nothing. "33% to 60% correct understanding" means something.
- It's honest about mixed results: interest slightly decreased even though understanding improved. It doesn't cherry-pick.

---

## What No Report Does Well Yet: Business Impact

Across all reports reviewed, business impact is the most consistently missing element. Findings describe what users did or felt, but rarely connect it to what that costs or risks for the business.

**The question every finding should be able to answer:**
> "If we don't fix this, what happens to the product or the business?"

Examples of what that looks like when it's present:
- *Stylus*: "Competitors bill 30+ jobs per person per day vs. the team's current 4" — this is the business cost of the integration gap.
- *Share Go-to-Core*: "Conversion to Core is unlikely without fixing awareness first" — this names what the business is risking if it skips ahead to product changes.

When it's missing:
- *SxS*: "Users prefer to work locally if allowed" — what does this mean for SxS adoption and product investment? The report doesn't say. The researcher knows — it just didn't get written down.

**This is the hardest part, and it can't be filled in by anyone except the researcher.** It requires knowing the product context, the team's goals, and what decisions are actually on the table. That knowledge lives with the researcher — not in the data.

---

## Checklist: Before Publishing a Readout

Use this to check any report before sharing with a PM or stakeholder:

**Executive summary**
- [ ] Stands alone — a reader who only reads this knows the headline, the impact, and the recommendation
- [ ] Each bullet connects an observation to a consequence
- [ ] Ends with the most important decision or action
- [ ] Does not list findings without attaching meaning

**Findings**
- [ ] Each finding has: observation + evidence + impact + direction
- [ ] Impact is stated explicitly — not implied
- [ ] Quotes illustrate, they don't replace synthesis
- [ ] Caution flags are used where the method has limits

**Conclusions**
- [ ] Proposals are specific enough to act on
- [ ] Priority system (🔴/🟠/🟢) is used consistently
- [ ] What needs a decision is separated from what the team can act on now

**Overall**
- [ ] Audience is clear — level of detail matches who will read it
- [ ] Business connection is present somewhere in the report
- [ ] Nothing in the report was invented — all content came from the research
