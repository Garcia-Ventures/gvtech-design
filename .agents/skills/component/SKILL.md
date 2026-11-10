---
name: component
description: Create or update a GV Tech design-system component across ui-core, ui-web, and ui-native, including shadcn intake, playground docs, and the registry.
---

# Component

Use this when adding or changing a component in this repo. Contracts live in `packages/ui-core`. Platforms implement them. They do not invent their own props, variants, or sizes.

## Create

From the repo root:

```bash
bun run generate:component <Name> [--category <category>]
```

The default category is `Data Display`. The script scaffolds:

- `packages/ui-core/src/contracts/<kebab>.ts` and the export in `packages/ui-core/src/index.ts`
- `packages/ui-web/src/<kebab>.tsx` and `packages/ui-native/src/<kebab>.tsx`, plus their `index.ts` exports
- Playground pages under `apps/playground-web/src/pages/web` and `pages/native`
- A route in `apps/playground-web/src/routes/doc-routes.tsx`
- A nav item in `apps/playground-web/src/config/docs.ts` when the category exists

The web scaffold still imports `cn` from `./lib/utils`. Change that to `import { cn } from 'cn'`. Sibling web components use `@/./<name>` (see `packages/ui-web/components.json`). Do not rewrite those imports to relative paths. `shadcn:update` emits them, and the published `.d.ts` rewrites them.

Native keeps `import { cn } from './lib/utils'`. Map web-only props: `onClick` → `onPress`, `onChange` → `onChangeText`, `htmlFor` → `nativeID`. CSS animation becomes Reanimated.

Leave these unimplemented on native and record that in `docs/reference/parity-matrix.md`: Chart, Command, Resizable, Scroll Area, Sonner. Native stand-ins are Toast, ScrollView, and Sheet.

## Pull from shadcn

Update everything already vendored:

```bash
bun run shadcn:update
```

Add or refresh one component from `packages/ui-web`:

```bash
cd packages/ui-web && bunx shadcn@latest add <name> --overwrite --yes
```

Then:

1. Move custom props (variants, flags) into `packages/ui-core/src/contracts/<kebab>.ts` as `<Name>BaseProps`. Leave HTML and React element props on the platform component. Export the contract from `packages/ui-core/src/index.ts`.
2. Type the web component as the React element props plus `<Name>BaseProps`. Keep `cn` from `cn` and `@/./<name>` sibling imports.
3. Implement or shim the same contract in `packages/ui-native`. Export it from that package's `index.ts`.
4. If the generator did not run, add the playground pages and register them in `doc-routes.tsx` and `docs.ts`.

## Playground UI

Screens in `apps/playground-web` should use `@gv-tech/ui-web` for chrome (tabs, breadcrumbs, alerts, badges) instead of one-off markup. Wire those components to the page's real state.

## Finish

```bash
bun run build:registry
bun run generate:contract-tests
bun run validate
```

Update these together: `docs/reference/component-registry.md`, `parity-matrix.md`, `divergence-registry.md`.
