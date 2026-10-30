import { vite } from '@gv-tech/oxc-config/vite';
import { defineConfig, type OxlintConfig } from 'oxlint';

/**
 * Oxlint configuration for Vite + React + TypeScript projects. Uses @gv-tech/oxc-config for sensible defaults. For more
 * information on configuration options, see: https://github.com/Garcia-Ventures/oxc-config
 */
export default defineConfig({
  extends: [vite as OxlintConfig],
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
  ],
});
