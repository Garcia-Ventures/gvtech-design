import { CodeBlock } from '@/components/docs/CodeBlock';
import { tokens } from '@gv-tech/design-tokens';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@gv-tech/ui-web';
import { Info, Layers, Palette, Settings2 } from 'lucide-react';

import { useDocMetadata } from '@/hooks/useDocMetadata';

export function ColorTokensDocs() {
  useDocMetadata({
    title: 'Theming',
    description: 'Master the GV Tech theming system, from design tokens to custom theme overrides.',
  });

  return (
    <div className="space-y-12 pb-10">
      <section className="space-y-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold">
              <Palette className="text-primary h-5 w-5" />
              <span>Token-First</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Everything is driven by HSL variables, making dark mode and brand updates trivial.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold">
              <Layers className="text-primary h-5 w-5" />
              <span>Cascading Styles</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Themes cascade from the root, allowing for global changes or scoped sub-themes.
            </p>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-bold">
              <Settings2 className="text-primary h-5 w-5" />
              <span>Extensible</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Easily overwrite our defaults with your own brand palette without breaking the core logic.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">1. Using the Theme Engine</h2>
        <p className="text-muted-foreground">
          The <code className="bg-muted rounded px-1.5 py-0.5">ThemeProvider</code> is the heart of our theming system.
          It manages theme state, persistence, and dark mode detection.
        </p>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Global Provider Setup</h3>
          <CodeBlock
            language="tsx"
            code={`import { ThemeProvider } from '@gv-tech/ui-web';

export default function App({ children }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem
    >
      {children}
    </ThemeProvider>
  );
}`}
          />
        </div>

        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-semibold">Adding a Theme Toggle</h3>
          <p className="text-muted-foreground">
            Allow users to switch themes effortlessly using the built-in{' '}
            <code className="bg-muted rounded px-1.5 py-0.5">ThemeToggle</code> component.
          </p>
          <div className="bg-muted/20 flex items-center gap-8 rounded-xl border p-6">
            <div className="space-y-2">
              <p className="text-muted-foreground font-mono text-xs italic">Binary Variant (Default)</p>
              {/* Note: This is a placeholder for the actual component in the docs if rendered */}
              <div className="bg-background flex h-10 w-10 items-center justify-center rounded-md border shadow-sm">
                ☀️
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground font-mono text-xs italic">Ternary Variant</p>
              <div className="bg-background flex h-10 w-10 items-center justify-center rounded-md border shadow-sm">
                🌙
              </div>
            </div>
          </div>
          <CodeBlock
            language="tsx"
            code={`import { ThemeToggle } from '@gv-tech/ui-web';

// Simple binary (Light/Dark) toggle
<ThemeToggle variant="binary" />

// Detailed ternary (Light/Dark/System) dropdown
<ThemeToggle variant="ternary" />`}
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">2. Consuming Design Tokens</h2>
        <p className="text-muted-foreground">There are three primary ways to interact with the design system tokens.</p>

        <Tabs defaultValue="tailwind">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="tailwind">Tailwind CSS</TabsTrigger>
            <TabsTrigger value="typescript">TypeScript / JS</TabsTrigger>
            <TabsTrigger value="css">Vanilla CSS</TabsTrigger>
          </TabsList>
          <TabsContent value="tailwind" className="space-y-4 pt-4">
            <p className="text-muted-foreground text-sm">
              The recommended way. Use standard Tailwind color utilities which are mapped to our semantic variables.
            </p>
            <CodeBlock
              language="tsx"
              code={`<div className="bg-primary text-primary-foreground border-border">
  Semantic styling via utility classes
</div>

<span className="text-muted-foreground hover:text-foreground">
  Transitions follow token scales
</span>`}
            />
          </TabsContent>
          <TabsContent value="typescript" className="space-y-4 pt-4">
            <p className="text-muted-foreground text-sm">
              Access raw values for complex logic, animations, or styling in React Native.
            </p>
            <CodeBlock
              language="tsx"
              code={`import { tokens } from '@gv-tech/design-tokens';
import { useTheme } from '@gv-tech/ui-web';

const { tokens: activeTokens } = useTheme();

// Use raw brand palette
<div style={{ color: tokens.palette.brand.blue }}>...</div>

// Or use active theme-aware tokens
<div style={{ backgroundColor: activeTokens.background }}>...</div>`}
            />
          </TabsContent>
          <TabsContent value="css" className="space-y-4 pt-4">
            <p className="text-muted-foreground text-sm">Directly access variables in your own stylesheets.</p>
            <CodeBlock
              language="css"
              code={`.my-widget {
  background-color: hsl(var(--card));
  color: hsl(var(--card-foreground));
  box-shadow: 0 4px 6px hsl(var(--foreground) / 0.1);
}`}
            />
          </TabsContent>
        </Tabs>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tight">3. Customizing the Theme</h2>
        <p className="text-muted-foreground">
          You can overwrite the default design system with your own brand identity by redefining the core CSS variables.
        </p>

        <Card className="border-orange-500/20 bg-orange-500/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5 text-orange-500" />
              Overwriting Default Colors
            </CardTitle>
            <CardDescription>
              To change your primary brand color, redefine the{' '}
              <code className="bg-muted rounded px-1 py-0.5">--primary</code> variable in your root CSS.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              language="css"
              code={`@layer base {
  :root {
    /* Change primary to a vibrant orange HSL */
    --primary: 24 95% 53%;
    --primary-foreground: 0 0% 100%;
    
    /* Soften rounding across the whole system */
    --radius: 1rem;
  }
}`}
            />
          </CardContent>
        </Card>
      </section>

      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Token Reference</h2>
          <p className="text-muted-foreground">
            A complete reference of the semantic tokens and their default HSL values.
          </p>
        </div>
        <div className="overflow-x-auto rounded-xl border shadow-sm">
          <Table className="min-w-[600px] md:min-w-full">
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="w-[180px]">Token</TableHead>
                <TableHead>Variable</TableHead>
                <TableHead>Light Mode</TableHead>
                <TableHead>Dark Mode</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(Object.keys(tokens.theme.light) as Array<keyof typeof tokens.theme.light>).map((key) => {
                if (key === 'radius') {
                  return null;
                }
                const cssVar = `--${key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())}`;
                return (
                  <TableRow key={key} className="group">
                    <TableCell className="font-medium">
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    </TableCell>
                    <TableCell className="text-muted-foreground font-mono text-[10px]">{cssVar}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div
                          className="h-4 w-4 rounded-full border shadow-sm"
                          style={{ backgroundColor: tokens.theme.light[key] as string }}
                        />
                        <span className="font-mono text-[10px] tabular-nums">{tokens.theme.light[key]}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div
                          className="h-4 w-4 rounded-full border shadow-sm"
                          style={{ backgroundColor: tokens.theme.dark[key] as string }}
                        />
                        <span className="font-mono text-[10px] tabular-nums">{tokens.theme.dark[key]}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
}
