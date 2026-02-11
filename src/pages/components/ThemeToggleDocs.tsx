import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
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
        title="Custom State Integration"
        description="You can control the theme externally by passing customTheme and onThemeChange props."
        code={`const [theme, setTheme] = useState('light');

<ThemeToggle
  customTheme={theme}
  onThemeChange={(newTheme) => setTheme(newTheme)}
/>

<p>Current Theme: {theme}</p>`}
      >
        <div className="flex flex-col items-center gap-4">
          <ThemeToggle customTheme={customTheme} onThemeChange={(newTheme) => setCustomTheme(newTheme)} />
          <p className="text-sm font-medium">Current Selection: {customTheme}</p>
        </div>
      </ComponentShowcase>
    </ComponentSection>
  );
}
