# How-to: Update the Component Registry

Task: keep `reference/component-registry.md` and the shadcn JSON in sync after adding/changing a component.

## Steps

```bash
bun run build:registry
# script: scripts/build-registry.ts
# → apps/playground-web/public/registry/*.json (+ native/)
# → packages/ui-web/registry.json + packages/ui-native/registry.json
```

Then update `docs/reference/component-registry.md`:

- Flip ✅ / ⏳ for Web / Native / Tests columns.
- Bump the `Last verified:` date at the top.
- If a component intentionally stays web-only (Chart/recharts, Command/cmdk, Resizable/drag, Scroll Area/custom scrollbar, Sonner), note it in [Parity Matrix](../reference/parity-matrix.md) instead of forcing a stub.

## How it works

`build-registry.ts` scans `packages/ui-web/src` + `packages/ui-native/src`, extracts npm deps + intra-registry deps from imports, and emits shadcn-compatible JSON (`registry:ui` items). Ignored: `index.ts`, `hooks`, `lib`, `sonner.tsx` (+ native `theme-provider`, `theme-toggle`, `nativewind-env.d.ts`).

Consumers pull single components via `npx shadcn@latest add "<repo>/tree/main/packages/ui-web"` — no full install needed.
