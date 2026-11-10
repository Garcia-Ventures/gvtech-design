# Enhancement program

Tracked work for the GV Tech design system. Design and engineering share this list. Reviewed 2026-11-09 against `packages/*/src`, the playground, and the docs in `docs/reference/`.

This file is the backlog. Change a row in the same pull request that does the work. Add the date and the pull request to the log at the bottom.

## How to update a row

1. Set **Status** to `accepted`, `in progress`, `done`, or `dropped`.
2. Check the box when status is `done`.
3. Keep the ID. Add new work as `EP-21` and onward.
4. When an item changes a status doc (`component-registry.md`, `parity-matrix.md`, `divergence-registry.md`), update that doc in the same pull request.

| Status        | Meaning                                 |
| :------------ | :-------------------------------------- |
| `proposed`    | Reviewed and not yet scheduled          |
| `accepted`    | A lane has agreed to do it              |
| `in progress` | A branch is open                        |
| `done`        | Merged, and the acceptance line is true |
| `dropped`     | We will not do it; say why in the log   |

Effort: **S** is about a day, **M** is a few days, **L** is a milestone.

## Tracker

| ID    | Work                                                    | Priority | Lane                | Effort | Status     |
| :---- | :------------------------------------------------------ | :------: | :------------------ | :----: | :--------- |
| EP-01 | One platform status, with web-only called out           |    P0    | Docs                |   S    | `proposed` |
| EP-02 | Native Button Group matches its registry row            |    P0    | Native, Docs        |   M    | `proposed` |
| EP-03 | Messaging stubs leave the native public entry           |    P0    | Native, Docs        |   M    | `proposed` |
| EP-04 | Button props in the playground come from the contract   |    P0    | Tooling, Docs       |   M    | `proposed` |
| EP-05 | Success, warning, and info become theme roles           |    P1    | Design, Web, Native |   M    | `proposed` |
| EP-06 | Contrast check inside `bun run validate`                |    P1    | Design, Tooling     |   M    | `proposed` |
| EP-07 | Touch target rule for the 24px controls                 |    P1    | Design, Web, Native |   M    | `proposed` |
| EP-08 | Loading and icon-only buttons have names and busy state |    P1    | Web, Native, Docs   |   M    | `proposed` |
| EP-09 | Motion tokens and reduced motion                        |    P1    | Design, Web, Native |   L    | `proposed` |
| EP-10 | One install path that paints with tokens                |    P1    | Docs                |   S    | `proposed` |
| EP-11 | shadcn intake checklist after `--overwrite`             |    P1    | Docs                |   S    | `proposed` |
| EP-12 | Foundations for type, space, radius, and elevation      |    P1    | Design, Web         |   M    | `proposed` |
| EP-13 | Docs search covers props and variants                   |    P1    | Web                 |   M    | `proposed` |
| EP-14 | Four composition recipes                                |    P1    | Design, Web         |   M    | `proposed` |
| EP-15 | Flutter package story matches the tree                  |    P1    | Flutter, Docs       |   M    | `proposed` |
| EP-16 | axe on Button, field, Dialog, and Alert                 |    P2    | Tooling, Web        |   M    | `proposed` |
| EP-17 | Web screenshot checks, light and dark                   |    P2    | Tooling             |   L    | `proposed` |
| EP-18 | Registry test column matches files on disk              |    P2    | Docs, Native        |   M    | `proposed` |
| EP-19 | Native Select types, and the stale Sheet TODO           |    P2    | Native              |   M    | `proposed` |
| EP-20 | Charts stay web-only until a product asks               |    P2    | Docs                |   S    | `proposed` |

- [ ] EP-01
- [ ] EP-02
- [ ] EP-03
- [ ] EP-04
- [ ] EP-05
- [ ] EP-06
- [ ] EP-07
- [ ] EP-08
- [ ] EP-09
- [ ] EP-10
- [ ] EP-11
- [ ] EP-12
- [ ] EP-13
- [ ] EP-14
- [ ] EP-15
- [ ] EP-16
- [ ] EP-17
- [ ] EP-18
- [ ] EP-19
- [ ] EP-20

Do P0 before adding components. P0 is what makes the other rows safe to trust.

## What stays

These are working. Later items build on them.

