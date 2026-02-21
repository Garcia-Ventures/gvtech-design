import { CodeBlock } from '@/components/docs/CodeBlock';
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@gv-tech/ui-web';
import { AlertCircle, Info } from 'lucide-react';

import { useDocMetadata } from '@/hooks/useDocMetadata';
import { usePackageManager, type PackageManager } from '@/hooks/usePackageManager';

export function GettingStartedPage() {
  useDocMetadata({
    title: 'Getting Started',
    description: 'Learn how to get started with the GV Tech Design System.',
  });
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-center text-3xl font-bold tracking-tight md:text-left md:text-4xl">
          GV Tech Design System
        </h1>
        <p className="text-muted-foreground text-center text-lg md:text-left md:text-xl">
          A comprehensive React component library built with shadcn/ui and Tailwind CSS.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="p-4 pb-2">
            <div className="bg-primary/10 mb-2 flex h-10 w-10 items-center justify-center rounded-md">
              <span className="text-2xl">🎨</span>
            </div>
            <CardTitle className="text-lg">Consistent Design</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-muted-foreground text-sm">
              Built on a unified design language with customizable themes.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="p-4 pb-2">
            <div className="bg-primary/10 mb-2 flex h-10 w-10 items-center justify-center rounded-md">
              <span className="text-2xl">⚡</span>
            </div>
            <CardTitle className="text-lg">Fully Typed</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-muted-foreground text-sm">
              Complete TypeScript support with comprehensive type definitions.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="p-4 pb-2">
            <div className="bg-primary/10 mb-2 flex h-10 w-10 items-center justify-center rounded-md">
              <span className="text-2xl">♿</span>
            </div>
            <CardTitle className="text-lg">Accessible</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-muted-foreground text-sm">WAI-ARIA compliant components with keyboard navigation.</p>
          </CardContent>
        </Card>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Quick Example</h2>
        <CodeBlock
          code={`import { Button, Card, CardContent, CardHeader, CardTitle } from '@gv-tech/design-system';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Get Started</Button>
      </CardContent>
    </Card>
  );
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Platform Support</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-lg">Web</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-muted-foreground text-sm">Optimized for React with Radix UI and Tailwind CSS 4.0.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="p-4 pb-2">
              <CardTitle className="text-lg">React Native</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-muted-foreground text-sm">
                Built with NativeWind for a consistent styling experience on iOS and Android.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Documentation Note</h2>
        <Alert variant="info">
          <Info className="h-4 w-4" />
          <AlertTitle>Native Previews</AlertTitle>
          <AlertDescription>
            On this documentation site, <strong>React Native</strong> components are shown as code snippets only. Live
            rendering of native components on the web is disabled to ensure stability. To view native components in
            action, run the project on an iOS or Android simulator.
          </AlertDescription>
        </Alert>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Universal Components</h2>
        <div className="bg-muted/30 flex items-start gap-4 rounded-lg border p-4">
          <div className="mt-1 shrink-0">
            <div className="h-3 w-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          </div>
          <div className="space-y-1">
            <p className="text-sm font-medium">Universal Support Indicator</p>
            <p className="text-muted-foreground text-sm">
              Components marked with this green dot in the sidebar have both <strong>Web</strong> and{' '}
              <strong>Native</strong> implementations. You can use them seamlessly across platforms with a unified API.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Features</h2>
        <ul className="text-muted-foreground space-y-2">
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span> 46+ ready-to-use components
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span> Universal support (Web + React Native) for core components
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span> Dark and light mode support
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span> Fully customizable with CSS variables (Web) and Tailwind (Native)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span> Tree-shakeable for optimal bundle size
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span> React 18/19 compatible
          </li>
        </ul>
      </section>
    </div>
  );
}

export function InstallationPage() {
  useDocMetadata({
    title: 'Installation',
    description: 'Install the GV Tech Design System in your project.',
  });
  const { packageManager, setPackageManager } = usePackageManager();

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Installation</h1>
        <p className="text-muted-foreground text-base md:text-lg">
          Get started with the GV Tech Design System in your React project.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Install the package</h2>
        <p className="text-muted-foreground">Install the design system package using your preferred package manager:</p>
        <Tabs value={packageManager} onValueChange={(v) => setPackageManager(v as PackageManager)} className="w-full">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="bun">bun</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          </TabsList>
          <TabsContent value="npm" className="mt-4">
            <CodeBlock code="npm install @gv-tech/design-system" language="bash" />
          </TabsContent>
          <TabsContent value="yarn" className="mt-4">
            <CodeBlock code="yarn add @gv-tech/design-system" language="bash" />
          </TabsContent>
          <TabsContent value="bun" className="mt-4">
            <CodeBlock code="bun add @gv-tech/design-system" language="bash" />
          </TabsContent>
          <TabsContent value="pnpm" className="mt-4">
            <CodeBlock code="pnpm add @gv-tech/design-system" language="bash" />
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Peer Dependencies</h2>
        <p className="text-muted-foreground">Make sure you have the required peer dependencies installed:</p>
        <CodeBlock
          code={`{
  "react": "^18 || ^19",
  "react-dom": "^18 || ^19",
  "next-themes": "^0.4.0"
}`}
          language="json"
        />
        <p className="text-muted-foreground text-sm">
          <code className="bg-muted rounded px-1.5 py-0.5 text-sm">next-themes</code> is required for the design
          system's <code className="bg-muted rounded px-1.5 py-0.5 text-sm">ThemeProvider</code>,{' '}
          <code className="bg-muted rounded px-1.5 py-0.5 text-sm">ThemeToggle</code>, and{' '}
          <code className="bg-muted rounded px-1.5 py-0.5 text-sm">useTheme</code> to work. Install it alongside the
          design system:
        </p>
        <Tabs value={packageManager} onValueChange={(v) => setPackageManager(v as PackageManager)} className="w-full">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="bun">bun</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          </TabsList>
          <TabsContent value="npm" className="mt-4">
            <CodeBlock code="npm install next-themes" language="bash" />
          </TabsContent>
          <TabsContent value="yarn" className="mt-4">
            <CodeBlock code="yarn add next-themes" language="bash" />
          </TabsContent>
          <TabsContent value="bun" className="mt-4">
            <CodeBlock code="bun add next-themes" language="bash" />
          </TabsContent>
          <TabsContent value="pnpm" className="mt-4">
            <CodeBlock code="pnpm add next-themes" language="bash" />
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Configure Tailwind CSS (v4.0)</h2>
        <p className="text-muted-foreground">
          The design system is optimized for Tailwind CSS 4.0. In your global CSS file, import Tailwind and add the
          theme variables:
        </p>
        <CodeBlock
          language="css"
          code={`@import "tailwindcss";

@theme {
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Map design system tokens to Tailwind colors */
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-border: hsl(var(--border));
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Add CSS Variables</h2>
        <p className="text-muted-foreground">Add the following CSS variables to your global stylesheet:</p>
        <CodeBlock
          code={`@layer base {
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
          language="css"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">React Native Setup</h2>
        <p className="text-muted-foreground">
          For React Native projects, you'll need to configure NativeWind and ensure correct platform resolution.
        </p>
        <Alert variant="warning">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Important Native Resolution</AlertTitle>
          <AlertDescription>
            The design system uses <code className="bg-background rounded px-1">.native.tsx</code> extensions. Ensure
            your Metro bundler is configured to prefer these extensions.
          </AlertDescription>
        </Alert>
        <Tabs value={packageManager} onValueChange={(v) => setPackageManager(v as PackageManager)} className="w-full">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="bun">bun</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          </TabsList>
          <TabsContent value="npm" className="mt-4 text-sm">
            <CodeBlock code="npm install @gv-tech/design-system lucide-react-native nativewind" language="bash" />
          </TabsContent>
          <TabsContent value="yarn" className="mt-4 text-sm">
            <CodeBlock code="yarn add @gv-tech/design-system lucide-react-native nativewind" language="bash" />
          </TabsContent>
          <TabsContent value="bun" className="mt-4 text-sm">
            <CodeBlock code="bun add @gv-tech/design-system lucide-react-native nativewind" language="bash" />
          </TabsContent>
          <TabsContent value="pnpm" className="mt-4 text-sm">
            <CodeBlock code="pnpm add @gv-tech/design-system lucide-react-native nativewind" language="bash" />
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Start Using Components</h2>
        <p className="text-muted-foreground">
          Wrap your app with the <code className="bg-muted rounded px-1.5 py-0.5 text-sm">ThemeProvider</code> to enable
          consistent styling and theme switching.
        </p>
        <Tabs defaultValue="web" className="w-full">
          <TabsList>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="native">React Native</TabsTrigger>
          </TabsList>
          <TabsContent value="web" className="mt-4">
            <CodeBlock
              code={`import { ThemeProvider, ThemeToggle, Button } from '@gv-tech/design-system';
import '@gv-tech/design-system/style.css';

export default function App() {
  return (
    <ThemeProvider>
      <div className="p-8">
        <ThemeToggle />
        <Button className="mt-4">Welcome to GV Tech</Button>
      </div>
    </ThemeProvider>
  );
}`}
            />
          </TabsContent>
          <TabsContent value="native" className="mt-4">
            <CodeBlock
              code={`import { ThemeProvider, Button, Input, Label, Text } from '@gv-tech/design-system';
import { View } from 'react-native';

export default function MyScreen() {
  return (
    <ThemeProvider>
      <View className="flex-1 items-center justify-center p-6 bg-background">
        <Label className="mb-2">Your Name</Label>
        <Input placeholder="Enter your name" className="mb-4" />
        <Button onPress={() => alert('Hello!')}>
          <Text>Submit</Text>
        </Button>
      </View>
    </ThemeProvider>
  );
}`}
            />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
