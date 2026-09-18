import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [resolve(__dirname, './src/setupTests.ts')],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
    },
    alias: {
      // `@` follows shadcn's components.json convention (`@/.` = components dir).
      // ui-web is the only package whose sources import `@/...`, and root src/
      // has no tests and no `@/` imports, so the alias targets ui-web.
      '@': resolve(__dirname, './packages/ui-web/src'),
      '@gv-tech/design-tokens': resolve(__dirname, './packages/design-tokens/src'),
      '@gv-tech/ui-core': resolve(__dirname, './packages/ui-core/src'),
      '@gv-tech/ui-web': resolve(__dirname, './packages/ui-web/src'),
      '@gv-tech/ui-native': resolve(__dirname, './packages/ui-native/src'),
      'react-native': resolve(__dirname, 'apps/playground-web/src/lib/react-native-shim.js'),
    },
    exclude: ['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**'],
    testTimeout: 10000,
  },
});
