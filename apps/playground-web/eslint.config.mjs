import { recommended } from '@gv-tech/eslint-config';

export default [
  ...recommended,
  {
    files: ['src/pages/**/Docs.tsx'],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off', // Docs use @ts-ignore/@ts-expect-error for type assertions in examples
      '@typescript-eslint/no-unused-vars': 'off', // Docs may have unused variables for demonstration purposes
      'eslint-comments/no-unused-disable': 'off', // Allow any remaining disable comments
    },
  },
];
