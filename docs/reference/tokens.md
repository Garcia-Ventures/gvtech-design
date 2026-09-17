# Reference: Design Tokens

Source: `packages/design-tokens/src/` — `palette.ts` (primitives), `theme.ts` (light/dark semantic), `spacing.ts`, `typography.ts`, `shadows.ts`, `index.ts` (barrel). Generated: `src/theme.css` (web) + `packages/ui-flutter/lib/src/tokens/gv_tokens.g.dart` (Flutter).

## Key files

| File                                          | Contains                                                           |
| :-------------------------------------------- | :----------------------------------------------------------------- |
| `palette.ts`                                  | Raw brand color values                                             |
| `theme.ts`                                    | `theme.light` / `theme.dark` semantic mappings (+ `radius`)        |
| `spacing.ts` / `typography.ts` / `shadows.ts` | Scale, fonts, elevation                                            |
| `theme.css`                                   | Generated `@theme` + `:root` / `.dark` CSS vars — do not hand-edit |

## CSS variable shape (generated)

- `@theme { --color-<name>: hsl(var(--<name>)); … }`
- `:root { --background: …; --color-background: hsl(…); … }` + brand `--<palette>-<key>`
- `.dark { … }` overrides

## Commands

```bash
bun run sync-tokens # scripts/sync-tokens.ts → theme.css + gv_tokens.g.dart
```

Rules: no per-platform token forks without approval; edit TS sources then regenerate; import `theme.css` before `tailwindcss` in web apps. How-to: [Use Tokens](../how-to/use-tokens-tailwind-v4.md).
