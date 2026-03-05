import { recommended } from '@gv-tech/eslint-config';

/**
 * Monorepo ESLint config: applies recommended to all, allows per-app overrides.
 * - Vite/React apps: use recommended
 * - Next.js apps: use nextjs (see template below)
 */
export default [
  // Example: If you add a Next.js app, enable this block and set the correct path
  // {
  //   files: ['apps/next-app/**', 'apps/next-app/**/*'],
  //   ...nextjs,
  // },
  ...recommended,
  {
    ignores: ['eslint.config.mjs'],
  },
];
