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

## Features

- **CSS Variables**: Pre-generated `--background`, `--primary`, etc. ready for Tailwind v4.
- **Palette**: Raw color values used across the system.
- **Theme**: Semantic color tokens for light and dark modes.
- **Typography**: Responsive font sizes, weights, and line heights.
- **Spacing/Shadows**: Standardized layout and elevation tokens.

---

This is a sub-package of the [GV Tech Design System](https://github.com/Garcia-Ventures/gvtech-design).
