#!/usr/bin/env node

/**
 * Generates skills.json and README skill tables from SKILL.md files.
 * Run: npm run generate-manifest
 */

const fs = require('fs');
const path = require('path');

const SKILL_CATEGORIES = ['research', 'design', 'content', 'process'];
const REPO_ROOT = path.join(__dirname, '..');
const SKILLS_ROOT = path.join(REPO_ROOT, 'skills');

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};

  const frontmatter = {};
  let currentKey = null;
  let currentValue = [];
  let isMultiline = false;

  const finishKey = () => {
    if (currentKey) {
      frontmatter[currentKey] = currentValue.join(' ').trim();
    }
    currentKey = null;
    currentValue = [];
    isMultiline = false;
  };

  for (const line of match[1].split('\n')) {
    const keyMatch = line.match(/^([a-zA-Z_-]+):\s*(.*)$/);

    if (!isMultiline && keyMatch) {
      finishKey();
      currentKey = keyMatch[1];
      const rest = keyMatch[2].trim();

      if (rest === '>' || rest === '|') {
        isMultiline = true;
        currentValue = [];
      } else {
        frontmatter[currentKey] = rest.replace(/^["']|["']$/g, '');
        currentKey = null;
      }
      continue;
    }

    if (isMultiline) {
      if (/^\s/.test(line)) {
        currentValue.push(line.trim());
      } else if (keyMatch) {
        finishKey();
        currentKey = keyMatch[1];
        const rest = keyMatch[2].trim();
        if (rest === '>' || rest === '|') {
          isMultiline = true;
          currentValue = [];
        } else {
          frontmatter[currentKey] = rest.replace(/^["']|["']$/g, '');
          currentKey = null;
        }
      }
    }
  }

  finishKey();
  return frontmatter;
}

function extractVersion(content) {
  const match = content.match(/\*\*Version:\*\*\s+([0-9.]+)/);
  return match ? match[1] : null;
}

function extractTags(description, category) {
  const tags = [];
  const keywords = {
    research: ['research', 'discovery', 'planning', 'synthesis'],
    design: ['design', 'prompt', 'ideation', 'component'],
    content: ['voice', 'tone', 'copy', 'microcopy'],
    process: ['process', 'ticket', 'workflow'],
  };

  const descLower = description.toLowerCase();
  for (const keyword of keywords[category] || []) {
    if (descLower.includes(keyword) && !tags.includes(keyword)) {
      tags.push(keyword);
    }
  }

  return tags.length > 0 ? tags : ['skill'];
}

function summarizeDescription(description, maxLength = 160) {
  const cleaned = description.replace(/\s+/g, ' ').trim();
  if (!cleaned) return '—';

  const firstSentence = cleaned.match(/^[^.!?]+[.!?]?/)?.[0]?.trim() || cleaned;
  const candidate = firstSentence.length <= maxLength ? firstSentence : cleaned;

  if (candidate.length <= maxLength) return candidate;

  const truncated = candidate.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength).trim()}…`;
}

function getReferenceFiles(skillPath) {
  const refsPath = path.join(skillPath, 'references');
  if (!fs.existsSync(refsPath)) return [];

  return fs.readdirSync(refsPath)
    .filter(f => f.endsWith('.md') || f.endsWith('.json'))
    .map(f => `references/${f}`);
}

function collectSkills() {
  const skills = [];

  for (const category of SKILL_CATEGORIES) {
    const categoryPath = path.join(SKILLS_ROOT, category);
    if (!fs.existsSync(categoryPath)) continue;

    const skillFolders = fs.readdirSync(categoryPath)
      .filter(f => !f.startsWith('_'))
      .filter(f => fs.statSync(path.join(categoryPath, f)).isDirectory());

    for (const skillFolder of skillFolders) {
      const skillPath = path.join(categoryPath, skillFolder);
      const skillMdPath = path.join(skillPath, 'SKILL.md');
      if (!fs.existsSync(skillMdPath)) continue;

      const content = fs.readFileSync(skillMdPath, 'utf8');
      const frontmatter = parseFrontmatter(content);
      const description = frontmatter.description || '';

      skills.push({
        id: frontmatter.name || skillFolder,
        category,
        name: frontmatter.name
          ? frontmatter.name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
          : skillFolder,
        version: extractVersion(content) || '1.0.0',
        path: `skills/${category}/${skillFolder}`,
        description,
        summary: summarizeDescription(description),
        tags: extractTags(description, category),
        referenceFiles: getReferenceFiles(skillPath),
      });
    }
  }

  skills.sort((a, b) => {
    if (a.category !== b.category) {
      return SKILL_CATEGORIES.indexOf(a.category) - SKILL_CATEGORIES.indexOf(b.category);
    }
    return a.id.localeCompare(b.id);
  });

  return skills;
}

function writeManifest(skills) {
  const manifest = {
    version: '1.0.0',
    lastUpdated: new Date().toISOString().split('T')[0],
    description: 'Manifest of all skills in the UX Team Skills repository. Each skill is located in its category folder and includes a SKILL.md file with behavioral instructions.',
    skills,
  };

  fs.writeFileSync(path.join(REPO_ROOT, 'skills.json'), `${JSON.stringify(manifest, null, 2)}\n`);
}

function buildCategoryTable(category, skills) {
  const rows = skills
    .filter(skill => skill.category === category)
    .map(skill => `| \`${skill.category}/${skill.id}\` | ${skill.version} | ${skill.summary} |`)
    .join('\n');

  return `| Skill | Version | What it does |
|---|---|---|
${rows}`;
}

function updateReadme(skills) {
  const readmePath = path.join(REPO_ROOT, 'README.md');
  let readme = fs.readFileSync(readmePath, 'utf8');

  for (const category of SKILL_CATEGORIES) {
    const startMarker = `<!-- SKILLS:${category}:START -->`;
    const endMarker = `<!-- SKILLS:${category}:END -->`;
    const block = `${startMarker}\n${buildCategoryTable(category, skills)}\n${endMarker}`;

    const pattern = new RegExp(
      `${startMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?${endMarker.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`
    );

    if (!pattern.test(readme)) {
      console.warn(`⚠ README markers missing for category "${category}" — skipping table update`);
      continue;
    }

    readme = readme.replace(pattern, block);
  }

  fs.writeFileSync(readmePath, readme);
}

function generateManifest() {
  const skills = collectSkills();
  writeManifest(skills);
  updateReadme(skills);
  console.log(`✓ Generated skills.json with ${skills.length} skills`);
  console.log('✓ Updated README skill tables');
}

generateManifest();
