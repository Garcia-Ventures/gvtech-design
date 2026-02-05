import fs from 'fs';
import path from 'path';

const REGISTRY_PATH = path.join(process.cwd(), 'public/registry');
const COMPONENTS_UI_PATH = path.join(process.cwd(), 'src/components/ui');

if (!fs.existsSync(REGISTRY_PATH)) {
  fs.mkdirSync(REGISTRY_PATH, { recursive: true });
}

function buildRegistry() {
  const components = fs
    .readdirSync(COMPONENTS_UI_PATH)
    .filter((file) => file.endsWith('.tsx') && !file.includes('.stories.'));

  const registryIndex = components.map((file) => {
    const name = path.basename(file, '.tsx');
    const content = fs.readFileSync(path.join(COMPONENTS_UI_PATH, file), 'utf8');

    const componentJson = {
      name,
      type: 'registry:ui',
      dependencies: [], // You can manually add dependencies here if needed
      registryDependencies: [],
      files: [
        {
          path: `ui/${file}`,
          content,
          type: 'registry:ui',
        },
      ],
    };

    fs.writeFileSync(path.join(REGISTRY_PATH, `${name}.json`), JSON.stringify(componentJson, null, 2));

    return {
      name,
      files: [`ui/${file}`],
      type: 'registry:ui',
    };
  });

  fs.writeFileSync(path.join(REGISTRY_PATH, 'index.json'), JSON.stringify(registryIndex, null, 2));
  console.log('✅ Registry built successfully in public/registry');
}

buildRegistry();
