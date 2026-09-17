# GV Tech Design System — Documentation

> Contributor-first docs organized with the [Diataxis framework](https://diataxis.fr/).
> Start here, then follow the quadrant that matches your goal.

## How to navigate

| I want to…                       | Go to                                                 | Diataxis quadrant                    |
| :------------------------------- | :---------------------------------------------------- | :----------------------------------- |
| Learn by doing, step-by-step     | [Tutorials](./tutorials/01-local-setup.md)            | Tutorials — learning-oriented        |
| Solve a specific task            | [How-to Guides](./how-to/cut-release.md)              | How-to — task-oriented               |
| Look up an API or status         | [Reference](./reference/component-registry.md)        | Reference — information-oriented     |
| Understand why we do it this way | [Explanation](./explanation/architecture-overview.md) | Explanation — understanding-oriented |

## Entry points by role

### New contributor (recommended path)

1. [Local Setup](./tutorials/01-local-setup.md) — clone, `bun install`, run `playground-web` + `native-playground`.
2. [Create a Component](./tutorials/03-create-component.md) — contract-first with `generate:component`.
3. [Run Tests, Lint, Contracts](./how-to/run-tests-lint-contracts.md) — validate before PR.
4. [Contract-First Philosophy](./explanation/contract-first.md) — why `ui-core` is source of truth.

### App consumer (web / native / flutter)

1. [Use in Your App](./tutorials/02-first-app-usage.md) — install `@gv-tech/*`, shadcn CLI, Tailwind v4 setup.
2. [Use Tokens](./how-to/use-tokens-tailwind-v4.md) — `theme.css` import, dark mode.
3. [Component Status](./reference/component-registry.md) + [Parity Matrix](./reference/parity-matrix.md).
4. [Divergence Registry](./reference/divergence-registry.md) — `onClick` vs `onPress`, `Dialog` vs modal, etc.

## Map

```text
docs/
  index.md                  ← you are here
  tutorials/               ← learning: setup, first usage, create component
  how-to/                 ← tasks: tokens, primitives, nativewind, release, troubleshoot
  reference/              ← facts: registry, parity, divergence, contracts, tokens, CLI
  explanation/            ← understanding: architecture, contract-first, ADRs, brand, roadmap
  archive/                ← superseded docs with deprecation banners
```

Related roots (not moved, linked):

- Root [README.md](../README.md) — 30-second install + demo.
- [.github/CONTRIBUTING.md](../.github/CONTRIBUTING.md) — contribution gate (Conventional Commits + lint/test).
- [.github/RELEASING.md](../.github/RELEASING.md) — pointer to Nx Release how-to.
- Playground site: `apps/playground-web` (web + native tabs), `apps/native-playground` (Expo on-device).
