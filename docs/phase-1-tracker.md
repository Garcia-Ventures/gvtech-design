# Phase 1 Tracker — Cross-Platform Design System

**Started:** 2026-02-17  
**Updated:** 2026-02-22
**Status:** 🟢 Phase 1 Complete — Full Migration to Nx Workspace & Release Tooling

> See [update-plan.md](./update-plan.md) for the actionable Phase 0 PR checklist and Phase 1 migration steps.

---

## Phase 1 Deliverables

### Infrastructure

| Task                            | Status  | Owner | Notes                                                        |
| :------------------------------ | :------ | :---- | :----------------------------------------------------------- |
| Initialize Nx workspace         | ✅ Done |       | Nx 22.5.1 + Bun workspaces enabled                           |
| Create `packages/design-tokens` | ✅ Done |       | palette, theme, spacing, typography, shadows, radii all live |
| Create `packages/ui-core`       | ✅ Done |       | 51 contract source files covering all Phase 1 components     |
| Create `packages/ui-web`        | ✅ Done |       | 46 components with tests — all tests passing                 |
| Create `packages/ui-native`     | ✅ Done |       | 27+ real implementations — all tests passing                 |
| Create `apps/playground-web`    | ✅ Done |       | Full doc site live on Cloudflare Pages                       |
| Create `apps/native-playground` | ✅ Done |       | Expo app scaffolded with core component showcase             |
| Configure Nx caching            | ✅ Done |       | `nx.json` + CI cache restore steps                           |
| CI/CD pipeline updates          | ✅ Done |       | Nx cache steps in test + build jobs                          |
| **Migrate to Nx Release**       | ✅ Done |       | Full migration from release-please; lock-step versioning     |

> **Release tooling:** We have successfully migrated to **Nx Release**. See [release-tooling-evaluation.md](./release-tooling-evaluation.md).

### Component Parity

> **Legend:** ✅ Real implementation | 🚫 Not yet implemented (stub) | ⬜ Not started

