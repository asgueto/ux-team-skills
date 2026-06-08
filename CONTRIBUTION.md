# Contributing Skills to UX Team Skills

This guide explains how to create, update, and maintain skills in this repository.

---

## When to Create a New Skill

Create a new skill when your team:
- Repeatedly uses the same decision framework or process
- Has explicit conventions that Claude should follow for a task type
- Wants to embed real project context (examples, templates, checklists) into Claude's behavior
- Needs to support a new role or workflow

**Do not create a skill for:**
- One-time advice or answers that won't repeat
- General knowledge that Claude already has
- Content that belongs in a product guide, not a behavioral skill

## Skill Structure

Each skill lives in a folder inside `skills/[category]/` with this structure:

```
skills/[category]/skill-name/
├── SKILL.md              ← required: behavioral instructions + frontmatter
└── references/           ← optional: example files, templates, checklists
    ├── EXAMPLES.md       ← real team examples with annotations
    ├── TEMPLATES.md      ← ready-to-use templates or checklists
    └── [other files]     ← whatever reference content the skill needs
```

Example: `skills/research/research-plan/`

## SKILL.md Format

Every skill has a `SKILL.md` file with this structure:

### Frontmatter (required)

```yaml
---
name: skill-id
description: >
  A comprehensive description of what the skill does and when to trigger it.
  Keep this under 300 characters for searchability.
  Include the trigger phrases users would say to activate it.
  Examples: "use when writing copy for...", "trigger with 'help me plan a...'",
  "activate when someone shares a design for..."
---
```

**Guidelines for `name`:** lowercase, hyphenated (e.g., `research-plan`, `prompt-builder`)  
**Guidelines for `description`:** Clear trigger phrases + what the skill does + framework/method used

### Content Structure

After the frontmatter, structure the skill like this:

```markdown
# [Skill Title]

**Version:** X.Y.Z | **Author:** [Name] | **For:** [Team/Role]

One-sentence summary of what this skill does.

---

## What this skill does

Brief explanation of the outcome and process. Use bullet points if there are 3+ steps.

---

## Core principles

Non-negotiable rules that make this skill work. Use `**bold**` for key concepts.

---

## The full process/framework

Walk through the steps in order. Use sub-sections for each major phase.

### Step 1 — [Phase name]

Detailed instructions on what to do, what to ask, what to look for.

### Step 2 — [Phase name]

...and so on.

---

## Common blockers

What goes wrong and how to recover. Frame these as "If X happens, do Y."

---

## Reference files

Point to the `references/` folder files. Explain what each file is for.
```

### Key Writing Principles for SKILL.md

- **Be prescriptive.** Don't offer options — say exactly what to do and in what order.
- **No hand-waving.** Every section should be actionable. No "be thoughtful about X" without explaining what that means.
- **Ask, don't assume.** Explicitly tell Claude to ask follow-up questions rather than filling in missing information.
- **One question at a time.** Include this rule if your skill involves gathering information.
- **Real examples.** Anchor abstract concepts in actual team examples from the `references/` folder.
- **Confirm before advancing.** Build in checkpoints where the user confirms the direction before the skill moves forward.
- **Name the framework.** If your skill uses a named framework (FEEL, Prompt Anatomy, etc.), explain it once, then reference it by name.

---

## Creating Reference Files

Reference files live in `references/` and are real team artifacts or examples.

### EXAMPLES.md

Curated snapshots of real work with annotations. Format:

```markdown
# Examples

## [Scenario/Category]

**Context:** What was happening when this was created?

**Example:**
[Real artifact or quote]

**Why this works:**
What makes this a good example for the skill?
```

### TEMPLATES.md

Ready-to-copy templates or checklists. Format:

```markdown
# Templates & Checklists

## [Template Name]

When to use: [Brief description]

**Template:**
[Copy-paste-ready content]

```

---

## Versioning

Skills use semantic versioning: `MAJOR.MINOR.PATCH`

- **MAJOR** (e.g., 2.0.0): Breaking changes to the process or framework
- **MINOR** (e.g., 1.5.0): New features or capabilities (e.g., adding a new step)
- **PATCH** (e.g., 1.0.2): Bug fixes, clarifications, examples

**Update `skills.json` and the README table when you release a new version.**

---

## Adding a New Skill to the Repo

**Always work on a branch, not directly on main.**

### Step 1: Create a branch

```bash
git checkout -b add/[skill-name]
```

Example: `git checkout -b add/research-synthesis`

### Step 2: Create the skill folder

```bash
mkdir -p skills/[category]/[skill-id]
mkdir skills/[category]/[skill-id]/references
```

Example: `mkdir -p skills/research/research-synthesis && mkdir skills/research/research-synthesis/references`

### Step 3: Write SKILL.md

Follow the format documented in this guide. **Must include:**
- Frontmatter with `name` and `description`
- Version info: `**Version:** X.Y.Z | **Author:** [Your name]`
- Behavioral instructions (the main content)

### Step 4: Add reference files

In the `references/` folder, add:
- `EXAMPLES.md` — real team examples with context (required)
- `TEMPLATES.md` — ready-to-use templates (optional, but recommended)