- Contracts in `packages/ui-core/src/contracts/` are the API. Web and native import them.
- Color source of truth is `packages/design-tokens/src/palette.ts` and `theme.ts`. `bun run sync-tokens` writes `theme.css` and `packages/ui-flutter/lib/src/tokens/gv_tokens.g.dart`.
- `generate:component` scaffolds a contract, both implementations, and playground tabs.
- Docs follow Diataxis from `docs/index.md`.
- The visual language in `DESIGN.md` stays: warm paper, forest-green action, 4px grid, 8px radius family, light mode as the primary rendering. Royal Blue stays `brand.blue`. The monolith neon green stays on the logo.
- Radix on web and RN Reusables on native stay the behavior layer.

## Evidence

Re-check these before picking up an item. Paths were read on 2026-11-09.

### Status disagrees with source

`docs/reference/parity-matrix.md` says it was last verified on 2026-03-05 and lists native Slider as unimplemented. `packages/ui-native/src/slider.tsx` is a real `@rn-primitives/slider` control. `docs/reference/component-registry.md` (last verified 2026-09-17) marks Slider implemented. The matrix header still points at `docs/archive/universal-implementation-2026-03-05.md`.

`packages/ui-native/src/button-group.tsx` ignores `orientation` and carries `TODO: Implement proper React Native ButtonGroup logic`. The registry marks native Button Group fully implemented.

These native modules are exported from `packages/ui-native/src/index.ts` and render a passthrough `View`:

- Messaging, still described as planned: `attachment.tsx`, `bubble.tsx`, `marker.tsx`, `message.tsx`, `message-scroller.tsx`, `questionnaire.tsx`.
- Web-only by decision in `AGENTS.md`: `chart.tsx`, `command.tsx`, `resizable.tsx`. `sonner.tsx` renders an empty `ToastProvider`. `scroll-area.tsx` is a `ScrollView` wrapper, which is the native behavior the divergence registry already describes, while the registry still marks Scroll Area unimplemented.

Playground Button docs (`apps/playground-web/src/pages/web/ButtonDocs.tsx`) list sizes as `default | sm | lg | icon`. `packages/ui-core/src/contracts/button.ts` also defines `xs`, `icon-xs`, `icon-sm`, and `icon-lg`.

The registry native-test column uses `—` and never defines it. These files exist while the column says `—`: `carousel.test.tsx`, `form.test.tsx`, `popover.test.tsx`, `progress.test.tsx`. Slider has an implementation and no `slider.test.tsx`.

### What people using the product hit

`packages/ui-web/src/alert.tsx` and `packages/ui-native/src/alert.tsx` paint warning and info with Tailwind `amber-*` and `blue-*`. `packages/ui-web/src/alert.test.tsx` asserts `text-amber-600` and `text-blue-600`. Success exists as `palette.semantic.success` and is absent from `theme.ts`. `DESIGN.md` already says success on the light canvas is about 2:1, and destructive red as small text is about 3.6:1.

`packages/ui-web/src/button.tsx` sizes `xs` and `icon-xs` are 24px (`h-6`, `size-6`). `packages/ui-native/src/button.tsx` has no `hitSlop`. The Button docs build a loading state by disabling the button and rendering `Loader2`. The icon-only example has no accessible name.

Durations live as sentences in `DESIGN.md` (dialog fade 100ms, sheet slide 200ms). Token modules cover color, spacing, type, radius, and shadow. Reduced motion appears on the shimmer utility in `packages/design-tokens/src/vendor/shadcn.css` and the generated `theme.css`.

At review time, `docs/` named accessibility only on the June roadmap and in `docs/archive/bulletproof-dx-plan-2026-06-08.md`. `axe-core` is a dependency. The Vite configs alias it. No test imports it.

### What people building with the system hit

`docs/tutorials/02-first-app-usage.md` offers `@gv-tech/design-system`, the slice packages, and a shadcn copy as peer options. The first Button sample appears before the `theme.css` import.

`package.json` script `shadcn:update` runs `shadcn add --all --overwrite --yes` inside `packages/ui-web`. There is no note that lists what that overwrite must preserve.

`@gv-tech/ui-web` and `@gv-tech/ui-native` depend on `@gv-tech/design-tokens` and `@gv-tech/ui-core` at `^2.12.0`. The workspace version is `2.29.3`.

`packages/ui-flutter/README.md` is the stock Flutter starter. `pubspec.yaml` is `version: 1.0.0` and `publish_to: none`. Tests are `test/gv_button_test.dart` and `test/gv_card_test.dart`. Dart widgets with no Flutter playground page: aspect ratio, button group, carousel, chart, command, direction, form, label, resizable, scroll area, scroll to top, sidebar, table, table of contents, theme toggle.