| Component           | Contract | Web (`ui-web`) | Native (`ui-native`) | Tests (web) | Tests (native) | Notes                                         |
| :------------------ | :------- | :------------- | :------------------- | :---------- | :------------- | :-------------------------------------------- |
| **Accordion**       | ✅       | ✅             | ✅                   | ✅          | ✅             | Reanimated animated trigger                   |
| **Alert**           | ✅       | ✅             | ✅                   | ✅          | ⬜             | Variants: default, destructive, warning, info |
| **Alert Dialog**    | ✅       | ✅             | ✅                   | ✅          | ⬜             | Uses Dialog primitives + Reanimated           |
| **Aspect Ratio**    | ✅       | ✅             | 🚫                   | ✅          | —              | Web-only concept                              |
| **Avatar**          | ✅       | ✅             | ✅                   | ✅          | ⬜             | `@rn-primitives/avatar`                       |
| **Badge**           | ✅       | ✅             | ✅                   | ✅          | ⬜             | Variants aligned with web                     |
| **Breadcrumb**      | —        | ✅             | 🚫                   | ✅          | —              | Navigation-heavy, web-first                   |
| **Button**          | ✅       | ✅             | ✅                   | ✅          | ✅             | All variants + sizes; Pressable               |
| **Calendar**        | —        | ✅             | 🚫                   | ✅          | —              | Complex date picker; no RN primitive          |
| **Card**            | ✅       | ✅             | ✅                   | ✅          | ✅             | Full sub-components                           |
| **Carousel**        | —        | ✅             | 🚫                   | ✅          | —              | Embla-based; no RN equivalent yet             |
| **Chart**           | —        | ✅             | 🚫                   | ✅          | —              | recharts web-only                             |
| **Checkbox**        | ✅       | ✅             | ✅                   | ✅          | ✅             | Platform-specific size/stroke                 |
| **Collapsible**     | ✅       | ✅             | ✅                   | ✅          | ✅             | `@rn-primitives/collapsible`                  |
| **Command**         | —        | ✅             | 🚫                   | ✅          | —              | cmdk-based; no RN equivalent                  |
| **Context Menu**    | —        | ✅             | 🚫                   | ✅          | —              | Pointer-only interaction                      |
| **Dialog**          | ✅       | ✅             | ✅                   | ✅          | ✅             | `@rn-primitives/dialog` + Reanimated          |
| **Drawer**          | —        | ✅             | 🚫                   | ✅          | —              | Uses vaul; no RN equivalent yet               |
| **Dropdown Menu**   | —        | ✅             | 🚫                   | ✅          | —              | Pointer-triggered interaction                 |
| **Form**            | —        | ✅             | 🚫                   | ✅          | —              | react-hook-form; web-first                    |
| **Hover Card**      | —        | ✅             | 🚫                   | ✅          | —              | Hover interaction; not applicable native      |
| **Input**           | ✅       | ✅             | ✅                   | ✅          | ✅             | TextInput with contract alignment             |
| **Label**           | ✅       | ✅             | ✅                   | ✅          | ⬜             | nativeID + onPress pattern                    |
| **Menubar**         | —        | ✅             | 🚫                   | ✅          | —              | Desktop navigation pattern                    |
| **Navigation Menu** | —        | ✅             | 🚫                   | ✅          | —              | Web navigation pattern                        |
| **Pagination**      | —        | ✅             | 🚫                   | ✅          | —              | Cursor-based; alternative on native           |
| **Popover**         | —        | ✅             | 🚫                   | ✅          | —              | No RN primitive yet                           |
| **Progress**        | —        | ✅             | 🚫                   | ✅          | —              | No RN primitive yet                           |
| **Radio Group**     | ✅       | ✅             | ✅                   | ✅          | ✅             | `@rn-primitives/radio-group`                  |
| **Resizable**       | —        | ✅             | 🚫                   | ✅          | —              | Drag-based; not native pattern                |
| **Scroll Area**     | —        | ✅             | 🚫                   | ✅          | —              | Native scroll is built-in                     |
| **Search**          | —        | ✅             | ✅                   | ✅          | ⬜             | Command palette pattern                       |
| **Select**          | ✅       | ✅             | ✅                   | ✅          | ⬜             | Fully typed complex native impl               |
| **Separator**       | ✅       | ✅             | ✅                   | ✅          | ⬜             | `@rn-primitives/separator`                    |
| **Sheet**           | ✅       | ✅             | ✅                   | ✅          | ✅             | SlideInRight animation                        |
| **Skeleton**        | ✅       | ✅             | ✅                   | ✅          | ✅             | Reanimated pulsing opacity                    |
| **Slider**          | —        | ✅             | 🚫                   | ✅          | —              | No Expo-compatible RN primitive yet           |
| **Sonner**          | —        | ✅             | 🚫                   | ✅          | —              | Web toast library; use Toast on native        |
| **Switch**          | ✅       | ✅             | ✅                   | ✅          | ⬜             | `@rn-primitives/switch`                       |
| **Table**           | ✅       | ✅             | ✅                   | ✅          | ⬜             | View/Text-based layout                        |
| **Tabs**            | ✅       | ✅             | ✅                   | ✅          | ⬜             | `@rn-primitives/tabs` + TextClassContext      |
| **Text**            | ✅       | ✅             | ✅                   | ✅          | ✅             | Typography scale with variants                |
| **Textarea**        | ✅       | ✅             | ✅                   | ✅          | ✅             | TextInput with multiline + autoGrow           |
| **Theme Toggle**    | —        | ✅             | ✅                   | ✅          | ⬜             | Dark/light/system                             |
| **Toast**           | ✅       | ✅             | ✅                   | ✅          | ✅             | `@rn-primitives/toast` + Reanimated           |
| **Toggle**          | ✅       | ✅             | ✅                   | ✅          | ⬜             | Pressable toggle state                        |
| **Toggle Group**    | ✅       | ✅             | ✅                   | ✅          | ⬜             | Multi/single selection                        |
| **Tooltip**         | ✅       | ✅             | ✅                   | ✅          | ⬜             | `@rn-primitives/tooltip` + Reanimated         |

