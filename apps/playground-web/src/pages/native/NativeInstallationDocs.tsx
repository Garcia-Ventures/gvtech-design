import { CodeBlock } from '@/components/docs/CodeBlock';
import { usePackageManager, type PackageManager } from '@/hooks/usePackageManager';
import { Alert, AlertDescription, AlertTitle, Tabs, TabsContent, TabsList, TabsTrigger } from '@gv-tech/ui-web';
import { AlertCircle, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

export function NativeInstallationDocs() {
  const { packageManager, setPackageManager } = usePackageManager();

  return (
    <div className="space-y-12">
      {/* Overview & Quick Checklist */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">React Native Installation</h2>
          <p className="text-muted-foreground text-lg">
            Complete end-to-end setup guide for integrating{' '}
            <code className="bg-muted rounded px-1.5 py-0.5 font-mono text-sm">@gv-tech/ui-native</code> with Expo,
            React Native CLI, Tailwind CSS v4, and NativeWind v5 preview releases.
          </p>
        </div>
        <div className="bg-muted/30 rounded-xl border p-4">
          <h3 className="text-muted-foreground mb-3 text-sm font-semibold tracking-wider uppercase">Setup Checklist</h3>
          <div className="grid gap-2 text-sm sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Step 1: Install NativeWind v5 & Dependencies</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Step 2: Setup Global CSS & Tokens</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Step 3: Configure Tailwind CSS & Content Paths</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Step 4: Configure Metro Bundler</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Step 5: TypeScript & Babel Setup</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span>Step 6: Root Layout Initialization</span>
            </div>
          </div>
        </div>
      </section>

      {/* Step 1: Installation */}
      <section className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">
              1
            </span>
            <h3 className="text-xl font-bold tracking-tight">Install NativeWind v5 & Dependencies</h3>
          </div>
          <p className="text-muted-foreground">
            To support Tailwind CSS v4 natively on React Native, you{' '}
            <strong>must use NativeWind v5 preview releases</strong> (
            <code className="bg-muted rounded px-1">nativewind@^5.0.0-preview.4</code>) along with required mobile
            primitives.
          </p>
        </div>
        <Tabs value={packageManager} onValueChange={(v) => setPackageManager(v as PackageManager)}>
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="bun">bun</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            <TabsTrigger value="yarn">Yarn</TabsTrigger>
            <TabsTrigger value="yarn-classic">Yarn Classic</TabsTrigger>
          </TabsList>
          <TabsContent value="npm" className="mt-4">
            <CodeBlock
              code="npm install @gv-tech/ui-native @gv-tech/design-tokens nativewind@^5.0.0-preview.4 lucide-react-native react-native-reanimated react-native-svg"
              language="bash"
            />
          </TabsContent>
          <TabsContent value="bun" className="mt-4">
            <CodeBlock
              code="bun add @gv-tech/ui-native @gv-tech/design-tokens nativewind@^5.0.0-preview.4 lucide-react-native react-native-reanimated react-native-svg"
              language="bash"
            />
          </TabsContent>
          <TabsContent value="pnpm" className="mt-4">
            <CodeBlock
              code="pnpm add @gv-tech/ui-native @gv-tech/design-tokens nativewind@^5.0.0-preview.4 lucide-react-native react-native-reanimated react-native-svg"
              language="bash"
            />
          </TabsContent>
          <TabsContent value="yarn" className="mt-4">
            <CodeBlock
              code="yarn add @gv-tech/ui-native @gv-tech/design-tokens nativewind@^5.0.0-preview.4 lucide-react-native react-native-reanimated react-native-svg"
              language="bash"
            />
          </TabsContent>
          <TabsContent value="yarn-classic" className="mt-4">
            <CodeBlock
              code="yarn add @gv-tech/ui-native @gv-tech/design-tokens nativewind@^5.0.0-preview.4 lucide-react-native react-native-reanimated react-native-svg"
              language="bash"
            />
          </TabsContent>
        </Tabs>

        <Alert variant="info" className="border-primary/20 bg-primary/5">
          <Info className="text-primary h-5 w-5" />
          <AlertTitle className="text-primary font-bold">NativeWind v5 & Lightningcss Override Required</AlertTitle>
          <AlertDescription className="mt-1 text-sm leading-relaxed">
            NativeWind v5 enables Tailwind CSS v4 support in React Native. To prevent deserialization build errors with
            NativeWind v5 previews, add the{' '}
            <code className="bg-background rounded px-1 font-mono text-xs">lightningcss</code> override to your root{' '}
            <code className="bg-background rounded px-1 font-mono text-xs">package.json</code>:
            <div className="mt-2 font-mono text-xs">
              <pre className="bg-muted/70 text-foreground overflow-x-auto rounded p-2">
                {`"overrides": {
  "lightningcss": "1.30.1"
}`}
              </pre>
            </div>
          </AlertDescription>
        </Alert>

        <Alert variant="info" className="border-primary/20 bg-primary/5">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Expo SDK Compatibility</AlertTitle>
          <AlertDescription>
            In Expo projects, install native modules using{' '}
            <code className="bg-muted rounded px-1">npx expo install react-native-reanimated react-native-svg</code> to
            keep versions synchronized with your Expo SDK.
          </AlertDescription>
        </Alert>
      </section>

      {/* Step 2: Global CSS & Token Initialization */}
      <section className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">
              2
            </span>
            <h3 className="text-xl font-bold tracking-tight">Create Global CSS & Theme Token Variables</h3>
          </div>
          <p className="text-muted-foreground">
            NativeWind v5 evaluates design system utility classes like{' '}
            <code className="bg-muted rounded px-1">bg-background</code> and{' '}
            <code className="bg-muted rounded px-1">bg-card</code> using HSL CSS variables. Create a{' '}
            <code className="bg-muted rounded px-1">src/global.css</code> file and inject the required{' '}
            <code className="bg-muted rounded px-1">:root</code> and{' '}
            <code className="bg-muted rounded px-1">.dark</code> theme variables.
          </p>
        </div>

        <CodeBlock
          language="css"
          code={`@import "@gv-tech/design-tokens/theme.css";
@import "tailwindcss/theme.css" layer(theme);
@import "tailwindcss/preflight.css" layer(base);
@import "tailwindcss/utilities.css";
@import "nativewind/theme";

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}`}
        />

        <p className="text-muted-foreground text-sm">
          Next, import <code className="bg-muted rounded px-1">global.css</code> at the top of your root entry point
          (e.g., <code className="bg-muted rounded px-1">App.tsx</code> or{' '}
          <code className="bg-muted rounded px-1">index.js</code>):
        </p>

        <CodeBlock
          language="typescript"
          code={`// Must be imported at the very top of your entry file
import './src/global.css';`}
        />
      </section>

      {/* Step 3: Tailwind & NativeWind Preset Setup */}
      <section className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">
              3
            </span>
            <h3 className="text-xl font-bold tracking-tight">Configure Tailwind CSS & Content Paths</h3>
          </div>
          <p className="text-muted-foreground">
            Configure your <code className="bg-muted rounded px-1">tailwind.config.js</code> to include the NativeWind
            preset and design system tokens.
          </p>
        </div>

        <CodeBlock
          language="javascript"
          code={`const { preset } = require("@gv-tech/design-tokens");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // CRITICAL: You must include @gv-tech/ui-native in content or styles will be purged!
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@gv-tech/ui-native/dist/**/*.mjs",
    "./node_modules/@gv-tech/ui-native/src/**/*.{ts,tsx}",
  ],
  presets: [
    require("nativewind/preset"),
    preset,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`}
        />

        <Alert variant="destructive" className="border-destructive/30 bg-destructive/10 text-destructive">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle className="font-bold">Crucial Step: Missing Component Content Paths</AlertTitle>
          <AlertDescription className="mt-1 text-sm leading-relaxed">
            If you do not add{' '}
            <code className="bg-background rounded px-1 font-mono text-xs">
              ./node_modules/@gv-tech/ui-native/dist/**/*.mjs
            </code>{' '}
            to your Tailwind <code className="bg-background rounded px-1 font-mono text-xs">content</code> array,
            Tailwind will purge all component class names (
            <code className="bg-background rounded px-1 font-mono text-xs">bg-card</code>,{' '}
            <code className="bg-background rounded px-1 font-mono text-xs">bg-background</code>,{' '}
            <code className="bg-background rounded px-1 font-mono text-xs">border-border</code>). This causes component
            background colors to render as completely transparent.
          </AlertDescription>
        </Alert>
      </section>

      {/* Step 4: Metro Configuration */}
      <section className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">
              4
            </span>
            <h3 className="text-xl font-bold tracking-tight">Configure Metro Bundler</h3>
          </div>
          <p className="text-muted-foreground">
            Wrap your Metro configuration with NativeWind's bundler integration and ensure{' '}
            <code className="bg-muted rounded px-1">.native.tsx</code> extensions are prioritized.
          </p>
        </div>

        <CodeBlock
          language="javascript"
          code={`const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Ensure native extensions resolve cleanly
config.resolver.sourceExts = [
  ...config.resolver.sourceExts,
  "native.tsx",
  "native.ts",
  "native.js",
];

module.exports = withNativeWind(config, { input: "./src/global.css" });`}
        />
      </section>

      {/* Step 5: TypeScript & Babel */}
      <section className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">
              5
            </span>
            <h3 className="text-xl font-bold tracking-tight">Configure TypeScript & Babel</h3>
          </div>
          <p className="text-muted-foreground">
            React Native types do not natively include <code className="bg-muted rounded px-1">className</code> on
            primitives like <code className="bg-muted rounded px-1">View</code> or{' '}
            <code className="bg-muted rounded px-1">Text</code>. Augment your types and register the Reanimated Babel
            plugin.
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold">
            1. Create <code className="bg-muted rounded px-1">nativewind-env.d.ts</code> in project root:
          </p>
          <CodeBlock language="typescript" code={`/// <reference types="nativewind/types" />`} />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold">
            2. Ensure <code className="bg-muted rounded px-1">tsconfig.json</code> includes your declaration file:
          </p>
          <CodeBlock
            language="json"
            code={`{
  "extends": "expo/tsconfig.base",
  "include": [
    "**/*.ts",
    "**/*.tsx",
    "nativewind-env.d.ts"
  ]
}`}
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-semibold">
            3. Add Reanimated worklet plugin to <code className="bg-muted rounded px-1">babel.config.js</code>:
          </p>
          <CodeBlock
            language="javascript"
            code={`module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-worklets/plugin', // Reanimated v4 worklet plugin
    ],
  };
};`}
          />
        </div>
      </section>

      {/* Step 6: Root Layout Initialization */}
      <section className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">
              6
            </span>
            <h3 className="text-xl font-bold tracking-tight">Application Root & Layout Best Practices</h3>
          </div>
          <p className="text-muted-foreground">
            Wrap your application in <code className="bg-muted rounded px-1">ThemeProvider</code> and apply proper
            layout constraints to root screen views.
          </p>
        </div>

        <CodeBlock
          language="typescript"
          code={`import './src/global.css'; // 1. Global CSS Import

import * as React from 'react';
import { View } from 'react-native';
import { ThemeProvider, Button, Text, Card, CardHeader, CardTitle, CardContent } from '@gv-tech/ui-native';

export default function App() {
  return (
    <ThemeProvider value="system">
      {/* Root screen container MUST use flex-1 and bg-background */}
      <View className="flex-1 bg-background justify-center items-center p-6">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Welcome to GV Native</CardTitle>
          </CardHeader>
          <CardContent className="gap-4">
            <Text className="text-muted-foreground">
              Your components and theme tokens are now fully initialized.
            </Text>
            <Button onPress={() => alert('Ready!')}>
              <Text>Get Started</Text>
            </Button>
          </CardContent>
        </Card>
      </View>
    </ThemeProvider>
  );
}`}
        />

        <Alert variant="warning">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Layout View Height Sizing</AlertTitle>
          <AlertDescription>
            React Native views default to auto height. Ensure root screen containers inside{' '}
            <code className="bg-muted rounded px-1">ThemeProvider</code> use{' '}
            <code className="bg-muted rounded px-1">flex-1 bg-background</code> to ensure background colors stretch
            fully across screen boundaries.
          </AlertDescription>
        </Alert>
      </section>

      {/* Shadcn CLI section */}
      <section className="space-y-4 border-t pt-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Adding Components via Shadcn CLI</h2>
          <p className="text-muted-foreground">
            If you prefer to own component source code directly inside your repository, use the shadcn CLI to pull
            components from our GitHub registry.
          </p>
        </div>
        <CodeBlock
          code='npx shadcn@latest add "https://github.com/Garcia-Ventures/gvtech-design/tree/main/packages/ui-native"'
          language="bash"
        />
      </section>
    </div>
  );
}