Docs search (`apps/playground-web/src/components/docs/Search.tsx`) matches `item.title` only.

`packages/ui-native/src/select.tsx` has three `@ts-expect-error TODO: fix type` comments, on the scroll-up button, the scroll-down button, and one JSX site. `packages/ui-native/src/sheet.tsx` still says `TODO: Add support for other sides`, and the next lines already animate top, right, bottom, and left. Those transitions are typed as `any`.

## P0 — Make status honest

### EP-01 — One platform status

**Lane:** Docs. **Effort:** S.

The parity matrix, the registry, and `AGENTS.md` describe three different native surfaces. A consumer checking Slider, Scroll Area, or Chart cannot tell which page to trust.

Steps:

1. Re-read native source for every row the matrix marks unimplemented. Correct Slider to implemented. Treat Scroll Area as the `ScrollView` wrapper it is, and point readers at the divergence row.
2. Split the matrix into two marks: `planned` (messaging family, Button Group until EP-02) and `web-only` (Chart, Command, Resizable, Sonner). Name the native substitute on the web-only row: Toast for Sonner, `ScrollView` for a custom scrollbar, a full-screen sheet for a command palette, a fixed layout for resizable panels.
3. Remove web-only components from `packages/ui-native/src/index.ts`, or export a typed error module that tells the caller which substitute to use. A passthrough `View` reads as support.
4. Put one verification date on the matrix and the registry. Point the matrix header at the registry, and retire the pointer to the March 2026 archive.

**Acceptance:** Slider, Scroll Area, Chart, Command, Resizable, and Sonner have the same status in the matrix, the registry, `AGENTS.md`, and the native entrypoint.

### EP-02 — Native Button Group matches its row

**Lane:** Native, Docs. **Effort:** M. Downgrading the row is S if we choose that.

`button-group.tsx` always lays out a row, drops `orientation`, and skips grouped radii. The registry says the native component is done.

Steps:

1. Either implement horizontal and vertical grouping, the separator, and the text slot to match `packages/ui-web/src/button-group.tsx`, or set the registry and the matrix to `planned` and delete the "fully implemented" mark.
2. Remove the TODO only when the behavior is real.
3. Add `button-group.test.tsx` on the native side if the component stays public.

**Acceptance:** The registry row, the parity row, and the source comment describe the same behavior.

### EP-03 — Messaging stubs leave the native public entry

**Lane:** Native, Docs. **Effort:** M.

Attachment, Bubble, Marker, Message, Message Scroller, and Questionnaire are exported and render empty structure. Callers get a successful import and a blank layout.

Steps:

1. Pick one per component: implement the native behavior, or stop exporting it from `@gv-tech/ui-native`.
2. For anything that stays web-only for now, document that on the parity row and on the native playground page that already says "stub".
3. Keep the contract in `ui-core` so a later native implementation still satisfies the same props.

**Acceptance:** Importing one of these six from `@gv-tech/ui-native` yields a real implementation, or the export is gone and the registry says so.

### EP-04 — Button props come from the contract

**Lane:** Tooling, Docs. **Effort:** M.

Hand-written props tables are already behind `buttonSizeValues`. Every other playground page has the same failure waiting.

Steps:

1. Generate the props table for Button from `buttonVariantValues` and `buttonSizeValues`, including `xs`, `icon-xs`, `icon-sm`, and `icon-lg`.
2. Keep hand-written examples for composition. The union and the default values come from the contract.
3. Note the mechanism in `docs/how-to/update-registry.md` or the create-component tutorial so the next component uses it.
4. Roll the same generator out one component at a time after Button. Full coverage is follow-on work, tracked as a log note under this ID when Button lands.

**Acceptance:** The web and native Button pages list every size in `buttonSizeValues`. Changing the contract without updating the page fails a check, or the page is generated so it cannot drift.

## P1 — People using GV Tech apps

### EP-05 — Status colors are theme roles

**Lane:** Design, Web, Native. **Effort:** M.

Warning and info bypass the token pipeline, and the info blue sits next to Royal Blue. Success cannot be themed for dark mode because it is palette-only.

Steps:

1. Add `success`, `warning`, and `info`, each with a foreground, to `theme.light` and `theme.dark`. Run `bun run sync-tokens`.
2. Choose warning and info hues that stay distinct from forest green and from `brand.blue`. Record the choice in `DESIGN.md`.
3. Point Alert variants on web and native at those roles. Update `alert.test.tsx`, which currently expects `text-amber-600` and `text-blue-600`.
4. Keep success on chips and indicators. Body copy stays `foreground`.

