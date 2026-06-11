# Condens Tagger — Tagging Criteria & Decision Rules

A quick reference for deciding **what to tag**, **how many tags to apply**, and **when to skip**.

---

## Before tagging — goals & project tags

The very first thing Claude does is ask for the study's research goals. You can either type them out or share the Condens project page link so Claude reads them directly.

From the goals, Claude derives **project tag pairs** — binary or spectrum tags scoped to the current project (not shared with other projects). Each pair captures whether a goal was met or not:

| Example goal | Project tags derived |
|---|---|
| Is the tool usable without guidance? | `Usable without guidance` / `Not usable without guidance` |
| Do users trust the AI output? | `Trusts AI output` / `Distrusts AI output` |
| Can users find the feature unprompted? | `Feature discovered unprompted` / `Feature not discovered unprompted` |

Claude proposes the tags and waits for confirmation before creating them. Once confirmed, they are created as **project tags** in Condens (not global tags) and applied to highlights where the evidence directly speaks to that goal.

---

## What deserves a tag

Tag a passage when it contains a clear, quotable signal. Ask: *would this be useful to a researcher filtering by this tag in future?*

| Signal type | Tag it if… |
|---|---|
| Pain point / frustration | The user expresses difficulty, confusion, or unmet expectation |
| Positive finding | The user expresses approval, delight, or ease — specific enough to be actionable |
| Feature request | The user explicitly asks for something, or implies a clear need |
| Behaviour pattern | The user does something unexpected or revealing — regardless of whether they comment on it |
| Mental model mismatch | The user's assumption about how something works differs from how it actually works |
| Workaround | The user describes a workaround or compensating behaviour |
| Task outcome | Task was completed, failed, partially completed, or skipped (usability tests only) |

---

## What to skip

- Pleasantries, introductions, and session logistics ("thanks for joining", "can you share your screen")
- Moderator-only speech with no user response
- Vague or ambiguous statements that lack enough context to be meaningful ("it was fine", "I guess")
- Background information with no direct research signal

---

## How many tags per highlight

- **Typical range: 2–4 tags**
- Always include the relevant **Product** tag if the session is product-specific
- Add a **Task outcome** tag (Success / Failure / Partial Success / Skipped) for usability test moments — omit for shadowing, demos, interviews, and readouts
- Don't force extra tags to hit a number — 1 precise tag beats 3 vague ones

---

## Tag selection rules

1. **Exact match only** — spelling and casing must match the taxonomy exactly
2. **Most specific first** — prefer a specific tag over a generic parent category when both could apply
3. **Multiple themes in one passage** — if a quote covers two distinct signals, consider splitting into two shorter highlights rather than stacking 5+ tags onto one
4. **Tag not found** — note it silently and propose it as a new tag at the end (Step 4), don't skip the passage

---

## Passage selection rules

- Choose the **tightest, most quotable** 1–2 sentences that carry the signal
- For task-related moments in usability tests, extend the selection **upward to include the researcher's question** for context
- Avoid over-selecting: grabbing 10 lines when 2 lines carry the insight makes the highlight hard to scan in the repository

---

## Summary-based vs. full transcript

| Mode | When to use |
|---|---|
| Summary-based (default) | Standard sessions — efficient, covers key themes |
| Full transcript pass | Requested by the user, or when the AI summary is absent or shallow |

In full transcript mode: read the entire transcript before tagging anything. For sessions over 60 minutes, read in two halves first.

---

## Session type exceptions

| Session type | Skip these tags |
|---|---|
| Shadowing / Demo / Readout | Task Success / Task Failure / Task Partial Success / Task Skipped |
| Non-English transcript | Same criteria apply — tag names must still match Condens exactly (usually English) |

---

## New tag threshold

Propose a new tag when:
- A theme recurs and no existing tag captures it
- The gap is specific enough to be a useful filter in future searches
- It belongs clearly to an existing category

Don't propose new tags for one-off, highly session-specific content unlikely to recur.
