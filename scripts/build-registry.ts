import fs from 'fs';
import path from 'path';

const REGISTRY_PATH = path.join(process.cwd(), 'apps/playground-web/public/registry');
const COMPONENTS_UI_PATH = path.join(process.cwd(), 'packages/ui-web/src');

if (!fs.existsSync(REGISTRY_PATH)) {
  fs.mkdirSync(REGISTRY_PATH, { recursive: true });
}

function buildRegistry() {
  const entries = fs.readdirSync(COMPONENTS_UI_PATH, { withFileTypes: true });

  const registryIndex: { name: string; files: string[]; type: string }[] = [];

  entries.forEach((entry) => {
    let name = '';
    const componentFiles: { path: string; content: string; type: string }[] = [];
    const filePaths: string[] = [];

    // Ignore index.ts, hooks, lib, and tests
    if (
      entry.name === 'index.ts' ||
      entry.name === 'hooks' ||
      entry.name === 'lib' ||
      entry.name.includes('.test.') ||
      entry.name === 'sonner.tsx' // sonner is often handled uniquely or as a wrapper
    ) {
      return;
    }

    if (entry.isDirectory()) {
      name = entry.name;
      const dirPath = path.join(COMPONENTS_UI_PATH, name);
      const dirFiles = fs.readdirSync(dirPath).filter((f) => f.endsWith('.ts') || f.endsWith('.tsx'));

      dirFiles.forEach((file) => {
        const content = fs.readFileSync(path.join(dirPath, file), 'utf8');
        componentFiles.push({
          path: `ui/${name}/${file}`,
          content,
          type: 'registry:ui',
        });
        filePaths.push(`ui/${name}/${file}`);
      });
    } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
      name = path.basename(entry.name, '.tsx');
      const content = fs.readFileSync(path.join(COMPONENTS_UI_PATH, entry.name), 'utf8');
      componentFiles.push({
        path: `ui/${entry.name}`,
        content,
        type: 'registry:ui',
      });
      filePaths.push(`ui/${entry.name}`);
    }

    if (name) {
      const componentJson = {
        name,
        type: 'registry:ui',
        dependencies: [],
        registryDependencies: [],
        files: componentFiles,
      };

      fs.writeFileSync(path.join(REGISTRY_PATH, `${name}.json`), JSON.stringify(componentJson, null, 2));

      registryIndex.push({
        name,
        files: filePaths,
        type: 'registry:ui',
      });
    }
  });

  fs.writeFileSync(path.join(REGISTRY_PATH, 'index.json'), JSON.stringify(registryIndex, null, 2));
  console.log('✅ Registry built successfully in public/registry');
}

buildRegistry();
