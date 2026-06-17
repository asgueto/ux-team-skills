---
name: condens-tagger
description: >
  Use this skill whenever the user asks Claude to tag, annotate, or analyse a research session
  inside Condens. Triggers include: "tag this session", "annotate the transcript in Condens",
  "read the session and add tags", "go through this interview in Condens", or any instruction
  combining Condens with tagging, highlighting, or research analysis. Also trigger when the user
  says something like "I'm in Condens, can you go through the session?" or "analyse this transcript
  and add relevant tags". The skill will ask for the session URL, confirm participants, and offer
  to replace speaker labels before tagging begins.
compatibility: "requires Claude in Chrome"
---

# Condens Session Tagger

Tag a research session in Condens efficiently by default: start by asking for the session URL and participant info, then gather the study's research goals and derive project tags from them, read the AI-generated session summary, tag each highlight section it surfaces, propose any missing global tags, then offer to do a full transcript pass if needed.

---

## Step -1 — Get session URL, participants, and speakers

Before anything else, ask the user for the session URL:

> *"To get started — could you share the URL of the Condens session you'd like me to tag?"*

Once you have the URL:

1. Navigate to it with `navigate`.
2. Take a screenshot to confirm you're on the correct session page.
3. Read the page title and any visible participant / speaker metadata with `get_page_text`.

### Participants

Ask the user to confirm or add the session participants:

> *"I can see the session is titled '[title]'. Who were the participants in this session? (e.g. name, role, company) I'll add them to the session if they're not already there."*

If the user provides participant details:
- Navigate to the session's participant/metadata section in Condens.
- Add or update participants as instructed by the user.

### Speaker replacement

Condens transcripts often use generic speaker labels (e.g. "Speaker 1", "Speaker 2"). Ask the user if they'd like to replace these:

> *"Would you like me to replace the generic speaker labels in the transcript with real names? If so, please tell me which label maps to which person (e.g. Speaker 1 = Natalia, Speaker 2 = Participant)."*

If the user provides a mapping:
- Use find-and-replace or inline editing within Condens to swap each label throughout the transcript.
- Confirm the replacements are complete before moving on.

Once participants are set and speaker labels are resolved (or the user skips either step), proceed to Step 0a.

---

## Step 0a — Gather research goals

Before doing anything else, ask the user for the research goals of this study:

> *"Before I start tagging — what were the goals of this study? If they're written up in Condens, you can share the project page link and I'll read them from there."*

Wait for the user's response. Then:

1. Parse the goals into a list of **specific questions the study was trying to answer** (e.g. "Can users complete onboarding without guidance?", "Do users trust the AI output?").
2. For each goal, derive one or more **project tag candidates** — binary or spectrum pairs that capture whether the goal was met or not met. Examples:
   - Goal: "Is the tool usable without guidance?" → tags: `Usable without guidance` / `Not usable without guidance`
   - Goal: "Do users trust the AI output?" → tags: `Trusts AI output` / `Distrusts AI output`
3. Present the candidate project tags to the user and confirm before creating them:
   > *"Based on your goals, I'd suggest creating these project tags: [list]. Shall I add them to this Condens project now?"*
4. If confirmed, navigate to the project tags section in Condens and create them. Project tags are scoped to the current project and separate from the global taxonomy — do not add them to the global Tags page.
5. Keep the confirmed project tags in mind throughout tagging — apply them to highlights where the evidence directly speaks to a research goal.

If the user provides a Condens project page link, navigate to it with `navigate`, read it with `get_page_text`, extract the goals, and proceed without asking again.

---

## Step 0b — Check taxonomy

The global tag taxonomy may already be in memory (look for entries labelled "Condens tags — synced [date]"). If it is:
- Use it directly. **Skip navigating to the Tags page.**
- Note the sync date. If it's older than ~6 months, or the user has mentioned new tags were added recently, flag it: *"My taxonomy is from [date] — want me to refresh it first?"* and wait for confirmation before proceeding.

If the taxonomy is **not** in memory:
1. Confirm you're on a Condens session page (take a screenshot).
2. Click **Tags** in the left sidebar to open the global tag manager.
3. Expand all "show X more" groups until everything is visible.
4. Extract the full tag list with `get_page_text`. Build an internal map of tag names and their categories.
5. Return to the session page.

---

## Step 1 — Trigger and read the AI summary

The Condens AI summary is the source of truth for what's worth tagging. It is token-efficient and already identifies the key themes.

1. On the session page, look for **"Summarize this Session…"** just below the title.
2. If a summary already exists (the placeholder has been replaced by actual text), read it with `get_page_text` — do not re-trigger it.
3. If no summary exists yet, hover over the placeholder to reveal the ✦ sparkle icon, then click it. Wait up to 10 seconds for the summary to generate, then read it.
4. The summary is structured as: a short intro paragraph followed by **named sections** (bold headings), each with a few sentences and numbered citation references (e.g. `1 2 3`).

