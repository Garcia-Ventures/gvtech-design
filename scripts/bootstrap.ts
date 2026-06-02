import { execSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { parseArgs } from 'node:util';

const { positionals } = parseArgs({
  args: process.argv.slice(2),
  allowPositionals: true,
});

if (positionals.length < 2) {
  console.error('Usage: bun run scripts/bootstrap.ts <native|web> <project-name>');
  process.exit(1);
}

const [type, projectName] = positionals;
const targetDir = path.join(process.cwd(), projectName);

if (fs.existsSync(targetDir)) {
  console.error(`Error: Directory ${projectName} already exists.`);
  process.exit(1);
}

const execArgs = { stdio: 'inherit' as const };

if (type === 'native') {
  console.log(`🚀 Bootstrapping Native project: ${projectName}...`);
  // Create expo app
  execSync(`bunx create-expo-app@latest ${projectName}`, execArgs);

  // Install dependencies
  console.log(`📦 Installing gvtech-design Native dependencies...`);
  execSync(
    `bun add nativewind@^4.2.2 tailwindcss@^3.4.1 react-native-reanimated@^4.3.1 lucide-react-native @gv-tech/ui-native @gv-tech/ui-core @gv-tech/design-tokens clsx tailwind-merge`,
    { cwd: targetDir, stdio: 'inherit' },
  );

  console.log(`⚙️ Configuring Tailwind & NativeWind...`);

  // tailwind.config.js
  const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@gv-tech/ui-native/src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
`;
  fs.writeFileSync(path.join(targetDir, 'tailwind.config.js'), tailwindConfig);

  // babel.config.js
  const babelConfig = `module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      "react-native-reanimated/plugin",
    ],
  };
};
`;
  fs.writeFileSync(path.join(targetDir, 'babel.config.js'), babelConfig);

  // app/index.tsx
  const appIndex = `import { View } from "react-native";
import { Text } from "@gv-tech/ui-native/Text";
import { Button } from "@gv-tech/ui-native/Button";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center p-4">
      <Text className="text-2xl font-bold mb-4">gvtech-design Native</Text>
      <Button onPress={() => console.log("Pressed")}>
        <Text>Click Me</Text>
      </Button>
    </View>
  );
}
`;

  const appDir = path.join(targetDir, 'app');
  if (!fs.existsSync(appDir)) {
    fs.mkdirSync(appDir, { recursive: true });
  }
  fs.writeFileSync(path.join(appDir, 'index.tsx'), appIndex);

  console.log(`✅ Native project ${projectName} bootstrapped successfully!`);
} else if (type === 'web') {
  console.log(`🚀 Bootstrapping Web project: ${projectName}...`);
  // Create vite app
  execSync(`bun create vite ${projectName} --template react-ts`, execArgs);

  // Install dependencies
  console.log(`📦 Installing gvtech-design Web dependencies...`);
  execSync(
    `bun add tailwindcss @tailwindcss/vite @gv-tech/ui-web @gv-tech/ui-core @gv-tech/design-tokens clsx tailwind-merge lucide-react`,
    { cwd: targetDir, stdio: 'inherit' },
  );

  console.log(`⚙️ Configuring Tailwind...`);
  // Vite config for tailwind v4
  const viteConfig = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
})
`;
  fs.writeFileSync(path.join(targetDir, 'vite.config.ts'), viteConfig);

  // index.css
  const indexCss = `@import "tailwindcss";

/* 
 * This imports the design tokens from gvtech-design
 * In a real app you might want to import the CSS directly if provided by the package
 */
@layer theme {
  :root {
    /* Define base tokens here or import from @gv-tech/design-tokens */
  }
}
`;
  fs.writeFileSync(path.join(targetDir, 'src', 'index.css'), indexCss);

  // App.tsx
  const appTsx = `import { useState } from 'react'
import { Button } from '@gv-tech/ui-web/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-background">
      <h1 className="text-4xl font-bold mb-8">gvtech-design Web</h1>
      <div className="flex flex-col items-center gap-4">
        <Button onClick={() => setCount((c) => c + 1)}>
          Count is {count}
        </Button>
      </div>
    </div>
  )
}

export default App
`;
  fs.writeFileSync(path.join(targetDir, 'src', 'App.tsx'), appTsx);

  console.log(`✅ Web project ${projectName} bootstrapped successfully!`);
} else {
  console.error(`Error: Unknown type "${type}". Must be "native" or "web".`);
  process.exit(1);
}
