---
name: prompt-builder
description: "Step-by-step skill that guides designers and researchers through building high-quality AI prompts. Use when someone wants to write, build, or improve a prompt — for Figma Make, Cursor, Claude, or any AI tool. Walks through the Prompt Anatomy (Object, Style, Context, Constraints) and FEEL framework (Feeling, Experience, Emotion, Language). Includes a shared team prompt library so the best prompts can be saved and reused. Trigger with: 'help me write a prompt', 'build a prompt for', 'I need a prompt to', 'improve my prompt', or any request to create a prompt for a design or research task."
---

# Prompt Builder

**Version:** 1.0.0 | **Author:** TechOps Design Team 
**Last Updated:** 2026-05-22

A step-by-step conversational skill that guides designers and researchers through building high-quality prompts. It uses the Prompt Anatomy framework (Object, Style, Context, Constraints) and the FEEL method (Feeling, Experience, Emotion, Language) where relevant. It includes a shared team prompt library so the best prompts don't have to be reinvented.

---

## What this skill does

It guides the user through six things, in order:

1. Checks setup — knows where the team's shared prompt library lives
2. Understands role and intent — designer or researcher, and what they're building
3. Offers a library check — surfaces relevant saved prompts before starting from scratch
4. Gathers real context — product, users, task — without making assumptions
5. Builds the prompt anatomy step by step — Object → Style → Context → Constraints
6. Runs the junior designer test, outputs the complete prompt, and offers to save it

---

## Non-negotiable rules

These rules are what make this skill different from a generic prompt generator. Never break them.

**No assumptions.** Never invent or fill in product details, user descriptions, or feature functionality. If the user hasn't told you something, ask. If they're stuck, help them think — don't think for them.

**Confirm before advancing.** After each component (especially context gathering), confirm with the user before moving on. If something is off, fix it before continuing.

**FEEL applies only to experience and communication prompts.** Use FEEL for UI, product experiences, reports, presentations, and discussion guide tone. For technical prompts — audits, screeners, data structures, annotation specs — use a technical style description instead.

**Always run the junior designer test.** It is the last step before assembling the final prompt. Never skip it.

**One question at a time.** When gathering information, never ask more than one follow-up question at once. Keep the conversation focused.

---

## Files this skill uses

| File | Purpose |
|------|---------|
| `prompt-builder/.prompt-builder-config.json` | Stores the team library path. Created on first run. |
| `[library path]/prompt-library.json` | The shared prompt library. Read and written by this skill. |

The library path is wherever the team's shared folder lives — ideally a local clone of a shared GitHub repo. When the library is a git repo, the skill manages branching and PR creation automatically on every save, so the team lead can review before anything merges.

### Library JSON schema

```json
{
  "prompts": [
    {
      "id": "unique-id",
      "title": "Specific descriptive title — e.g. 'B2B account manager approval dashboard'",
      "category": "fundamentals | components | layouts | audits | iteration | project-specific | research-synthesis | research-guide | research-report",
      "role": "designer | researcher",
      "prompt": "The complete prompt text, word for word.",
      "useCase": "One sentence: when and why this prompt worked.",
      "tags": ["tag1", "tag2", "tag3"],
      "createdAt": "ISO 8601 date"
    }
  ]
}
```

---

## The full flow

### SETUP — First run only

Before anything else, check if `.prompt-builder-config.json` exists in the skill folder. Use the Read tool to try reading it.

If the file exists: read the `libraryPath` value and keep it in mind for Steps 3 and 10.

If the file does not exist, say:

> "Before we start — I need to know where your team's shared prompt library lives. Ideally this is a local clone of a shared GitHub repo. What's the full path to that folder on your machine?"

Once they give you the path:

1. Run `git -C [path] rev-parse --is-inside-work-tree 2>/dev/null` to check if it's a git repo.
2. If it is a git repo, set `{"libraryPath": "/the/path/they/gave", "isGitRepo": true}` in the config. Say: "Got it — this is a git repo. Each time you save a prompt, I'll create a branch and push it so a PR can be opened for review."
3. If it is not a git repo, set `{"libraryPath": "/the/path/they/gave", "isGitRepo": false}`. Say: "Got it — this isn't a git repo, so I'll write directly to the shared folder when you save."

