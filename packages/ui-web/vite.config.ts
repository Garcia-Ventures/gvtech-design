import fs from 'node:fs';
import path, { resolve } from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const srcRoot = resolve(__dirname, 'src');

// Bundle only this package's source. Inlining dependencies lets Rolldown rewrite
// their `require("react")` calls into a dynamic require helper, which Next.js
// static export rejects when a consumer imports the barrel.
const isExternal = (id: string) => {
  // shadcn sibling imports (`@/./button`, `@/hooks/use-mobile`) are this package.
  if (id.startsWith('\0') || id.startsWith('.') || id.startsWith('@/')) {
    return false;
  }

  if (path.isAbsolute(id)) {
    const relativeToSrc = path.relative(srcRoot, id);
    const insideSrc = relativeToSrc !== '' && !relativeToSrc.startsWith('..') && !path.isAbsolute(relativeToSrc);
    return !insideSrc;
  }

  return true;
};

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
      include: ['src'],
    }),
  ],
  resolve: {
    alias: [{ find: /^@\//, replacement: `${resolve(__dirname, 'src')}/` }],
  },
  build: {
    lib: {
      entry: getEntries(),
      name: 'GvTechUiWeb',
      fileName: (format, entryName) =>
        entryName === 'index'
          ? `index.${format === 'es' ? 'mjs' : 'cjs'}`
          : `${entryName}.${format === 'es' ? 'mjs' : 'cjs'}`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: isExternal,
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        banner: (chunk) => {
          if (chunk.isEntry) {
            return "'use client';";
          }
          return '';
        },
      },
    },
  },
});
