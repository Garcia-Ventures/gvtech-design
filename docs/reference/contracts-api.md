# Reference: Contracts API (`ui-core`)

Source of truth: `packages/ui-core/src/contracts/` (~70 files: `button.ts`, `input.ts`, `dialog.ts`, `calendar.ts`, …). Both `ui-web` and `ui-native` import from `@gv-tech/ui-core` — never redefine props per platform.

## Typical shape

```ts
// packages/ui-core/src/contracts/<name>.ts
import * as React from 'react';
export interface <Name>BaseProps {
  className?: string;
  children?: React.ReactNode;
  // variants, sizes, semantic props…
}
```

- Web extends with `React.ComponentPropsWithoutRef<'div'>` (or relevant element); native extends with RN-view props only where semantically equivalent.
- Barrel: `packages/ui-core/src/index.ts` re-exports each `*BaseProps`.

## Finding a contract

```bash
ls packages/ui-core/src/contracts/
rg "interface .*BaseProps" packages/ui-core/src/contracts/ < name > .ts
```

## Enforcement

- `bun run generate:contract-tests` regenerates parity tests from contracts.
- `bun run validate` runs them + typecheck across the Nx graph.
- Strict rule: contract change → update both impls + playground docs + divergence note in the same PR.

Start: [Contract-First Philosophy](../explanation/contract-first.md). Task: [Create a Component](../tutorials/03-create-component.md).
