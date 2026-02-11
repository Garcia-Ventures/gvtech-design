import { CodeBlock } from '@/components/docs/CodeBlock';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { tokens } from '@/lib/tokens';

export function ColorTokensDocs() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Color Tokens</h1>
        <p className="text-lg text-muted-foreground">
          A comprehensive token library for consistent branding across Garcia Ventures applications.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">The Color Theme</h2>
        <p className="text-muted-foreground">
          Our theme is designed to signal stability, intellect, and transparency. It follows a consistent hierarchy
          across light and dark modes to ensure accessibility and professional aesthetics.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Core Palette</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-md border" style={{ backgroundColor: 'hsl(225 73% 57%)' }} />
                <div>
                  <p className="text-sm font-medium">Primary (Blue)</p>
                  <p className="text-xs text-muted-foreground">Royal Blue / Cornflower</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-md border" style={{ backgroundColor: 'hsl(93 28% 54%)' }} />
                <div>
                  <p className="text-sm font-medium">Secondary (Green)</p>
                  <p className="text-xs text-muted-foreground">Asparagus / Pistachio</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-md border" style={{ backgroundColor: 'hsl(210 29% 98%)' }} />
                <div>
                  <p className="text-sm font-medium">Neutral (Off-White)</p>
                  <p className="text-xs text-muted-foreground">Light Neutral / Floral White</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">Brand Specifics</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-md border" style={{ backgroundColor: 'hsl(151 66% 27%)' }} />
                <div>
                  <p className="text-sm font-medium">Brand Green</p>
                  <p className="text-xs text-muted-foreground">#177245 (Stability)</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-md border" style={{ backgroundColor: 'hsl(225 73% 57%)' }} />
                <div>
                  <p className="text-sm font-medium">Brand Blue</p>
                  <p className="text-xs text-muted-foreground">#4169e1 (Intellect)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage: Tailwind CSS</h2>
        <p className="text-muted-foreground">
          All color tokens are mapped to standard Tailwind colors via CSS variables in our design system.
        </p>
        <CodeBlock
          language="tsx"
          code={`<div className="bg-primary text-primary-foreground">
  Primary Content
</div>
<div className="text-secondary">
  Secondary Accent
</div>
<div className="border-border bg-muted/30">
  Muted Container
</div>`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage: TypeScript Tokens</h2>
        <p className="text-muted-foreground">
          For programmatic usage or non-Tailwind applications, you can import the raw token values.
        </p>
        <CodeBlock
          language="tsx"
          code={`import { tokens } from '@gv-tech/design-system';

// Accessing HSL values
const primary = tokens.colors.light.primary;
const brandGreen = tokens.colors.brand.green;`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">CSS Variables Reference</h2>
        <p className="text-muted-foreground">
          Below is a complete reference of all semantic color tokens available in the design system.
        </p>
        <div className="rounded-md border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-medium">Variable</th>
                <th className="px-4 py-3 text-left font-medium">Light Mode</th>
                <th className="px-4 py-3 text-left font-medium">Dark Mode</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {(Object.keys(tokens.colors.light) as Array<keyof typeof tokens.colors.light>).map((key) => (
                <tr key={key} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-2 font-mono text-xs">
                    --{key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`)}
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-4 w-4 rounded-sm border"
                        style={{ backgroundColor: tokens.colors.light[key] }}
                      />
                      <span className="text-muted-foreground">{tokens.colors.light[key]}</span>
                    </div>
                  </td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-sm border" style={{ backgroundColor: tokens.colors.dark[key] }} />
                      <span className="text-muted-foreground">{tokens.colors.dark[key]}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Brand Colors</h2>
        <div className="rounded-md border overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-medium">Token</th>
                <th className="px-4 py-3 text-left font-medium">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {Object.entries(tokens.colors.brand).map(([key, value]) => (
                <tr key={key} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-2 font-mono text-xs">tokens.colors.brand.{key}</td>
                  <td className="px-4 py-2">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-sm border" style={{ backgroundColor: value }} />
                      <span className="text-muted-foreground">{value}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
