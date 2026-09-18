# Tutorial: Create a Component (Contract-First)

> Learning-oriented. Scaffold `Stat` end-to-end: contract → web → native → docs → registry.

## 1. Scaffold

```bash
bun run generate:component Stat --category "Data Display"
# script: scripts/generate-component.ts
```

This creates (skips existing):

- `packages/ui-core/src/contracts/stat.ts` — `StatBaseProps`
- `packages/ui-web/src/stat.tsx` — Radix/Tailwind impl
- `packages/ui-native/src/stat.tsx` — RN + NativeWind impl
- `apps/playground-web/src/pages/web/StatDocs.tsx`
- `apps/playground-web/src/pages/native/StatDocs.tsx`

And appends exports to `packages/*/src/index.ts`, playground `pages/*/index.ts`, `routes/doc-routes.tsx`, `config/docs.ts`.

## 2. Define the contract first

Edit `packages/ui-core/src/contracts/stat.ts`:

```ts
// Stat component contract.
import * as React from 'react';

export interface StatBaseProps {
  className?: string;
  children?: React.ReactNode;
  value: string;
  label: string;
}
```

Rules (see [Contract-First](../explanation/contract-first.md)):

- Names, props, variants, sizes live here — not in platform files.
- No token forks — import from `@gv-tech/design-tokens`.
- Document divergence intent if native UX must differ (e.g. Dialog → modal).

## 3. Implement web + native against the contract

Web (`packages/ui-web/src/stat.tsx`):

```tsx
import type { StatBaseProps } from '@gv-tech/ui-core';
export interface StatProps extends StatBaseProps, React.ComponentPropsWithoutRef<'div'> {}
```

Native (`packages/ui-native/src/stat.tsx`):

```tsx
import { View, Text } from 'react-native';
import type { StatBaseProps } from '@gv-tech/ui-core';
export interface StatProps extends StatBaseProps {}
```

Prefer `@rn-primitives/*` when one exists; otherwise `View`/`Text`/`Pressable`/`TextInput` + Reanimated. See [Add Native Primitive](../how-to/add-native-primitive.md).

## 4. Wire playground docs

Fill in `StatDocs.tsx` (web + native) with `ComponentShowcase` + `PropsTable` examples. Confirm route appears in `doc-routes.tsx` under `path: 'stat'`.

Run:

```bash
bun run dev
# check Web tab + Native tab for Stat
```

Add diff notes to [Divergence Registry](../reference/divergence-registry.md) if behavior differs.

## 5. Validate

```bash
bun run build:registry
bun run generate:contract-tests
bun run validate
```

Then open a PR with Conventional Commits (`feat(stat): …`). CI runs lint + typecheck + vitest + Nx build graph.

## Checklist (copy into PR)

- [ ] Contract matches web + native props/variants/sizes
- [ ] Both impls import from `@gv-tech/ui-core` + `@gv-tech/design-tokens`
- [ ] Web + native tests passing (`bun run test`)
- [ ] Playground tabs wired, divergence noted
- [ ] `bun run build:registry` re-run

Reference: [CLI Scripts](../reference/cli-scripts.md).
