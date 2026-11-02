import { Tabs, TabsContent, TabsList, TabsTrigger } from '@gv-tech/ui-web';

import { CodeBlock } from '@/components/docs/CodeBlock';
import { usePackageManager, type PackageManager } from '@/hooks/usePackageManager';

export function WebInstallationDocs() {
  const { packageManager, setPackageManager } = usePackageManager();

  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
          <p className="text-muted-foreground">
            Install the web-optimized package and design tokens for React and Tailwind CSS.
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
            <CodeBlock code="npm install @gv-tech/ui-web @gv-tech/design-tokens" language="bash" />
          </TabsContent>
          <TabsContent value="bun" className="mt-4">
            <CodeBlock code="bun add @gv-tech/ui-web @gv-tech/design-tokens" language="bash" />
          </TabsContent>
          <TabsContent value="pnpm" className="mt-4">
            <CodeBlock code="pnpm add @gv-tech/ui-web @gv-tech/design-tokens" language="bash" />
          </TabsContent>
          <TabsContent value="yarn" className="mt-4">
            <CodeBlock code="yarn add @gv-tech/ui-web @gv-tech/design-tokens" language="bash" />
          </TabsContent>
          <TabsContent value="yarn-classic" className="mt-4">
            <CodeBlock code="yarn add @gv-tech/ui-web @gv-tech/design-tokens" language="bash" />
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Adding Components via Shadcn CLI</h2>
          <p className="text-muted-foreground">
            If you don't want to install the entire library and prefer to own the source code, you can use the shadcn
            CLI to pull individual components directly from our GitHub registry.
          </p>
        </div>
        <CodeBlock
          code='npx shadcn@latest add "https://github.com/Garcia-Ventures/gvtech-design/tree/main/packages/ui-web"'
          language="bash"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Peer Dependencies</h2>
        <p className="text-muted-foreground">
          The GV Tech Design System leverages standard web primitives.{' '}
          <b>Install these packages in your host application:</b>
        </p>
        <CodeBlock
          code={`npm install react@^18.0.0 react-dom@^18.0.0 lucide-react@^0.475.0 clsx@^2.1.1 tailwind-merge@^3.0.1 next-themes@^0.4.0`}
          language="bash"
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Configure Tailwind CSS</h2>
        <p className="text-muted-foreground">
          The easiest way to integrate theme tokens (colors, border-radius, shadows, animations) is by using the
          single-source-of-truth configuration preset shipped in{' '}
          <code className="bg-muted rounded px-1 py-0.5">@gv-tech/design-tokens</code>.
        </p>

        <Tabs defaultValue="v4">
          <TabsList>
            <TabsTrigger value="v4">Tailwind v4.0 (CSS-first)</TabsTrigger>
            <TabsTrigger value="v3">Tailwind v3.0 (JS Config)</TabsTrigger>
          </TabsList>

          <TabsContent value="v4" className="mt-4 space-y-4">
            <p className="text-muted-foreground text-sm">
              In Tailwind 4.0, configure sources and themes natively inside your main stylesheet (e.g.,{' '}
              <code className="bg-muted rounded px-1">globals.css</code>):
            </p>
            <CodeBlock
              language="css"
              code={`@import "tailwindcss";

/* Scan design system component files for styles */
@source "node_modules/@gv-tech/ui-web/dist/**/*.mjs";

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
          </TabsContent>

          <TabsContent value="v3" className="mt-4 space-y-4">
            <p className="text-muted-foreground text-sm">
              For Tailwind v3, import the configuration preset directly into your{' '}
              <code className="bg-muted rounded px-1">tailwind.config.js</code>:
            </p>
            <CodeBlock
              language="javascript"
              code={`const { preset } = require("@gv-tech/design-tokens");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [preset],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@gv-tech/ui-web/dist/**/*.mjs",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`}
            />
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Global Token Setup</h2>
        <p className="text-muted-foreground">
          Include the base HSL variables to initialize the design system's theme in your primary entry point (e.g.,{' '}
          <code className="bg-muted rounded px-1">globals.css</code>).
        </p>
        <CodeBlock
          code={`@layer base {
  :root {
    --background: 35 25% 88%;
    --foreground: 150 50% 22%;
    --card: 35 20% 94%;
    --card-foreground: 150 50% 22%;
    --popover: 35 20% 94%;
    --popover-foreground: 150 50% 22%;
    --primary: 150 50% 28%;
    --primary-foreground: 35 33% 97%;
    --secondary: 150 25% 40%;
    --secondary-foreground: 35 33% 97%;
    --muted: 35 15% 80%;
    --muted-foreground: 150 15% 32%;
    --accent: 35 18% 82%;
    --accent-foreground: 150 50% 22%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 35 33% 97%;
    --border: 35 15% 80%;
    --input: 35 15% 80%;
    --ring: 150 50% 28%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 30 15% 12%;
    --foreground: 35 20% 92%;
    --card: 30 12% 16%;
    --card-foreground: 35 20% 92%;
    --popover: 30 12% 16%;
    --popover-foreground: 35 20% 92%;
    --primary: 150 40% 55%;
    --primary-foreground: 150 45% 10%;
    --secondary: 150 30% 65%;
    --secondary-foreground: 150 45% 10%;
    --muted: 30 10% 22%;
    --muted-foreground: 35 12% 70%;
    --accent: 30 12% 18%;
    --accent-foreground: 35 20% 92%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 35 20% 92%;
    --border: 30 10% 22%;
    --input: 30 10% 22%;
    --ring: 150 40% 55%;
    --radius: 0.5rem;
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
          code={`import { ThemeProvider } from '@gv-tech/ui-web';

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
