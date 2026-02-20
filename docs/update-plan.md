# Monorepo Update Plan — Incremental Nx Adoption

**Date:** 2026-02-17
**Status:** Phase 1 Complete — Parity Extracted, Sites Isolated
**Supersedes:** Portions of [architecture-pivot.md](./architecture-pivot.md) relating to tooling choices

---

## Summary

We are adopting **Option 1** (one design system, two implementations) with an **incremental Nx adoption** strategy. This document is the actionable plan that bridges the existing architecture ADR and the Phase 1 tracker.

> [!IMPORTANT]
> **Key constraints (decided):**
>
> - **release-please stays** as the release orchestrator — no Nx Release migration now.
> - **Cloudflare Pages stays** for deployment of the playground/docs site.
> - **Nx is adopted incrementally** — task running and caching only; no release tooling changes.

---

## Phase 0 — Foundation (No Breaking Changes)

Phase 0 sets up Yarn workspaces + Nx without changing any existing build, deploy, or release behavior.

### 0.1 Enable Yarn Workspaces

Convert to a workspaces-aware root by adding `workspaces` to the root `package.json`:

```jsonc
// package.json (root additions)
{
  "private": true, // required for workspaces root
  "workspaces": ["packages/*", "apps/*"],
}
```

> [!NOTE]
> The existing `@gv-tech/design-system` package currently publishes from root. During Phase 0 we keep publishing from root — the `workspaces` field simply enables cross-package resolution for new packages. The `private: true` field must be added carefully since the root package currently publishes to npm. See [Decision 1](#decision-1-root-privatetrue-timing) below.

**`.yarnrc.yml`** — no changes needed (`nodeLinker: node-modules` already set).

### 0.2 Add Nx (Tasks & Caching Only)

```bash
# Install Nx as a devDependency
yarn add -D nx @nx/js
```

Create `nx.json` at the repo root:

```jsonc
{
  "$schema": "node_modules/nx/schemas/nx-schema.json",
  "defaultBase": "main",
  "namedInputs": {
    "default": ["{projectRoot}/**/*", "sharedGlobals"],
    "sharedGlobals": ["{workspaceRoot}/tsconfig.json"],
    "production": ["default", "!{projectRoot}/**/*.test.*"],
  },
  "targetDefaults": {
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["production", "^production"],
      "cache": true,
    },
    "test": {
      "inputs": ["default", "^production"],
      "cache": true,
    },
    "lint": {
      "inputs": ["default"],
      "cache": true,
    },
  },
}
```

> [!TIP]
> Nx infers tasks from each package's `package.json` scripts — no Nx executors or `project.json` files are needed initially. Running `npx nx build @gv-tech/design-system` will call the existing `yarn build` script.

### 0.3 Create Directory Scaffolding

```text
gvtech-design/
├── apps/
│   └── playground-web/          ← Will hold the docs/playground site (Phase 1)
├── packages/
│   ├── design-tokens/           ← Phase 1
│   ├── ui-core/                 ← Phase 1
│   ├── ui-web/                  ← Phase 1+
│   └── ui-native/               ← Phase 1+
├── src/                          ← Existing code stays here during Phase 0
├── nx.json                       ← NEW
├── package.json                  ← Updated with workspaces
└── ...existing files
```

Directories can be created empty with a `.gitkeep` initially — no code moves in Phase 0.

### 0.4 Update CI (`.github/workflows/ci.yml`)

Add Nx caching without changing existing behavior:

```yaml
# After yarn install step, add:
- name: Restore Nx Cache
  uses: actions/cache@v4
  with:
    path: .nx/cache
    key: ${{ runner.os }}-nx-${{ hashFiles('yarn.lock') }}-${{ github.sha }}
    restore-keys: |
      ${{ runner.os }}-nx-${{ hashFiles('yarn.lock') }}-
      ${{ runner.os }}-nx-
```

Existing `yarn lint`, `yarn test:ci`, `yarn build`, and `yarn build:site` scripts continue to run as-is. No Nx commands in CI yet — that comes when packages have their own scripts.

### 0.5 Deployment — No Changes

| Setting             | Current Value                          | Phase 0 Change |
| :------------------ | :------------------------------------- | :------------- |
| Build command       | `yarn build:site`                      | None           |
| Output directory    | `dist-site`                            | None           |
| Wrangler config     | `pages_build_output_dir = "dist-site"` | None           |
| Cloudflare root dir | Repository root                        | None           |

### 0.6 Release — No Changes

| Setting              | Current Value                        | Phase 0 Change |
| :------------------- | :----------------------------------- | :------------- |
| Release orchestrator | `release-please-action@v4.4`         | None           |
| Manifest             | `.release-please-manifest.json`      | None           |
| Config               | `release-please-config.json`         | None           |
| Publish command      | `npm publish --provenance` from root | None           |

### Phase 0 PR Checklist

- [x] Add `"workspaces": ["packages/*", "apps/*"]` to root `package.json`
- [x] Decided: skip `"private": true` for now (Option B — Yarn 4 allows workspaces without it)
- [x] `yarn add -D nx @nx/js` (Nx 22.5.1)
- [x] Create `nx.json` with target defaults and caching config
- [x] Create empty `packages/` and `apps/` directories with `.gitkeep`
- [x] Add `.nx/` to `.gitignore`
- [x] Add Nx cache restore steps to `ci.yml` (test + build jobs)
- [x] Remove `turbo.json` reference from `architecture-pivot.md` (we're using Nx, not Turbo)
- [x] Verify: `yarn install` ✅
- [x] Verify: `yarn build` ✅ (library → `dist/`)
- [x] Verify: `yarn build:site` ✅ (site → `dist-site/`)
- [x] Verify: `yarn test:ci` ✅ (120 tests, 49 files)
- [x] Verify: `yarn lint` ✅
- [x] Verify: Cloudflare Pages preview deploy ✅ ([verified](https://653e2c83.gvtech-design.pages.dev/web/getting-started))

---

## Phase 1 — Extract Packages

Phase 1 extracts actual code into the workspace packages. The root package continues to re-export from sub-packages for backward compatibility.

### 1.1 `packages/design-tokens`

- Move `src/theme/tokens.ts` (palette + theme) into `packages/design-tokens/src/`
- Add spacing, typography, shadows, radii exports
- Create `package.json` with `name: "@gv-tech/design-tokens"`
- Root `src/theme/tokens.ts` becomes a re-export from `@gv-tech/design-tokens`

### 1.2 `packages/ui-core`

- Create component contracts (props, variants, sizes) in `packages/ui-core/src/contracts/`
- Phase 1 components: Button, Text, Input, Checkbox, Radio, Card, Dialog/Sheet, Toast
- Create `package.json` with `name: "@gv-tech/ui-core"`

### 1.3 `packages/ui-web` and `packages/ui-native`

- Move `.web.tsx` implementations to `packages/ui-web/`
- Move `.native.tsx` implementations to `packages/ui-native/`
- Both import contracts from `@gv-tech/ui-core` and tokens from `@gv-tech/design-tokens`

### 1.4 `apps/playground-web`

- Move the existing Vite site config into `apps/playground-web/`
- Update `wrangler.toml` and Cloudflare Pages config to build from `apps/playground-web/`
- Keep using Vite — no framework change

### 1.5 Update release-please (if sub-packages are published)

If sub-packages (`design-tokens`, `ui-core`) need npm publishing:

- Add entries to `release-please-config.json` under `packages`
- Add entries to `.release-please-manifest.json`
- release-please supports monorepo manifests natively

> [!WARNING]
> Only configure release-please for sub-packages when they are ready to publish. The root `@gv-tech/design-system` package continues to be the primary published artifact through Phase 1.

---

## Decisions Needed

### Decision 1: Root `private:true` Timing

The root `package.json` currently publishes as `@gv-tech/design-system`. Adding `"private": true` (required for Yarn workspaces root) would prevent npm publishing from root.

| Option                                            | Description                                                                              | Recommendation                              |
| :------------------------------------------------ | :--------------------------------------------------------------------------------------- | :------------------------------------------ |
| **A) Add `private:true` now**                     | Makes root a pure workspace root. Publishing moves to sub-packages.                      | ❌ Too early — sub-packages don't exist yet |
| **B) Skip `private:true`, use workspaces anyway** | Yarn 4 allows workspaces without `private:true` at root. Publishing continues from root. | ✅ **Recommended for Phase 0**              |
| **C) Add `private:true` in Phase 1**              | Add when sub-packages are ready to publish independently.                                | ✅ Natural transition point                 |

> **Recommendation:** Option B for Phase 0 → Option C when sub-packages are publishable.

### Decision 2: Convert to Yarn Workspaces Now or Later

| Option                   | Pros                                                                                                                           | Cons                                                                                    |
| :----------------------- | :----------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- |
| **Now (Phase 0)**        | New packages can immediately cross-reference each other; `yarn install` resolves them. Clean foundation before any code moves. | Slightly more work upfront in the "no-op" PR.                                           |
| **Later (follow-up PR)** | Phase 0 PR stays minimal.                                                                                                      | Have to retrofit workspaces when creating the first package — more merge-conflict risk. |

> **Recommendation:** Convert now. Adding `workspaces` to `package.json` is a one-line change and doesn't break anything when there are no packages yet.

---

## Nx Release — Future Evaluation

> [!NOTE]
> Nx Release is explicitly **out of scope** for Phase 0 and Phase 1. After Phase 1 is complete, evaluate whether Nx Release provides value over release-please for:
>
> - Coordinated multi-package versioning
> - Monorepo-aware changelogs
> - Publish orchestration across sub-packages
>
> **No action required now.**

---

## Risk Matrix

| Risk                                      | Likelihood | Impact | Mitigation                                            |
| :---------------------------------------- | :--------- | :----- | :---------------------------------------------------- |
| Yarn workspaces breaks `yarn install`     | Low        | High   | Test in CI on the Phase 0 PR before merging           |
| Cloudflare Pages can't find build output  | Low        | High   | No build path changes in Phase 0; test preview deploy |
| Nx overhead for small team                | Medium     | Low    | Nx is opt-in; existing scripts still work without it  |
| release-please confused by new packages   | Low        | Medium | Don't add packages to manifest until ready to publish |
| Import paths break during code extraction | Medium     | Medium | Root re-exports from sub-packages for backward compat |

---

## Timeline (Suggested)

| Phase        | Scope                                                | Estimated Duration     |
| :----------- | :--------------------------------------------------- | :--------------------- |
| **Phase 0**  | Workspaces + Nx setup, no code moves                 | 1 PR, ~1 day           |
| **Phase 1a** | Extract `design-tokens` + `ui-core`                  | 1–2 PRs, ~1 week       |
| **Phase 1b** | Extract `ui-web` + `ui-native` (Phase 1 components)  | 2–3 PRs, ~2 weeks      |
| **Phase 1c** | Move playground to `apps/`, update Cloudflare config | 1 PR, ~1 day           |
| **Evaluate** | Nx Release vs release-please decision                | After Phase 1 complete |

---

## References

- [architecture-pivot.md](./architecture-pivot.md) — ADR for the cross-platform design system decision
- [phase-1-tracker.md](./phase-1-tracker.md) — Component-level progress tracker
- [universal-implementation.md](./universal-implementation.md) — Implementation guide and parity matrix
- [Nx + Yarn Workspaces](https://nx.dev/recipes/adopting-nx/adding-to-monorepo) — Official Nx integration docs
- [release-please monorepo](https://github.com/googleapis/release-please/blob/main/docs/manifest-releaser.md) — Manifest-based multi-package releases
- [Cloudflare Pages monorepo builds](https://developers.cloudflare.com/pages/configuration/monorepos/) — Subdirectory build support
- [release-tooling-evaluation.md](./release-tooling-evaluation.md) — Evaluation of Release-Please vs. Nx Release