**Acceptance:** Alert warning and info reference theme tokens in light and dark on both platforms. `brand.blue` remains unused by components.

### EP-06 — Contrast check in validate

**Lane:** Design, Tooling. **Effort:** M.

`DESIGN.md` already records the failing pairs. Nothing fails CI when a token edit makes them worse.

Steps:

1. Add a check, run from `bun run validate`, for these pairs: primary on primary-foreground, foreground on background, muted-foreground on background, destructive as text on background, success as text on background.
2. Compute ratios from the HSL in `palette.ts` / `theme.ts` for light and dark.
3. Keep the destructive-as-text exception only for the treatment `DESIGN.md` already specifies: 14px, on its own line, and a non-text indicator beside it. Encode that in Field and Alert error copy.
4. Make the check fail if a passing pair drops below 4.5:1.

**Acceptance:** A token change that drops body ink or primary-button text below 4.5:1 fails `bun run validate`. The known destructive and success text ratios are either raised to 4.5:1 or listed as allowed only in that 14px treatment.

### EP-07 — Touch targets for the small controls

**Lane:** Design, Web, Native. **Effort:** M.

Visual sizes of 24, 28, 32, and 36px are the scale in `DESIGN.md`. A 24px icon button is a miss on a phone.

Steps:

1. Write the rule next to the button sizes in `DESIGN.md`: the glyph may be 24px, the hit target is at least 44px on touch.
2. On native, apply `hitSlop` in one shared helper used by `xs` and `icon-xs` (and any other control under 44px), so each component does not invent a number.
3. On web, document the minimum and expand the hit area for icon-xs without changing the visible box (padding on a wrapper, or an equivalent technique that keeps the 24px glyph).
4. Show the hit area on the Button playground page.

**Acceptance:** The Button page states the hit area for `xs` and `icon-xs`. Native uses one helper. The visible sizes stay 24, 28, 32, and 36px.

### EP-08 — Loading and icon-only buttons

**Lane:** Web, Native, Docs. **Effort:** M.

The published loading recipe disables the control, so assistive tech treats it as unavailable, and the icon-only sample has no name.

Steps:

1. Add a loading pattern that keeps the label, sets `aria-busy`, and renders the spinner as decorative.
2. Prefer a busy button that stays in the tab order. Use `disabled` only when the action itself is unavailable.
3. Give the icon-only example an accessible name (`aria-label` on web, `accessibilityLabel` on native).
4. Cover both with a web test and a native test.

**Acceptance:** Button docs show the busy pattern and a named icon button. Tests fail if the icon button has no name or the busy button drops its label.

### EP-09 — Motion tokens and reduced motion

**Lane:** Design, Web, Native. **Effort:** L.

Dialog, sheet, skeleton, and tooltip each pick their own duration. A user who asks the OS to reduce motion still gets the sheet slide and the skeleton pulse.

Steps:

1. Add duration and easing tokens that match `DESIGN.md`: dialog 100ms, sheet 200ms, plus a shared ease. Sync them the same way colors sync, including Flutter.
2. Use those tokens in dialog, sheet, skeleton, and tooltip on web.
3. On native, drive the same components through Reanimated and skip the animation when the OS reduce-motion setting is on. On web, honor `prefers-reduced-motion`.
4. Leave the shimmer utility's existing reduce-motion rule in place.

**Acceptance:** With reduced motion on, dialog, sheet, skeleton, and tooltip appear without a slide, zoom, or pulse, on web and on native.

## P1 — People building with the system

### EP-10 — Install path that paints with tokens

**Lane:** Docs. **Effort:** S.

A new app can follow the tutorial, render a Button, and miss the token stylesheet. Three install options read as interchangeable.

Steps:

1. Rewrite `docs/tutorials/02-first-app-usage.md` as a decision tree:
   - App depends on the published build: `@gv-tech/ui-web` or `@gv-tech/ui-native`.
   - App wants every component from one package and accepts the meta bundle: `@gv-tech/design-system`.
   - App wants to own the source: the shadcn registry URL.
2. Show the `theme.css` import before the first Button on the web path. Link the token how-to for dark mode.
3. State that `@gv-tech/ui-web` and `@gv-tech/ui-native` are released in lockstep with `design-tokens` and `ui-core`. The package manifests still allow `^2.12.0`. Either raise that floor in the same change or say, on the tutorial, that consumers should install the versions from one release.
4. Mirror the decision tree in the root `README.md` install section so the two pages agree.

