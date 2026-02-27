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
            <TabsTrigger value="yarn">Yarn</TabsTrigger>
            <TabsTrigger value="yarn-classic">Yarn Classic</TabsTrigger>
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
          <TabsContent value="yarn" className="mt-4">
            <CodeBlock code="yarn add @gv-tech/ui-web" language="bash" />
          </TabsContent>
          <TabsContent value="yarn-classic" className="mt-4">
            <CodeBlock code="yarn add @gv-tech/ui-web" language="bash" />
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Peer Dependencies</h2>
        <p className="text-muted-foreground">
          The GV Tech Design System leverages standard web primitives. Ensure these packages are installed in your host
          application:
        </p>
        <CodeBlock
          code={`{
  "react": "^18.0.0 || ^19.0.0",
  "react-dom": "^18.0.0 || ^19.0.0",
  "lucide-react": "^0.475.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.0.1",
  "next-themes": "^0.4.0"
}`}
          language="json"
        />
        <div className="grid gap-4 md:grid-cols-2">
          <Alert variant="info" className="border-blue-500/20 bg-blue-500/5">
            <Info className="h-4 w-4 text-blue-500" />
            <AlertTitle className="text-blue-500">Theming Engine</AlertTitle>
            <AlertDescription className="text-xs">
              <code className="bg-muted rounded px-1 py-0.5">next-themes</code> is required for robust dark mode
              detection and theme persistence across sessions.
            </AlertDescription>
          </Alert>
          <Alert variant="info" className="border-purple-500/20 bg-purple-500/5">
            <Info className="h-4 w-4 text-purple-500" />
            <AlertTitle className="text-purple-500">Utility Classes</AlertTitle>
            <AlertDescription className="text-xs">
              We use <code className="bg-muted rounded px-1 py-0.5">tailwind-merge</code> and{' '}
              <code className="bg-muted rounded px-1 py-0.5">clsx</code> internally for dynamic class composition.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Configure Tailwind CSS 4.0</h2>
        <p className="text-muted-foreground">
          Tailwind CSS 4.0 simplifies configuration by moving it directly into your CSS files. Add the following to your
          primary entry point (e.g., <code className="bg-muted rounded px-1 py-0.5">globals.css</code>):
        </p>
        <CodeBlock
          language="css"
          code={`@import "tailwindcss";

@theme {
  /* Define design system radius tokens */
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  /* Map design system HSL tokens to Tailwind color utilities */
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
}`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Global Token Setup</h2>
        <p className="text-muted-foreground">
          Include the base HSL variables to initialize the design system's theme. These variables drive the automatic
          theming of all GV Tech components.
        </p>
        <CodeBlock
          code={`@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}`}
          language="css"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Quick Start</h2>
        <p className="text-muted-foreground">
          Wrap your application with the <code className="bg-muted rounded px-1 py-0.5">ThemeProvider</code> to enable
          automatic color mode detection and component theming.
        </p>
        <CodeBlock
          code={`import { ThemeProvider, Button } from '@gv-tech/ui-web';

// Optional: Import direct styles if not using standard Tailwind integration
// import '@gv-tech/ui-web/style.css';

export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}`}
        />
      </section>
    </div>
  );
}
