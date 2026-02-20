import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: [resolve(__dirname, '../../src/setupTests.ts')],
  },
  resolve: {
    alias: {
      'react-native': resolve(__dirname, '../../apps/playground-web/src/lib/react-native-shim.js'),
    },
  },
});
