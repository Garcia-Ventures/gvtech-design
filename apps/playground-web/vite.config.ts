import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  define: {
    global: 'window',
    __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  },
  resolve: {
    alias: [
      {
        find: /^react-native$/,
        replacement: resolve(__dirname, 'src/lib/react-native-shim.js'),
      },
      {
        find: /^react-native\/(.*)$/,
        replacement: resolve(__dirname, 'src/lib/react-native-shim.js'),
      },
      { find: '@', replacement: resolve(__dirname, './src') },
    ],
    extensions: ['.web.tsx', '.tsx', '.ts', '.js'],
  },
  build: {
    outDir: 'dist-site',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('axe-core')) {
              return 'axe';
            }
            if (id.includes('react-docgen')) {
              return 'docgen';
            }
            return 'vendor';
          }
        },
      },
    },
  },
});
