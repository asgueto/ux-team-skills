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
├── .husky/
│   └── pre-commit              ← runs manifest generator on commit
├── package.json
├── skills.json                 ← skill metadata manifest (auto-generated)
├── CONTRIBUTION.md             ← guide for contributing skills
├── .gitignore
└── README.md                   ← this file
```

---

## Skills

### Research

| Skill | Version | What it does |
|---|---|---|
| `research/research-plan` | 1.1.0 | Guides writing or reviewing a research plan — goals, method, participants, checklist. Based on TechOps conventions from real Condens studies. |
| `research/research-readout` | 1.0.0 | Guides writing a research readout — executive summary, findings with impact, conclusions, proposals. Focused on synthesis for PM and stakeholder audiences. |

### Design

| Skill | Version | What it does |
|---|---|---|
| `design/prompt-builder` | 2.0.0 | Step-by-step guide for building high-quality AI prompts for design artifacts. Walks through Prompt Anatomy (Object, Style, Context, Constraints) and FEEL framework (Feeling, Experience, Emotion, Language). |
| `design/spec-ideation` | 1.0.0 | Structured framework for ideation with AI — expansion, contraction, and documentation phases. Use for developing ideas, making decisions, or writing specs across any domain. |

### Content

| Skill | Version | What it does |
|---|---|---|
| `content/globallink-voice` | 1.2.0 | Defines GlobalLink voice personality, tone ranges, copy patterns, and translatability rules for in-product content. Supports product overlays when combined with `product-voice-guide`. |
| `content/product-voice-guide` | 1.0.0 | Walks product teams through creating a product-specific voice & tone guide — tone registers, calibrated positions, terminology, microcopy. Extends Compass master guide. |

### Process

| Skill | Version | What it does |
|---|---|---|
| `process/discovery-tickets` | 1.0.0 | Guides researchers and designers through creating discovery tickets for Azure DevOps — Feature tickets and Research/Design/Validation PBIs. Produces ready-to-paste content. |

---

## Quick Start

**First time using this repo?**

```bash
# Clone the repo
git clone https://github.com/asgueto/ux-team-skills.git
cd ux-team-skills

# One-time setup (installs dependencies + sets up pre-commit hook)
npm install
```

Done. Now you can create or update skills.

**To add a new skill:**

```bash
# Create a branch
git checkout -b add/my-skill-name

# Create your skill folder
mkdir -p skills/[category]/[skill-id]/references

# Add SKILL.md and reference files

# Commit (the pre-commit hook auto-updates skills.json)
git commit -m "Add my-skill-name skill"

# Push and create a PR
git push origin add/my-skill-name
```

See [CONTRIBUTION.md](./CONTRIBUTION.md) for detailed instructions.

---

## Setup for Contributors

The `npm install` command installs dependencies and sets up a pre-commit hook that automatically updates `skills.json` whenever you commit changes to a skill. You don't need to do anything manually — it happens automatically.

---

## How to install a skill in Claude

1. Navigate to the skill folder you want (e.g., `skills/research/research-plan/`)
2. Download the folder (or clone the whole repo)
3. In Claude, go to **Settings → Skills**
4. Upload the skill folder — Claude reads `SKILL.md` and any `references/` files automatically
5. The skill is now active in your conversations

**All reference files are bundled with the skill**, so it works standalone. No external dependencies.

---

## How to update a skill

1. Edit the `SKILL.md` (or reference files) in this repo directly via the GitHub browser editor
2. Commit the changes
3. Reinstall the updated skill in Claude by re-uploading the folder

---

## How to contribute a new skill

See [CONTRIBUTION.md](./CONTRIBUTION.md) for comprehensive guidelines on:
- When to create a new skill
- Skill structure and SKILL.md format
- Creating reference files (EXAMPLES.md, TEMPLATES.md)
- Versioning strategy (semantic versioning)
- Review checklist before submitting

Quick start:
1. Create a new folder in the relevant category (`research/`, `design/`, `content/`, `process/`)
2. Add `SKILL.md` with frontmatter (`name`, `description`) and behavioral instructions
3. Add `references/EXAMPLES.md` and/or `references/TEMPLATES.md` if needed
4. Update `skills.json` with the new skill metadata
5. Update this README table
6. Commit: `git commit -m "Add [skill-name] skill"`

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

See [CONTRIBUTION.md](./CONTRIBUTION.md) for contributor guidelines.
