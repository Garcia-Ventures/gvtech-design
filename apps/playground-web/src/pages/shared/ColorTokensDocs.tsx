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
import { useEffect, useRef, useState } from 'react';

import { CodeBlock } from '@/components/docs/CodeBlock';
import { useDocMetadata } from '@/hooks/useDocMetadata';

type BrandColor = keyof typeof tokens.palette.brand;
type ThemeMode = keyof typeof tokens.theme;

type Swatch = {
  key: BrandColor;
  name: string;
  role: string;
};

type SurfaceSpec = {
  id: string;
  role: string;
  backgroundKey: keyof typeof tokens.theme.light;
  foregroundKey: keyof typeof tokens.theme.light;
};

const themeSurfaces: readonly SurfaceSpec[] = [
  {
    id: 'primary',
    role: 'Primary',
    backgroundKey: 'primary',
    foregroundKey: 'primaryForeground',
  },
  {
    id: 'secondary',
    role: 'Secondary',
    backgroundKey: 'secondary',
    foregroundKey: 'secondaryForeground',
  },
  {
    id: 'card',
    role: 'Card',
    backgroundKey: 'card',
    foregroundKey: 'cardForeground',
  },
  {
    id: 'accent',
    role: 'Accent',
    backgroundKey: 'accent',
    foregroundKey: 'accentForeground',
  },
  {
    id: 'muted',
    role: 'Muted',
    backgroundKey: 'muted',
    foregroundKey: 'mutedForeground',
  },
  {
    id: 'destructive',
    role: 'Destructive',
    backgroundKey: 'destructive',
    foregroundKey: 'destructiveForeground',
  },
];

const canvasTokens = ['background', 'foreground', 'mutedForeground', 'border'] as const;

