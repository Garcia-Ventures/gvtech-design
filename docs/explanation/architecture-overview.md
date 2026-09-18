# Explanation: Architecture Overview

One cross-platform design system, platform-specific implementations — as an Nx + Bun monorepo.

```text
gvtech-design/                 (Nx workspace root)
  packages/
    design-tokens/             palette, theme, spacing, typography, shadows → theme.css
    ui-core/                   contracts (props, variants, sizes) — source of truth
    ui-web/                    shadcn + Radix + Tailwind implementation
    ui-native/                 RN Reusables + NativeWind implementation
    ui-flutter/                Flutter tokens + components (GVThemeData)
  apps/
    playground-web/            docs site — Web + Native tabs
    native-playground/         Expo (CNG) on-device testing
  nx.json / package.json       task graph, cache, release groups
```

## Principles

| Principle             | Meaning                                                                                         |
| :-------------------- | :---------------------------------------------------------------------------------------------- |
| Single token source   | Everything from `design-tokens`; no forks without approval                                      |
| Matched API surface   | Names/props/variants/sizes defined in `ui-core`, implemented identically where possible         |
| Documented divergence | Native UX differences (Dialog → modal, hover → long-press) preserve intent + get a registry row |
| Own the code          | Native starts from RN Reusables patterns but lives in-repo, wired to our tokens/contracts       |
| Incremental migration | Single-package legacy keeps working while packages extract                                      |

Full decision: [Architecture Pivot ADR](./adrs/architecture-pivot.md). Playground choice: [Expo ADR](./adrs/expo-playground.md). Release: [Nx Release ADR](./adrs/nx-release.md).
