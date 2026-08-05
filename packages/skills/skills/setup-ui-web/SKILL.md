---
name: setup-ui-web
description: Step-by-step setup guide for integrating @gv-tech/ui-web and Tailwind CSS v4 in web applications.
---

# Web Setup Skill (@gv-tech/ui-web)

Use this skill when installing and configuring `@gv-tech/ui-web` in Next.js, Vite, or React DOM applications.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install @gv-tech/ui-web @gv-tech/design-tokens lucide-react clsx tailwind-merge next-themes
```

### 2. Configure Tailwind CSS v4 (`globals.css`)

```css
@import 'tailwindcss';

/* Scan design system components for styles */
@source 'node_modules/@gv-tech/ui-web/dist/**/*.mjs';

@theme {
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);

  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
}
```

### 3. Inject Base HSL Variables (`globals.css`)

```css
@layer base {
  :root {
    --background: 0 0% 96%;
    --foreground: 222 47% 11%;
    --card: 0 0% 100%;
    --card-foreground: 222 47% 11%;
    --primary: 225 73% 57%;
    --primary-foreground: 0 0% 100%;
    --secondary: 93 28% 54%;
    --secondary-foreground: 0 0% 100%;
    --border: 0 0% 89%;
    --input: 0 0% 89%;
    --ring: 222 47% 11%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 0 0% 9%;
    --foreground: 0 0% 100%;
    --card: 0 0% 14%;
    --card-foreground: 0 0% 100%;
    --primary: 227 96% 71%;
    --primary-foreground: 0 0% 9%;
    --secondary: 96 44% 61%;
    --secondary-foreground: 0 0% 9%;
    --border: 0 0% 18%;
    --input: 0 0% 18%;
    --ring: 0 0% 90%;
  }
}
```

### 4. Root App Provider Setup

Wrap your layout with `<ThemeProvider>` from `@gv-tech/ui-web`:

```tsx
import { ThemeProvider } from '@gv-tech/ui-web';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
}
```
