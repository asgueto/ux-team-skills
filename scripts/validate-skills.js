#!/usr/bin/env node

/**
 * Validates skill folder structure before merge.
 * Run: npm run validate
 */

const fs = require('fs');
const path = require('path');

const SKILL_CATEGORIES = ['research', 'design', 'content', 'process'];
const SKILLS_ROOT = path.join(__dirname, '..', 'skills');

function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;

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

const errors = [];
const warnings = [];

for (const category of SKILL_CATEGORIES) {
  const categoryPath = path.join(SKILLS_ROOT, category);
  if (!fs.existsSync(categoryPath)) continue;

  for (const folder of fs.readdirSync(categoryPath)) {
    if (folder.startsWith('_')) continue;

    const skillPath = path.join(categoryPath, folder);
    if (!fs.statSync(skillPath).isDirectory()) continue;

    const skillMdPath = path.join(skillPath, 'SKILL.md');
    const label = `${category}/${folder}`;

    if (!fs.existsSync(skillMdPath)) {
      errors.push(`${label}: missing required SKILL.md`);
      continue;
    }

    const content = fs.readFileSync(skillMdPath, 'utf8');
    const frontmatter = parseFrontmatter(content);

    if (!frontmatter) {
      errors.push(`${label}: SKILL.md must start with YAML frontmatter (--- blocks)`);
      continue;
    }

    if (!frontmatter.name) {
      errors.push(`${label}: frontmatter missing "name"`);
    } else if (frontmatter.name !== folder) {
      errors.push(`${label}: frontmatter name "${frontmatter.name}" must match folder name "${folder}"`);
    }

    if (!frontmatter.description || frontmatter.description.length < 20) {
      errors.push(`${label}: frontmatter "description" is missing or too short`);
    }

    if (!/\*\*Version:\*\*\s+[0-9]+\.[0-9]+\.[0-9]+/.test(content)) {
      errors.push(`${label}: missing version line like "**Version:** 1.0.0"`);
    }

    const refsPath = path.join(skillPath, 'references');
    if (fs.existsSync(refsPath)) {
      const refLinks = [...content.matchAll(/references\/([A-Za-z0-9_.-]+\.md)/g)].map(m => m[1]);
      const uniqueRefs = [...new Set(refLinks)];

      for (const refFile of uniqueRefs) {
        const refPath = path.join(refsPath, refFile);
        if (!fs.existsSync(refPath)) {
          errors.push(`${label}: references broken link "references/${refFile}"`);
        }
      }
    } else if (/references\//.test(content)) {
      warnings.push(`${label}: mentions reference files but has no references/ folder`);
    }
  }
}

if (warnings.length > 0) {
  console.warn('Warnings:');
  warnings.forEach(w => console.warn(`  ⚠ ${w}`));
}

if (errors.length > 0) {
  console.error('Validation failed:');
  errors.forEach(e => console.error(`  ✗ ${e}`));
  process.exit(1);
}

console.log('✓ All skills passed validation');
