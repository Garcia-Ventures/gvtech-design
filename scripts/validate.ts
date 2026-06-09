import { spawnSync } from 'child_process';
import os from 'os';

const args = process.argv.slice(2);
const fix = args.includes('--fix');
const noCache = args.includes('--no-cache');
const forceParallel = args.includes('--parallel');
const sequentialInput = args.includes('--sequential') || args.includes('-s');

// Auto-detect low resource environment (e.g. <= 4 CPU cores or <= 8GB RAM)
const cpus = os.cpus() ? os.cpus().length : 4;
const totalMem = os.totalmem();
const totalMemGb = totalMem ? totalMem / (1024 * 1024 * 1024) : 8;
const isLowResource = cpus <= 4 || totalMemGb <= 8;

// Enable sequential mode if low resource or explicitly requested, unless parallel is forced
const sequential = (isLowResource || sequentialInput) && !forceParallel;

// Nx optimizations for low memory
const nxFlags = noCache ? ' --skipNxCache' : '';
const nxParallelFlag = sequential ? '--parallel=false' : '--parallel';
const nxMaxParallel = sequential ? ' --maxParallel=1' : '';
const nxFlagsCombined = `${nxFlags}${nxMaxParallel}`;

// Environment variables for memory management
const env = {
  ...process.env,
  // Disable Nx daemon in low resource mode to save memory
  NX_DAEMON: sequential ? 'false' : 'true',
  // Limit Node's heap size on low resource machines to force GC more often
  // and prevent it from trying to grab too much of the 8GB total.
  NODE_OPTIONS: sequential
    ? `${process.env.NODE_OPTIONS || ''} --max-old-space-size=2048`.trim()
    : process.env.NODE_OPTIONS,
};

const steps = [
  {
    name: 'Sync Tokens',
    cmd: 'bun run tsx scripts/sync-tokens.ts',
  },
  {
    name: 'Build Registry',
    cmd: 'bun run build:registry',
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
console.log('\x1b[1mRunning validate steps\x1b[0m');
console.log(SEP);

if (sequential) {
  if (isLowResource && !sequentialInput) {
    console.log(yellow(`ℹ️ Low resource environment detected (${cpus} CPUs, ${totalMemGb.toFixed(1)}GB RAM).`));
    console.log(yellow(`   Defaulting to sequential validation mode for stability.`));
    console.log(yellow(`   Nx daemon disabled and memory limits applied.\n`));
  } else {
    console.log(yellow(`ℹ️ Running in sequential validation mode (CPU/RAM optimized).\n`));
  }
} else {
  console.log(green(`🚀 Running in parallel validation mode (${cpus} CPUs, ${totalMemGb.toFixed(1)}GB RAM).\n`));
}

/** Utility to wait for memory to be reclaimed */
function wait(ms: number) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    // Blocking wait to ensure OS has a moment to breathe between heavy spawns
  }
}

for (const step of steps) {
  const freeMemGb = os.freemem() / (1024 * 1024 * 1024);
  if (sequential && freeMemGb < 1.5) {
    console.log(yellow(`⚠️ Low free memory detected (${freeMemGb.toFixed(2)}GB). Waiting for reclamation...`));
    wait(2000);
  }

  console.log(yellow(`\n> ${step.name}`));
  console.log(yellow(`> ${step.cmd}\n`));

  const result = spawnSync(step.cmd, { stdio: 'inherit', shell: true, env });

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

  if (sequential) {
    // Brief cool-down after each step in low-resource mode
    wait(1000);
  }
}

console.log('\n' + SEP);
console.log(green('All validate steps completed successfully ✅'));
console.log(SEP + '\n');
process.exit(0);
