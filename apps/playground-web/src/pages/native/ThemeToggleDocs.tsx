import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function ThemeToggleDocs() {
  return (
    <>
      <ComponentShowcase
        title="Binary Mode"
        description="The default mode allows toggling between light and dark themes."
        code={`<ThemeToggle variant="binary" />`}
      />

      <ComponentShowcase
        title="Ternary Mode"
        description="Ternary mode allows choosing between light, dark, and system themes using a dropdown menu."
        code={`<ThemeToggle variant="ternary" />`}
      />

      <ComponentShowcase
        title="Controlled Mode"
        description="You can control the theme externally by passing customTheme and onThemeChange props. This is useful for testing or when using a different theme provider."
        code={`const [theme, setTheme] = useState('light');

<ThemeToggle
  customTheme={theme}
  onThemeChange={setTheme}
/>

<p>Current Theme: {theme}</p>`}
      />

      {/* ThemeProvider Section */}
      <div className="mt-12 space-y-6">
        <div>
          <h3 className="text-xl font-semibold">ThemeProvider</h3>
          <p className="text-muted-foreground mt-2">
            The design system exports a pre-configured{' '}
            <code className="bg-muted rounded px-1.5 py-0.5 text-sm">ThemeProvider</code> that leverages{' '}
            <code className="bg-muted rounded px-1.5 py-0.5 text-sm">nativewind</code>'s color scheme management. It
            automatically applies the required CSS classes to the component tree to enable Tailwind's dark mode.
          </p>
        </div>

        <div className="bg-muted rounded-md border p-4">
          <pre className="text-xs">
            <code>
              {`import { ThemeProvider, ThemeToggle } from '@gv-tech/ui-native';

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
          <h4 className="text-foreground font-medium">Behaviors</h4>
          <p className="text-muted-foreground text-sm">
            The <code className="bg-muted rounded px-1.5 py-0.5 text-sm">ThemeProvider</code> in React Native performs
            these key functions:
          </p>
          <div className="rounded-md border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50 border-b">
                  <th className="p-3 text-left font-medium">Feature</th>
                  <th className="p-3 text-left font-medium">Implementation</th>
                  <th className="p-3 text-left font-medium">Benefit</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">
                    <code className="bg-muted rounded px-1 py-0.5 text-xs">Color Scheme</code>
                  </td>
                  <td className="p-3">
                    <code className="bg-muted rounded px-1 py-0.5 text-xs">useColorScheme()</code>
                  </td>
                  <td className="text-muted-foreground p-3">Reactive access to NativeWind's global theme state</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">
                    <code className="bg-muted rounded px-1 py-0.5 text-xs">Dark Class</code>
                  </td>
                  <td className="p-3">
                    <code className="bg-muted rounded px-1 py-0.5 text-xs">className="dark"</code>
                  </td>
                  <td className="text-muted-foreground p-3">Enables Tailwind's "dark:" variants for all children</td>
                </tr>
                <tr>
                  <td className="p-3">
                    <code className="bg-muted rounded px-1 py-0.5 text-xs">Flex Container</code>
                  </td>
                  <td className="p-3">
                    <code className="bg-muted rounded px-1 py-0.5 text-xs">flex: 1</code>
                  </td>
                  <td className="text-muted-foreground p-3">Ensures the provider fills the screen by default</td>
                </tr>
              </tbody>
            </table>
          </div>
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
              description: 'Additional Tailwind classes for the toggle button.',
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
            uses NativeWind's shared state to ensure theme changes are reflected instantly.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-muted/50 rounded-lg border p-6">
            <h4 className="text-foreground font-medium">With ThemeProvider (Recommended)</h4>
            <p className="text-muted-foreground mt-1 text-sm">
              Wrap your app with the design system's{' '}
              <code className="bg-muted rounded px-1 py-0.5 text-xs">ThemeProvider</code> and drop in the toggle.
            </p>
            <pre className="bg-background mt-4 overflow-x-auto rounded-md p-4 text-xs">
              <code>{`import { ThemeProvider, ThemeToggle } from '@gv-tech/ui-native';

<ThemeProvider>
  <ThemeToggle variant="ternary" />
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

        <div className="rounded-lg border border-blue-500/30 bg-blue-500/5 p-6">
          <h4 className="font-medium text-blue-600 dark:text-blue-400">💡 NativeWind Synergies</h4>
          <p className="text-muted-foreground mt-1 text-sm">
            The design system's <code className="bg-muted rounded px-1 py-0.5 text-xs">ThemeToggle</code> directly
            interacts with NativeWind's <code className="bg-muted rounded px-1 py-0.5 text-xs">setColorScheme</code>.
            This ensures that your own custom components using{' '}
            <code className="bg-muted rounded px-1 py-0.5 text-xs">dark:</code> classes will respond immediately to the
            toggle.
          </p>
        </div>
      </div>
    </>
  );
}
