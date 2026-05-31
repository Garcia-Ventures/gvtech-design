import { spawnSync } from 'child_process';
import os from 'os';

const args = process.argv.slice(2);
const fix = args.includes('--fix');
const noCache = args.includes('--no-cache');
const forceParallel = args.includes('--parallel');
const sequentialInput = args.includes('--sequential') || args.includes('-s');

// Auto-detect low resource environment (e.g. <= 4 CPU cores or <= 8GB RAM)
const cpus = os.cpus() ? os.cpus().length : 4;
const totalMemGb = os.totalmem() ? os.totalmem() / (1024 * 1024 * 1024) : 8;
const isLowResource = cpus <= 4 || totalMemGb <= 8;

// Enable sequential mode if low resource or explicitly requested, unless parallel is forced
const sequential = (isLowResource || sequentialInput) && !forceParallel;

const nxFlags = noCache ? ' --skipNxCache' : '';
const nxParallelFlag = sequential ? '--parallel=false' : '--parallel';
const nxMaxParallel = sequential ? ' --maxParallel=1' : '';
const nxFlagsCombined = `${nxFlags}${nxMaxParallel}`;

const steps = [
  {
    name: 'Sync Tokens',
    cmd: 'bun run tsx scripts/sync-tokens.ts',
  },
  {
    name: fix ? 'Prettier fix' : 'Prettier check',
    cmd: fix
      ? `nx run-many -t format:fix ${nxParallelFlag}${nxFlagsCombined}`
      : `nx run-many -t format ${nxParallelFlag}${nxFlagsCombined}`,
  },
  {
    name: fix ? 'Lint fix (eslint)' : 'Lint (eslint)',
    cmd: fix
      ? `nx run-many -t lint:fix ${nxParallelFlag}${nxFlagsCombined}`
      : `nx run-many -t lint ${nxParallelFlag}${nxFlagsCombined}`,
  },
  {
    name: 'TypeScript type check',
    cmd: `nx run-many -t typecheck ${nxParallelFlag}${nxFlagsCombined}`,
  },
  {
    name: 'Test (vitest)',
    cmd: `nx run-many -t test ${nxParallelFlag}${nxFlagsCombined} -- --run --reporter=dot${
      sequential ? ' --no-file-parallelism --maxWorkers=1' : ''
    }`,
  },
  {
    name: 'Build Sub-packages & Apps',
    cmd: `nx run-many -t build ${nxParallelFlag}${nxFlagsCombined}`,
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

if (sequential) {
  if (isLowResource && !sequentialInput) {
    console.log(yellow(`ℹ️ Low resource environment detected (${cpus} CPUs, ${totalMemGb.toFixed(1)}GB RAM).`));
    console.log(yellow(`   Defaulting to sequential validation mode for stability.`));
    console.log(yellow(`   (To override and force parallel run, use the --parallel flag.)\n`));
  } else {
    console.log(yellow(`ℹ️ Running in sequential validation mode (CPU/RAM optimized).\n`));
  }
} else {
  console.log(green(`🚀 Running in parallel validation mode (${cpus} CPUs, ${totalMemGb.toFixed(1)}GB RAM).\n`));
}

for (const step of steps) {
  console.log(yellow(`\n> ${step.name}`));
  console.log(yellow(`> ${step.cmd}\n`));

  const [command, ...args] = step.cmd.split(' ').filter(Boolean);

  // Convert nx -> npx nx so Windows/UNIX consistently finds the bin
  // without relying on shell:true or cross-spawn
  let actualCmd = command;
  let actualArgs = args;
  if (command === 'nx') {
    actualCmd = 'npx';
    actualArgs = ['nx', ...args];
  } else if (command === 'bun') {
    // Bun binary should already be on path or local, but we pass it explicitly
    // just using actualCmd = 'bun' is fine
  }

  const result = spawnSync(actualCmd, actualArgs, { stdio: 'inherit', shell: false });

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
