# ADR: Cross-Platform Design System via Unified Monorepo

**Date:** 2026-02-17  
**Status:** Accepted  
**Author(s):** Garcia Ventures Engineering

> See [update-plan.md](./update-plan.md) for the actionable Phase 0/1 migration plan with PR checklists.

---

## Context

The GV Tech Design System (`@gv-tech/design-system`) currently ships as a **single Vite-based package** with platform-conditional file extensions (`.web.tsx` / `.native.tsx`). While this allowed rapid prototyping of React Native support—seven components now have functional native implementations—the single-package approach has revealed scaling issues:

- **Token duplication risk**: both platforms reference the same `src/theme/tokens.ts` file but with no formal contract guaranteeing they stay in sync.
- **No shared component contracts**: props, variants, and sizes are redefined independently in each platform file. Drift is inevitable.
- **Build coupling**: the Vite library build is web-focused; native outputs rely on Metro's file extension resolution, not a shared build pipeline.
- **Testing isolation**: there's no way to run native-specific tests in CI without a full RN environment; web tests cannot validate API parity.

## Decision

**Adopt Option 1 — One cross-platform design system with platform-specific implementations** — structured as an **Nx + Yarn workspaces monorepo**.

### Architecture

```text
gvtech-design/                       (Nx workspace root)
├── packages/
│   ├── design-tokens/               Shared tokens (colors, spacing, radii, typography, shadows)
│   │   └── src/
│   │       ├── palette.ts           Primitive color palette
│   │       ├── theme.ts             Semantic token mappings (light/dark)
│   │       ├── spacing.ts           Spacing scale
│   │       ├── typography.ts        Font families, sizes, weights
│   │       ├── shadows.ts           Elevation / shadow definitions
│   │       └── index.ts             Barrel export
│   │
│   ├── ui-core/                     Shared types, contracts, headless logic
│   │   └── src/
│   │       ├── contracts/           Component contracts (props, variants, sizes)
│   │       │   ├── button.ts
│   │       │   ├── text.ts
│   │       │   ├── input.ts
│   │       │   ├── card.ts
│   │       │   ├── checkbox.ts
│   │       │   ├── radio.ts
│   │       │   ├── dialog.ts
│   │       │   └── toast.ts
│   │       ├── types/               Shared utility types
│   │       └── index.ts
│   │
│   ├── ui-web/                      Web implementation (shadcn + Radix + Tailwind)
│   │   └── src/components/
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       └── ...
│   │
│   └── ui-native/                   React Native implementation (RN Reusables + NativeWind)
│       └── src/components/
│           ├── button.tsx
│           ├── input.tsx
│           └── ...
│
├── apps/
│   └── ui-playground/               Extended playground (web + native parity views)
│
├── nx.json                          (task runner + caching)
├── package.json                     (Yarn workspaces root)
```

### Key Principles

| Principle                 | Detail                                                                                                                                          |
| :------------------------ | :---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Single token source**   | All tokens come from `design-tokens`. No per-platform forks without explicit approval.                                                          |
| **Matched API surface**   | Component names, props, variants, and sizes are defined in `ui-core` contracts and implemented identically on both platforms wherever possible. |
| **Documented divergence** | Platform-specific UX differences (e.g., Dialog → BottomSheet on native) must preserve semantic intent and be documented with "diff notes."      |
| **Own the code**          | Native components may start from React Native Reusables patterns but must live in our repo, wired to our tokens and contracts.                  |
| **Incremental migration** | The existing single-package structure continues to work during the transition. Packages are extracted incrementally.                            |

## Consequences

### Positive

- Tokens are a single source of truth — changes propagate to both platforms automatically.
- Component contracts prevent API drift and enable parity testing.
- Nx task graph + caching accelerate CI/CD for affected packages only.
- Playground can show side-by-side parity views with diff notes.

### Negative / Risks

- **Migration overhead**: extracting from a single package into a monorepo requires careful phasing.
- **Build complexity**: two build targets (Vite for web, Metro/Expo for native) must be orchestrated.
- **Team learning curve**: Nx workspace conventions and package boundaries.

### Mitigations

- Phase 1 focuses on extracting `design-tokens` and `ui-core` first (lowest risk, highest value).
- Existing components continue to work via the current package during migration.
- Documentation (this ADR + phase tracker) ensures alignment.

## Current State Reference

| Aspect                      | Status                                                                         |
| :-------------------------- | :----------------------------------------------------------------------------- |
| Components with native impl | 7 of 49+ (Button, Input, Label, Badge, Accordion, Alert, Avatar)               |
| Remaining native components | Placeholder only ("not yet implemented")                                       |
| Token location              | `src/theme/tokens.ts` (palette + semantic themes)                              |
| Build system                | Vite (multi-entry library build)                                               |
| Existing RN deps            | `react-native`, `nativewind`, `react-native-reanimated`, `@rn-primitives/slot` |

---

## Resolved Decisions

1. **Token Source Format**: **TS-first + JSON/CSS build outputs**. Preserves type safety while enabling universal consumption.
2. **React Native Styling**: **NativeWind**. Successfully implemented across all 27+ native components, providing excellent class-name parity with web.
3. **Expo vs Bare RN**: **Expo (SDK 54 + CNG)**. Adopted for superior DX and simplified native module management.
4. **Phase 1 Component List**: **Exceeded**. Targeted 7 core components; delivered 27+ real native implementations with full contract parity.
5. **Release Orchestration**: **Nx Release**. Adopted over `release-please` to support lock-step versioning and automatic internal dependency synchronization across the monorepo.

---

## References

- [Nx Workspace Docs](https://nx.dev/docs/reference/create-nx-workspace)
- [Nx Dependency Graph](https://nx.dev/docs/features/explore-graph)
- [React Native Reusables](https://rnr-docs.vercel.app/)
- [Yarn Workspaces Monorepo Guide](https://www.premieroctet.com/blog/en/yarn-monorepo)
- Prior art: `docs/universal-implementation.md`
