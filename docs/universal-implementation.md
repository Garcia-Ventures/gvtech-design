# Universal Component Implementation Guide

> [!IMPORTANT]
> **Architectural Pivot (2026-02-17):** This project is transitioning from a single-package design system to an **Nx monorepo** with shared packages. See [architecture-pivot.md](./architecture-pivot.md) for the full ADR and [phase-1-tracker.md](./phase-1-tracker.md) for Phase 1 scope.

This document outlines the current state of web/native component parity and serves as the reference for the platform divergence registry.

---

## Architecture Overview

```text
packages/
  design-tokens/    ← palette, theme, spacing, typography, shadows, radii
  ui-core/          ← Shared component contracts (props, variants, sizes)
  ui-web/           ← Web implementation (shadcn + Radix + Tailwind)
  ui-native/        ← React Native implementation (RN Reusables + NativeWind)
apps/
  playground-web/   ← Full documentation site — Web + Native tabs
  native-playground/ ← Expo app for on-device component testing
```

Key rules:

- **No token forks** without explicit approval — tokens come from `design-tokens`.
- **Matched API surface** across platforms (component names, props, variants, sizes).
- **Documented divergence** for platform-specific UX differences.
- **Own the code** — native components live in our repo, wired to our tokens/contracts.

---

## Component Parity Matrix (Current State)

> **Last updated:** 2026-03-05 | ✅ Real | 🚫 Stub (not yet implemented)

### Forms

| Component        | Web | Native | Notes                                                     |
| :--------------- | :-: | :----: | :-------------------------------------------------------- |
| **Button**       | ✅  |   ✅   | Pressable + all variants; `onPress` replaces `onClick`    |
| **Checkbox**     | ✅  |   ✅   | `@rn-primitives/checkbox`; size/stroke differ by platform |
| **Form**         | ✅  |   🚫   | react-hook-form; web-first pattern                        |
| **Input**        | ✅  |   ✅   | RN `TextInput`; no `onChange`, uses `onChangeText`        |
| **Label**        | ✅  |   ✅   | Uses `nativeID` + `onPress` instead of `htmlFor`          |
| **Radio Group**  | ✅  |   ✅   | `@rn-primitives/radio-group`                              |
| **Select**       | ✅  |   ✅   | Complex native impl; fully typed                          |
| **Slider**       | ✅  |   🚫   | No Expo-compatible RN primitive available                 |
| **Switch**       | ✅  |   ✅   | `@rn-primitives/switch`                                   |
| **Textarea**     | ✅  |   ✅   | `TextInput multiline`; `textAlignVertical="top"`          |
| **Toggle**       | ✅  |   ✅   | Pressable with active state                               |
| **Toggle Group** | ✅  |   ✅   | Multi/single selection modes                              |

### Data Display

| Component       | Web | Native | Notes                                                  |
| :-------------- | :-: | :----: | :----------------------------------------------------- |
| **Accordion**   | ✅  |   ✅   | `@rn-primitives/accordion` + Reanimated chevron        |
| **Alert**       | ✅  |   ✅   | Variants: default, destructive, warning, info          |
| **Avatar**      | ✅  |   ✅   | `@rn-primitives/avatar`                                |
| **Badge**       | ✅  |   ✅   | Text wrapped in View; NativeWind variant classes       |
| **Calendar**    | ✅  |   🚫   | Complex date picker; no RN primitive                   |
| **Card**        | ✅  |   ✅   | View/Text-based; full sub-components                   |
| **Carousel**    | ✅  |   🚫   | Embla-based; no comparable RN lib yet                  |
| **Chart**       | ✅  |   🚫   | recharts (web-only SVG); consider victory-native later |
| **Collapsible** | ✅  |   ✅   | `@rn-primitives/collapsible`                           |
| **Skeleton**    | ✅  |   ✅   | Reanimated pulsing opacity (vs CSS animation)          |
| **Table**       | ✅  |   ✅   | View/Text-based rows; no HTML table                    |
| **Text**        | ✅  |   ✅   | Typography scale; `variant` prop shared                |

### Feedback

| Component        | Web | Native | Notes                                              |
| :--------------- | :-: | :----: | :------------------------------------------------- |
| **Alert Dialog** | ✅  |   ✅   | `@rn-primitives/alert-dialog` + Reanimated overlay |
| **Dialog**       | ✅  |   ✅   | `@rn-primitives/dialog` + Reanimated fade          |
| **Hover Card**   | ✅  |   🚫   | Hover interaction; not applicable on touch         |
| **Popover**      | ✅  |   ✅   | Modal-based implementation                         |
| **Progress**     | ✅  |   🚫   | No `@rn-primitives/progress` yet                   |
| **Sheet**        | ✅  |   ✅   | SlideInRight/Left Reanimated; side prop supported  |
| **Skeleton**     | ✅  |   ✅   | See Data Display above                             |
| **Sonner**       | ✅  |   🚫   | Web toast library; use `Toast` on native           |
| **Toast**        | ✅  |   ✅   | `@rn-primitives/toast` + FadeInUp animation        |
| **Tooltip**      | ✅  |   ✅   | `@rn-primitives/tooltip` + FadeIn/FadeOut          |

### Navigation

