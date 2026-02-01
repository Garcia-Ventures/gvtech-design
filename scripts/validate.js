#!/usr/bin/env node

const { spawnSync } = require('child_process');

const args = process.argv.slice(2);
const fix = args.includes('--fix');

const steps = [
  {
    name: fix ? 'Prettier fix' : 'Prettier check',
    cmd: fix ? 'yarn format' : 'yarn format:ci',
  },
  {
    name: fix ? 'Lint fix (eslint)' : 'Lint (eslint)',
    cmd: fix ? 'yarn lint:fix' : 'yarn lint',
  },
  { name: 'TypeScript type check', cmd: 'npx tsc --noEmit' },
  { name: 'Build (vite)', cmd: 'yarn build' },
  { name: 'Storybook build', cmd: 'yarn build-storybook' },
  { name: 'Storybook docs build', cmd: 'yarn build-storybook-docs' },
];

const SEP = '------------------------------------------------------------';
const green = (s) => `\x1b[32m${s}\x1b[0m`;
const red = (s) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s) => `\x1b[33m${s}\x1b[0m`;

console.log(SEP);
console.log('\x1b[1mRunning validate steps (sequential)\x1b[0m');
console.log(SEP);

for (const step of steps) {
  console.log(yellow(`\n> ${step.name}`));
  console.log(yellow(`> ${step.cmd}\n`));

  const result = spawnSync(step.cmd, { stdio: 'inherit', shell: true });

  if (result.error) {
    console.error(red(`\nFailed to run: ${step.cmd}`));
    console.error(red(result.error));
    process.exit(1);
  }

  if (result.status !== 0) {
    console.error(red(`\n${step.name} failed with exit code ${result.status}.`));
    console.error(red('Stopping further steps.'));
    process.exit(result.status || 1);
  }

  console.log(green(`\n${step.name} succeeded.`));
}

console.log('\n' + SEP);
console.log(green('All validate steps completed successfully ✅'));
console.log(SEP + '\n');
process.exit(0);