**Acceptance:** Following the web section of the tutorial produces a Button on semantic tokens, with `theme.css` imported before Tailwind.

### EP-11 — shadcn intake checklist

**Lane:** Docs. **Effort:** S.

`bun run shadcn:update` overwrites ui-web from upstream. Token classes, contract imports, and GV-only components can disappear in that diff.

Steps:

1. Add a section to `docs/tutorials/03-create-component.md` or `docs/how-to/update-registry.md` that lists the re-check after an overwrite: contract type import, semantic token classes, files that do not exist upstream (messaging, support FAB, questionnaire, and the rest of the GV-only set), and `components.json` aliases.
2. Say to run the update on a branch, read the diff, and refuse a blind commit.
3. Point at `bun run validate` as the gate after the intake.

**Acceptance:** The how-to lists that re-check, and it tells the reader to review the overwrite diff before committing.

### EP-12 — Foundations beyond color

**Lane:** Design, Web. **Effort:** M.

The playground has a color page. Type, space, radius, and elevation exist as TypeScript (`typography.ts`, `spacing.ts`, `radii.ts`, `shadows.ts`) and as prose in `DESIGN.md`. A designer opening the site cannot see them.

Steps:

1. Add playground sections for type, space, radius, and elevation beside `ColorTokensDocs`.
2. Render each scale in light and dark from the token source.
3. Put the `DESIGN.md` rules on that page: one primary action per view, pills only on badges, switches, and avatars, shadows only on sheets and the rare lift, Inter for UI, system mono for code.
4. Note that `radiiNumeric` is locked to an 8px `--radius`. If the base radius changes, update both the CSS calc radii and the numeric map.

**Acceptance:** Each scale is visible in light and dark and matches the token module it claims to show.

### EP-13 — Search covers props and variants

**Lane:** Web. **Effort:** M.

`DocSearchProvider` indexes `item.title`. Searching `icon-xs` or `onPress` returns nothing. This item has been open on the June 2026 roadmap.

Steps:

1. Build the search index from doc titles, descriptions, contract variant unions, and the prop names those pages display.
2. Include the divergence terms (`onPress`, `onChangeText`, `nativeID`) so a native reader finds the Button, Input, and Label pages.
3. Keep the existing analytics event on select.

**Acceptance:** The queries `icon-xs` and `onPress` each return the Button page.

### EP-14 — Four composition recipes

**Lane:** Design, Web. **Effort:** M.

Component pages show a control in isolation. Product screens fail on the combination: where the error sits, which overlay to open, when a toast is wrong.

Steps:

1. Add four playground recipes, each with one copyable example and one rule:
   - Field stack: label, control, hint, error on its own line.
   - Destructive confirm: Alert Dialog, with the destructive action in the tinted style from `DESIGN.md`.
   - Empty state: title, description, one action.
   - Overlay choice: Dialog for a blocking decision, Sheet for a side panel, Drawer for an edge panel with a grabber, Alert for inline status, Toast for a transient result.
2. Use token colors and the loading pattern from EP-08 once that item exists. Until then, use the current Button.
3. Cross-link the recipes from Getting Started.

**Acceptance:** Each recipe renders in the playground, can be copied, and states its rule in one sentence.

### EP-15 — Flutter package story

**Lane:** Flutter, Docs. **Effort:** M.

The Flutter package reads as a fresh `flutter create`. It is unpublished at 1.0.0 while the JS line is 2.29.3. Fifteen widgets have no playground page. Two widgets have tests.

Steps:

1. Replace `packages/ui-flutter/README.md` with the real story: what the package is, that `publish_to` is `none`, the version gap, how tokens arrive (`gv_tokens.g.dart` via `sync-tokens`), and the two tests that exist.
2. List every Dart widget as documented, undocumented, or web-only. The widgets with source and no Flutter playground page today: aspect ratio, button group, carousel, chart, command, direction, form, label, resizable, scroll area, scroll to top, sidebar, table, table of contents, theme toggle.
3. Add playground pages for the widgets that already have a Dart implementation and a web page. Skip Chart, Command, and Resizable until EP-01 classifies them, and skip any widget whose Dart file is a stub.
4. Leave publishing and full behavioral parity for a later ID. This item makes the current tree legible.

**Acceptance:** A reader of the Flutter README can tell what is safe to call, what has a playground page, and what has a test, without opening `lib/src/components/`.

## P2 — Gates and leftovers

### EP-16 — axe on four compositions

