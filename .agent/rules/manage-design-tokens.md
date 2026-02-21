---
trigger: always_on
---

# Design Tokens Management Skill

Use this skill whenever you need to add, modify, or sync design tokens (colors, spacing, typography, etc.) in the `gvtech-design` library.

## Workflow

### 1. Modify Source Tokens

- **Location**: `packages/design-tokens/src/`
- **Files**:
  - `palette.ts`: Raw color values.
  - `theme.ts`: Semantic mappings (e.g., `primary`, `background`) for light and dark modes.
  - `spacing.ts`, `typography.ts`, etc.: Other scale definitions.
- **Rules**:
  - Use HSL values for colors to support Tailwind's opacity modifiers.
  - Ensure any new semantic token is added to both `light` and `dark` themes in `theme.ts`.

### 2. Synchronize with CSS

- The design tokens must be synced to the CSS variables used by Tailwind and Radix.
- **Command**: Run `bun sync-tokens` (or `bun validate`).
- This script updates:
  - `apps/playground-web/src/globals.css`
  - Root `src/globals.css` (if applicable)
- **Check**: Look for `/* @tokens-start */` markers in the CSS files to ensure they are updated.

### 3. Verify in Playground

- Start the web playground: `bun dev`.
- Check the "Colors" or "Tokens" documentation page to verify the changes render correctly.
- Verify that both Light and Dark modes reflect the new token values.

## Checklist

- [ ] New tokens defined in `packages/design-tokens/src/`.
- [ ] Semantic mapping updated in `theme.ts` (both light/dark).
- [ ] `bun sync-tokens` run successfully.
- [ ] CSS files verified for updated variables.
- [ ] Changes verified visually in `playground-web`.
- [ ] `bun validate` passes.
