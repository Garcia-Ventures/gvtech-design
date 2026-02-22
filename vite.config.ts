import react from '@vitejs/plugin-react';
import fs from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const isLibrary = process.env.VITE_LIB === 'true';

// Get all UI components for multi-entry build
const getEntries = () => {
  const entries: Record<string, string> = {
    index: resolve(__dirname, 'src/index.ts'),
  };

  if (isLibrary) {
    const uiPath = resolve(__dirname, 'packages/ui-web/src');
    const items = fs.readdirSync(uiPath, { withFileTypes: true });

    items.forEach((item) => {
      if (item.isDirectory()) {
        if (item.name === 'hooks' || item.name === 'lib') {
          return;
        }
        const entryPath = resolve(uiPath, item.name, 'index.ts');
        if (fs.existsSync(entryPath)) {
          entries[item.name] = entryPath;
        }
      } else if (
        item.isFile() &&
        item.name.endsWith('.tsx') &&
        !item.name.includes('.test.') &&
        !item.name.includes('.stories.')
      ) {
        // File component (legacy)
        const name = item.name.replace('.tsx', '');
        entries[name] = resolve(uiPath, item.name);
      }
    });
  }
  return entries;
};

export default defineConfig({
  plugins: [
    react(),
    isLibrary &&
      dts({
        insertTypesEntry: true,
        include: ['packages/ui-web/src', 'packages/ui-core/src', 'packages/design-tokens/src', 'src'],
        staticImport: true,
        rollupTypes: true, // Bundle types into one file for better performance
        skipDiagnostics: true, // Speed up build - type checking is handled separately
      }),
  ],
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
      { find: '@gv-tech/design-tokens', replacement: resolve(__dirname, './packages/design-tokens/src') },
      { find: '@gv-tech/ui-core', replacement: resolve(__dirname, './packages/ui-core/src') },
      { find: '@gv-tech/ui-web', replacement: resolve(__dirname, './packages/ui-web/src') },
      { find: '@gv-tech/ui-native', replacement: resolve(__dirname, './packages/ui-native/src') },
    ],
    extensions: ['.web.tsx', '.tsx', '.ts', '.js'],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    sourcemap: true,
    outDir: isLibrary ? 'dist' : 'dist-site',
    emptyOutDir: true,
    lib: isLibrary
      ? {
          entry: getEntries(),
          name: 'GvtechDesign',
          fileName: (format, entryName) =>
            entryName === 'index'
              ? `index.${format === 'es' ? 'es' : 'cjs'}.js`
              : `${entryName}.${format === 'es' ? 'es' : 'cjs'}.js`,
          formats: ['es', 'cjs'],
        }
      : undefined,
    rollupOptions: {
      external: isLibrary ? ['react', 'react-dom', 'prop-types', 'next-themes'] : [],
      output: {
        globals: isLibrary
          ? {
              react: 'React',
              'react-dom': 'ReactDOM',
              'prop-types': 'PropTypes',
              'next-themes': 'NextThemes',
            }
          : {},
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
