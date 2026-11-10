---
name: tokens
description: Add or change design tokens in packages/design-tokens and regenerate theme.css and the Flutter token file.
---

# Design tokens

Edit only `packages/design-tokens/src/`. Components consume semantic tokens, not raw palette values.

- `palette.ts` — raw colors as `hsl(...)` channels.
- `theme.ts` — semantic names (`primary`, `background`, and the rest) for both light and dark.
- `spacing.ts`, `typography.ts`, `shadows.ts` — the other scales.

A new semantic color goes in both light and dark.

Regenerate. Do not hand-edit the outputs:

```bash
bun run sync-tokens
```

That rewrites:

- `packages/design-tokens/src/theme.css`
- `packages/ui-flutter/lib/src/tokens/gv_tokens.g.dart`

Check the result in the web playground (`bun run dev`) on the tokens page, in light and dark. `bun run validate` is the full gate.
