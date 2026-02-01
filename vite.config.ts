import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GvtechDesign',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components', 'polished', 'prop-types'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'styled-components': 'styled',
          polished: 'polished',
          'prop-types': 'PropTypes',
        },
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('axe-core')) return 'axe';
            if (id.includes('react-docgen')) return 'docgen';
            return 'vendor';
          }
        },
      },
    },
  },
});
