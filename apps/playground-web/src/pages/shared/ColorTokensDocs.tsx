import { CodeBlock } from '@/components/docs/CodeBlock';
import { tokens } from '@gv-tech/design-tokens';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@gv-tech/ui-web';

import { useDocMetadata } from '@/hooks/useDocMetadata';

export function ColorTokensDocs() {
  useDocMetadata({
    title: 'Color Tokens',
    description: 'Learn about the design tokens and color palette of GV Tech.',
  });
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Color Tokens</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          The Garcia Ventures design system is built on a robust token architecture that ensures consistency,
          accessibility, and easy maintenance across all digital products.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Design Philosophy</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg">Intellect</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Represented by Royal Blue, signaling depth, trust, and professional expertise.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-secondary/5 border-secondary/20">
            <CardHeader>
              <CardTitle className="text-lg">Stability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Rooted in Brand Green, reflecting growth, balance, and environmental consciousness.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-accent/5 border-accent/20">
            <CardHeader>
              <CardTitle className="text-lg">Transparency</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Expressed through Floral White, prioritizing clarity and a clean user experience.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Adoption Guide</h2>
        <p className="text-muted-foreground">
          There are three primary ways to consume these tokens depending on your project's technology stack.
        </p>

        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">1. Tailwind CSS (Recommended)</h3>
            <p className="text-sm text-muted-foreground">
              Most projects should use standard Tailwind utility classes. These are automatically mapped to our tokens
              via CSS variables.
            </p>
            <CodeBlock
              language="tsx"
              code={`// Use standard semantic classes
<button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Primary Action
</button>

<div className="border-border bg-card text-card-foreground">
  Card Content
</div>`}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">2. TypeScript / React</h3>
            <p className="text-sm text-muted-foreground">
              For logic-heavy styling or CSS-in-JS solutions, import the \`tokens\` object directly.
            </p>
            <CodeBlock
              language="tsx"
              code={`import { tokens } from '@gv-tech/design-system';

const MyComponent = () => {
  return (
    <div style={{ color: tokens.palette.brand.blue }}>
      Using Royal Blue directly
    </div>
  );
};`}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">3. Vanilla CSS</h3>
            <p className="text-sm text-muted-foreground">
              Directly access the CSS variables in your style tags or external stylesheets.
            </p>
            <CodeBlock
              language="css"
              code={`.custom-element {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  border: 1px solid hsl(var(--border));
}`}
            />
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Core Palette</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div
                className="h-24 w-full rounded-lg border shadow-inner"
                style={{ backgroundColor: tokens.palette.brand.blue }}
              />
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">Royal Blue</h4>
                  <p className="text-xs text-muted-foreground">Intellect & Trust</p>
                </div>
                <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{tokens.palette.brand.blue}</code>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div
                className="h-24 w-full rounded-lg border shadow-inner"
                style={{ backgroundColor: tokens.palette.brand.green }}
              />
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">Stability Green</h4>
                  <p className="text-xs text-muted-foreground">Growth & Balance</p>
                </div>
                <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{tokens.palette.brand.green}</code>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div
                className="h-24 w-full rounded-lg border shadow-inner"
                style={{ backgroundColor: tokens.palette.brand.floralWhite }}
              />
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold">Floral White</h4>
                  <p className="text-xs text-muted-foreground">Transparency & Clarity</p>
                </div>
                <code className="text-xs bg-muted px-1.5 py-0.5 rounded">{tokens.palette.brand.floralWhite}</code>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Semantic Tokens Reference</h2>
        <div className="rounded-xl border shadow-sm overflow-x-auto">
          <Table className="min-w-[600px] md:min-w-full">
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="w-[200px]">Token</TableHead>
                <TableHead>Variable Name</TableHead>
                <TableHead>Light Mode</TableHead>
                <TableHead>Dark Mode</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {(Object.keys(tokens.theme.light) as Array<keyof typeof tokens.theme.light>).map((key) => {
                if (key === 'radius') return null;
                return (
                  <TableRow key={key} className="group">
                    <TableCell className="font-medium group-hover:text-primary transition-colors">
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    </TableCell>
                    <TableCell className="font-mono text-xs text-muted-foreground">
                      --{key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase())}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div
                          className="h-6 w-6 rounded-md border shadow-sm"
                          style={{ backgroundColor: tokens.theme.light[key] as string }}
                        />
                        <span className="text-xs font-mono">{tokens.theme.light[key]}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div
                          className="h-6 w-6 rounded-md border shadow-sm"
                          style={{ backgroundColor: tokens.theme.dark[key] as string }}
                        />
                        <span className="text-xs font-mono">{tokens.theme.dark[key]}</span>
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
