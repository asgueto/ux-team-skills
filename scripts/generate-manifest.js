#!/usr/bin/env node

/**
 * Generates skills.json manifest from skill SKILL.md files
 * Reads frontmatter and auto-detects reference files
 * Run: npm run generate-manifest
 */

const fs = require('fs');
const path = require('path');

const SKILL_CATEGORIES = ['research', 'design', 'content', 'process'];
const REPO_ROOT = path.join(__dirname, '..');

// Parse YAML frontmatter from SKILL.md
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const frontmatter = {};
  const lines = match[1].split('\n');

  for (const line of lines) {
    if (!line.trim()) continue;
    const [key, ...valueParts] = line.split(':');
    let value = valueParts.join(':').trim();

    // Remove quotes
    if ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // Handle multiline descriptions
    if (key.trim() === 'description') {
      value = value.replace(/^[>|]\s?/, '').replace(/\n\s+/g, ' ');
    }

    frontmatter[key.trim()] = value;
  }

  return frontmatter;
}

// Get reference files in a skill's references/ folder
function getReferenceFiles(skillPath) {
  const refsPath = path.join(skillPath, 'references');
  if (!fs.existsSync(refsPath)) return [];

  return fs.readdirSync(refsPath)
    .filter(f => f.endsWith('.md') || f.endsWith('.json'))
    .map(f => `references/${f}`);
}

// Main function
function generateManifest() {
  const skills = [];

  for (const category of SKILL_CATEGORIES) {
    const categoryPath = path.join(REPO_ROOT, category);
    if (!fs.existsSync(categoryPath)) continue;

    const skillFolders = fs.readdirSync(categoryPath)
      .filter(f => fs.statSync(path.join(categoryPath, f)).isDirectory());

    for (const skillFolder of skillFolders) {
      const skillPath = path.join(categoryPath, skillFolder);
      const skillMdPath = path.join(skillPath, 'SKILL.md');

      if (!fs.existsSync(skillMdPath)) continue;

      const content = fs.readFileSync(skillMdPath, 'utf8');
      const frontmatter = parseFrontmatter(content);
      const referenceFiles = getReferenceFiles(skillPath);

      const skill = {
        id: frontmatter.name || skillFolder,
        category,
        name: frontmatter.name
          ? frontmatter.name.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
          : skillFolder,
        version: extractVersion(content) || '1.0.0',
        path: `${category}/${skillFolder}`,
        description: (frontmatter.description || '').substring(0, 200),
        tags: extractTags(frontmatter.description || ''),
        referenceFiles: referenceFiles
      };

      skills.push(skill);
    }
  }

  // Sort by category then name
  skills.sort((a, b) => {
    if (a.category !== b.category) {
      return SKILL_CATEGORIES.indexOf(a.category) - SKILL_CATEGORIES.indexOf(b.category);
    }
    return a.id.localeCompare(b.id);
  });

  const manifest = {
    version: '1.0.0',
    lastUpdated: new Date().toISOString().split('T')[0],
    description: 'Manifest of all skills in the UX Team Skills repository. Each skill is located in its category folder and includes a SKILL.md file with behavioral instructions.',
    skills
  };

  // Write manifest
  const manifestPath = path.join(REPO_ROOT, 'skills.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');

  console.log(`✓ Generated skills.json with ${skills.length} skills`);
  process.exit(0);
}

// Extract version from content
function extractVersion(content) {
  const match = content.match(/\*\*Version:\*\*\s+([0-9.]+)/);
  return match ? match[1] : null;
}

// Extract basic tags from description
function extractTags(description) {
  const tags = [];
  const keywords = {
    research: ['research', 'discovery', 'planning', 'synthesis'],
    design: ['design', 'prompt', 'ideation', 'component'],
    content: ['voice', 'tone', 'copy', 'microcopy'],
    process: ['process', 'ticket', 'workflow']
  };

  const descLower = description.toLowerCase();
  for (const [tag, keywords_list] of Object.entries(keywords)) {
    for (const keyword of keywords_list) {
      if (descLower.includes(keyword) && !tags.includes(keyword)) {
        tags.push(keyword);
      }
    }
  }

  return tags.length > 0 ? tags : ['skill'];
}

generateManifest();
