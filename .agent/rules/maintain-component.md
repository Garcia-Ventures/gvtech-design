---
trigger: always_on
---

# Component Maintenance Skill

Use this skill whenever you are tasked with creating a new UI component or modifying an existing one in the `gvtech-design` library. All components must follow the monorepo-based architecture to support Web, React Native, and shared contracts.

## Architecture Standards

Components are split across three primary packages:

1. **`@gv-tech/ui-core`**: Shared contracts/interfaces.
   - Location: `packages/ui-core/src/contracts/[name].ts`
   - Role: Defines the "Truth" of what a component's API should be.
2. **`@gv-tech/ui-web`**: Web (DOM/Radix) implementation.
   - Location: `packages/ui-web/src/[name].tsx`
   - Tests: `packages/ui-web/src/[name].test.tsx`
3. **`@gv-tech/ui-native`**: React Native (NativeWind) implementation.
   - Location: `packages/ui-native/src/[name].tsx`

## Workflow

### 1. Contract Definition (Core)

- Always start by defining or updating the base props in `packages/ui-core/src/contracts/[name].ts`.
- Export these props from `packages/ui-core/src/index.ts`.
- **CRITICAL**: Use specific types. Avoid `any`. Use `unknown` or specific interfaces for extension.

### 2. Platform Implementation

- **Web**:
  - Build the implementation in `packages/ui-web/src/[name].tsx`.
  - Import contracts from `@gv-tech/ui-core`.
  - Import internal utilities (like `cn`) from `./lib/utils` (relative).
  - Export the component and its types from `packages/ui-web/src/index.ts`.
- **Native**:
  - Build the implementation in `packages/ui-native/src/[name].tsx`.
  - If not yet implemented, provide a "Not implemented" shim.
  - Import internal utilities from `./lib/utils` (relative).
  - Export the component from `packages/ui-native/src/index.ts`.

### 3. Documentation & Registry

- **Documentation Implementation**:
  - Create/Update web-specific docs in `apps/playground-web/src/pages/web/[ComponentName]Docs.tsx`.
  - Create/Update native-specific docs in `apps/playground-web/src/pages/native/[ComponentName]Docs.tsx`.
  - **Structure**: Documentation files should **not** use `ComponentSection` (this is now handled by the layout). They should return a React Fragment `<>...</>` containing `ComponentShowcase` and implementations.
- **Register in App.tsx**:
  - Add the new route to `apps/playground-web/src/App.tsx`.
  - Use `<CombinedDocsLayout />` and pass the `title`, `description`, `web`, and `native` implementations as props.
  - **Context**: Ensure `PropsTable` matches the `ui-core` contract and covers both platforms if they differ.
- **Registry**: Run `bun build:registry` to update the component JSON files in `public/registry`.

### 4. Verification

- **Full Suite**: Run `bun validate` from the root. This runs:
  - `sync-tokens`: Ensures design tokens are updated.
  - `lint`: Checks project-wide ESLint (no `any`, no unused vars).
  - `tsc`: Verifies TypeScript types across all workspaces.
  - `test`: Runs Vitest across all packages.
  - `build`: Verifies Vite/Nx build status.

## Checklist

- [ ] Contract updated in `packages/ui-core/src/contracts/`.
- [ ] Props exported from `packages/ui-core/src/index.ts`.
- [ ] Web implementation updated in `packages/ui-web/src/`.
- [ ] Native implementation/shim updated in `packages/ui-native/src/`.
- [ ] Exported via `index.ts` in respective packages.
- [ ] Web docs updated in `apps/playground-web/src/pages/web/` (without `ComponentSection`).
- [ ] Native docs updated in `apps/playground-web/src/pages/native/` (without `ComponentSection`).
- [ ] Route registered in `apps/playground-web/src/App.tsx` using `CombinedDocsLayout` with `title` and `description`.
- [ ] `bun build:registry` run to update public registry.
- [ ] `bun validate` passes successfully (Green state).
- [ ] **Strict**: No `any` types used in new/modified code.
