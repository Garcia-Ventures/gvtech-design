# GEMINI.md - GV Tech Design System

## Project Overview

The **GV Tech Design System** is an opinionated, multi-platform component library managed as an Nx-powered monorepo. It provides React components for both **Web** (React DOM/Radix UI) and **Mobile** (React Native/Expo/NativeWind), driven by a single source of truth for **Design Tokens**.

### Core Architecture

The codebase is structured into three primary component layers and a token layer:

1. **`packages/ui-core` (The Contract):**
   - Defines platform-agnostic interfaces and shared types for all components.
   - Located in `packages/ui-core/src/contracts/[component].ts`.
   - **Always start here** when creating or modifying a component.
2. **`packages/ui-web` (Web Implementation):**
   - React components built for the web, utilizing Radix UI primitives and Tailwind CSS.
   - Located in `packages/ui-web/src/[component].tsx`.
3. **`packages/ui-native` (Native Implementation):**
   - React Native components built for mobile, utilizing NativeWind for styling.
   - Located in `packages/ui-native/src/[component].tsx`.
4. **`packages/design-tokens` (Design Tokens):**
   - Central repository for colors, spacing, typography, and other design constants.
   - Exported as a Tailwind preset for both web and native.

### Applications

- **`apps/playground-web`:** Documentation site and component showcase (Vite).
- **`apps/native-playground`:** Native component showcase (Expo).

---

## Building and Running

### Development

- **Start Web Playground:** `bun run dev`
- **Start Native Playground:** `bun run native` (options: `--android`, `--clear`)

### Validation & Testing

- **Comprehensive Validation:** `bun validate` (Runs sync-tokens, lint, typecheck, test, and build).
- **Run Tests:** `bun run test` (Vitest).
- **Linting:** `bun run lint` (ESLint).
- **Formatting:** `bun run format` (Prettier).

### Library Utilities

- **Update Component Registry:** `bun build:registry` (Updates `public/registry` JSON files).
- **Sync Design Tokens:** `bun run sync-tokens`.
- **Update shadcn components:** `bun run shadcn:update`.

---

## Development Conventions

### Component Lifecycle Workflow

1. **Contract:** Define/update the base props in `packages/ui-core/src/contracts/[name].ts`. Export from `packages/ui-core/src/index.ts`.
2. **Web Implementation:** Implement in `packages/ui-web/src/[name].tsx`. Use relative imports for internal utils (e.g., `./lib/utils`).
3. **Native Implementation:** Implement in `packages/ui-native/src/[name].tsx`. Provide a shim if not fully implemented.
4. **Documentation:**
   - Update `apps/playground-web/src/pages/web/[ComponentName]Docs.tsx` and `native/...`.
   - Register the route in `apps/playground-web/src/App.tsx` using `CombinedDocsLayout`.
5. **Registry:** Run `bun build:registry` to update public metadata.
6. **Validation:** Run `bun validate` to ensure everything is in a green state.

### Standards

- **TypeScript:** Strict typing is mandatory. **NEVER use `any`**. Use `unknown` or specific interfaces.
- **Styling:**
  - Web: Tailwind CSS 4.0.
  - Native: NativeWind (Tailwind for React Native).
- **Commits:** Follow **Conventional Commits** (`feat:`, `fix:`, `chore:`, etc.).
- **Icons:** Use `lucide-react` for web and `lucide-react-native` for native.
- **Utilities:** Always use the local `cn` utility for class merging.

---

## Key Files & Directories

- `project.json` / `nx.json`: Nx monorepo configuration.
- `.agent/rules/`: Project-specific agent instructions (e.g., `maintain-component.md`).
- `scripts/`: Automation scripts for registry building, token syncing, and validation.
- `docs/`: Architecture decisions and phase trackers.
