import * as fs from 'node:fs';
import * as path from 'node:path';
import { parseArgs } from 'node:util';

const { positionals, values } = parseArgs({
  args: process.argv.slice(2),
  options: {
    category: {
      type: 'string',
      short: 'c',
      default: 'Data Display',
    },
  },
  allowPositionals: true,
});

if (positionals.length < 1) {
  console.error('Usage: bun run scripts/generate-component.ts <component-name> [--category <category>]');
  process.exit(1);
}

const rawName = positionals[0];
const category = values.category as string;

function toKebabCase(str: string) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
    .toLowerCase();
}

function toPascalCase(str: string) {
  const spaced = str.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  return spaced
    .split(/[-_ ]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

const pascalName = toPascalCase(rawName);
const kebabName = toKebabCase(pascalName);

console.log(`🚀 Generating component: ${pascalName} (${kebabName}) in category: ${category}...`);

// Paths
const root = process.cwd();
const coreContractPath = path.join(root, `packages/ui-core/src/contracts/${kebabName}.ts`);
const webImplPath = path.join(root, `packages/ui-web/src/${kebabName}.tsx`);
const nativeImplPath = path.join(root, `packages/ui-native/src/${kebabName}.tsx`);
const webDocPath = path.join(root, `apps/playground-web/src/pages/web/${pascalName}Docs.tsx`);
const nativeDocPath = path.join(root, `apps/playground-web/src/pages/native/${pascalName}Docs.tsx`);

// Helper to ensure directory exists
function ensureDir(filePath: string) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// 1. Generate Core Contract
if (!fs.existsSync(coreContractPath)) {
  ensureDir(coreContractPath);
  const coreTemplate = `// ${pascalName} component contract.
import * as React from 'react';

export interface ${pascalName}BaseProps {
  className?: string;
  children?: React.ReactNode;
}
`;
  fs.writeFileSync(coreContractPath, coreTemplate);
  console.log(`  - Created core contract: ${path.relative(root, coreContractPath)}`);
}

// 2. Generate Web Implementation
if (!fs.existsSync(webImplPath)) {
  ensureDir(webImplPath);
  const webTemplate = `import * as React from 'react';
import { cn } from './lib/utils';
import type { ${pascalName}BaseProps } from '@gv-tech/ui-core';

export interface ${pascalName}Props extends ${pascalName}BaseProps, React.ComponentPropsWithoutRef<'div'> {}

const ${pascalName} = React.forwardRef<HTMLDivElement, ${pascalName}Props>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="${kebabName}"
        className={cn('', className)}
        {...props}
      />
    );
  }
);
${pascalName}.displayName = '${pascalName}';

export { ${pascalName} };
`;
  fs.writeFileSync(webImplPath, webTemplate);
  console.log(`  - Created web implementation: ${path.relative(root, webImplPath)}`);
}

// 3. Generate Native Implementation
if (!fs.existsSync(nativeImplPath)) {
  ensureDir(nativeImplPath);
  const nativeTemplate = `import * as React from 'react';
import { View } from 'react-native';
import { cn } from './lib/utils';
import type { ${pascalName}BaseProps } from '@gv-tech/ui-core';

export interface ${pascalName}Props extends ${pascalName}BaseProps {
  // Add native-specific props here if they differ from web but fit the semantic intent
}

const ${pascalName} = React.forwardRef<View, ${pascalName}Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={cn('', className)}
        {...props}
      >
        {children}
      </View>
    );
  }
);
${pascalName}.displayName = '${pascalName}';

export { ${pascalName} };
`;
  fs.writeFileSync(nativeImplPath, nativeTemplate);
  console.log(`  - Created native implementation: ${path.relative(root, nativeImplPath)}`);
}

// 4. Generate Web Docs
if (!fs.existsSync(webDocPath)) {
  ensureDir(webDocPath);
  const webDocTemplate = `import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { ${pascalName} } from '@gv-tech/ui-web';

export function ${pascalName}Docs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="The default ${pascalName} component."
        code={\`<${pascalName}>Content</${pascalName}>\`}
      >
        <${pascalName}>Content</${pascalName}>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: 'Tailwind classes.',
            },
          ]}
        />
      </div>
    </>
  );
}
`;
  fs.writeFileSync(webDocPath, webDocTemplate);
  console.log(`  - Created web docs: ${path.relative(root, webDocPath)}`);
}

// 5. Generate Native Docs
if (!fs.existsSync(nativeDocPath)) {
  ensureDir(nativeDocPath);
  const nativeDocTemplate = `import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
// @ts-nocheck

export function ${pascalName}Docs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="The default ${pascalName} component on Native."
        code={\`<${pascalName}>Content</${pascalName}>\`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: 'NativeWind classes.',
            },
          ]}
        />
      </div>
    </>
  );
}
`;
  fs.writeFileSync(nativeDocPath, nativeDocTemplate);
  console.log(`  - Created native docs: ${path.relative(root, nativeDocPath)}`);
}

// 6. Update index.ts files
function appendExport(filePath: string, exportLine: string, comment: string) {
  let content = fs.readFileSync(filePath, 'utf-8');
  if (!content.includes(exportLine)) {
    content += `\n// ${comment}\n${exportLine}\n`;
    fs.writeFileSync(filePath, content);
    console.log(`  - Updated ${path.relative(root, filePath)}`);
  }
}

appendExport(
  path.join(root, 'packages/ui-core/src/index.ts'),
  `export type { ${pascalName}BaseProps } from './contracts/${kebabName}';`,
  pascalName,
);

appendExport(
  path.join(root, 'packages/ui-web/src/index.ts'),
  `export { ${pascalName} } from './${kebabName}';`,
  pascalName,
);

appendExport(
  path.join(root, 'packages/ui-native/src/index.ts'),
  `export { ${pascalName} } from './${kebabName}';`,
  pascalName,
);

// Update docs index files
appendExport(
  path.join(root, 'apps/playground-web/src/pages/web/index.ts'),
  `export { ${pascalName}Docs as Web${pascalName}Docs } from './${pascalName}Docs';`,
  pascalName,
);

appendExport(
  path.join(root, 'apps/playground-web/src/pages/native/index.ts'),
  `export { ${pascalName}Docs as Native${pascalName}Docs } from './${pascalName}Docs';`,
  pascalName,
);

// 7. Update playground config and routes
const docRoutesPath = path.join(root, 'apps/playground-web/src/routes/doc-routes.tsx');
let docRoutesContent = fs.readFileSync(docRoutesPath, 'utf-8');

if (!docRoutesContent.includes(`path: '${kebabName}'`)) {
  const routeLine = `  {
    path: '${kebabName}',
    title: '${pascalName}',
    description: 'A ${pascalName} component.',
    web: web('Web${pascalName}Docs'),
    native: native('Native${pascalName}Docs'),
  },`;

  docRoutesContent = docRoutesContent.replace('];', `${routeLine}\n];`);
  fs.writeFileSync(docRoutesPath, docRoutesContent);
  console.log(`  - Registered in ${path.relative(root, docRoutesPath)}`);
}

const docConfigPath = path.join(root, 'apps/playground-web/src/config/docs.ts');
let docConfigContent = fs.readFileSync(docConfigPath, 'utf-8');

if (!docConfigContent.includes(`href: '${kebabName}'`)) {
  const categoryRegex = new RegExp(`title: '${category}',[\\s\\S]*?items: \\[`);
  if (categoryRegex.test(docConfigContent)) {
    const itemLine = `      {
        title: '${pascalName}',
        href: '${kebabName}',
        platforms: ['web', 'native'],
      },`;
    docConfigContent = docConfigContent.replace(categoryRegex, (match) => `${match}\n${itemLine}`);
    fs.writeFileSync(docConfigPath, docConfigContent);
    console.log(`  - Registered in ${path.relative(root, docConfigPath)} (${category})`);
  } else {
    console.warn(`  ⚠️ Could not find category "${category}" in docs.ts. Skipping config registration.`);
  }
}

console.log(`\n✅ Component ${pascalName} generated and registered successfully!`);
