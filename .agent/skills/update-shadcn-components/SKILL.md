---
name: update-shadcn-components
description: Guides the process of pulling in new or updated shadcn components and integrating them into the monorepo architecture (ui-core, ui-web, ui-native, docs).
---

# Update Shadcn Components Skill

Use this skill whenever you are tasked with pulling in new components from shadcn or updating existing ones, ensuring that the monorepo's strict contract-based architecture is maintained across Web and Native environments.

## Integration Workflow

Whenever you pull in or update shadcn components, you must perform the following steps to ensure compatibility with the GV Tech Design System architecture.

### 1. Fetching Components

- Always use the shadcn CLI in the root or `packages/ui-web` directory.
- Use the `--overwrite` flag when updating existing components: `npx shadcn@latest add [component] --overwrite`.
- **Note**: This will dump the component into `packages/ui-web/src`.

### 2. Contract Extraction (Core)

- Inspect the newly downloaded component and identify its prop interfaces (e.g. `ButtonProps`, `InputProps`).
- Extract these interfaces into a contract file in `packages/ui-core/src/contracts/[name].ts`.
- Prefix the contract names with the component name and end with `BaseProps` (e.g. `ButtonBaseProps`).
- Strip away HTML/React-specific extends (like `React.ComponentProps<'button'>`) from the base contract, so the contract only defines the custom properties (e.g., variants, custom flags).
- Export the contract from `packages/ui-core/src/index.ts`.
- Run `bun run build` inside `packages/ui-core`.

### 3. Web Implementation Update

- In the `packages/ui-web/src/[name].tsx` file:
  - Import the new contracts from `@gv-tech/ui-core`.
  - Apply the contracts to the component props alongside the standard React HTML types (e.g., `React.ComponentProps<'div'> & MyComponentBaseProps`).
  - Ensure any internal imports (like `cn` or other components) use relative paths (e.g., `../lib/utils` or `@/lib/utils` depending on the setup).
- If it's a new component, export it from `packages/ui-web/src/index.ts`.
- Run `bunx tsc --noEmit` inside `packages/ui-web` to verify types.

### 4. Native Implementation Update

- Create or update the React Native equivalent in `packages/ui-native/src/[name].tsx`.
- Import the exact same contracts from `@gv-tech/ui-core`.
- Map the web implementation's DOM elements to Native equivalents (`View`, `Text`, `TextInput`, `Pressable`, etc.).
- If a complex component cannot be immediately built for Native, provide a shim using `<View>` and `<Text>` that satisfies the contract, marking it as "Not Implemented".
- If it's a new component, export it from `packages/ui-native/src/index.ts`.
- Run `bunx tsc --noEmit` inside `packages/ui-native` to verify types.

### 5. Documentation

- Create documentation for the Web implementation in `apps/playground-web/src/pages/web/[ComponentName]Docs.tsx`.
- Create documentation for the Native implementation in `apps/playground-web/src/pages/native/[ComponentName]Docs.tsx`.
- Use the `<ComponentShowcase>` and `<PropsTable>` components for the docs.
- Export both doc components from their respective `index.ts` files in the `web/` and `native/` folders.
- Add the route to `apps/playground-web/src/routes/doc-routes.tsx` using the `web` and `native` helpers.

### 6. Validation

- Run a full typecheck and lint across the monorepo by running `bun validate` at the root.
- Fix any remaining type errors, unused imports, or linting issues.

## Checklist

- [ ] Shadcn component fetched (`--overwrite` if updating).
- [ ] Contract extracted to `ui-core` and exported.
- [ ] Web component patched with contract.
- [ ] Native component/shim created and patched with contract.
- [ ] Web and Native docs created and routed.
- [ ] `bun validate` passes cleanly.