**Lane:** Tooling, Web. **Effort:** M.

`axe-core` is already installed and unused. A missing name or a dialog without a label should fail here, in CI.

Steps:

1. Render Button (including the icon-only case), a field stack, Dialog, and Alert in Vitest.
2. Run axe against those renders.
3. Fail the suite on a serious or critical violation. Start with those four. Add a component when its page changes.

**Acceptance:** Removing the dialog label or the icon button's name fails the test.

### EP-17 — Web screenshot checks

**Lane:** Tooling. **Effort:** L.

Token and radius edits can ship while every unit test stays green. Native tests run through the react-native-web shim in Vitest, so they do not see device pixels.

Steps:

1. Capture light and dark screenshots for the same four compositions as EP-16, from the playground build.
2. Fail the job when Button or Alert shifts because a token or radius changed and the snapshot was not updated on purpose.
3. Device screenshots on the Expo playground are the follow-on, filed as a log note under this ID when the web checks exist. The jsdom shim does not cover that follow-on. The June roadmap's "mobile a11y testing" item lives here too: run it on the Expo playground against Button, field, Dialog, and Alert once the web axe suite is in place.

**Acceptance:** An unreviewed change to the Button or Alert snapshot fails the web check. The doc for the check says device coverage is still open.

### EP-18 — Test column matches the tree

**Lane:** Docs, Native. **Effort:** M.

`—` looks like a quiet pass. It means "no mark", and several of those rows already have tests.

Steps:

1. Define the legend: implemented and tested, implemented with no test, stub, web-only.
2. Reconcile the column with `packages/ui-native/src/*.test.tsx`. At review time, Carousel, Form, Popover, and Progress had tests while the column said `—`.
3. Add native tests for implemented components that have none, in this order: Slider, Dropdown Menu, Drawer, Calendar, Pagination. Breadcrumb, Navigation Menu, Menubar, Hover Card, Context Menu, and Aspect Ratio follow.
4. Keep running those tests in Vitest. Say in the registry that this is the shim, and device coverage is EP-17's follow-on.

**Acceptance:** The legend matches every mark. Slider, Dropdown Menu, Drawer, Calendar, and Pagination have native tests.

### EP-19 — Select types and the Sheet comment

**Lane:** Native. **Effort:** M.

`select.tsx` suppresses three type errors. `sheet.tsx` asks for side support the file already has, and types the Reanimated transitions as `any`.

Steps:

1. Type the Select scroll buttons so the `@ts-expect-error` comments can go.
2. Delete the Sheet TODO. Type `entering` and `exiting` with the Reanimated types those `SlideIn*` values already have.
3. If a side is still missing after that, add one divergence-registry row for it. On current source, all four sides animate.

**Acceptance:** `select.tsx` and `sheet.tsx` contain no `@ts-expect-error` and no `TODO` about sides. The divergence registry mentions Sheet sides only if one is actually unsupported.

### EP-20 — Charts stay web-only

**Lane:** Docs. **Effort:** S.

The June roadmap leaves "evaluate victory-native" open. Nothing in the product line asks for a second chart library, and the native chart module is a passthrough.

Steps:

1. Mark Chart web-only in the parity matrix, with the reason: Recharts depends on DOM measurement, and no product has asked for a native chart.
2. Remove the victory-native evaluation from the living roadmap. EP-01 covers the entrypoint.
3. Re-open a new ID only when a product screen needs native charts.

**Acceptance:** The roadmap and the parity matrix describe Chart as web-only. Neither tells a reader that a native chart port is in progress.

## Deferred

These were open on the June 2026 roadmap. They are recorded so they are not lost, and they are not scheduled.

- A dark-mode frame on every component page. EP-12 covers foundations. EP-17 covers four compositions. The rest waits until those two are `done`.
- An Expo Snack or Appetize embed in the browser. The native playground on a simulator remains the way to try touch behavior.

## Out of scope

This program leaves the following in place.

- Radix, RN Reusables, and the contract-first package split.
- Royal Blue as `brand.blue`, and the monolith neon green on the logo only.
- A native chart library. See EP-20.
- Publishing Flutter, and Flutter behavior parity with web, until EP-15 has made the current package honest.
- Hand-rewriting every component page. EP-04 is the mechanism. New prose in this program is the foundations page and the four recipes.

## Log

| Date       | Change                                                                                        |
| :--------- | :-------------------------------------------------------------------------------------------- |
| 2026-11-09 | Program opened from a review of tokens, contracts, playground, and docs. All rows `proposed`. |
