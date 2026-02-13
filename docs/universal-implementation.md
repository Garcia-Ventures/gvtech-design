# Universal Component Implementation Guide

This document outlines the steps for transitioning existing web-only components to universal components (Web + React Native).

## Checklist for Components

### 1. Structure

- [ ] Create a directory for the component: `src/components/ui/[component-name]/`
- [ ] Move web implementation to `[component-name].web.tsx`
- [ ] Create native implementation in `[component-name].native.tsx`
- [ ] Create `index.ts` to export based on platform extensions

### 2. Implementation Details

- [ ] **Web Integration**: Use Radix UI primitives and Tailwind 4.
- [ ] **Native Integration**: Use NativeWind and/or React Native Reusables.
- [ ] **Shared Tokens**: Ensure both implementations use the same theme tokens from `src/theme/tokens.ts`.
- [ ] **Prop Consistency**: Maintain identical (or as close as possible) props API across platforms.

### 3. Verification

- [ ] Run existing web unit tests.
- [ ] Add native-specific unit tests if applicable.
- [ ] Verify visual consistency in the Playground.

---

## Migration Progress

| Component  | Web | Native | Unified | Status      |
| :--------- | :-: | :----: | :-----: | :---------- |
| **Button** | ✅  |   ✅   |   ✅    | Completed   |
| Accordion  | 🏗️  |   ❌   |   ❌    | Pending     |
| Alert      | 🏗️  |   ❌   |   ❌    | Pending     |
| Avatar     | 🏗️  |   ❌   |   ❌    | Pending     |
| Input      | 🏗️  |   ❌   |   ❌    | In Progress |

> [!TIP]
> Use `.web.tsx` and `.native.tsx` extensions. Bundlers like Vite and the React Native packager (Metro) will automatically pick the correct version based on these suffixes.
