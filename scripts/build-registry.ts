import fs from 'fs';
import path from 'path';

const PLAYGROUND_PUBLIC_PATH = path.join(process.cwd(), 'apps/playground-web/public');
const WEB_REGISTRY_PATH = path.join(PLAYGROUND_PUBLIC_PATH, 'registry');
const NATIVE_REGISTRY_PATH = path.join(PLAYGROUND_PUBLIC_PATH, 'registry/native');

const WEB_COMPONENTS_PATH = path.join(process.cwd(), 'packages/ui-web/src');
const NATIVE_COMPONENTS_PATH = path.join(process.cwd(), 'packages/ui-native/src');

// Ensure directories exist
if (!fs.existsSync(WEB_REGISTRY_PATH)) {
  fs.mkdirSync(WEB_REGISTRY_PATH, { recursive: true });
}
if (!fs.existsSync(NATIVE_REGISTRY_PATH)) {
  fs.mkdirSync(NATIVE_REGISTRY_PATH, { recursive: true });
}

interface ComponentJson {
  name: string;
  type: string;
  dependencies: string[];
  registryDependencies: string[];
  files: { path: string; content: string; type: string }[];
}

interface IndexJson {
  name: string;
  files: string[];
  type: string;
}

function scanAndBuild(componentsPath: string, outputPath: string, ignoreList: string[]): IndexJson[] {
  const entries = fs.readdirSync(componentsPath, { withFileTypes: true });
  const registryIndex: IndexJson[] = [];

  entries.forEach((entry) => {
    let name = '';
    const componentFiles: { path: string; content: string; type: string }[] = [];
    const filePaths: string[] = [];

    // Ignore items in the ignore list, test files, and non-component TS/TSX entrypoints
    if (
      ignoreList.includes(entry.name) ||
      entry.name.includes('.test.') ||
      (!entry.isDirectory() && !entry.name.endsWith('.tsx') && !entry.name.endsWith('.ts'))
    ) {
      return;
    }

    if (entry.isDirectory()) {
      name = entry.name;
      const dirPath = path.join(componentsPath, name);
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
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
      const ext = path.extname(entry.name);
      name = path.basename(entry.name, ext);
      const content = fs.readFileSync(path.join(componentsPath, entry.name), 'utf8');
      componentFiles.push({
        path: `ui/${entry.name}`,
        content,
        type: 'registry:ui',
      });
      filePaths.push(`ui/${entry.name}`);
    }

    if (name) {
      const componentJson: ComponentJson = {
        name,
        type: 'registry:ui',
        dependencies: [],
        registryDependencies: [],
        files: componentFiles,
      };

      fs.writeFileSync(path.join(outputPath, `${name}.json`), JSON.stringify(componentJson, null, 2));

      registryIndex.push({
        name,
        files: filePaths,
        type: 'registry:ui',
      });
    }
  });

  fs.writeFileSync(path.join(outputPath, 'index.json'), JSON.stringify(registryIndex, null, 2));
  return registryIndex;
}

function buildRegistry() {
  // Web Registry build
  const webIgnores = ['index.ts', 'hooks', 'lib', 'sonner.tsx'];
  scanAndBuild(WEB_COMPONENTS_PATH, WEB_REGISTRY_PATH, webIgnores);
  console.log('✅ Web Registry built successfully in public/registry');

  // Native Registry build
  const nativeIgnores = [
    'index.ts',
    'hooks',
    'lib',
    'sonner.tsx',
    'nativewind-env.d.ts',
    'theme-provider.tsx',
    'theme-toggle.tsx',
  ];
  scanAndBuild(NATIVE_COMPONENTS_PATH, NATIVE_REGISTRY_PATH, nativeIgnores);
  console.log('✅ Native Registry built successfully in public/registry/native');
}

buildRegistry();
