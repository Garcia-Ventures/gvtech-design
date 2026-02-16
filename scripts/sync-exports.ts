import fs from 'fs';
import path from 'path';

const PACKAGE_JSON_PATH = path.join(process.cwd(), 'package.json');
const COMPONENTS_UI_PATH = path.join(process.cwd(), 'src/components/ui');

function syncExports() {
  try {
    const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, 'utf8'));
    const components = fs
      .readdirSync(COMPONENTS_UI_PATH)
      .filter((file) => file.endsWith('.tsx') && !file.includes('.test.') && !file.includes('.stories.'));

    // Base exports that should always be present
    const newExports: Record<string, unknown> = {
      '.': {
        types: './dist/index.d.ts',
        import: './dist/index.es.js',
        require: './dist/index.cjs.js',
        default: './dist/index.es.js',
      },
      './style.css': {
        style: './dist/design-system.css',
        import: './dist/design-system.css',
        default: './dist/design-system.css',
      },
      './package.json': './package.json',
    };

    // Add component exports
    // Note: We assume the build flattens or maintains structure based on Vite config
    // For now, we'll map them to where they will be in dist
    components.sort().forEach((file) => {
      const name = path.basename(file, '.tsx');
      newExports[`./${name}`] = {
        types: `./dist/components/ui/${name}.d.ts`,
        import: `./dist/index.es.js`, // Temporary: default to main bundle if not individual build
        default: `./dist/index.es.js`,
      };
    });

    packageJson.exports = newExports;

    fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(packageJson, null, 2) + '\n');
    console.log(`✅ package.json exports synchronized with ${components.length} components`);
  } catch (error) {
    console.error('❌ Error synchronizing exports:', error);
    process.exit(1);
  }
}

syncExports();
