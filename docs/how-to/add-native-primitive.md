# How-to: Add a Native Primitive

Task: implement a `ui-native` component from a contract, preferring `@rn-primitives`.

## Steps

1. Check for a primitive: `https://rnr-docs.vercel.app/` — e.g. checkbox → `@rn-primitives/checkbox`, dialog → `@rn-primitives/dialog`, tabs → `@rn-primitives/tabs`.
2. Read the contract first: `packages/ui-core/src/contracts/<name>.ts`. Your props, variants, sizes must match exactly.
3. Implement in `packages/ui-native/src/<name>.tsx`:
   - `View`/`Text`/`Pressable`/`TextInput` + NativeWind `cn()` from `./lib/utils`
   - Wire `@gv-tech/design-tokens` (no hardcoded colors)
   - Reanimated for animation (`FadeIn`, `SlideInRight`, `withRepeat` for Skeleton-style pulse)
4. Export from `packages/ui-native/src/index.ts`.
5. Add native test (Vitest + `react-native-web` shims — no Jest/Babel needed) and playground tab `apps/playground-web/src/pages/native/<Name>Docs.tsx`.
6. If UX must differ (e.g. hover → long-press, `Dialog` → modal), add a row to [Divergence Registry](../reference/divergence-registry.md).

## When no primitive exists

Ask: is this interaction appropriate for native? Examples: `Resizable` (drag panels) and `Scroll Area` (custom scrollbar) are web-only — native uses `ScrollView` directly. Mark ⏳ in [Parity Matrix](../reference/parity-matrix.md) with a note instead of forcing it.
