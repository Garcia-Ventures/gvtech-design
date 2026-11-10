#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const command = args[0] || 'init';

// Older published names install the same skill.
const SKILL_ALIASES = {
  gvtech: 'gvtech',
  'setup-ui-web': 'gvtech',
  'setup-ui-native': 'gvtech',
  'use-ui-web': 'gvtech',
  'use-ui-native': 'gvtech',
};

function printHelp() {
  console.log(`
@gv-tech/skills CLI

Usage:
  npx @gv-tech/skills init                 Install the gvtech skill into .agents/skills/
  npx @gv-tech/skills add <skill-name>     Install a skill (gvtech, or a legacy alias)
  npx @gv-tech/skills list                 List skills
  npx @gv-tech/skills --help               Show this help message
`);
}

function skillsRoot() {
  return path.join(packageRoot, 'skills');
}

function listSkillDirs() {
  const root = skillsRoot();
  if (!fs.existsSync(root)) return [];
  return fs.readdirSync(root).filter((name) => fs.existsSync(path.join(root, name, 'SKILL.md')));
}

function listAvailable() {
  console.log('\nAvailable Skills:');
  for (const name of listSkillDirs()) console.log(`  - ${name}`);
  console.log('');
}

function copyDirRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDirRecursive(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}

function resolveSkillName(requested) {
  return SKILL_ALIASES[requested] ?? requested;
}

function installSkills(requestedName = null) {
  const cwd = process.cwd();
  const available = listSkillDirs();
  let toInstall = available;

  if (requestedName) {
    const resolved = resolveSkillName(requestedName);
    toInstall = available.filter((name) => name === resolved);
    if (toInstall.length === 0) {
      console.error(`\nError: Skill "${requestedName}" not found.`);
      listAvailable();
      process.exit(1);
    }
  }

  const destRoot = path.join(cwd, '.agents', 'skills');
  console.log('\nInstalling GV Tech skills...');

  for (const skillName of toInstall) {
    const dest = path.join(destRoot, skillName);
    copyDirRecursive(path.join(skillsRoot(), skillName), dest);
    console.log(`  Installed [${skillName}] -> ${path.relative(cwd, dest)}`);
  }

  console.log('\nDone. Skills installed under .agents/skills/.\n');
}

switch (command) {
  case 'init':
    installSkills();
    break;
  case 'add': {
    const skillName = args[1];
    if (!skillName) {
      console.error('\nError: Please specify a skill name. Example: npx @gv-tech/skills add gvtech');
      listAvailable();
      process.exit(1);
    }
    installSkills(skillName);
    break;
  }
  case 'list':
    listAvailable();
    break;
  case '--help':
  case '-h':
  case 'help':
    printHelp();
    break;
  default:
    console.error(`Unknown command: ${command}`);
    printHelp();
    process.exit(1);
}