### Step 5: Commit

```bash
git add skills/[category]/[skill-id]/
git commit -m "Add [skill-name] skill"
```

**DO NOT manually edit `skills.json` or README.md.** When you commit:
- A pre-commit hook automatically runs
- Generates updated `skills.json` from your SKILL.md
- Updates the README table
- Everything is staged and included in your commit

### Step 6: Push and create a Pull Request

```bash
git push origin add/[skill-name]
```

Then create a PR on GitHub and request review from the Design Lead.

---

## Updating an Existing Skill

### Small changes (clarifications, examples, typos)

1. Create a branch: `git checkout -b update/[skill-name]`
2. Edit the files in the skill folder
3. Commit: `git commit -m "Clarify [skill-name]: [what changed]"`
4. The hook auto-updates `skills.json`
5. Push and create a PR

### Medium changes (adding new phase, new reference file)

1. Create a branch: `git checkout -b enhance/[skill-name]`
2. Add new content to SKILL.md or `references/`
3. **Bump the MINOR version** in SKILL.md: `**Version:** X.1.0`
4. Commit: `git commit -m "Enhance [skill-name]: [what's new]"`
5. Hook updates manifest and README
6. Push and create a PR

### Breaking changes (removing step, renaming, major restructure)

1. Create a branch: `git checkout -b breaking/[skill-name]`
2. Update SKILL.md with new process
3. **Bump the MAJOR version**: `**Version:** 2.0.0`
4. Add migration notes at the top of SKILL.md for teams using the old version
5. Commit: `git commit -m "BREAKING: [skill-name] — [what changed]"`
6. Hook updates manifest
7. Push and create a PR

---

## The Pre-Commit Hook (No Manual Work)

When you commit changes to a skill, a pre-commit hook automatically:
- Scans your skill folder
- Reads `SKILL.md` frontmatter
- Lists reference files
- Generates updated `skills.json`
- Updates the README skill tables
- Stages the changes

**You don't do anything.** Just commit normally and the hook handles it.

If for some reason you need to manually regenerate, run:
```bash
npm run generate-manifest
```

---

## Updating an Existing Skill

### Small changes (clarifications, examples, typos)

1. Edit the file directly in this repo
2. If you're updating reference files, no version bump needed
3. If you're improving the SKILL.md clarity significantly, bump PATCH (e.g., 1.0.0 → 1.0.1)
4. Update `skills.json` if the description or tags changed
5. Commit: `git commit -m "Clarify [skill-name]: [what changed]"`

### Medium changes (adding a new phase, new reference files, new template)

1. Add the new content to SKILL.md or `references/`
2. Bump MINOR version (e.g., 1.0.0 → 1.1.0)
3. Update `skills.json` version field
4. Update README.md if the description changed
5. Commit: `git commit -m "Enhance [skill-name]: [what's new]"`

### Breaking changes (removing a step, changing the core process, renaming the skill)

1. Update SKILL.md with the new process
2. Bump MAJOR version (e.g., 1.0.0 → 2.0.0)
3. Add a **Migration Note** at the top of SKILL.md explaining what changed for teams using the old version
4. Update `skills.json` and README.md
5. Commit: `git commit -m "BREAKING: [skill-name] — [what changed]"`

---

## Testing Your Skill

Before submitting a PR:

1. **Read the full SKILL.md** as if you've never seen it. Does it make sense? Are instructions clear?
2. **Test the triggers.** Do the trigger phrases in the description match what users would actually say?
3. **Follow the process.** Walk through the steps yourself to catch missing instructions or unclear sections.
4. **Check references.** Do all files in `references/` actually exist and are they mentioned in SKILL.md?
5. **Validate paths.** Run `grep -r "references/" SKILL.md` to ensure all reference file paths are correct relative to the SKILL.md location.

---

## Review Checklist Before Merge

- [ ] Skill name is lowercase, hyphenated, and matches the folder name
- [ ] `SKILL.md` has frontmatter with `name` and `description`
- [ ] Description includes trigger phrases (what users would say to activate it)
- [ ] Process/framework is clear and prescriptive (not advisory)
- [ ] All instructions tell Claude to **ask** missing information, not invent it
- [ ] If the skill gathers info, "ask one question at a time" is explicit
- [ ] Version is set and documented in frontmatter
- [ ] `references/` folder exists with at least `EXAMPLES.md` or `TEMPLATES.md`
- [ ] All reference file paths in SKILL.md are correct
- [ ] `skills.json` has been updated with the new skill
- [ ] README table includes the new skill in the correct category
- [ ] README directory tree is updated
- [ ] Commit message is clear: "Add [skill] skill" or "Enhance [skill]: [what's new]"

---

## Maintenance

This repo evolves with team conventions. Every quarter:

- Review the reference files in each skill (`references/EXAMPLES.md`). Are they still current?
- Check `skills.json`. Are descriptions still accurate?
- Look at version numbers. Skills that haven't changed in 6+ months may need a review for staleness.

Questions or suggestions? Speak to the Design Lead.
