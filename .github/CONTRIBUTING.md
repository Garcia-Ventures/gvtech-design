# Contributing Guidelines

This repo is an **Nx + Bun workspaces monorepo** (`packages/*`, `apps/*`). The old Vite-only notes are archived at [`../docs/archive/CONTRIBUTING-vite-only.md`](../docs/archive/CONTRIBUTING-vite-only.md) — do not follow them.

## Start here

1. [Local Setup](../docs/tutorials/01-local-setup.md) — `bun install`, `bun run dev`, `bun run native`.
2. [Create a Component](../docs/tutorials/03-create-component.md) — contract-first (`ui-core` → `ui-web` + `ui-native` → playground).
3. [Contract-First](../docs/explanation/contract-first.md) — why contracts are the API.

## Before opening a PR

```bash
bun run lint
bun run test
bun run build:registry
bun run generate:contract-tests
# full gate:
bun run validate
```

- Follow **Conventional Commits** (drives Nx Release SemVer + changelogs).
- Contract change → update both impls + playground tabs + divergence note in the same PR.
- Run `bun run sync-tokens` if you touched `packages/design-tokens/src/*.ts` and commit the generated `theme.css`.

Details: [Run Tests, Lint, Contracts](../docs/how-to/run-tests-lint-contracts.md) · [Update Registry](../docs/how-to/update-registry.md) · [Troubleshoot](../docs/how-to/troubleshoot-common.md).
