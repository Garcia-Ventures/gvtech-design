# Reference: What an overwrite must keep

Check every `shadcn add --overwrite` diff against this list before committing. Procedure: [Intake a shadcn component](../how-to/intake-shadcn.md). Why: [Shadcn intake](../explanation/shadcn-intake.md).

## In each updated component

| Keep                 | Restore it when the diff removes it                                                                                                                                                                                                     |
| :------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contract import      | `import type { <Name>BaseProps } from '@gv-tech/ui-core'`, and the props type intersects `<Name>BaseProps`                                                                                                                              |
| Class merger         | `import { cn } from 'cn'`. The CLI alias in `components.json` points `utils` at `@/lib/utils`. Source files still import the `cn` package. `packages/ui-web/src/lib/utils.ts` stays for `slugify` and local callers such as Support FAB |
| Sibling imports      | `@/./<name>`, matching `packages/ui-web/components.json`. The published `.d.ts` rewrites these. The library build externalizes dependencies in `packages/ui-web/vite.config.ts`                                                         |
| Semantic color       | `bg-primary`, `text-foreground`, `border-border`, and the rest of the token utilities. A new raw palette class is a review item, not an automatic accept                                                                                |
| Slot parameter names | `className`, `props`, `open`, `api`, `config`, `toast` on upstream callbacks. Do not rename them                                                                                                                                        |

`packages/ui-web/components.json` stays `style: radix-nova`, `rsc: false`, `rtl: true`, aliases `components` and `ui` at `@/.`, `utils` at `@/lib/utils`, `hooks` at `@/hooks`, `iconLibrary: lucide`.

## Files the default registry does not own

These are ours. If the diff deletes one, restore it.

- `support-fab.tsx` (relative imports and `./lib/utils` on purpose)
- `scroll-to-top.tsx`
- `table-of-contents.tsx`
- `search.tsx`
- `text.tsx`
- `direction.tsx`
- `theme-provider.tsx`
- `theme-toggle.tsx`

Messaging files may update when they match an upstream component: `attachment.tsx`, `bubble.tsx`, `marker.tsx`, `message.tsx`, `message-scroller.tsx`, `questionnaire.tsx`. Their contract imports still have to be in the diff when it settles.

Tests, `index.ts` exports, and playground pages are ours. An overwrite that drops an export or a test needs that export or test back unless the component itself left the public API in this pull request.

## Lint exceptions for upstream callbacks

`oxlint.config.mts` is the source of truth. `react/no-unstable-nested-components` uses `allowAsProps: true`. `eslint/no-shadow` is off for:

- `packages/ui-web/src/calendar.tsx`
- `packages/ui-web/src/carousel.tsx`
- `packages/ui-web/src/chart.tsx`
- `packages/ui-web/src/hooks/use-toast.ts`
- `packages/ui-web/src/sidebar.tsx`
- `packages/ui-web/src/toaster.tsx`
- `packages/ui-native/src/hooks/use-toast.ts`

Add a file here and in that override only when an intake diff shows the same callback-parameter shadow. `no-console`, iframe sandbox, and extra effect dependencies are not on this list.