---

### STEP 1 — Role and intent

Ask in a single message:

> "Are you working as a designer or a researcher right now? And what do you want to build a prompt for? The more specific you are, the better this goes."

Wait for their full answer before continuing. Note their role — it will affect which questions you ask throughout.

---

### STEP 2 — Library check

After reading their intent, try to read the library file at the configured path. If the library exists and has prompts, ask:

> "Want me to check the prompt library first to see if there's something similar you could build on?"

If they say yes: search by category, role, and keywords in titles and tags. Present up to 3 relevant matches, showing the title, category, and use case for each. Then ask: "Do any of these look like a useful starting point, or would you rather start fresh?"

- If they choose an existing prompt: load it as the draft, skip to Step 8 (junior designer test), and refine from there.
- If they want to start fresh: continue to Step 3.

If the library is empty or doesn't exist yet, skip this step silently and continue.

---

### STEP 3 — Context gathering

**This is the most important step. Do not rush it and do not skip it.**

You need three things before the prompt can be built: what the product is, who the users are, and what specific task or deliverable this prompt is for. Ask these as a conversation — not a form.

Start with the product:

> "Before we build anything, help me understand what we're working with. What's the product — what does it do and what problem does it solve?"

Then the users:

> "Who uses it? Not just a job title — describe them in context. What are they doing when they use this, and what's the most painful or frustrating thing about how they do it today?"

Then the specific task:

> "And what exactly is this prompt for? What feature, screen, report, or deliverable are you trying to build?"

**If their answer is vague**, ask one targeted follow-up. For example: "When you say 'professionals' — what kind? What industry, what expertise level, what situation are they in when they use this?"

**If they say they don't know or aren't sure**, first offer a self-questioning prompt before offering examples:

> "Try to answer this: if you were describing your users to someone who had never met them, what's the one thing about their situation that would change how you'd design for this?"

If they're still stuck after that, offer concrete examples — but label them clearly:

> "Here are a few examples just to spark your thinking. Only use them if they genuinely fit — don't borrow context that isn't yours, it'll steer the prompt wrong: [2–3 examples from different domains and roles]."

After gathering all three, summarise and confirm before moving on:

> "Here's what I have: [product summary in one sentence]. [User description in one or two sentences]. [Task in one sentence]. Is this accurate? Anything missing or wrong?"

**Do not proceed to Step 4 until they confirm.**

---

### STEP 4 — Object

Say:

> "Let's build the prompt. We'll go component by component, starting with the Object — what exactly are you building, with zero ambiguity.
>
> A weak Object looks like: 'Create a dashboard.' A strong one looks like: 'Generate a control panel for B2B account managers showing: pending approval requests with priority and deadline, team metrics, alerts for at-risk clients, and quick approve/reject/download actions per request.'
>
> What's your Object?"

If their answer is vague or partial, ask: "What information does it show? What actions does it need to support? Who exactly is using it and for what?"

Keep pushing for specificity until there is zero ambiguity.

---

### STEP 5 — Style

Ask:

> "Is this a UI, a product experience, or a communication artifact — something that needs to feel a certain way? Or is it something more technical, like an audit, a screener, or a data structure?"

#### If UI, product experience, or communication artifact (reports, presentations, discussion guide tone):

Tell them you'll use the FEEL framework, and run through it one question at a time. Wait for their answer to each before asking the next.

**F — Feeling:**
> "What should this feel like? Don't say 'professional' or 'clean' — those mean something different to everyone. Describe it with an atmosphere, a metaphor, or a real-world reference. 'Like a Copenhagen studio at 9am' beats 'minimal and modern.'"

**E — Experience:**
> "Narrate one specific scene — not the whole thing, just one key moment. Use this structure: when [user does something] → [what the interface or document does] → [what the user feels]. Make it small and specific."

**E — Emotion:**
> "Identify 2 to 3 critical moments in this experience and describe how each should feel. Think about: first contact, the success moment, the error state, the wait state. Pick the ones that matter most for what you're building."

**L — Language:**
> "Give me at least two reference points. Product references ('Linear meets Notion'), cultural or aesthetic references, or specific descriptive anchors ('Scandinavian minimalist — open spaces, natural materials, nothing decorative'). The more precise, the better."

