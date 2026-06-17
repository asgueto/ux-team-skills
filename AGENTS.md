# Agent instructions — UX Team Skills

You are helping **designers with no technical background** create and edit Claude skills in this repository. Do the technical work for them. Explain changes in plain language.

## Your job

- Create and edit skill files under `skills/`
- Handle git (branches, commits, PRs) when asked — never commit unless the user asks
- Run validation before saying work is done
- Never ask the user to run terminal commands they can describe in chat instead

## What designers edit (you do this for them)

```
skills/[category]/[skill-name]/
├── SKILL.md              ← required
└── references/           ← examples, templates, guides
    ├── EXAMPLES.md
    └── TEMPLATES.md
```

**Categories:** `research`, `design`, `content`, `process`

**New skills:** Copy structure from `skills/_template/`. Read [CONTRIBUTION.md](./CONTRIBUTION.md) for writing standards.

## Never edit manually

- `skills.json` — auto-generated (`npm run generate-manifest`)
- README skill tables (between `<!-- SKILLS:*:START/END -->` markers) — auto-generated
- `scripts/` — unless fixing repo tooling

The pre-commit hook and GitHub Actions run manifest generation. If validation passes locally, the index updates on commit or PR.

## Skill file rules

Every `SKILL.md` must have:

1. **YAML frontmatter** with `name` (matches folder name) and `description` (includes trigger phrases)
2. **Version line:** `**Version:** X.Y.Z | **Author:** Name`
3. **Prescriptive instructions** — tell Claude exactly what to do, in order
4. **Ask, don't assume** — Claude must ask for missing info, not invent it

Version bumps:
- PATCH (1.0.1): typos, clarifications
- MINOR (1.1.0): new steps, templates, examples
- MAJOR (2.0.0): breaking restructure — add Migration Note at top

## Before finishing any skill work

Always run:

```bash
npm run validate
```

Fix all errors before telling the user the work is complete. If `npm install` has not been run, run it first.

## Git workflow

- **Create a branch before touching any file.** The very first action in any work session must be `git checkout -b [branch-name]`. Do not read, edit, or create files until you are on a branch.
- **Never commit directly to `main`** unless the user explicitly asks
- **Always use a branch:** `add/skill-name`, `update/skill-name`, `enhance/skill-name`
- **Commit messages:** plain language, e.g. `Add research-synthesis skill` or `Update research-plan: add stakeholder alignment step`
- **PRs:** use the PR template checklist; request Design Lead review; do not merge unless asked

When the user says "submit", "open a PR", or "ready for review":
1. Run `npm run validate`
2. Create/checkout a branch if not already on one
3. Commit relevant files
4. Push and create PR via `gh pr create` if available

## When creating a new skill

1. Ask what the skill should do and which category fits (or infer from context)
2. Copy `skills/_template/` to `skills/[category]/[skill-id]/`
3. Write `SKILL.md` following [CONTRIBUTION.md](./CONTRIBUTION.md)
4. Add `references/EXAMPLES.md` (required) and `references/TEMPLATES.md` if useful
5. Run `npm run validate`
6. Summarize what you created in plain language

## When updating a skill

1. Read the existing `SKILL.md` and reference files first
2. Make focused changes — match the existing tone and structure
3. Bump version if behavior changed (see rules above)
4. Run `npm run validate`

## Reference files

- All `references/*.md` linked from `SKILL.md` must exist in that skill's `references/` folder
- Skills must be self-contained — bundle reference docs, don't link to other skills' folders

## Read these for quality

- [CONTRIBUTION.md](./CONTRIBUTION.md) — skill structure, writing principles, review checklist
- [GETTING_STARTED.md](./GETTING_STARTED.md) — designer-facing workflow (don't rewrite unless asked)
