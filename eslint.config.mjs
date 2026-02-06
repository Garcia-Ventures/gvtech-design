import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

// File patterns for JS/TS files only
const jsFiles = ['**/*.js', '**/*.jsx', '**/*.mjs', '**/*.cjs'];
const tsFiles = ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'];
const allJsTsFiles = [...jsFiles, ...tsFiles];

export default [
  {
    // Global ignores - at the top of the array
    ignores: [
      '**/node_modules/**',
      '**/.yarn/**',
      '**/dist/**',
      '**/dist-site/**',
      '**/storybook-static/**',
      '**/coverage/**',
      '**/public/**',
      '**/.github/**',
      '**/.vscode/**',
      '**/.husky/**',
      'eslint.config.mjs',
      '**/.*', // Ignore all hidden files
      '**/*.json',
      '**/*.md',
      '**/*.yml',
      '**/*.log',
    ],
  },
  {
    // Base config for all JS/TS files
    files: allJsTsFiles,
    ...js.configs.recommended,
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: true,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
  },
  {
    // TypeScript-specific config
    files: tsFiles,
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      ...ts.configs.base.rules,
      ...ts.configs['eslint-recommended'].rules,
      ...ts.configs.recommended.rules,
    },
  },
  {
    files: jsFiles,
    rules: {
      ...js.configs.recommended.rules,
    },
  },
  {
    // Prettier config for all JS/TS files
    files: allJsTsFiles,
    plugins: {
      prettier: prettier,
    },
    rules: {
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
    },
  },
];
