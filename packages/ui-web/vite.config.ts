import react from '@vitejs/plugin-react';
import fs from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const getEntries = () => {
  const entries: Record<string, string> = {
    index: resolve(__dirname, 'src/index.ts'),
  };

  const uiPath = resolve(__dirname, 'src');
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
      const name = item.name.replace('.tsx', '');
      entries[name] = resolve(uiPath, item.name);
    }
  });
  return entries;
};

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
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
      entry: getEntries(),
      name: 'GvTechUiWeb',
      fileName: (format, entryName) =>
        entryName === 'index'
          ? `index.${format === 'es' ? 'es' : 'cjs'}.js`
          : `${entryName}.${format === 'es' ? 'es' : 'cjs'}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        '@gv-tech/design-tokens',
        '@gv-tech/ui-core',
        'lucide-react',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
