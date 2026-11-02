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
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
}
```

### 3. Inject Base HSL Variables (`globals.css`)

```css
@layer base {
  :root {
    --background: 35 25% 88%;
    --foreground: 150 50% 22%;
    --card: 35 20% 94%;
    --card-foreground: 150 50% 22%;
    --popover: 35 20% 94%;
    --popover-foreground: 150 50% 22%;
    --primary: 150 50% 28%;
    --primary-foreground: 35 33% 97%;
    --secondary: 150 25% 40%;
    --secondary-foreground: 35 33% 97%;
    --muted: 35 15% 80%;
    --muted-foreground: 150 15% 32%;
    --accent: 35 18% 82%;
    --accent-foreground: 150 50% 22%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 35 33% 97%;
    --border: 35 15% 80%;
    --input: 35 15% 80%;
    --ring: 150 50% 28%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 30 15% 12%;
    --foreground: 35 20% 92%;
    --card: 30 12% 16%;
    --card-foreground: 35 20% 92%;
    --popover: 30 12% 16%;
    --popover-foreground: 35 20% 92%;
    --primary: 150 40% 55%;
    --primary-foreground: 150 45% 10%;
    --secondary: 150 30% 65%;
    --secondary-foreground: 150 45% 10%;
    --muted: 30 10% 22%;
    --muted-foreground: 35 12% 70%;
    --accent: 30 12% 18%;
    --accent-foreground: 35 20% 92%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 35 20% 92%;
    --border: 30 10% 22%;
    --input: 30 10% 22%;
    --ring: 150 40% 55%;
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
