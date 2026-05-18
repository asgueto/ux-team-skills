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
├── research/
│   ├── research-plan/
│   └── research-readout/
├── design/
├── content/
└── design-system/
```

---

## Skills

### Research

| Skill | What it does |
|---|---|
| `research/research-plan` | Guides writing or reviewing a research plan — goals, method, participants, checklist. Based on TechOps conventions from real Condens studies. |
| `research/research-readout` | Guides writing a research readout — executive summary, findings with impact, conclusions, proposals. Focused on synthesis for PM and stakeholder audiences. |

### Design
*Skills coming soon.*

### Content
*Skills coming soon.*

### Design System
*Skills coming soon.*

---

## How to install a skill in Claude

1. Go to this repo and navigate to the skill folder you want (e.g. `research/research-plan`)
2. Click **Code** → **Download ZIP** to download the full repo, or navigate to the skill folder and download the files individually
3. In Claude, go to **Settings → Skills**
4. Upload the skill folder (must include `SKILL.md` and any `references/` subfolder)
5. The skill is now active in your Claude conversations

---

## How to update a skill

1. Edit the `SKILL.md` (or reference files) in this repo directly via the GitHub browser editor
2. Commit the changes
3. Reinstall the updated skill in Claude by re-uploading the folder

---

## How to contribute a new skill

1. Create a new folder inside the relevant category (`research/`, `design/`, `content/`, `design-system/`)
2. Add a `SKILL.md` file following the structure of existing skills
3. Add a `references/` subfolder if the skill needs example files
4. Submit a pull request or commit directly if you have write access
5. Update this README to add the skill to the table above

---

## Skill structure

Each skill follows this structure:

```
skill-name/
├── SKILL.md              ← required
└── references/           ← optional
    └── EXAMPLES.md       ← real team examples with annotations
```

`SKILL.md` contains:
- A frontmatter block with `name` and `description` (this is what Claude reads to decide when to activate the skill)
- Behavioral instructions for Claude
- A quick start section
- The main guidance content
- Common failure modes
- References to Condens and example files

---

## Principles

**Skills work with team knowledge, not instead of it.**
Claude does not invent findings, proposals, or business impact. It asks questions and helps structure what the researcher or designer already knows.

**Condens is the live source of truth for research.**
Skills reference Condens for real team examples. The `references/EXAMPLES.md` files in each skill are curated snapshots — useful when Condens is not connected, but always secondary to the live archive.

**Skills evolve with the team.**
As the team's conventions change, skills should be updated. This repo is a living document, not a one-time setup.

---

## Maintained by

TechOps Experience Design team  
Questions or suggestions → open an issue or speak to the Design Lead
