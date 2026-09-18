# Explanation: Contract-First

`ui-core` contracts are the API. `ui-web` and `ui-native` are implementations of it.

## Why

- Prevents drift: without a shared contract, props/variants/sizes get redefined per platform and silently diverge (the original `.web.tsx`/`.native.tsx` problem).
- Enables parity testing: `generate:contract-tests` asserts both platforms satisfy the same interface.
- Makes tokens safe: styling flows from `design-tokens`; contracts carry no colors, only structure.

## Rules

1. Define in `packages/ui-core/src/contracts/<name>.ts` first (`<Name>BaseProps`).
2. Both impls import the contract type — never duplicate the interface.
3. Token edits go in `palette.ts`/`theme.ts` + `sync-tokens`; never hardcode in components.
4. Divergences that preserve semantic intent (e.g. `onClick`→`onPress`, `vaul` drawer→`Sheet`) must be recorded in the [Divergence Registry](../reference/divergence-registry.md).

Violations are caught by strict contract lint + `bun run validate`. Task guide: [Create a Component](../tutorials/03-create-component.md).
