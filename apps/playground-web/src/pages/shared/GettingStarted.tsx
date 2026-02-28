import { Alert, AlertDescription, AlertTitle, Card, CardContent, CardHeader, CardTitle } from '@gv-tech/ui-web';
import { Info } from 'lucide-react';

import { useDocMetadata } from '@/hooks/useDocMetadata';

export function GettingStartedPage() {
  useDocMetadata({
    title: 'Getting Started',
    description: 'Learn how to get started with the GV Tech Design System.',
  });
  return (
    <div className="space-y-12 pb-10">
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-muted/30">
          <CardHeader className="pb-2">
            <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
              <span className="text-3xl">🚀</span>
            </div>
            <CardTitle>Universal Core</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Define your UI once with platform-agnostic contracts and implement specifically for Web or Native.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-muted/30">
          <CardHeader className="pb-2">
            <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
              <span className="text-3xl">🧩</span>
            </div>
            <CardTitle>Modular Design</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Install only what you need. Small bundle sizes, tree-shakeable, and zero bloat.
            </p>
          </CardContent>
        </Card>
        <Card className="bg-muted/30">
          <CardHeader className="pb-2">
            <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
              <span className="text-3xl">🎨</span>
            </div>
            <CardTitle>Token-Driven</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Built on a robust HSL token system, making theming and dark mode integration effortless.
            </p>
          </CardContent>
        </Card>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">The Ecosystem</h2>
        <p className="text-muted-foreground text-lg">
          The GV Tech Design System is a monorepo-based architecture designed for maximum consistency across diverse
          platforms.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="hover:bg-muted/20 flex flex-col justify-between space-y-4 rounded-xl border p-6 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <h3 className="text-xl font-bold">@gv-tech/ui-web</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The primary package for web applications. Built with <strong>Tailwind CSS 4.0</strong> and
                <strong>Radix UI</strong> primitives. It provides accessible, unstyled components that are styled via
                our design tokens.
              </p>
            </div>
            <div className="text-muted-foreground bg-muted/50 rounded p-2 font-mono text-xs">
              Ideal for: Next.js, Vite, Create React App
            </div>
          </div>
          <div className="hover:bg-muted/20 flex flex-col justify-between space-y-4 rounded-xl border p-6 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-purple-500" />
                <h3 className="text-xl font-bold">@gv-tech/ui-native</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The platform implementation for <strong>React Native</strong>. Powered by <strong>NativeWind</strong>
                to provide a unified styling experience. It transforms our shared tokens into native styles
                effortlessly.
              </p>
            </div>
            <div className="text-muted-foreground bg-muted/50 rounded p-2 font-mono text-xs">
              Ideal for: Expo, React Native CLI
            </div>
          </div>
          <div className="hover:bg-muted/20 flex flex-col justify-between space-y-4 rounded-xl border p-6 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <h3 className="text-xl font-bold">@gv-tech/ui-core</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The <strong>Universal Contract</strong> layer. It defines exactly how a component should behave and what
                props it accepts, ensuring that developers get a consistent API regardless of the platform.
              </p>
            </div>
            <div className="text-muted-foreground bg-muted/50 rounded p-2 font-mono text-xs">
              Role: Interfaces, Types, Constants
            </div>
          </div>
          <div className="hover:bg-muted/20 flex flex-col justify-between space-y-4 rounded-xl border p-6 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                <h3 className="text-xl font-bold">@gv-tech/design-tokens</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The <strong>Visual Genome</strong> of the system. Contains all raw values for colors, spacing, and
                typography. Used to generate the CSS variables and theme objects that power the entire ecosystem.
              </p>
            </div>
            <div className="text-muted-foreground bg-muted/50 rounded p-2 font-mono text-xs">
              Role: HSL Colors, Spacing Scales, Typography
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">The Vision</h2>
          <div className="bg-primary/5 text-primary rounded-full px-4 py-1 text-xs font-semibold tracking-wider uppercase">
            Platform Harmony
          </div>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">
          GV Tech is built on the principle of <strong>Universal Design</strong>. We believe that while interaction
          patterns differ between web and mobile, the visual language and developer experience should remain unified.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <h4 className="font-bold">Consistency by Default</h4>
            <p className="text-muted-foreground text-sm">
              By implementating the same <code className="bg-muted rounded px-1.5 py-0.5">ui-core</code> contracts, we
              guarantee that switching between web and mobile development feels natural and predictable.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold">Token-First Styling</h4>
            <p className="text-muted-foreground text-sm">
              We don't hardcode colors. Every component is tied to our semantic token system, enabling instant theme
              updates and perfect dark mode support out of the box.
            </p>
          </div>
        </div>
        <Alert variant="info" className="border-primary/20 bg-primary/5">
          <Info className="h-5 w-5" />
          <AlertTitle className="text-lg font-bold">Getting Started</AlertTitle>
          <AlertDescription className="mt-2 text-base">
            Ready to integrate? Choose your platform and follow our guided <strong>Installation</strong> steps to get
            set up in under 5 minutes.
          </AlertDescription>
        </Alert>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight">Features</h2>
        <div className="text-muted-foreground grid gap-2 md:grid-cols-2">
          <div className="bg-muted/20 flex items-center gap-3 rounded-lg p-3">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
              <span className="text-xs text-green-600">✓</span>
            </div>
            <span>46+ production-ready components</span>
          </div>
          <div className="bg-muted/20 flex items-center gap-3 rounded-lg p-3">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
              <span className="text-xs text-green-600">✓</span>
            </div>
            <span>Tailwind CSS 4.0 Support</span>
          </div>
          <div className="bg-muted/20 flex items-center gap-3 rounded-lg p-3">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
              <span className="text-xs text-green-600">✓</span>
            </div>
            <span>Dark and light mode optimized</span>
          </div>
          <div className="bg-muted/20 flex items-center gap-3 rounded-lg p-3">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/20">
              <span className="text-xs text-green-600">✓</span>
            </div>
            <span>Zero-runtime CSS variants</span>
          </div>
        </div>
      </section>
    </div>
  );
}
