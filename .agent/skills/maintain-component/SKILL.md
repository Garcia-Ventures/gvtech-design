---
name: maintain-component
description: Guidelines for creating or updating UI components, ensuring tests and documentation stay in sync.
---

# Component Maintenance Skill

Use this skill whenever you are tasked with creating a new UI component or modifying an existing one in the `gvtech-design` library.

## Workflow

### 1. Preparation

- **Audit**: Identify the component file (`src/components/ui/`), its documentation page (`src/pages/components/`), and its test file (`src/components/ui/*.test.tsx`).
- **Plan**: Ensure the requested changes will be reflected in all three areas.

### 2. Implementation

- **Component Code**: Apply changes to the component in `src/components/ui/`.
- **Tests**:
  - Create or update the test suite in `src/components/ui/[component].test.tsx`.
  - Use `vitest` and `@testing-library/react`.
  - Ensure 100% pass rate.
- **Documentation**:
  - Update the corresponding page in `src/pages/components/`.
  - **CRITICAL**: Ensure the `PropsTable` is updated to reflect any changes to the component's API.
  - Add or update usage examples in `ComponentShowcase`.

### 3. Verification

- **Linting**: Run `yarn lint` to ensure no new lint errors are introduced.
- **Testing**: Run `yarn test [component].test.tsx` to verify the component's logic.
- **Type Checking**: Run `npx tsc --noEmit` to catch TypeScript errors.

## Checklist

- [ ] Component code updated/created.
- [ ] Test suite updated/created and passing.
- [ ] Documentation page updated/created.
- [ ] `PropsTable` accurately reflects the current API.
- [ ] `yarn lint` passes.
- [ ] `npx tsc --noEmit` passes.
