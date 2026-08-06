#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const command = args[0] || 'init';

function printHelp() {
  console.log(`
@gv-tech/skills CLI

Usage:
  npx @gv-tech/skills init                     Install all skills and rules into your project
  npx @gv-tech/skills add <skill-name>        Install a specific skill (e.g. setup-ui-native, setup-ui-web)
  npx @gv-tech/skills list                    List all available skills and rules
  npx @gv-tech/skills --help                  Show this help message
`);
}

function getTargetDirs(cwd) {
  const targets = [];

  const agentDir = path.join(cwd, '.agent');
  const agentsDir = path.join(cwd, '.agents');

  if (fs.existsSync(agentDir)) {
    targets.push({ root: agentDir, skills: path.join(agentDir, 'skills'), rules: path.join(agentDir, 'rules') });
  }

  targets.push({ root: agentsDir, skills: path.join(agentsDir, 'skills'), rules: path.join(agentsDir, 'rules') });

  return targets;
}

function listAvailable() {
  const skillsDir = path.join(packageRoot, 'skills');
  const rulesDir = path.join(packageRoot, 'rules');

  const skills = fs.existsSync(skillsDir) ? fs.readdirSync(skillsDir) : [];
  const rules = fs.existsSync(rulesDir) ? fs.readdirSync(rulesDir) : [];

  console.log('\nAvailable Skills:');
  skills.forEach((s) => console.log(`  - ${s}`));

  console.log('\nAvailable Rules:');
  rules.forEach((r) => console.log(`  - ${r}`));
  console.log('');
}

function copyDirRecursive(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function installSkillsAndRules(skillFilter = null) {
  const cwd = process.cwd();
  const targetDirs = getTargetDirs(cwd);
  const srcSkillsDir = path.join(packageRoot, 'skills');
  const srcRulesDir = path.join(packageRoot, 'rules');

  const availableSkills = fs.existsSync(srcSkillsDir) ? fs.readdirSync(srcSkillsDir) : [];
  const availableRules = fs.existsSync(srcRulesDir) ? fs.readdirSync(srcRulesDir) : [];

  const skillsToInstall = skillFilter ? availableSkills.filter((s) => s === skillFilter) : availableSkills;

  if (skillFilter && skillsToInstall.length === 0) {
    console.error(`\nError: Skill "${skillFilter}" not found.`);
    listAvailable();
    process.exit(1);
  }

  console.log(`\n🚀 Installing GV Tech Customizations...`);

  for (const target of targetDirs) {
    for (const skillName of skillsToInstall) {
      const srcSkillFolder = path.join(srcSkillsDir, skillName);
      const destSkillFolder = path.join(target.skills, skillName);
      copyDirRecursive(srcSkillFolder, destSkillFolder);
      console.log(`  ✓ Installed skill [${skillName}] -> ${path.relative(cwd, destSkillFolder)}`);
    }

    if (!skillFilter) {
      fs.mkdirSync(target.rules, { recursive: true });
      for (const ruleFile of availableRules) {
        const srcRulePath = path.join(srcRulesDir, ruleFile);
        const destRulePath = path.join(target.rules, ruleFile);
        fs.copyFileSync(srcRulePath, destRulePath);
        console.log(`  ✓ Installed rule [${ruleFile}] -> ${path.relative(cwd, destRulePath)}`);
      }
    }
  }

  console.log(`\n✅ Done! Skills and rules successfully installed.\n`);
}

switch (command) {
  case 'init':
    installSkillsAndRules();
    break;
  case 'add': {
    const skillName = args[1];
    if (!skillName) {
      console.error('\nError: Please specify a skill name to add. Example: npx @gv-tech/skills add setup-ui-native');
      listAvailable();
      process.exit(1);
    }
    installSkillsAndRules(skillName);
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
