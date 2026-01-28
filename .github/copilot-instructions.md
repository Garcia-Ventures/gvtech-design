# GVTech Design System - AI Coding Guidelines

## Architecture Overview

This is a React component library built with TypeScript, styled-components, and Vite. It provides reusable UI components (Avatar, Badge, Button, Icon, Link) for Garcia Ventures applications.

**Key Structure:**

- `src/` - Components and shared utilities
- `src/shared/` - Design tokens (colors, typography, spacing), global styles, animations, icons
- Components follow a pattern: `{Component}.tsx` + `{Component}.stories.tsx` for Storybook docs

**Build System:**

- Vite library build outputs ES modules and CommonJS
- Externalizes React, styled-components, polished, prop-types
- Use `yarn build` for production builds

## Component Patterns

**Styling:** Use styled-components with design tokens from `src/shared/styles.js`

```tsx
import styled from 'styled-components';
import { color, typography } from './shared/styles';

const StyledComponent = styled.div`
  color: ${color.primary};
  font-size: ${typography.size.s2}px;
`;
```

**Props & Types:**

- Define interfaces in `src/types.ts` using branded types for safety
- Extend common HTML attributes: `interface ComponentProps extends HTMLAttributes<HTMLDivElement>`
- Use constants like `BUTTON_APPEARANCES`, `BUTTON_SIZES` from types

**Example Component Structure:**

```tsx
import React from 'react';
import styled from 'styled-components';
import { ComponentProps } from './types';

interface MyComponentProps extends ComponentProps {
  variant?: 'primary' | 'secondary';
}

const StyledDiv = styled.div<StyledDivProps>``;

export const MyComponent: React.FC<MyComponentProps> = ({ variant, ...props }) => (
  <StyledDiv variant={variant} {...props} />
);
```

## Development Workflow

- **Local dev:** `yarn storybook` (runs Storybook on port 9009)
- **Build lib:** `yarn build` (outputs to `dist/`)
- **Test:** `yarn test` (Vitest with jsdom, watch mode)
- **Lint:** `yarn lint` (ESLint with TypeScript, auto-fix with `yarn lint:fix`)
- **Format:** `yarn format` (Prettier)

**Testing Setup:**

- Uses `@testing-library/react` and `@testing-library/jest-dom`
- Auto-imports via `src/setupTests.ts`
- Run `yarn test:ci` for CI (non-interactive)

## Key Conventions

- **Imports:** Group external libs, then internal shared, then types
- **Naming:** PascalCase for components, camelCase for props
- **Styling:** Prefer design tokens over hardcoded values
- **Type Safety:** Use branded types (e.g., `IconName`, `CSSColor`) for runtime validation
- **Stories:** Write comprehensive Storybook stories with controls and interactions

**Shared Utilities:**

- `styles` - Colors, spacing, typography
- `global` - Global CSS resets
- `animation` - Easing functions, keyframes
- `icons` - Icon components and names

## Integration Points

- **Storybook:** Used for component development and documentation
- **Vite:** Handles build, dev server, and library bundling
- **ESLint + Prettier:** Code quality with custom configs
- **Husky:** Git hooks for pre-commit checks

Reference `src/Button.tsx` and `src/types.ts` for implementation examples.
