# Contributing Skills to UX Team Skills

**New to this repo?** Open it in **Cursor** or **Claude Code** and follow [GETTING_STARTED.md](./GETTING_STARTED.md). Describe what you want in chat — the AI handles files and git.

This guide covers *what* makes a good skill and *how* to write one.

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

---

## Skill Structure

Each skill lives in `skills/[category]/[skill-name]/`:

```
skills/[category]/skill-name/
├── SKILL.md              ← required: behavioral instructions + frontmatter
└── references/           ← optional but recommended
    ├── EXAMPLES.md       ← real team examples with annotations
    ├── TEMPLATES.md      ← ready-to-use templates or checklists
    └── [other files]     ← domain-specific reference docs
```

**Categories:** `research`, `design`, `content`, `process`

**Start from the template:** copy `skills/_template/` and rename the folder.

Example: `skills/research/research-plan/`

---

## SKILL.md Format

### Frontmatter (required)

```yaml
---
name: skill-id
description: >
  What the skill does and when to trigger it.
  Include phrases users would say: "help me plan a study", "review this copy".
---
```

**Rules:**
- `name` must match the folder name (lowercase, hyphenated)
- `description` should include trigger phrases

### Content structure

After frontmatter:

```markdown
**Version:** 1.0.0 | **Author:** Your Name
**Last Updated:** YYYY-MM-DD

# Skill Title

One-sentence summary.

---

## What this skill does
## Core principles
## The full process
## Common blockers
## Reference files
```

### Writing principles

- **Be prescriptive.** Say exactly what to do and in what order.
- **Ask, don't assume.** Tell Claude to ask follow-up questions rather than inventing answers.
- **One question at a time** when gathering information.
- **Confirm before advancing** at key checkpoints.
- **Name the framework** if you use one (FEEL, Prompt Anatomy, etc.).

---

## Reference Files

### EXAMPLES.md

Real team artifacts with context:

```markdown
## [Scenario]

**Context:** What was happening?

**Example:** [Real artifact]

**Why this works:** What makes this a good example?
```

### TEMPLATES.md

Copy-paste-ready content:

```markdown
## [Template name]

**When to use:** ...

**Template:**
[Ready-to-use content]
```

---

## Versioning

Semantic versioning: `MAJOR.MINOR.PATCH`

| Change | Bump | Example |
|---|---|---|
| Typo, clarification | PATCH (optional) | 1.0.0 → 1.0.1 |
| New step, template, or capability | MINOR | 1.0.0 → 1.1.0 |
| Breaking restructure | MAJOR | 1.0.0 → 2.0.0 |

Update the `**Version:**` line in `SKILL.md`. Do **not** manually edit `skills.json` or README tables — automation handles those.

For breaking changes, add a **Migration Note** at the top of `SKILL.md`.

---

## Contribution Workflow

**Always work on a branch, not directly on `main`.** In Cursor or Claude Code, ask the AI to create a branch and open a PR when you're ready.

### Add a new skill

Tell the AI:

> Create a new skill in skills/[category]/[skill-name]/. Follow CONTRIBUTION.md and copy from skills/_template/.

Or do it yourself:
1. Copy `skills/_template/` to `skills/[category]/[skill-name]/`
2. Edit `SKILL.md` and add reference files
3. Ask the AI: *"Validate my changes and open a pull request"*

### Update an existing skill

1. Ask the AI to edit the skill folder, or edit files directly in Cursor
2. Bump version if behavior changed (see table above)
3. Ask the AI to validate and open a PR

### What automation does for you

On every Pull Request (and on local commit if you ran `npm install`), the repo:
- Validates skill structure (`npm run validate`)
- Regenerates `skills.json`
- Updates README skill tables

---

## Testing Before You Submit

1. Read `SKILL.md` as if you've never seen it — is it clear?
2. Do the trigger phrases in `description` match what people actually say?
3. Walk through the steps yourself — any gaps?
4. Do all files in `references/` exist and are they linked from `SKILL.md`?

---

## Review Checklist (for reviewers)

- [ ] Skill name is lowercase, hyphenated, and matches the folder name
- [ ] `SKILL.md` has frontmatter with `name` and `description`
- [ ] Description includes trigger phrases
- [ ] Process is prescriptive, not advisory
- [ ] Claude is told to **ask** for missing info, not invent it
- [ ] "Ask one question at a time" where relevant
- [ ] Version is set in `SKILL.md`
- [ ] `references/` has at least `EXAMPLES.md` or `TEMPLATES.md`
- [ ] Reference file links are valid

---

## Maintenance

Every quarter, review:
- Are `references/EXAMPLES.md` files still current?
- Are skill descriptions still accurate?
- Have any skills gone 6+ months without review?

Questions? Speak to the Design Lead.
