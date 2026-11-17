# @gv-tech/design-tokens

Shared design tokens for the GV Tech design system, including palette, theme, spacing, typography, and shadows.

## Installation

```bash
bun add @gv-tech/design-tokens
```

## Setup (Tailwind v4)

To use these design tokens in your project, you must import the generated CSS file into your global stylesheet. This file contains all the necessary CSS variables and `@theme` mappings for Tailwind CSS v4.

```css
/* src/globals.css */
@import '@gv-tech/design-tokens/theme.css';
@import 'tailwindcss';
```

_(Note: Ensure you import the design tokens **before** `tailwindcss` so that the variables are available to the theme)_

## Setup (NativeWind)

React Native does not use `theme.css`. That file carries shadcn variants for the web. Import `native.css` instead. It has the NativeWind `@theme` color map, light `:root` values, and a `prefers-color-scheme: dark` override. The steps live in [Set up React Native](../../docs/how-to/setup-react-native.md).

```css
@import '@gv-tech/design-tokens/native.css';
```

```js
const { inlineVariables } = require('@gv-tech/design-tokens/native-preset');
```

Pass `inlineVariables` to `withNativeWind`. Otherwise Metro inlines the light color and the dark media query never runs.

`bun run sync-tokens` rewrites `theme.css`, `native.css`, and `native-preset.cjs` from `palette.ts` and `theme.ts`. Do not hand-edit those files.

## Features

- **CSS Variables**: Pre-generated `--background`, `--primary`, etc. ready for Tailwind v4.
- **Palette**: Raw color values used across the system.
- **Theme**: Semantic color tokens for light and dark modes.
- **Typography**: Responsive font sizes, weights, and line heights.
- **Spacing/Shadows**: Standardized layout and elevation tokens.

---

This is a sub-package of the [GV Tech Design System](https://github.com/Garcia-Ventures/gvtech-design).
