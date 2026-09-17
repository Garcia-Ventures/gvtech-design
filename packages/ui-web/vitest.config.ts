import { resolve } from 'path';
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from '../../vitest.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    resolve: {
      // shadcn emits `@/./<sibling>` imports (see components.json aliases):
      // `@` must resolve to this package's src, not the workspace root.
      alias: { '@': resolve(__dirname, './src') },
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: [resolve(__dirname, '../../src/setupTests.ts')],
    },
  }),
);
