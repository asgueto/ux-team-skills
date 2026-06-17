# UX Team Skills

Claude skills for the TechOps Experience Design team.

This repository is the source of truth for all team skills. Skills are instructions that help Claude work the way our team works — using our conventions, our tools, and our real project context.

---

## What is a skill?

A skill is a folder that contains a `SKILL.md` file (and sometimes supporting reference files). When installed in Claude, it tells Claude how to behave for a specific type of task — what questions to ask, what structure to follow, what team conventions to apply, and when to ask the researcher or designer instead of guessing.

Skills do not replace team judgment. They support it.

---

## Repo structure

```
ux-team-skills/
├── skills/
│   ├── _template/                ← copy this to start a new skill
│   ├── research/
│   │   ├── research-plan/
│   │   │   ├── SKILL.md
│   │   │   └── references/
│   │   │       ├── EXAMPLES.md
│   │   │       └── TEMPLATES.md
│   │   └── research-readout/
│   │       ├── SKILL.md
│   │       └── references/
│   │           └── EXAMPLES.md
│   ├── design/
│   │   ├── prompt-builder/
│   │   └── spec-ideation/
│   ├── content/
│   │   ├── globallink-voice/
│   │   │   ├── SKILL.md
│   │   │   └── references/
│   │   │       ├── EXAMPLES.md
│   │   │       └── COMPASS_VOICE_AND_TONE.md
│   │   └── product-voice-guide/
│   │       ├── SKILL.md
│   │       └── references/
│   │           ├── VOICE_RULES.md
│   │           ├── GUIDE_TEMPLATE.md
│   │           ├── COMPASS_VOICE_AND_TONE.md
│   │           └── COMPASS_PRODUCT_VOICE_WORKBOOK.md
│   └── process/
│       └── discovery-tickets/
│           ├── SKILL.md
│           └── references/
│               ├── SCENARIOS.md
│               └── TEMPLATES.md
├── scripts/
│   └── generate-manifest.js    ← auto-generates skills.json
├── .cursor/rules/              ← Cursor AI guidance for skill editing
├── .husky/
│   └── pre-commit              ← runs manifest generator on commit
├── package.json
├── skills.json                 ← skill metadata manifest (auto-generated)
├── GETTING_STARTED.md          ← start here (beginner + advanced paths)
├── AGENTS.md                   ← AI instructions (Cursor + Claude Code)
├── CLAUDE.md                   ← Claude Code entry point
├── CONTRIBUTION.md             ← skill writing guidelines
├── .gitignore
└── README.md                   ← this file
```

---

## Skills

### Research

<!-- SKILLS:research:START -->
| Skill | Version | What it does |
|---|---|---|
| `research/condens-tagger` | 1.0.0 | Use this skill whenever the user asks Claude to tag, annotate, or analyse a research session inside Condens. |
| `research/research-plan` | 1.1.0 | Use this skill whenever anyone on the team touches a research study — from the first conversation about scoping to reviewing a draft plan to choosing a method. |
| `research/research-readout` | 1.0.0 | Use this skill whenever anyone on the team is preparing, writing, or reviewing a research readout, report, or findings presentation. |
<!-- SKILLS:research:END -->

### Design

<!-- SKILLS:design:START -->
| Skill | Version | What it does |
|---|---|---|
| `design/prompt-builder` | 2.0.0 | Step-by-step skill that guides designers through building high-quality AI prompts for design artifacts. |
| `design/spec-ideation` | 1.0.0 | Structured framework for working with AI to generate thoughtful solutions through expansion, contraction, and documentation phases. |
<!-- SKILLS:design:END -->

### Content

<!-- SKILLS:content:START -->
| Skill | Version | What it does |
|---|---|---|
| `content/globallink-voice` | 1.2.0 | Defines GlobalLink's voice personality, valid tone ranges, copy patterns, and translatability rules for all in-product content. |
| `content/product-voice-guide` | 1.0.0 | Creates a product-specific voice & tone guide for any GlobalLink or TransPerfect TechOps product, based on the Compass master guide. |
<!-- SKILLS:content:END -->

### Process

<!-- SKILLS:process:START -->
| Skill | Version | What it does |
|---|---|---|
| `process/discovery-tickets` | 1.0.0 | Guides researchers and designers through creating discovery tickets for Azure DevOps — Feature tickets and PBIs (Research, Design, Validation). |
<!-- SKILLS:process:END -->

---

## Quick Start

**New to skills?** → [GETTING_STARTED.md](./GETTING_STARTED.md) — explains what a skill is and offers two paths.

