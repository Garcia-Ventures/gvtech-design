import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { ThemeToggle } from '@gv-tech/ui-web';
import { useState } from 'react';

export function ThemeToggleDocs() {
  const [binaryTheme, setBinaryTheme] = useState('light');
  const [ternaryTheme, setTernaryTheme] = useState('system');
  const [customTheme, setCustomTheme] = useState('light');

  return (
    <>
      <ComponentShowcase
        title="Binary Mode"
        description="The default mode allows toggling between light and dark themes. (Controlled example shown to prevent site theme changes)"
        code={`<ThemeToggle variant="binary" />`}
      >
        <ThemeToggle variant="binary" customTheme={binaryTheme} onThemeChange={setBinaryTheme} />
      </ComponentShowcase>

      <ComponentShowcase
        title="Ternary Mode"
        description="Ternary mode allows choosing between light, dark, and system themes using a dropdown menu. (Controlled example shown to prevent site theme changes)"
        code={`<ThemeToggle variant="ternary" />`}
      >
        <ThemeToggle variant="ternary" customTheme={ternaryTheme} onThemeChange={setTernaryTheme} />
      </ComponentShowcase>

      <ComponentShowcase
        title="Controlled Mode"
        description="You can control the theme externally by passing customTheme and onThemeChange props. This is useful for testing or when using a different theme provider."
        code={`const [theme, setTheme] = useState('light');

<ThemeToggle
  customTheme={theme}
  onThemeChange={setTheme}
/>

<p>Current Theme: {theme}</p>`}
      >
        <div className="flex flex-col items-center gap-4">
          <ThemeToggle customTheme={customTheme} onThemeChange={setCustomTheme} />
          <p className="text-sm font-medium">Current Selection: {customTheme}</p>
        </div>
      </ComponentShowcase>

      {/* ThemeProvider Section */}
      <div className="mt-12 space-y-6">
        <div>
          <h3 className="text-xl font-semibold">ThemeProvider</h3>
          <p className="text-muted-foreground mt-2">
            The design system exports a pre-configured{' '}
            <code className="bg-muted rounded px-1.5 py-0.5 text-sm">ThemeProvider</code> that wraps{' '}
            <code className="bg-muted rounded px-1.5 py-0.5 text-sm">next-themes</code> with sensible defaults. Wrap
            your application with it to enable theme switching for all design system components.
          </p>
        </div>

        <div className="bg-muted rounded-md border p-4">
          <pre className="text-xs">
            <code>
              {`import { ThemeProvider, ThemeToggle } from '@gv-tech/design-system';
import '@gv-tech/design-system/style.css';

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle variant="ternary" />
      {/* Your app content */}
    </ThemeProvider>
  );
}`}
            </code>
          </pre>
        </div>

        <div className="space-y-4">
          <h4 className="text-foreground font-medium">Defaults</h4>
          <p className="text-muted-foreground text-sm">
            Out of the box, <code className="bg-muted rounded px-1.5 py-0.5 text-sm">ThemeProvider</code> applies these
            defaults. You can override any of them by passing the corresponding prop.
          </p>
          <div className="rounded-md border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b">
                  <th className="p-3 text-left font-medium">Prop</th>
                  <th className="p-3 text-left font-medium">Default</th>
                  <th className="p-3 text-left font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">
                    <code className="bg-muted rounded px-1 py-0.5 text-xs">attribute</code>
                  </td>
                  <td className="p-3">
                    <code className="bg-muted rounded px-1 py-0.5 text-xs">"class"</code>
                  </td>
                  <td className="text-muted-foreground p-3">Applies the theme as a CSS class on the HTML element</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">
                    <code className="bg-muted rounded px-1 py-0.5 text-xs">defaultTheme</code>
                  </td>
                  <td className="p-3">
                    <code className="bg-muted rounded px-1 py-0.5 text-xs">"system"</code>
                  </td>
                  <td className="text-muted-foreground p-3">Respects the user's operating system preference</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <code className="bg-muted rounded px-1 py-0.5 text-xs">enableSystem</code>
                  </td>
                  <td className="p-3">
                    <code className="bg-muted rounded px-1 py-0.5 text-xs">true</code>
                  </td>
                  <td className="text-muted-foreground p-3">Enables automatic detection of the OS color scheme</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-muted rounded-md border p-4">
          <p className="text-muted-foreground mb-2 text-xs font-medium">Overriding defaults:</p>
          <pre className="text-xs">
            <code>
              {`<ThemeProvider
  defaultTheme="dark"
  storageKey="my-app-theme"
  themes={['light', 'dark', 'ocean']}
>
  <App />
</ThemeProvider>`}
            </code>
          </pre>
        </div>
      </div>

      {/* useTheme Section */}
      <div className="mt-12 space-y-4">
        <h3 className="text-xl font-semibold">useTheme Hook</h3>
        <p className="text-muted-foreground text-sm">
          The <code className="bg-muted rounded px-1.5 py-0.5 text-sm">useTheme</code> hook provides access to the
          current theme, theme controls, and the active design tokens. It must be used within a{' '}
          <code className="bg-muted rounded px-1.5 py-0.5 text-sm">ThemeProvider</code>.
        </p>
        <div className="bg-muted rounded-md border p-4">
          <pre className="text-xs">
            <code>
              {`import { useTheme } from '@gv-tech/design-system';

export function MyComponent() {
  const { theme, setTheme, resolvedTheme, tokens } = useTheme();

  return (
    <div style={{ backgroundColor: tokens.background }}>
      <p>Current theme: {theme}</p>
      <p>Resolved theme: {resolvedTheme}</p>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  );
}`}
            </code>
          </pre>
        </div>

        <PropsTable
          props={[
            {
              name: 'theme',
              type: 'string',
              required: false,
              description: 'The current theme name ("light", "dark", or "system").',
            },
            {
              name: 'setTheme',
              type: '(theme: string) => void',
              required: false,
              description: 'Function to programmatically change the theme.',
            },
            {
              name: 'resolvedTheme',
              type: 'string',
              required: false,
              description:
                'The resolved theme ("light" or "dark"). Useful when theme is "system" and you need the actual value.',
            },
            {
              name: 'tokens',
              type: 'ThemeTokens',
              required: false,
              description:
                'The active color tokens for the current resolved theme (light or dark). Contains background, foreground, primary, and other design token values.',
            },
          ]}
        />
      </div>

      {/* ThemeToggle Props Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">ThemeToggle Props</h3>
        <PropsTable
          props={[
            {
              name: 'variant',
              type: '"binary" | "ternary"',
              defaultValue: '"binary"',
              required: false,
              description:
                "The toggle behavior. 'binary' switches between light/dark, while 'ternary' includes system.",
            },
            {
              name: 'onThemeChange',
              type: '(theme: string) => void',
              required: false,
              description: 'Optional callback for custom theme management logic.',
            },
            {
              name: 'customTheme',
              type: 'string',
              required: false,
              description: 'Overrides the internal theme detection (useful for previews or external control).',
            },
            {
              name: 'className',
              type: 'string',
              required: false,
              description: 'Additional CSS classes for the toggle button.',
            },
          ]}
        />
      </div>

      {/* Integration Section */}
      <div className="mt-12 space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Integration</h3>
          <p className="text-muted-foreground mt-2">
            The <code className="bg-muted rounded px-1.5 py-0.5 text-sm">ThemeToggle</code> component works seamlessly
            with the design system's <code className="bg-muted rounded px-1.5 py-0.5 text-sm">ThemeProvider</code>. It
            can also be used in a fully controlled manner with any theme provider or custom state.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-muted/50 rounded-lg border p-6">
            <h4 className="text-foreground font-medium">With ThemeProvider (Recommended)</h4>
            <p className="text-muted-foreground mt-1 text-sm">
              Wrap your app with the design system's{' '}
              <code className="bg-muted rounded px-1 py-0.5 text-xs">ThemeProvider</code> and drop in the toggle.
              Everything connects automatically.
            </p>
            <pre className="bg-background mt-4 overflow-x-auto rounded-md p-4 text-xs">
              <code>{`import { ThemeProvider, ThemeToggle } from '@gv-tech/design-system';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isNative = false as boolean;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const platform = 'web' as string;


<ThemeProvider>
  <ThemeToggle />
</ThemeProvider>`}</code>
            </pre>
          </div>

          <div className="bg-muted/50 rounded-lg border p-6">
            <h4 className="text-foreground font-medium">Controlled / Custom State</h4>
            <p className="text-muted-foreground mt-1 text-sm">
              Pass your own theme state and change handler to integrate with custom logic or external storage.
            </p>
            <pre className="bg-background mt-4 overflow-x-auto rounded-md p-4 text-xs">
              <code>{`const [theme, setTheme] = useState("light")

<ThemeToggle 
  customTheme={theme} 
  onThemeChange={setTheme} 
/>`}</code>
            </pre>
          </div>
        </div>

        <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 p-6">
          <h4 className="font-medium text-amber-600 dark:text-amber-400">⚠️ Important: Shared Context</h4>
          <p className="text-muted-foreground mt-1 text-sm">
            The design system marks <code className="bg-muted rounded px-1 py-0.5 text-xs">next-themes</code> as a{' '}
            <strong>peer dependency</strong>, meaning it uses the same instance as your project. This ensures that{' '}
            <code className="bg-muted rounded px-1 py-0.5 text-xs">useTheme</code>,{' '}
            <code className="bg-muted rounded px-1 py-0.5 text-xs">ThemeToggle</code>, and your own components all share
            the same theme context — no duplicate providers needed.
          </p>
        </div>
      </div>
    </>
  );
}