### Playground

| Task                                                | Status       | Notes                                                           |
| :-------------------------------------------------- | :----------- | :-------------------------------------------------------------- |
| `playground-web` documentation site                 | ✅ Complete  | Full doc site with Web + Native tabs, sidebar, search           |
| Green dot indicator for native-available components | ✅ Complete  | Validated — only real implementations show the dot              |
| Native tab only shown for real implementations      | ✅ Complete  | `doc-routes.tsx` + `docs.ts` aligned with actual code           |
| `native-playground` Expo app scaffolded             | ✅ Complete  | Basic showcase: Button, Card, Input, Checkbox, RadioGroup, Text |
| Expand `native-playground` with all real components | ⬜ Next Step | Add Accordion, Alert, Dialog, Sheet, Toast, etc.                |
| "Diff notes" section per component                  | ⬜ Next Step | Document intentional platform differences per component         |
| Side-by-side parity note in web doc pages           | ⬜ Next Step | Link from web → native tab where native exists                  |

---

## Definition of Done

- [x] Tokens imported from `design-tokens` by both `ui-web` and `ui-native` (no duplication)
- [x] 27+ core components have real native implementations with contracts matching `ui-core`
- [x] All `ui-web` tests passing (46 components)
- [x] All `ui-native` tests passing (27+ components)
- [x] Playground shows native tab only for components with real implementations
- [x] Sub-package publishing configured in Nx Release
- [ ] Native playground demonstrates all 27 real native components
- [ ] Platform divergence registry complete (diff notes per component)

---

## Key Decisions

| Decision               | Selected Approach                            | Status      |
| :--------------------- | :------------------------------------------- | :---------- |
| Token source format    | TS-first + JSON outputs                      | ✅ Accepted |
| RN styling approach    | NativeWind (already in use)                  | ✅ Accepted |
| Expo vs Bare RN        | **Expo (SDK + CNG)**                         | ✅ Accepted |
| Phase 1 component set  | Exceeded: 27+ real (vs 7 planned)            | ✅ Complete |
| Release tooling        | **Nx Release**                               | ✅ Accepted |
| Nx release migration   | Complete — Lock-step enabled                 | ✅ Accepted |
| Sub-package publishing | All sub-packages (web, native, core, tokens) | ✅ Accepted |

> See [native-setup-decision.md](./native-setup-decision.md) for the Expo decision rationale.

---

## Next Steps (Priority Order)

1. **Expand `native-playground`** — Add Accordion, Alert Dialog, Alert, Avatar, Badge, Dialog, Sheet, Skeleton, Switch, Table, Tabs, Toast, Toggle, Tooltip, etc.
2. **Complete platform divergence registry** — Document intentional differences per component in `universal-implementation.md`
3. **Native test coverage** — Add test files for the 15+ native components that don't have tests yet
4. **`private: true` at root** — Once sub-packages are the primary publish targets (Decision C from update-plan.md)

---

## Weekly Status

| Week       | Focus                                | Completed                                                                    | Blockers |
| :--------- | :----------------------------------- | :--------------------------------------------------------------------------- | :------- |
| 2026-02-17 | Documentation, ADR, initial planning | Architecture docs created                                                    | —        |
| 2026-02-17 | Phase 0 — Nx + Workspaces setup      | Bun workspaces, Nx 22.5.1, nx.json, CI cache, all checks passing             | —        |
| 2026-02-19 | Phase 1 complete — Tests green       | All 46 web + 12 native tests passing; playground live; docs/routes aligned   | —        |
| 2026-02-22 | Phase 1 Polish & Nx Release          | Full migration to Nx Release; fixed package.json versions; all tests passing | —        |
