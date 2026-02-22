import { Alert, AlertDescription, AlertTitle, Card, CardContent, CardHeader, CardTitle } from '@gv-tech/ui-web';
import { Info } from 'lucide-react';

import { useDocMetadata } from '@/hooks/useDocMetadata';

export function GettingStartedPage() {
  useDocMetadata({
    title: 'Getting Started',
    description: 'Learn how to get started with the GV Tech Design System.',
  });
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h1 className="text-center text-3xl font-bold tracking-tight md:text-left md:text-5xl">
          GV Tech Design System
        </h1>
        <p className="text-muted-foreground max-w-[800px] text-center text-lg md:text-left md:text-xl">
          A modern, universal component library built for speed, accessibility, and developer experience. Engineered for
          seamless use across Web (React) and Mobile (React Native).
        </p>
      </div>

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
          The system is distributed as a suite of scoped packages tailored for different needs.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="hover:bg-muted/20 space-y-4 rounded-xl border p-6 transition-colors">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <h3 className="text-xl font-bold">@gv-tech/ui-web</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The primary package for web applications. Built with <strong>Tailwind CSS 4.0</strong> and
              <strong>Radix UI</strong> primitives for ultimate accessibility.
            </p>
          </div>
          <div className="hover:bg-muted/20 space-y-4 rounded-xl border p-6 transition-colors">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <h3 className="text-xl font-bold">@gv-tech/ui-native</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The platform implementation for <strong>React Native</strong>. Powered by <strong>NativeWind</strong>
              to provide a CSS-like experience on mobile.
            </p>
          </div>
          <div className="hover:bg-muted/20 space-y-4 rounded-xl border p-6 transition-colors">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <h3 className="text-xl font-bold">@gv-tech/ui-core</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              The "Source of Truth". Contains shared Typescript interfaces and contracts that both Web and Native
              packages implement.
            </p>
          </div>
          <div className="hover:bg-muted/20 space-y-4 rounded-xl border p-6 transition-colors">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-orange-500" />
              <h3 className="text-xl font-bold">@gv-tech/design-tokens</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Pure design data. JSON/JS exports for colors, spacing, and typography. Zero dependencies.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">The Vision</h2>
          <div className="bg-primary/5 text-primary rounded-full px-4 py-1 text-xs font-semibold tracking-wider uppercase">
            Universal Design
          </div>
        </div>
        <p className="text-muted-foreground text-lg leading-relaxed">
          GV Tech is designed to solve the friction between designers and developers. By sharing a common core and
          tokens, we ensure that a <code className="bg-muted rounded px-1.5 py-0.5 text-base">Button</code> on the web
          feels exactly like a <code className="bg-muted rounded px-1.5 py-0.5 text-base">Button</code> on mobile, while
          still respecting each platform's unique interaction patterns.
        </p>
        <Alert variant="info" className="border-primary/20 bg-primary/5">
          <Info className="h-5 w-5" />
          <AlertTitle className="text-lg font-bold">Ready to build?</AlertTitle>
          <AlertDescription className="mt-2 text-base">
            Head over to the <strong>Installation</strong> page to choose your platform and get started in minutes.
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
