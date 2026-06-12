import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function ThemeToggleDocs() {
  return (
    <>
      <ComponentShowcase
        title="Binary Mode"
        description="The default mode allows toggling between light and dark themes on Native."
        code={`import { ThemeToggle } from "@gv-tech/design-system";

export function ThemeExample() {
  return <ThemeToggle variant="binary" />;
}`}
      />

      <ComponentShowcase
        title="Ternary Mode"
        description="Ternary mode allows choosing between light, dark, and system themes."
        code={`import { ThemeToggle } from "@gv-tech/design-system";

export function ThemeTernary() {
  return <ThemeToggle variant="ternary" />;
}`}
      />

      {/* ThemeProvider Section */}
      <div className="mt-12 space-y-6">
        <div>
          <h3 className="text-xl font-semibold">ThemeProvider</h3>
          <p className="text-muted-foreground mt-2">
            The design system exports a pre-configured <code>ThemeProvider</code> that leverages <code>nativewind</code>
            's styling and coordinates the active theme state via React Context. By default, it follows the system
            appearance, but you can pass an explicit <code>value</code> override to manually control it (e.g. from an
            app-level store or user setting).
          </p>
        </div>

        <div className="bg-muted rounded-md border p-4">
          <pre className="text-xs">
            <code>
              {`import { ThemeProvider, ThemeToggle } from '@gv-tech/ui-native';
import { useColorScheme } from '@/hooks/use-color-scheme'; // Your Zustand or state-aware hook

function App() {
  const colorScheme = useColorScheme(); // Returns 'light' | 'dark'

  return (
    <ThemeProvider value={colorScheme}>
      <ThemeToggle variant="ternary" />
      {/* Your app content */}
    </ThemeProvider>
  );
}`}
            </code>
          </pre>
        </div>
      </div>

      {/* ThemeToggle Props Section */}
      <div className="mt-12 space-y-4">
        <h3 className="text-xl font-semibold">ThemeProvider & ThemeToggle Props</h3>

        <h4 className="text-md mt-4 font-semibold">ThemeProvider Props</h4>
        <PropsTable
          props={[
            {
              name: 'value',
              type: '"light" | "dark" | "system"',
              defaultValue: '"system"',
              description:
                'Allows explicitly overriding the system color scheme (useful when saving user theme selection in a global store).',
            },
          ]}
        />

        <h4 className="text-md mt-6 font-semibold">ThemeToggle Props</h4>
        <PropsTable
          props={[
            {
              name: 'variant',
              type: '"binary" | "ternary"',
              defaultValue: '"binary"',
              description:
                "The toggle behavior. 'binary' switches between light/dark, while 'ternary' includes system.",
            },
            {
              name: 'customTheme',
              type: '"light" | "dark" | "system"',
              description:
                'Pass the current active custom theme state from your app store to synchronize the toggle state.',
            },
            {
              name: 'onThemeChange',
              type: '(theme: "light" | "dark" | "system") => void',
              description: 'Optional callback for custom theme management logic.',
            },
          ]}
        />
      </div>
    </>
  );
}
