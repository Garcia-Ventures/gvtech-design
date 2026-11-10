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
- If a component stays web-only (Chart, Command, Resizable, Sonner), keep it out of `packages/ui-native/src/index.ts` and on the native ignore list in `scripts/build-registry.ts`. Note the substitute in [Parity Matrix](../reference/parity-matrix.md).
- Planned native work (Attachment, Bubble, Marker, Message, Message Scroller, Questionnaire) stays unexported the same way.
- Variant and size unions in playground props tables come from the contract arrays. Button uses `quoteUnion` in `apps/playground-web/src/lib/button-contract-docs.ts`. Follow that for the next component instead of pasting a string union.

## How it works

`build-registry.ts` scans `packages/ui-web/src` + `packages/ui-native/src`, extracts npm deps + intra-registry deps from imports, and emits shadcn-compatible JSON (`registry:ui` items). Ignored: `index.ts`, `hooks`, `lib`, `sonner.tsx` (+ native `theme-provider`, `theme-toggle`, `nativewind-env.d.ts`).

Consumers pull single components via `npx shadcn@latest add "<repo>/tree/main/packages/ui-web"` — no full install needed.
