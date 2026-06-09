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
            's color scheme management.
          </p>
        </div>

        <div className="bg-muted rounded-md border p-4">
          <pre className="text-xs">
            <code>
              {`import { ThemeProvider, ThemeToggle } from '@gv-tech/design-system';

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
      </div>

      {/* ThemeToggle Props Section */}
      <div className="mt-12 space-y-4">
        <h3 className="text-xl font-semibold">ThemeToggle Props</h3>
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
              name: 'onThemeChange',
              type: '(theme: string) => void',
              description: 'Optional callback for custom theme management logic.',
            },
          ]}
        />
      </div>
    </>
  );
}