| Path | Guide |
|---|---|
| **Beginner** — describe changes, AI handles files and git | [GETTING_STARTED.md — Path 1](./GETTING_STARTED.md#path-1-beginner-ai-assisted) |
| **Advanced** — edit skills directly in a cloned repo | [GETTING_STARTED.md — Path 2](./GETTING_STARTED.md#path-2-advanced-edit-directly) |
| **Writing quality** — structure, examples, review checklist | [CONTRIBUTION.md](./CONTRIBUTION.md) |

**Using a skill in Claude?** Download a skill folder from `skills/` and upload it in Claude **Customize → Skills**.

### One-time setup

```bash
git clone https://github.com/asgueto/ux-team-skills.git
cd ux-team-skills
npm install
```

Then open the folder in Cursor or run Claude Code in that directory. Tell the AI: *"Run the one-time setup"* if `npm install` wasn't done yet.

---

## Setup for Contributors

| Path | What you do | What automation handles |
|---|---|---|
| **Beginner** | Describe changes in Cursor/Claude Code | AI edits files; validation + index on PR |
| **Advanced** | Edit `SKILL.md` and `references/` directly | `skills.json`, README tables, validation on commit/PR |

See [GETTING_STARTED.md](./GETTING_STARTED.md).

---

## How to install a skill in Claude

1. Navigate to the skill folder you want (e.g., `skills/research/research-plan/`)
2. Download the folder (or clone the whole repo)
3. In Claude, go to **Customize → Skills**
4. Upload the skill folder — Claude reads `SKILL.md` and any `references/` files automatically
5. The skill is now active in your conversations

**All reference files are bundled with the skill**, so it works standalone. No external dependencies.

---

## How to update a skill

- **Beginner:** tell the AI what to change → [GETTING_STARTED.md](./GETTING_STARTED.md)
- **Advanced:** edit the skill folder, run `npm run validate`, open a PR → [GETTING_STARTED.md — Path 2](./GETTING_STARTED.md#path-2-advanced-edit-directly)

Re-upload the skill folder in Claude after merge.

---

## How to contribute a new skill

- **Beginner:** ask the AI in Cursor/Claude Code — [GETTING_STARTED.md](./GETTING_STARTED.md)
- **Advanced:** copy `skills/_template/`, edit, validate, PR — [GETTING_STARTED.md — Path 2](./GETTING_STARTED.md#path-2-advanced-edit-directly)

Writing guidelines: [CONTRIBUTION.md](./CONTRIBUTION.md)

---

## Skill structure

Each skill follows this structure:

```
skill-name/
├── SKILL.md              ← required: frontmatter + behavioral instructions
└── references/           ← optional: supporting documentation
    ├── EXAMPLES.md       ← real team examples with context
    ├── TEMPLATES.md      ← ready-to-use templates or checklists
    └── [other files]     ← domain-specific reference docs
```

`SKILL.md` contains:
- **Frontmatter** with `name` and `description` (triggers Claude to use the skill)
- **Version info** — Version X.Y.Z | Author | Last Updated date
- **Behavioral instructions** — prescriptive steps, no hand-waving
- **Frameworks and processes** — the main guidance content
- **Common blockers** — what can go wrong and how to recover
- **References** to `references/` folder files

All skills are indexed in `skills.json` for discoverability and dependency tracking.

---

## Skills Manifest

`skills.json` provides a machine-readable index of all skills:
- Metadata (id, category, version, description)
- Tags for discoverability
- Reference files included with each skill
- Dependencies between skills

Use this manifest to:
- Search for skills by category or tag
- Track skill versions and dependencies
- Verify what reference files are bundled with each skill

---

## Principles

**Skills work with team knowledge, not instead of it.**
Claude does not invent findings, proposals, or business impact. It asks questions and helps structure what the researcher or designer already knows.

**Skills are self-contained and portable.**
Each skill includes all reference files it needs. When you install `content/globallink-voice/`, you get both the skill and the Compass voice guide. No external dependencies to hunt for.

**Skills evolve with the team.**
As the team's conventions change, skills should be updated. This repo is a living document, not a one-time setup. See [CONTRIBUTION.md](./CONTRIBUTION.md) for versioning and maintenance guidelines.

---

## Maintained by

TechOps Experience Design team  
Questions or suggestions → speak to the Design Lead

See [GETTING_STARTED.md](./GETTING_STARTED.md) and [CONTRIBUTION.md](./CONTRIBUTION.md) for contributor guidelines.
