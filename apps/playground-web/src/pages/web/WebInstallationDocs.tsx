import { CodeBlock } from '@/components/docs/CodeBlock';
import { usePackageManager, type PackageManager } from '@/hooks/usePackageManager';
import { Alert, AlertDescription, AlertTitle, Tabs, TabsContent, TabsList, TabsTrigger } from '@gv-tech/ui-web';
import { Info } from 'lucide-react';

export function WebInstallationDocs() {
  const { packageManager, setPackageManager } = usePackageManager();

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
          <p className="text-muted-foreground">Install the web-optimized package for React and Tailwind CSS.</p>
        </div>
        <Tabs value={packageManager} onValueChange={(v) => setPackageManager(v as PackageManager)}>
          <TabsList>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="bun">bun</TabsTrigger>
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
          </TabsList>
          <TabsContent value="npm" className="mt-4">
            <CodeBlock code="npm install @gv-tech/ui-web" language="bash" />
          </TabsContent>
          <TabsContent value="bun" className="mt-4">
            <CodeBlock code="bun add @gv-tech/ui-web" language="bash" />
          </TabsContent>
          <TabsContent value="pnpm" className="mt-4">
            <CodeBlock code="pnpm add @gv-tech/ui-web" language="bash" />
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Peer Dependencies</h2>
        <p className="text-muted-foreground">Ensure you have the following dependencies installed in your project:</p>
        <CodeBlock
          code={`{
  "react": "^18 || ^19",
  "react-dom": "^18 || ^19",
  "next-themes": "^0.4.0",
  "lucide-react": "^0.475.0"
}`}
          language="json"
        />
        <Alert variant="info">
          <Info className="h-4 w-4" />
          <AlertTitle>Theming Support</AlertTitle>
          <AlertDescription>
            <code className="bg-muted rounded px-1.5 py-0.5 text-sm">next-themes</code> is required for the
            <code className="bg-muted rounded px-1.5 py-0.5 text-sm">ThemeProvider</code> and
            <code className="bg-muted rounded px-1.5 py-0.5 text-sm">ThemeToggle</code> components to function
            correctly.
          </AlertDescription>
        </Alert>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Configure Tailwind CSS (v4.0)</h2>
        <p className="text-muted-foreground">
          The design system is optimized for Tailwind CSS 4.0. Import Tailwind and add the theme variables to your
          global CSS:
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
        <h2 className="text-2xl font-semibold tracking-tight">Add Global Styles</h2>
        <p className="text-muted-foreground">Add these base variables to your CSS to support light and dark modes:</p>
        <CodeBlock
          code={`@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --border: 217.2 32.6% 17.5%;
  }
}`}
          language="css"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic Usage</h2>
        <CodeBlock
          code={`import { ThemeProvider, Button } from '@gv-tech/ui-web';
import '@gv-tech/ui-web/style.css';

export default function App() {
  return (
    <ThemeProvider>
      <Button>Hello World</Button>
    </ThemeProvider>
  );
}`}
        />
      </section>
    </div>
  );
}