function tokenLabel(key: string) {
  return key.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

function palettePath(value: string) {
  for (const [group, colors] of Object.entries(tokens.palette)) {
    for (const [name, color] of Object.entries(colors)) {
      if (color === value) {
        return `${group}.${name}`;
      }
    }
  }

  return value;
}

/** Dark-to-light brand greens that back primary, secondary, and foreground. */
const primaryRamp: readonly Swatch[] = [
  { key: 'inkDeep', name: 'Ink deep', role: 'Text on primary' },
  { key: 'ink', name: 'Ink', role: 'Foreground, light' },
  { key: 'green', name: 'Green', role: 'Primary, light' },
  { key: 'greenMuted', name: 'Green muted', role: 'Secondary, light' },
  { key: 'greenBright', name: 'Green bright', role: 'Primary, dark' },
  { key: 'greenSoft', name: 'Green soft', role: 'Secondary, dark' },
];

/** Paper colors and the retained blue accent, kept off the green ramp. */
const paletteCompanions: readonly Swatch[] = [
  { key: 'floralWhite', name: 'Floral white', role: 'Highlight' },
  { key: 'cream', name: 'Cream', role: 'Foreground, dark' },
  { key: 'blue', name: 'Blue', role: 'Accent' },
];

function ThemeBoard({
  mode,
  copiedKey,
  onCopy,
}: {
  mode: ThemeMode;
  copiedKey: string | null;
  onCopy: (key: string, value: string) => void;
}) {
  const theme = tokens.theme[mode];
  const sidebarMatches = theme.sidebar === theme.background;
  const sidebarNote = sidebarMatches
    ? 'Sidebar matches this background.'
    : `Sidebar is ${palettePath(theme.sidebar)}, set deeper than this background.`;

  return (
    <div
      className="@container overflow-hidden rounded-xl border"
      style={{
        backgroundColor: theme.background,
        borderColor: theme.border,
        color: theme.foreground,
      }}
    >
      <div className="space-y-1 px-4 py-3">
        <h3 className="text-sm font-semibold">{mode === 'light' ? 'Light' : 'Dark'}</h3>
        <p className="text-xs" style={{ color: theme.mutedForeground }}>
          {mode === 'light'
            ? 'White text on primary and secondary. Ink on the page, cards, and accent.'
            : 'Ink deep on primary and secondary. Cream on the page, cards, and accent.'}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-px" style={{ backgroundColor: theme.border }}>
        {themeSurfaces.map((surface) => {
          const background = theme[surface.backgroundKey];
          const foreground = theme[surface.foregroundKey];
          const copyKey = `${mode}.${surface.id}`;
          const copied = copiedKey === copyKey;
          const payload = `${tokenLabel(surface.backgroundKey)}: ${background}\n${tokenLabel(surface.foregroundKey)}: ${foreground}`;

          return (
            <button
              key={surface.id}
              type="button"
              onClick={() => onCopy(copyKey, payload)}
              data-track="copy_theme_pair"
              data-track-token={copyKey}
              aria-label={`Copy ${surface.role}. ${tokenLabel(surface.backgroundKey)} ${background}. ${tokenLabel(surface.foregroundKey)} ${foreground}.`}
              className="text-left focus-visible:relative focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ outlineColor: theme.ring }}
            >
              <span
                className="flex h-20 flex-col justify-end px-3 py-2"
                style={{ backgroundColor: background, color: foreground }}
              >
                <span className="text-sm font-medium">{surface.role}</span>
                <span className="text-xs">{palettePath(foreground)}</span>
              </span>
              <span className="block space-y-0.5 px-3 py-3" style={{ backgroundColor: theme.background }}>
                <span className="block text-xs" style={{ color: theme.mutedForeground }}>
                  {palettePath(background)}
                </span>
                <span
                  className="block font-mono text-[10px] whitespace-nowrap tabular-nums"
                  style={{ color: theme.mutedForeground }}
                  aria-live="polite"
                >
                  {copied ? 'Copied' : background}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="space-y-3 border-t px-4 py-3" style={{ borderColor: theme.border }}>
        <div className="space-y-1">
          <p className="text-sm">Body text uses the foreground color.</p>
          <p className="text-sm" style={{ color: theme.mutedForeground }}>
            Supporting text uses muted-foreground.
          </p>
        </div>
        <div className="grid gap-1">
          {canvasTokens.map((key) => {
            const value = theme[key];
            const copyKey = `${mode}.${key}`;
            const copied = copiedKey === copyKey;

            return (
              <button
                key={key}
                type="button"
                onClick={() => onCopy(copyKey, `${tokenLabel(key)}: ${value}`)}
                data-track="copy_theme_pair"
                data-track-token={copyKey}
                aria-label={`Copy ${tokenLabel(key)}, ${value}`}
                className="flex items-center justify-between gap-3 rounded-sm text-left focus-visible:outline-2 focus-visible:outline-offset-2"
                style={{ outlineColor: theme.ring }}
              >
                <span className="flex items-center gap-2">
                  <span
                    className="h-3 w-3 shrink-0 rounded-sm border"
                    style={{
                      backgroundColor: value,
                      borderColor: theme.border,
                    }}
                  />
                  <span
                    className="text-xs"
                    style={{
                      color: key === 'foreground' || key === 'mutedForeground' ? value : theme.foreground,
                    }}
                  >
                    {tokenLabel(key)}
                  </span>
                </span>
                <span className="font-mono text-[10px] whitespace-nowrap" style={{ color: theme.mutedForeground }}>
                  {copied ? 'Copied' : palettePath(value)}
                </span>
              </button>
            );
          })}
        </div>
        <p className="text-xs" style={{ color: theme.mutedForeground }}>
          {sidebarNote} Focus ring uses primary.
        </p>
      </div>
    </div>
  );
}

function PrimaryPalette() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const copyText = async (key: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      return;
    }

    setCopiedKey(key);
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setCopiedKey((current) => (current === key ? null : current));
    }, 1600);
  };

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold tracking-tight">Primary palette</h2>
          <p className="text-muted-foreground text-sm">
            Source colors for both themes. Select a swatch to copy its value.
          </p>
        </div>

        <div className="@container overflow-hidden rounded-xl border shadow-sm">
          <div className="bg-border grid grid-cols-2 gap-px @min-[40rem]:grid-cols-3 @min-[48rem]:grid-cols-6">
            {primaryRamp.map((swatch) => {
              const value = tokens.palette.brand[swatch.key];
              const copied = copiedKey === swatch.key;

              return (
                <button
                  key={swatch.key}
                  type="button"
                  onClick={() => copyText(swatch.key, tokens.palette.brand[swatch.key])}
                  data-track="copy_palette_swatch"
                  data-track-token={swatch.key}
                  aria-label={`Copy ${swatch.name}, ${value}`}
                  className="group focus-visible:ring-ring bg-background text-left focus-visible:relative focus-visible:z-10 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset"
                >
                  <span className="block h-20" style={{ backgroundColor: value }} />
                  <span className="group-hover:bg-muted/50 block space-y-0.5 px-3 py-3 transition-colors">
                    <span className="block text-sm font-medium">{swatch.name}</span>
                    <span className="text-muted-foreground block text-xs">{swatch.role}</span>
                    <span
                      className="text-muted-foreground block font-mono text-[10px] whitespace-nowrap tabular-nums"
                      aria-live="polite"
                    >
                      {copied ? 'Copied' : value}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 divide-y border-t @min-[40rem]:grid-cols-3 @min-[40rem]:divide-x @min-[40rem]:divide-y-0">
            {paletteCompanions.map((swatch) => {
              const value = tokens.palette.brand[swatch.key];
              const copied = copiedKey === swatch.key;

              return (
                <button
                  key={swatch.key}
                  type="button"
                  onClick={() => copyText(swatch.key, tokens.palette.brand[swatch.key])}
                  data-track="copy_palette_swatch"
                  data-track-token={swatch.key}
                  aria-label={`Copy ${swatch.name}, ${value}`}
                  className="group focus-visible:ring-ring hover:bg-muted/50 flex items-center gap-3 p-3 text-left transition-colors focus-visible:relative focus-visible:z-10 focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-inset"
                >
                  <span className="h-11 w-11 shrink-0 rounded-md border" style={{ backgroundColor: value }} />
                  <span className="min-w-0 space-y-0.5">
                    <span className="block text-sm font-medium">{swatch.name}</span>
                    <span className="text-muted-foreground block text-xs">{swatch.role}</span>
                    <span
                      className="text-muted-foreground block font-mono text-[10px] whitespace-nowrap tabular-nums"
                      aria-live="polite"
                    >
                      {copied ? 'Copied' : value}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold tracking-tight">Light and dark</h2>
          <p className="text-muted-foreground text-sm">
            Each surface is shown with the text color that sits on it. Select a sample to copy the pair.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <ThemeBoard mode="light" copiedKey={copiedKey} onCopy={copyText} />
          <ThemeBoard mode="dark" copiedKey={copiedKey} onCopy={copyText} />
        </div>
      </div>
    </section>
  );
}

export function ColorTokensDocs() {
  useDocMetadata({
    title: 'Theming',
    description: 'Master the GV Tech theming system, from design tokens to custom theme overrides.',
  });

  return (
    <div className="space-y-12 pb-10">
      <PrimaryPalette />

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
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">3. Downstream Theming Implementation</h2>
          <p className="text-muted-foreground">
            There are several approaches to implementing custom brand identities depending on your application's
            architecture and needs.
          </p>
        </div>

        <Tabs defaultValue="global" className="w-full">
          <TabsList className="h-auto w-full flex-wrap justify-start rounded-none border-b bg-transparent p-0">
            <TabsTrigger
              value="global"
              className="data-[state=active]:border-primary rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:bg-transparent"
            >
              Global CSS
            </TabsTrigger>
            <TabsTrigger
              value="scoped"
              className="data-[state=active]:border-primary rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:bg-transparent"
            >
              Scoped/Multi-Tenant
            </TabsTrigger>
            <TabsTrigger
              value="tailwind"
              className="data-[state=active]:border-primary rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:bg-transparent"
            >
              Tailwind Overrides
            </TabsTrigger>
            <TabsTrigger
              value="runtime"
              className="data-[state=active]:border-primary rounded-none border-b-2 border-transparent px-4 py-2 data-[state=active]:bg-transparent"
            >
              Runtime & Native
            </TabsTrigger>
          </TabsList>

          <TabsContent value="global" className="space-y-4 pt-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Global Variable Override (Recommended)</h3>
              <p className="text-muted-foreground text-sm">
                Redefine HSL values in your main <code className="bg-muted rounded px-1.5 py-0.5">globals.css</code>.
                This approach is highly dynamic and automatically inherited by both web and React Native components via
                NativeWind.
              </p>
            </div>
            <Card className="border-orange-500/20 bg-orange-500/5">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Info className="h-4 w-4 text-orange-500" />
                  Space-Separated HSL
                </CardTitle>
                <CardDescription>
                  Define variables without the `hsl()` wrapper or commas to allow Tailwind opacity modifiers to work
                  correctly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <CodeBlock
                  language="css"
                  code={`@import '@gv-tech/design-tokens/theme.css';
@import 'tailwindcss';

@layer base {
  :root {
    /* Main brand colors */
    --primary: 210 100% 50%;
    --primary-foreground: 0 0% 100%;
    --accent: 320 80% 60%;
    --accent-foreground: 0 0% 100%;
    --radius: 0.75rem;
  }
  
  .dark {
    --primary: 210 100% 70%;
    --primary-foreground: 222 47% 11%;
  }
}`}
                />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scoped" className="space-y-4 pt-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Nested Scopes (Multi-Tenant)</h3>
              <p className="text-muted-foreground text-sm">
                For platforms requiring multiple distinct brand identities (e.g. dashboards with different tenant
                themes), apply variable overrides to specific CSS classes instead of{' '}
                <code className="bg-muted rounded px-1.5 py-0.5">:root</code>.
              </p>
            </div>
            <CodeBlock
              language="css"
              code={`/* Define a custom brand scope in globals.css */
.theme-brand-gold {
  --primary: 43 96% 50%;
  --primary-foreground: 0 0% 0%;
}`}
            />
            <p className="text-muted-foreground pt-2 text-sm">
              Then wrap any React subtree with this class to instantly theme all components inside it:
            </p>
            <CodeBlock
              language="tsx"
              code={`export function TenantDashboard() {
  return (
    <div className="theme-brand-gold">
      <Button>I am Gold!</Button>
      <Card>
        <CardHeader>My background and accents follow the Gold theme</CardHeader>
      </Card>
    </div>
  );
}`}
            />
          </TabsContent>

          <TabsContent value="tailwind" className="space-y-4 pt-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Tailwind Mappings</h3>
              <p className="text-muted-foreground text-sm">
                If you prefer hardcoding hex values over runtime CSS variables, you can override the design system
                mapping entirely in your Tailwind setup.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <p className="text-sm font-medium">Tailwind v4 (CSS-First)</p>
                <CodeBlock
                  language="css"
                  code={`@theme {
  --color-primary: #ff0055;
  --color-primary-foreground: #ffffff;
}`}
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Tailwind v3 (JS Config)</p>
                <CodeBlock
                  language="javascript"
                  code={`const { preset } = require("@gv-tech/design-tokens");

module.exports = {
  presets: [preset],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff0055',
          foreground: '#ffffff',
        }
      }
    }
  }
};`}
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="runtime" className="space-y-4 pt-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Runtime Configuration</h3>
              <p className="text-muted-foreground text-sm">
                If you need to access the active theme's colors programmatically (e.g., drawing on canvas, passing color
                props to un-themed native components, or charting), utilize the provided{' '}
                <code className="bg-muted rounded px-1.5 py-0.5">useTheme</code> hook.
              </p>
            </div>
            <CodeBlock
              language="tsx"
              code={`// Web
import { useTheme } from '@gv-tech/ui-web';
// React Native
// import { useTheme } from '@gv-tech/ui-native';

export function ChartComponent() {
  const { tokens, resolvedTheme } = useTheme();

  return (
    <LineChart 
      lineColor={tokens.primary} 
      gridColor={tokens.border}
      isDark={resolvedTheme === 'dark'}
    />
  );
}`}
            />
          </TabsContent>
        </Tabs>
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
                          style={{
                            backgroundColor: tokens.theme.light[key] as string,
                          }}
                        />
                        <span className="font-mono text-[10px] tabular-nums">{tokens.theme.light[key]}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div
                          className="h-4 w-4 rounded-full border shadow-sm"
                          style={{
                            backgroundColor: tokens.theme.dark[key] as string,
                          }}
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
