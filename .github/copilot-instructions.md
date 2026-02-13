# GVTech Design System - AI Coding Guidelines

## Architecture Overview

This is a React component library built with **TypeScript**, **Tailwind CSS**, and **Radix UI**, using **Vite** for development and bundling. It provides a comprehensive set of accessible UI components based on the shadcn/ui pattern.

**Key Structure:**

- `src/components/ui/` - Core UI components (primitive components)
- `src/lib/utils.ts` - Shared utilities (e.g., `cn` for Tailwind merging)
- `src/index.ts` - Library entry point exporting public components
- `src/App.tsx` - Playground application used for development and documentation

**Build System:**

- Vite library build outputs ES modules and CommonJS.
- Externalizes **React** and **React DOM**.
- Use `yarn build` to build both the library and the component registry.
- Use `yarn build:site` to build the playground/documentation site.

## Component Patterns

**Styling:** Use **Tailwind CSS** utility classes. For complex conditional classes, use the `cn()` utility.

```tsx
import { cn } from '@/lib/utils';

export function MyComponent({ className, ...props }) {
  return <div className={cn('bg-background text-foreground p-4', className)} {...props} />;
}
```

**Props & Types:**

- Use TypeScript `interface` or `type` for component props.
- Extend standard HTML attributes where appropriate (e.g., `React.ButtonHTMLAttributes<HTMLButtonElement>`).
- Use `React.forwardRef` for components that need to expose their underlying DOM element.

## Development Workflow

- **Local dev:** `yarn dev` (runs the Vite playground site)
- **Build lib:** `yarn build` (outputs to `dist/` and `public/registry/`)
- **Build site:** `yarn build:site` (outputs to `dist-site/`)
- **Test:** `yarn test` (Vitest with jsdom)
- **Lint:** `yarn lint` (ESLint)
- **Format:** `yarn format` (Prettier)

**Testing Setup:**

- Uses `@testing-library/react` and `@testing-library/jest-dom`.
- Tests are co-located with components: `{component}.test.tsx`.
- Run `yarn test:ci` for CI environments.

## Integration Points

- **Vite:** Handles development, site building, and library bundling.
- **Cloudflare Pages:** Primary deployment target for the playground site: [https://gvtech-design.pages.dev/](https://gvtech-design.pages.dev/) (configured via `wrangler.toml`).
- **ESLint + Prettier:** Code quality and formatting.
- **Husky:** Git hooks for pre-commit checks.

Reference existing components in `src/components/ui/` for implementation patterns.
