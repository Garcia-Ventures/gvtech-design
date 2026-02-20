import { spawnSync } from 'child_process';

const args = process.argv.slice(2);
const fix = args.includes('--fix');
const noCache = args.includes('--no-cache');

const nxFlags = noCache ? ' --skipNxCache' : '';

const steps = [
  {
    name: 'Sync Tokens',
    cmd: 'bun run tsx scripts/sync-tokens.ts',
  },
  {
    name: fix ? 'Prettier fix' : 'Prettier check',
    cmd: fix ? 'bun run format' : 'bun run format:ci',
  },
  {
    name: fix ? 'Lint fix (eslint)' : 'Lint (eslint)',
    cmd: fix ? 'bun run lint:fix' : 'bun run lint',
  },
  {
    name: 'TypeScript type check',
    // Using nx run-many for per-project type checking
    cmd: `nx run-many -t typecheck --parallel${nxFlags}`,
  },
  {
    name: 'Test (vitest)',
    cmd: `nx run-many -t test --parallel --run --reporter=dot${nxFlags}`,
  },
  {
    name: 'Build Sub-packages & Apps',
    cmd: `nx run-many -t build --parallel${nxFlags}`,
  },
  {
    name: 'Build Root Package (Library)',
    cmd: 'bun run build',
  },
];

const SEP = '------------------------------------------------------------';
const green = (s: string) => `\x1b[32m${s}\x1b[0m`;
const red = (s: string) => `\x1b[31m${s}\x1b[0m`;
const yellow = (s: string) => `\x1b[33m${s}\x1b[0m`;

console.log(SEP);
console.log('\x1b[1mRunning validate steps (sequential)\x1b[0m');
console.log(SEP);

for (const step of steps) {
  console.log(yellow(`\n> ${step.name}`));
  console.log(yellow(`> ${step.cmd}\n`));

  const result = spawnSync(step.cmd, { stdio: 'inherit', shell: true });

  if (result.error) {
    console.error(red(`\nFailed to run: ${step.cmd}`));
    console.error(red(result.error.message));
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