| Component           | Web | Native | Notes                                          |
| :------------------ | :-: | :----: | :--------------------------------------------- |
| **Breadcrumb**      | ✅  |   🚫   | Navigation-heavy; alternative: Text links      |
| **Command**         | ✅  |   🚫   | cmdk-based; no RN equivalent                   |
| **Context Menu**    | ✅  |   🚫   | Right-click/long-press; consider ActionSheet   |
| **Drawer**          | ✅  |   🚫   | vaul-based; Sheet covers the pattern on native |
| **Dropdown Menu**   | ✅  |   🚫   | Pointer-triggered; no RN primitive yet         |
| **Menubar**         | ✅  |   🚫   | Desktop navigation pattern                     |
| **Navigation Menu** | ✅  |   🚫   | Web navigation pattern                         |
| **Pagination**      | ✅  |   🚫   | Alternative: infinite scroll on native         |
| **Search**          | ✅  |   ✅   | Command palette pattern                        |
| **Sheet**           | ✅  |   ✅   | See Feedback above                             |
| **Tabs**            | ✅  |   ✅   | `@rn-primitives/tabs` + TextClassContext       |

### Layout

| Component        | Web | Native | Notes                                             |
| :--------------- | :-: | :----: | :------------------------------------------------ |
| **Aspect Ratio** | ✅  |   🚫   | CSS `aspect-ratio`; RN View handles this natively |
| **Resizable**    | ✅  |   🚫   | Drag-based; not a native interaction pattern      |
| **Scroll Area**  | ✅  |   🚫   | Native scroll is built-in via `ScrollView`        |
| **Separator**    | ✅  |   ✅   | `@rn-primitives/separator`                        |

### Utilities

| Component        | Web | Native | Notes                            |
| :--------------- | :-: | :----: | :------------------------------- |
| **Theme Toggle** | ✅  |   ✅   | Dark/light/system; ThemeProvider |

---

## Platform Divergence Registry

Document intentional platform differences here. Each entry explains the _semantic intent_ that's preserved across platforms.

| Component        | Web Behavior                      | Native Behavior                        | Semantic Intent                                                 |
| :--------------- | :-------------------------------- | :------------------------------------- | :-------------------------------------------------------------- |
| **Button**       | `onClick` handler                 | `onPress` handler (Pressable)          | "User activates an action" — same semantics, different events   |
| **Input**        | `onChange` → `event.target.value` | `onChangeText` → `string`              | "User enters text" — simpler callback on native                 |
| **Label**        | `htmlFor` associates with input   | `nativeID` + `onPress` toggle          | "Label identifies a form control" — native uses ID association  |
| **Checkbox**     | Browser-native checkbox input     | `@rn-primitives/checkbox` Pressable    | "Binary selection toggle"                                       |
| **Dialog**       | `<Dialog>` Radix overlay          | `@rn-primitives/dialog` modal          | "Modal surface — blocking overlay for focused interaction"      |
| **Sheet**        | Radix Dialog side panel           | SlideInRight/Left Reanimated animation | "Supplemental content panel" — side-anchored drawer             |
| **Toast**        | `sonner` toast library            | `@rn-primitives/toast` + Reanimated    | "Transient feedback — dismissible notification"                 |
| **Skeleton**     | CSS `animate-pulse` opacity       | Reanimated `withRepeat`/`withTiming`   | "Loading placeholder" — same visual, different animation engine |
| **Tooltip**      | Radix hover tooltip               | `@rn-primitives/tooltip` + FadeIn      | "Contextual help text" — triggered by long-press on native      |
| **Table**        | HTML `<table>` / `<tr>` / `<td>`  | `View` rows + `Text` cells             | "Tabular data display"                                          |
| **Text**         | `<span>` / `<p>` with `cn()`      | RN `<Text>` with `variant` prop        | "Typographic content" — variant system shared                   |
| **Accordion**    | Radix + CSS height animation      | Reanimated chevron + content           | "Expandable content section"                                    |
| **Drawer (web)** | vaul bottom sheet                 | Use `Sheet` on native                  | "Modal panel from screen edge" — Sheet semantically equivalent  |
| **Scroll Area**  | Custom scrollbar overlay          | Use RN `ScrollView` directly           | "Scrollable content region" — native ScrollView is built-in     |
| **Sonner**       | Web-only animated toast library   | Use `Toast` on native                  | "Notification toasts" — Toast package covers native             |
| **Popover**      | Radix floating portal             | Modal with centered overlay            | "Floating contextual content"                                   |
| **Progress**     | CSS progress bar                  | _Not yet implemented_                  | "Task completion indicator"                                     |

---

## Per-Component Migration Checklist

### For existing components (ensuring contract alignment)

1. **Contract** — Verify props/variants/sizes match `packages/ui-core/src/contracts/`
2. **Web** — Confirm web component imports from `@gv-tech/ui-core` contracts
3. **Native** — Confirm native component imports same contract + uses `@gv-tech/design-tokens`
4. **Tests** — Web tests passing; add native test if not present
5. **Playground** — Native tab wired in `doc-routes.tsx`; diff notes added to this registry

### For new native components

1. Check `@rn-primitives` for a matching primitive
2. If no primitive exists, assess: is this interaction pattern appropriate for native?
3. If yes, build from RN primitives (`View`, `Text`, `Pressable`, `TextInput`)
4. Wire Reanimated for any animations
5. Add to `ui-native/src/index.ts` and `docs.ts` platforms