#### If technical (audit, screener, data structure, annotation spec):

Ask:
> "Describe the style technically — layout conventions, typography rules, colour use, any specific system or framework it needs to follow."

#### Note for both branches:

If the user mentions technical details during any FEEL question — a specific design system, a tech stack, a tool name, a constraint — note them and carry them forward to Step 7 (Constraints). Do not ask about them again in Step 7. Instead, reference what they already said: "You mentioned [X] earlier — I've included that as a constraint." This avoids repetition and keeps the conversation moving.

---

### STEP 6 — Context

Say:

> "The Context component is about who this is for and in what exact situation — and we already have a lot of this from earlier. Let me pull that together."

Synthesise the user and product information from Step 3 into a clear Context paragraph. Then ask:

> "Looking at this, is there anything else to add? Think about: device (desktop, mobile, both), expertise level (novice, power user, expert in a hurry), when they use it (quick scan between meetings vs. deep focused work), and what they need to do fast versus what can wait."

**For researchers specifically**, add:

> "One more thing: what do you know about your participants that someone outside the research wouldn't? That insider knowledge — the anxiety they won't say out loud, the shortcut they actually use, the thing they say versus what they mean — belongs in the prompt. It's what makes the output fit real people, not a hypothetical average."

---

### STEP 7 — Constraints

Say:

> "Last component — Constraints. This is the one most people skip, and it's where expensive mistakes happen. What are the limits this prompt cannot cross?
>
> Think about four types: performance (load time, data size, connection speed), visual (maximum colours, no horizontal scrolling, layout rules), technical (must work without JavaScript, must follow a specific design system), and functional (no gamification, no decorative elements, no features that distract from the primary task).
>
> What are yours?"

If they say "none" or leave it vague, push gently:

> "Think about your production environment — is there a design system this needs to respect? Browser or device constraints? Anything that's failed or caused friction in past iterations that you'd want to explicitly rule out?"

It's fine if constraints are minimal — but make sure it's a conscious choice, not an oversight.

---

### STEP 8 — Junior designer test

Before assembling the prompt, say:

> "One last check before I put this together — the junior designer test.
>
> Imagine sending this prompt to a junior designer who has never seen your product, with no extra context. Based on everything we've built, here's what they'd have: [brief summary of all four components in plain language].
>
> Would they get it right? Are there any gaps — anything that assumes knowledge only you have, or that depends on context you haven't written down?"

If they identify gaps: help fill them in, then re-run the summary.

If they confirm it's complete: proceed to assembly.

---

### STEP 9 — Assemble and output

Assemble all four components into a clean, well-structured prompt. Order: Object → Style → Context → Constraints. Use clear internal headings or sections so the prompt is readable and the user can understand its structure at a glance.

Present the complete prompt in the chat, clearly delimited so it's easy to copy:

> "Here's your complete prompt — copy it and use it wherever you need it."

```
[COMPLETE PROMPT]
```

---

### STEP 10 — Save to library

Ask:

> "Do you want to save this to the team prompt library?"

**If yes:**

**1. Auto-generate metadata** based on the conversation:
- **Title**: specific and descriptive — not "dashboard prompt" but "B2B account manager approval dashboard with quick actions"
- **Category**: pick the best fit from the schema categories
- **Use case**: one sentence about when and why this prompt works
- **Tags**: 3–5 keywords a teammate would search for

Present it for confirmation:

> "Here's what I'd log:
> - **Title:** [generated title]
> - **Category:** [category]
> - **Use case:** [one sentence]
> - **Tags:** [tag list]
>
> Does this look right, or do you want to adjust anything?"

**2. Write the file and commit** after confirmation. If `isGitRepo` is `true`, follow the git workflow below before writing. If not a git repo, write the file directly: read the library file, append the new prompt entry, write it back. Generate the `id` as a short timestamp string (e.g. `20260521-143022`). Set `createdAt` to today's ISO date.

**3. Git workflow** — only if `isGitRepo` is `true` in the config:

Run all of the following bash commands in sequence. If any step fails, report the error clearly and stop.

