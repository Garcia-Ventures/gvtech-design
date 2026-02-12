import { CodeBlock } from '@/components/docs/CodeBlock';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function GettingStartedPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">GV Tech Design System</h1>
        <p className="text-xl text-muted-foreground">
          A comprehensive React component library built with shadcn/ui and Tailwind CSS.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="p-4 pb-2">
            <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center mb-2">
              <span className="text-2xl">🎨</span>
            </div>
            <CardTitle className="text-lg">Consistent Design</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm text-muted-foreground">
              Built on a unified design language with customizable themes.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="p-4 pb-2">
            <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center mb-2">
              <span className="text-2xl">⚡</span>
            </div>
            <CardTitle className="text-lg">Fully Typed</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm text-muted-foreground">
              Complete TypeScript support with comprehensive type definitions.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="p-4 pb-2">
            <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center mb-2">
              <span className="text-2xl">♿</span>
            </div>
            <CardTitle className="text-lg">Accessible</CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-sm text-muted-foreground">WAI-ARIA compliant components with keyboard navigation.</p>
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
        <h2 className="text-2xl font-semibold tracking-tight">Features</h2>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span> 46+ ready-to-use components
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span> Dark and light mode support
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✓</span> Fully customizable with CSS variables
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
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Installation</h1>
        <p className="text-lg text-muted-foreground">
          Get started with the GV Tech Design System in your React project.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Install the package</h2>
        <p className="text-muted-foreground">Install the design system package using your preferred package manager:</p>
        <Tabs defaultValue="npm" className="w-full">
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          </TabsList>
          <TabsContent value="npm" className="mt-4">
            <CodeBlock code="npm install @gv-tech/design-system" language="bash" />
          </TabsContent>
          <TabsContent value="yarn" className="mt-4">
            <CodeBlock code="yarn add @gv-tech/design-system" language="bash" />
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
  "react-dom": "^18 || ^19"
}`}
          language="json"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Configure Tailwind CSS</h2>
        <p className="text-muted-foreground">
          The design system uses Tailwind CSS for styling. Add the following to your{' '}
          <code className="text-sm bg-muted px-1.5 py-0.5 rounded">tailwind.config.js</code>:
        </p>
        <CodeBlock
          code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@gv-tech/design-system/dist/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
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
        <h2 className="text-2xl font-semibold tracking-tight">Start Using Components</h2>
        <p className="text-muted-foreground">Now you can import and use components from the design system:</p>
        <CodeBlock
          code={`import { Button } from '@gv-tech/design-system';

export default function App() {
  return (
    <Button variant="default">
      Click me
    </Button>
  );
}`}
        />
      </section>
    </div>
  );
}
