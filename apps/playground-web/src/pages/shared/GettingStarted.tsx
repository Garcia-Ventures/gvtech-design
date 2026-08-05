import { Alert, AlertDescription, AlertTitle, Card, CardContent, CardHeader, CardTitle } from '@gv-tech/ui-web';
import { ArrowRight, Info, Monitor, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useDocMetadata } from '@/hooks/useDocMetadata';

export function GettingStartedPage() {
  useDocMetadata({
    title: 'Getting Started',
    description: 'Learn how to get started with the GV Tech Design System across Web and React Native.',
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
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Monitor className="h-5 w-5 text-blue-500" />
                  <h3 className="text-xl font-bold">@gv-tech/ui-web</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The primary package for web applications. Built with <strong>Tailwind CSS 4.0</strong> and{' '}
                <strong>Radix UI</strong> primitives. Provides accessible components styled via design tokens.
              </p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-muted-foreground bg-muted/50 rounded px-2 py-1 font-mono text-xs">
                Next.js, Vite, React DOM
              </span>
              <Link
                to="/docs/installation"
                className="text-primary flex items-center gap-1 text-xs font-semibold hover:underline"
              >
                Web Setup <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          <div className="hover:bg-muted/20 flex flex-col justify-between space-y-4 rounded-xl border p-6 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-purple-500" />
                  <h3 className="text-xl font-bold">@gv-tech/ui-native</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The platform implementation for <strong>React Native</strong>. Powered by <strong>NativeWind v5</strong>{' '}
                for seamless token-driven styling on iOS, Android, and Expo.
              </p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-muted-foreground bg-muted/50 rounded px-2 py-1 font-mono text-xs">
                Expo SDK, React Native CLI
              </span>
              <Link
                to="/docs/installation"
                className="text-primary flex items-center gap-1 text-xs font-semibold hover:underline"
              >
                Native Setup <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          <div className="hover:bg-muted/20 flex flex-col justify-between space-y-4 rounded-xl border p-6 transition-colors">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <h3 className="text-xl font-bold">@gv-tech/ui-core</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The <strong>Universal Contract</strong> layer. It defines component contracts and prop interfaces,
                ensuring developers get a consistent API regardless of platform.
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
                The <strong>Visual Genome</strong> of the system. Contains raw HSL token values for colors, spacing, and
                typography, exporting Tailwind presets for both Web and Mobile.
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
              By implementing the same <code className="bg-muted rounded px-1.5 py-0.5">ui-core</code> contracts, we
              guarantee that switching between web and mobile development feels natural and predictable.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-bold">Token-First Styling</h4>
            <p className="text-muted-foreground text-sm">
              We don't hardcode colors. Every component is tied to our semantic HSL token system, enabling instant theme
              updates and perfect dark mode support out of the box.
            </p>
          </div>
        </div>
        <Alert variant="info" className="border-primary/20 bg-primary/5">
          <Info className="h-5 w-5" />
          <AlertTitle className="text-lg font-bold">Installation & Configuration</AlertTitle>
          <AlertDescription className="mt-2 text-base">
            Ready to integrate? Follow our step-by-step{' '}
            <strong>
              <Link to="/docs/installation" className="underline">
                Installation Guide
              </Link>
            </strong>{' '}
            for complete setup instructions including Tailwind content pathing, HSL global CSS variables, Metro, and
            TypeScript configuration.
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
            <span>Tailwind CSS 4.0 & NativeWind v5 Support</span>
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
            <span>Zero-runtime CSS variants & TypeScript ready</span>
          </div>
        </div>
      </section>
    </div>
  );
}