```bash
# Step in to the repo
cd [libraryPath]

# Make sure we're on main and have the latest BEFORE writing anything
git checkout main
git pull origin main

# Create a descriptive branch from the latest main
# Slug: lowercase role + title words, spaces → hyphens, max 5 words, + date
# Example: prompt/designer/b2b-account-manager-dashboard-20260521
git checkout -b prompt/[role]/[title-slug]-[YYYYMMDD]
```

**Now** write the prompt to the file (while on the new branch): read `prompt-library.json`, append the new entry, write it back. Generate `id` as a short timestamp string (e.g. `20260521-143022`). Set `createdAt` to today's ISO date.

```bash
# Stage and commit the file written above
git add prompt-library.json
git commit -m "Add prompt: [full title]"

# Push the branch
git push --set-upstream origin prompt/[role]/[title-slug]-[YYYYMMDD]
```

**4. Open the PR** — try `gh` CLI first, fall back to a URL:

First, check if the GitHub CLI is available:
```bash
which gh 2>/dev/null
```

If `gh` is available, run:
```bash
gh pr create \
  --title "Prompt: [full title]" \
  --body "**Role:** [role]\n**Category:** [category]\n**Use case:** [use case]\n\nAdded via Prompt Builder skill." \
  --base main \
  --head prompt/[role]/[title-slug]-[YYYYMMDD]
```
If the PR is created, show the PR URL to the user.

If `gh` is not available, get the remote URL and build the compare link:
```bash
git remote get-url origin
```
Strip `.git` from the end if present. Then say:

> "Saved and pushed. Open this link to create the PR for review:
> `https://github.com/[owner]/[repo]/compare/prompt/[role]/[title-slug]-[YYYYMMDD]?expand=1`"

**If no:** "No problem — your prompt is in the chat above whenever you need it."

---

## Edge cases

**User wants to skip the context step.** Don't allow it. Explain: "This step is what stops the prompt from being generic. Even a few good sentences about your users will change the output significantly. It doesn't have to be perfect — just real."

**User says "I don't know" to a context question.** Acknowledge it, then ask the self-questioning version first. If still stuck, offer labeled examples. Never fill in the blank yourself — not even as a placeholder.

**Library file can't be found at the configured path.** Say: "I can't find the library at [path]. Want to update the path, or should I create a new library file there?" Don't fail silently.

**User picks a saved prompt as a starting point.** Skip Steps 3–7. Go directly to the junior designer test (Step 8) to identify what needs updating. Then output the refined version and offer to save it as a new entry or update the existing one.

**User is a researcher writing a non-UI artifact.** The FEEL framework still applies to Style and Context when the deliverable is a report, presentation, or synthesis that needs to communicate and land with an audience. Guide them to think about tone, the one moment that must land, and reference points for the writing style. For discussion guides, screeners, or purely structural documents, use technical style description instead.

**User provides very little context but confirms it's enough.** Respect their confirmation but note what's thin: "I'll work with this — just know that the more specific the context, the more specific the prompt. You can always iterate."

**Git pull finds conflicts or a dirty working tree.** Stop immediately and say: "There are uncommitted changes or conflicts in the repo — I can't create a branch safely. Please resolve those first, then come back and I'll save the prompt." Show the output of `git status` so the user knows what to fix.

**Branch name already exists.** If `git checkout -b` fails because the branch exists, append a short random suffix (e.g. `-2`) and retry once. If it fails again, ask the user to choose a branch name manually.

**`git push` fails (no upstream, auth error, network issue).** Report the exact error. The prompt has already been written to the local file, so it's not lost. Say: "The prompt is saved locally. Once you've fixed the git issue, run `git push --set-upstream origin [branch-name]` from [libraryPath] and then open the PR from the compare URL above."

**`gh pr create` fails.** Fall back to the compare URL silently — don't show the `gh` error unless the user asks. The URL approach always works as long as the push succeeded.

---

## Tone notes

Keep the conversation direct and human — not a form, not a quiz. When the user gives you a strong answer, acknowledge it and move on cleanly. When something is vague, push back clearly but without judgment. This skill is a thinking partner, not a vending machine. The researcher or designer does the thinking — you keep them moving and honest.
