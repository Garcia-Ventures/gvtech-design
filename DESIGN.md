# Design System

GV Tech product UI. Hex values are the sRGB form of the HSL tokens in `packages/design-tokens/src/palette.ts` and `theme.ts`. Those HSL strings stay the source of truth. Screens use the semantic roles (`primary`, `background`, `foreground`), not raw hex and not the monolith mark's electric green.

## Overview

A calm, institutional interface for Garcia Ventures software. Warm paper, deep green ink, and one forest-green action color. Density is a daily working app: comfortable, not gallery-airy and not cockpit-tight. Geometry is quietly rounded. Depth comes from a lighter card sitting on a slightly deeper beige page, outlined by a hairline ring.

Light mode is the primary rendering. Dark mode remaps the same roles onto a warm charcoal field with a brighter green action color. Spacing follows a 4px grid. The monolith mark may appear as a logo. Its obsidian metal and neon slit stay in brand art.

## Colors

Neutrals are warm (hue 30–35). Text on light surfaces is deep green ink, not neutral black. There is no pure black.

- **Primary** (#246B47 light, #5EBA8C dark): the one main action, the focus ring, and checked checkboxes, radios, and switches.
- **On-primary** (#FAF8F5 light, #0E251A dark): text and icons on primary fills. The dark pair is deep green ink on the brighter green, not white.
- **Secondary** (#4D8066 light, #8BC1A6 dark): supporting filled actions and badges.
- **On-secondary** (#FAF8F5 light, #0E251A dark): text and icons on secondary fills.
- **Tertiary** (#4169E1): Royal Blue, retained in the palette as `brand.blue`. It is not a theme role and components do not use it. Do not promote it to primary.
- **Surface** (#E8E2D9 light, #231F1A dark): page background.
- **Surface container** (#F3F0ED light, #2E2924 dark): cards and popovers.
- **On-surface** (#1C5438 light, #EFEBE7 dark): primary text.
- **Muted surface** (#D4CDC4 light, #3E3832 dark): borders, input strokes, and quiet fills.
- **Muted text** (#455E52 light, #BCB4A9 dark): descriptions, placeholders, and metadata.
- **Accent** (#D9D2C9 light, #332E28 dark): hover and selected quiet surfaces. Not a second brand color.
- **Sidebar** (#E8E2D9 light, #181411 dark): same as the page in light. Recessed warm black in dark, with muted text (#BCB4A9) and a primary active item.
- **Error** (#EF4444 light, #7F1D1D dark): validation and destructive tints. On light paper the red is about 3.6:1, short of WCAG AA for small text. Keep error copy on its own line at 14px, and do not lighten the red.
- **Success** (#86AB69 light, #93C770 dark): status only. It is a yellow-green, distinct from the brand greens. It fails as text on the light canvas (about 2:1). Use it as a chip or indicator fill.

Primary button text passes WCAG AA (about 6.1:1 light, 6.8:1 dark). Body ink and muted text on the canvas also pass.

## Typography

One family for the whole UI. Headlines and body are both Inter, with the system sans behind it. Code uses the system monospace stack (`ui-monospace`, SF Mono, Menlo, Consolas). Do not add a serif or a second sans.

- **Display**: Inter, bold (700), 36–48px, line-height 1.25.
- **Headline**: Inter, semibold (600), 24–30px, line-height 1.375.
- **Title**: Inter, medium (500), 16–20px. Card titles are 16px medium with snug leading.
- **Body**: Inter, regular (400), 14–16px, line-height 1.5. Inputs are 16px below the `md` breakpoint and 14px from `md` up.
- **Label**: Inter, medium (500), 14px. Labels are not uppercase. Field legends are 16px medium.

The weight scale is 400, 500, 600, and 700. Buttons, badges, and field labels use medium.

## Elevation

Depth is surface color and a hairline ring. Default chrome has no drop shadow.

Cards and dialogs sit on the surface-container color, with corners at 12px and a 1px ring in the foreground color at 10% opacity. A card footer is a muted band with a top border. Dialogs use that same ring and a short fade-and-zoom (100ms). They do not use a drop shadow.

Sheets are the overlay that lifts: the large shadow (`0 10px 15px -3px` at 10% black, plus a tighter second layer) and a 200ms slide. Drawers use a border, a 12px top radius, and a small muted grabber. They do not use a drop shadow.

The shadow scale (`sm` through `2xl`, neutral black at 5–25% opacity) exists for those rare lifts. Do not apply it to cards, buttons, or inputs.

Focus is a 3px ring in the primary color at 50% opacity, plus a primary border. Invalid fields swap the ring and border to the error color. Pressed buttons move down 1px. Disabled controls drop to 50% opacity.

## Components

Corners stay in one family. The base radius is 8px. Controls use 8px, cards and dialogs use 12px, tooltips use 6px. Pills are only for badges, switches, and avatars. Icons are Lucide: 16px in buttons, 12px in badges.

- **Buttons**: 8px corners. Default is 32px tall, 10px horizontal padding, 14px medium label. Primary is a solid primary fill with on-primary text, dropping to 80% opacity on hover. Secondary is a solid secondary fill. Outline is the page surface with a muted border, filling with the muted surface on hover. Ghost has no fill until hover. Link is primary text with an underline on hover. Destructive is a 10–20% error tint with error text, not a solid red fill. Sizes: 24px, 28px, 32px, and 36px, plus matching icon squares. One primary button per view.
- **Badges**: pill, 20px tall, 12px medium type, same variant logic as buttons, including the tinted destructive chip.
- **Inputs**: 32px tall, 8px corners, 1px muted border, transparent fill (in dark, the muted surface at 30%). Placeholder is muted text. Focus uses the primary ring. Error uses the error border and ring. Labels are 14px medium, above or beside the control. Helper text is 14px muted under the field. Error text is 14px error color under the field. The default stack is vertical with an 8px gap.
- **Checkboxes**: 16px, 4px corners, primary fill and on-primary check when checked.
- **Radio buttons**: 16px circle, primary fill, on-primary center dot when selected.
- **Switches**: full pill. Unchecked uses the muted surface. Checked uses primary. The visible control is about 32×18px. The hit area extends past it.
- **Cards**: 12px corners, surface-container fill, 1px ring, no shadow. Title 16px medium, description 14px muted, padding 16px (12px on the small size).
- **Lists**: quiet 1px muted rules. No heavy dividers.
- **Tooltips**: on-surface fill, surface-colored 12px text, 6px corners, max width about 20rem, with an arrow. They open immediately.
- **Sidebar**: page surface in light. In dark, recessed to #181411 with muted text and a primary active item.

## Do's and Don'ts

- Do use semantic theme roles. Paint with `primary`, `background`, and `foreground`, not with raw palette steps or hex.
- Do treat light and dark as a pair. Primary, surface, and text all swap together.
- Do spend primary on the single most important action, the focus ring, and checked controls.
- Do keep the monolith's electric green in the logo. Product actions use forest green #246B47 (light) or #5EBA8C (dark).
- Do keep success yellow-green on status chips and indicators.
- Do keep error copy on its own line at 14px.
- Do keep corners in the 8px family, with pills only on badges, switches, and avatars.
- Do keep all UI type in Inter. Code uses the system monospace stack.
- Do edit color in `palette.ts` and `theme.ts`, then run `bun run sync-tokens`.
- Don't promote Royal Blue #4169E1 to primary.
- Don't use success yellow-green as body text or as a second call-to-action green.
- Don't lighten the error red, and don't set it as large body copy. On light paper it is about 3.6:1.
- Don't mix 0px corners into a view that uses the 8px family.
- Don't add a display serif or a second sans.
- Don't put drop shadows on cards, buttons, inputs, or dialogs.
- Don't hand-edit `theme.css` or `packages/ui-flutter/lib/src/tokens/gv_tokens.g.dart`.
