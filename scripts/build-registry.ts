import fs from 'fs';
import path from 'path';

const PLAYGROUND_PUBLIC_PATH = path.join(process.cwd(), 'apps/playground-web/public');
const WEB_REGISTRY_PATH = path.join(PLAYGROUND_PUBLIC_PATH, 'registry');
const NATIVE_REGISTRY_PATH = path.join(PLAYGROUND_PUBLIC_PATH, 'registry/native');

const WEB_PKG_PATH = path.join(process.cwd(), 'packages/ui-web');
const NATIVE_PKG_PATH = path.join(process.cwd(), 'packages/ui-native');

const WEB_COMPONENTS_PATH = path.join(WEB_PKG_PATH, 'src');
const NATIVE_COMPONENTS_PATH = path.join(NATIVE_PKG_PATH, 'src');

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

interface GithubRegistryItem {
  name: string;
  type: string;
  dependencies: string[];
  registryDependencies: string[];
  files: { path: string; type: string }[];
}

interface GithubRegistry {
  $schema: string;
  name: string;
  homepage: string;
  items: GithubRegistryItem[];
}

function extractDependencies(content: string, allComponents: string[]): { deps: string[]; regDeps: string[] } {
  const deps = new Set<string>();
  const regDeps = new Set<string>();

  // match import ... from '...'
  const importRegex = /from\s+['"]([^'"]+)['"]/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const pkg = match[1];
    if (pkg.startsWith('.')) {
      // It's a local import, potentially a registry dependency
      const basename = path.basename(pkg, path.extname(pkg));
      if (allComponents.includes(basename)) {
        regDeps.add(basename);
      }
    } else if (!pkg.startsWith('@/') && !pkg.startsWith('~')) {
      // It's an npm package
      let basePkg = pkg;
      if (pkg.startsWith('@')) {
        const parts = pkg.split('/');
        basePkg = parts.slice(0, 2).join('/');
      } else {
        basePkg = pkg.split('/')[0];
      }
      // we don't include react, react-dom as they are implicit peer dependencies
      if (!['react', 'react-dom', 'react-native'].includes(basePkg)) {
        deps.add(basePkg);
      }
    }
  }
  return { deps: Array.from(deps), regDeps: Array.from(regDeps) };
}

function scanAndBuild(
  componentsPath: string,
  outputPath: string,
  ignoreList: string[],
  registryName: string,
  packageRoot: string,
): IndexJson[] {
  const entries = fs.readdirSync(componentsPath, { withFileTypes: true });
  const registryIndex: IndexJson[] = [];
  const githubItems: GithubRegistryItem[] = [];

  // First pass to find all valid component names for registryDeps resolution
  const allComponents: string[] = [];
  entries.forEach((entry) => {
    if (
      ignoreList.includes(entry.name) ||
      entry.name.includes('.test.') ||
      (!entry.isDirectory() && !entry.name.endsWith('.tsx') && !entry.name.endsWith('.ts'))
    ) {
      return;
    }
    const ext = path.extname(entry.name);
    allComponents.push(path.basename(entry.name, ext));
  });

  entries.forEach((entry) => {
    let name = '';
    const componentFiles: { path: string; content: string; type: string }[] = [];
    const filePaths: string[] = [];
    const githubFiles: { path: string; type: string }[] = [];
    let combinedContent = '';

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
        combinedContent += '\n' + content;
        componentFiles.push({
          path: `ui/${name}/${file}`,
          content,
          type: 'registry:ui',
        });
        filePaths.push(`ui/${name}/${file}`);
        githubFiles.push({ path: `src/${name}/${file}`, type: 'registry:ui' });
      });
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts'))) {
      const ext = path.extname(entry.name);
      name = path.basename(entry.name, ext);
      const content = fs.readFileSync(path.join(componentsPath, entry.name), 'utf8');
      combinedContent = content;
      componentFiles.push({
        path: `ui/${entry.name}`,
        content,
        type: 'registry:ui',
      });
      filePaths.push(`ui/${entry.name}`);
      githubFiles.push({ path: `src/${entry.name}`, type: 'registry:ui' });
    }

    if (name) {
      const { deps, regDeps } = extractDependencies(combinedContent, allComponents);

      const componentJson: ComponentJson = {
        name,
        type: 'registry:ui',
        dependencies: deps,
        registryDependencies: regDeps,
        files: componentFiles,
      };

      fs.writeFileSync(path.join(outputPath, `${name}.json`), JSON.stringify(componentJson, null, 2));

      registryIndex.push({
        name,
        files: filePaths,
        type: 'registry:ui',
      });

      githubItems.push({
        name,
        type: 'registry:ui',
        dependencies: deps,
        registryDependencies: regDeps,
        files: githubFiles,
      });
    }
  });

  fs.writeFileSync(path.join(outputPath, 'index.json'), JSON.stringify(registryIndex, null, 2));

  // Write GitHub Registry registry.json at the package root
  const githubRegistry: GithubRegistry = {
    $schema: 'https://ui.shadcn.com/schema/registry.json',
    name: registryName,
    homepage: 'https://github.com/Garcia-Ventures/gvtech-design',
    items: githubItems,
  };
  fs.writeFileSync(path.join(packageRoot, 'registry.json'), JSON.stringify(githubRegistry, null, 2));

  return registryIndex;
}

function buildRegistry() {
  // Web Registry build
  const webIgnores = ['index.ts', 'hooks', 'lib', 'sonner.tsx'];
  scanAndBuild(WEB_COMPONENTS_PATH, WEB_REGISTRY_PATH, webIgnores, 'gvtech-design-web', WEB_PKG_PATH);
  console.log('✅ Web Registry built successfully in public/registry and packages/ui-web/registry.json');

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
  scanAndBuild(NATIVE_COMPONENTS_PATH, NATIVE_REGISTRY_PATH, nativeIgnores, 'gvtech-design-native', NATIVE_PKG_PATH);
  console.log('✅ Native Registry built successfully in public/registry/native and packages/ui-native/registry.json');
}

buildRegistry();