Parse the summary into a list of **themes**, one per section heading. Each theme corresponds to a cluster of highlights in the transcript.

**Do not read the full transcript at this stage.**

---

## Step 2 — Plan tags per summary theme

For each theme in the summary:

1. Identify the **core signal** (pain point, positive finding, feature request, behaviour pattern, etc.)
2. Assign tags from the taxonomy that match. Follow the multi-tagging principle: 2–4 tags per theme is typical. Always include the relevant **Product** tag if the session is product-specific.
3. Note the **citation numbers** linked to that theme — these are the bookmark sections in the transcript you'll target in Step 3.

### Tags to propose as new

If a theme clearly deserves a tag that doesn't exist in the taxonomy, note it:
- Candidate tag name
- Category it would belong to
- Which theme(s) it applies to

You will surface these in Step 4.

---

## Step 3 — Tag the source passages in the transcript

The summary cannot be tagged directly — it is a read-only synthesis. The citation numbers on each summary theme (e.g. `1 2 3`) are references to **bookmark sections** in the transcript. You must navigate to those sections and tag the actual transcript text there.

### 3a. Navigate to a cited bookmark section

1. The Bookmarks panel is on the right side of the session page. Each numbered citation in the summary corresponds to a named bookmark (e.g. citation `3` = bookmark "Visual and Layout Preferences").
2. Click the bookmark name in the right panel to jump to that position in the transcript.
3. Read the transcript passages within that section. Find the 1–2 sentences that best represent the theme described in the summary — the tightest, most quotable expression of the insight.
4. When relevant (task-related moments in usability tests), extend the selection upward to include the researcher's question for context.

### 3b. Select text and open the tag panel

1. Click the start of your chosen quote, then shift-click the end.
2. A toolbar appears above the selection. Click the **tag icon** (label shape, near the right end of the toolbar — tooltip: "Create Highlight & Add Tags").
3. The tag panel opens on the right.

### 3c. Apply tags

1. Click any suggested tags that match, or type in the search box to find others.
2. Tag names must match exactly — spelling and casing matter.
3. Add all tags for this highlight before closing (press Escape or click away).
4. Confirm the highlight saved (the selected text changes colour).

### 3d. If something doesn't work

- If the selection disappears before tagging, try again: click start, shift-click end.
- If a tag isn't found in the dropdown, note it silently and handle in Step 4.
- If the UI behaves unexpectedly, take a screenshot, note it, and move on.

---

## Step 4 — Propose and create missing global tags

After tagging all summary sections, surface any gaps in the **global taxonomy** (not project tags — those were handled in Step 0a):

1. List each **proposed new global tag**:
   - Suggested name
   - Category it belongs to
   - Which theme(s) / quotes it would apply to
   - One-sentence rationale

2. Ask the user: *"I'd like to add [X] new global tags. Shall I create them in Condens now?"*

3. If confirmed, navigate to the Tags page (click **Tags** in the left sidebar), create each tag in the correct group, then return to the session and apply them.

---

## Step 5 — Offer full transcript pass

After completing summary-based tagging, always ask:

> *"I've tagged the [N] themes from the AI summary. Want me to do a full transcript pass to catch anything it may have missed?"*

If the user says yes, continue with the full pass:

1. Use `get_page_text` to extract the complete transcript.
2. Read it top to bottom. Identify any passages with clear signal that weren't covered by the summary themes.
3. Apply the same tagging process (Steps 2–3) to any new highlights found.
4. Skip: pleasantries, session logistics, moderator-only speech, repetitions of already-tagged points, and anything too weak or ambiguous.
5. Note what you skipped and why in the final summary (Step 6).

**For shadowing / demo / readout sessions** (no user tasks): skip Task Success / Task Failure / Task Partial Success / Task Skipped tags — they don't apply.

---

## Step 6 — End-of-run summary

```
## Tagging complete — [Session title]

**Session type:** Usability test / Shadowing / Interview / Demo / Readout

**Mode:** Summary-based only / Full transcript pass

**Highlights tagged:** X

| # | Section / Quote (truncated) | Tag(s) |
|---|---|---|
| 1 | "…" | `tag`, `tag` |
| 2 | "…" | `tag` |

**New tags created:** [list, or "none"]

**Skipped:** [brief note on anything notable not tagged, and why]

**Taxonomy gaps remaining:** [proposed tags the user declined, or segments with no matching tag]
```

---

## Edge cases

- **Summary exists but has no bookmark citations:** Read the summary themes and use `get_page_text` to find representative quotes in the transcript for each theme.
- **Very long transcripts (full pass, 60+ min):** Read in two halves. Don't start tagging until both are read.
- **Non-English transcripts:** Apply the same criteria. Tag names must match Condens exactly (usually English).
- **Tag panel shows tags not in memory:** Treat them as valid — add them to your working list for this session.
