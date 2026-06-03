import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// React Native implementation package.
// We skip the bundle step for the JS itself because RN environments (Metro)
// prefer consuming the source directly with their own transformer.
// We still run Vite to generate the .d.ts files for consuming packages.
export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src'],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GvTechUiNative',
      fileName: (format) => `ui-native.${format === 'es' ? 'mjs' : 'cjs'}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // Externalize all dependencies to avoid bundling issues with JSX
      external: (id) => !id.startsWith('.') && !id.startsWith('/') && !id.includes('src/'),
    },
  },
});
