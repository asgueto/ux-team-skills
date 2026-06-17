# Condens UI Navigation Notes

A practical guide to finding and interacting with key elements in the Condens interface. Use this when you need a reminder of where things live or how actions work.

---

## Page Layout

```
┌─────────────────────────────────────────────────────────┐
│  Left Sidebar   │  Main Content Area                     │
│  ─────────────  │  ─────────────────────────────────────  │
│  Home           │  Session title                          │
│  Projects       │  AI Summary (below title)               │
│  Sessions       │  Transcript (scrollable)                │
│  Tags ◄─────────│                                         │
│  Participants   │                           Right Panel   │
│  Highlights     │                           ───────────── │
│                 │                           Bookmarks     │
│                 │                           Highlights    │
│                 │                           Participants  │
└─────────────────┴─────────────────────────────────────────┘
```

---

## Session Page

### Navigating to a session
- Use the URL directly (`navigate` to the session URL the user provides).
- Confirm you're on the right page with a screenshot + `get_page_text`.

### AI Summary
- Located just below the session title.
- **If summary exists:** The placeholder text is replaced with actual content. Read with `get_page_text`.
- **If no summary yet:** Hover over the placeholder area to reveal the **✦ sparkle icon**, then click it. Wait up to 10 seconds.
- Summary structure: short intro paragraph → named bold sections → numbered citation references (e.g. `1 2 3`).

### Transcript
- Scrollable area in the main content.
- Speaker labels appear as "Speaker 1", "Speaker 2" etc. unless already replaced.
- Use `get_page_text` to extract text. For very long transcripts (60+ min), extract in two halves.

---

## Bookmarks Panel (Right Side)

- Located in the right panel of a session page.
- Each bookmark corresponds to a numbered citation in the AI summary (e.g. citation `3` = bookmark "Visual and Layout Preferences").
- **Click a bookmark name** to jump to that section in the transcript.
- Use this to navigate to cited passages without scrolling manually.

---

## Tagging a Highlight

### Select text
1. Click at the start of your intended quote.
2. Shift-click at the end.
3. A floating toolbar appears above the selection.

### Open the tag panel
- In the toolbar, click the **tag icon** (label shape, near the right end — tooltip: "Create Highlight & Add Tags").
- The tag panel opens on the right side.

### Apply tags
- Click suggested tags shown in the panel, or type in the search box to find others.
- Tag names are case-sensitive and must match the taxonomy exactly.
- Add all tags for this highlight before closing.
- Close by pressing **Escape** or clicking away.
- Confirm the highlight saved: the selected text changes colour.

### Troubleshooting
- If the selection disappears before you tag it: re-select (click start, shift-click end) and try again.
- If a tag isn't found in the dropdown: note it silently and propose it as a new tag in Step 4.
- If the UI behaves unexpectedly: take a screenshot, note the issue, move on.

---

## Speaker Label Replacement

- Condens doesn't have a built-in bulk find-and-replace for speaker labels.
- Use inline editing within the transcript: click a speaker label to edit it, or use find-and-replace if available in the current Condens version.
- Replace labels one by one, working top to bottom.
- Confirm all labels are replaced before moving on.

---

## Tags Page (Global Taxonomy)

### How to get there
- Click **Tags** in the left sidebar.
- This opens the global tag manager, showing all tag groups.

### Expanding groups
- Groups may show "show X more" — click to expand all groups until everything is visible.
- Extract the full list with `get_page_text` to build an internal tag map.

### Creating a new tag
1. Navigate to the Tags page.
2. Find the correct group.
3. Use the "Add tag" or "+" control within that group.
4. Type the tag name and confirm.
5. Return to the session page.

> ⚠️ Do not add project tags here — project tags are created separately, scoped to the current project.

---

## Project Tags

- Project tags are separate from the global taxonomy.
- They are scoped to a single project (not visible across all projects).
- To create them: navigate to the **project page** → look for the project tags section.
- Project tags are derived from research goals (see Step 0a of the skill).
- Do **not** create project tags on the global Tags page.

---

## Participants

- Participant metadata is accessible from the session page (usually a sidebar or metadata section).
- You can add or edit participant details (name, role, company) here.
- Ask the user to confirm participant details before adding them.

---

## Session Summary (End of Run)

After tagging, Condens does not auto-generate a tagging summary — produce the summary in the conversation using the format in Step 6 of the skill.
