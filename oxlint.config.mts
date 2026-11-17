import { vite } from '@gv-tech/oxc-config/vite';
import { defineConfig, type OxlintConfig } from 'oxlint';

/**
 * Oxlint configuration for Vite + React + TypeScript projects. Uses @gv-tech/oxc-config for sensible defaults. For more
 * information on configuration options, see: https://github.com/Garcia-Ventures/oxc-config
 */
export default defineConfig({
  extends: [vite as OxlintConfig],
  rules: {
    // tsconfig jsx is `react-jsx`. Oxlint 1.90 has no React runtime setting,
    // so the suspicious category still demands a React import.
    'react/react-in-jsx-scope': 'off',
    // Node globals, plus the shadcn slider memo name. Generated contract
    // probes are silenced per-file below; the rule still flags other names.
    'eslint/no-underscore-dangle': ['warn', { allow: ['__filename', '__dirname', '_values'] }],
    // CSS and test/type side-effect imports are intentional.
    'import/no-unassigned-import': ['warn', { allow: ['**/*.css', '@testing-library/jest-dom', 'react-native'] }],
  },
  overrides: [
    {
      // @rn-primitives packages re-export via `export *` compiled to a
      // runtime __reExport helper, which static analysis cannot follow.
      // import/namespace therefore false-positives on every
      // `SelectPrimitive.Root`-style access while bundlers/TS resolve fine.
      files: ['packages/ui-native/**/*.ts', 'packages/ui-native/**/*.tsx'],
      rules: {
        'import/namespace': 'off',
      },
    },
    {
      // `scripts/generate-contract-tests.ts` emits `export const _test_*`
      // assignment checks. Nothing imports them.
      files: ['**/__contracts.ts'],
      rules: {
        'eslint/no-underscore-dangle': 'off',
      },
    },
    {
      files: ['scripts/**', 'tools/**', 'packages/skills/bin/**', 'apps/playground-web/scripts/**'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
});
