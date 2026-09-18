import { resolve } from 'path';
import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from '../../vitest.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: [resolve(__dirname, '../../src/setupTests.ts')],
      server: {
        deps: {
          inline: [
            /@rn-primitives\/.*/,
            'lucide-react-native',
            'nativewind',
            'react-native-reanimated',
            'react-native-css-interop',
          ],
        },
      },
    },
  }),
);
