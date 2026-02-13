import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useState } from 'react';

export function ThemeToggleDocs() {
  const [binaryTheme, setBinaryTheme] = useState('light');
  const [ternaryTheme, setTernaryTheme] = useState('system');
  const [customTheme, setCustomTheme] = useState('light');

  return (
    <ComponentSection
      title="Theme Toggle"
      description="A component that allows users to switch between light, dark, and system themes."
    >
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

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">useTheme Hook</h3>
        <p className="text-sm text-muted-foreground">
          The `useTheme` hook provides access to the current theme and the active design tokens.
        </p>
        <div className="rounded-md border bg-muted p-4">
          <pre className="text-xs">
            <code>
              {`import { useTheme } from '@gv-tech/design-system';

export function MyComponent() {
  const { theme, setTheme, tokens } = useTheme();

  return (
    <div style={{ backgroundColor: tokens.background }}>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div>
  );
}`}
            </code>
          </pre>
        </div>
      </div>

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

      <div className="mt-12 space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Integration</h3>
          <p className="mt-2 text-muted-foreground">
            The `ThemeToggle` component is built to be flexible and works seamlessly with `next-themes` by default, but
            it can also be used in a fully controlled manner with any theme provider or custom state.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-muted/50 p-6">
            <h4 className="font-medium text-foreground">With next-themes</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Simply drop the component anywhere. It will automatically detect the `ThemeProvider` and handle switching.
            </p>
            <pre className="mt-4 overflow-x-auto rounded-md bg-background p-4 text-xs">
              <code>{`<ThemeProvider attribute="class">
  <ThemeToggle />
</ThemeProvider>`}</code>
            </pre>
          </div>

          <div className="rounded-lg border bg-muted/50 p-6">
            <h4 className="font-medium text-foreground">Controlled / Custom State</h4>
            <p className="mt-1 text-sm text-muted-foreground">
              Pass your own theme state and change handler to integrate with custom logic or external storage.
            </p>
            <pre className="mt-4 overflow-x-auto rounded-md bg-background p-4 text-xs">
              <code>{`const [theme, setTheme] = useState("light")

<ThemeToggle 
  customTheme={theme} 
  onThemeChange={setTheme} 
/>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </ComponentSection>
  );
}
