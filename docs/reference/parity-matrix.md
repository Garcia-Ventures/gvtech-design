# Reference: Platform Parity Matrix

> Facts only. Last verified: 2026-03-05 (source: `universal-implementation.md`). Re-verify with `bun run build:registry` + registry audit before relying on ⏳ rows.
> Legend: ✅ Real | 🚫 Stub / web-only (not yet implemented or intentionally native-inappropriate)

## Forms

| Component    | Web | Native | Notes                                                  |
| :----------- | :-: | :----: | :----------------------------------------------------- |
| Button       | ✅  |   ✅   | Pressable + all variants; `onPress` replaces `onClick` |
| Checkbox     | ✅  |   ✅   | `@rn-primitives/checkbox`; size/stroke differ          |
| Combobox     | ✅  |   ✅   | Modal + embedded search + FlatList                     |
| Form         | ✅  |   ✅   | react-hook-form; web-first pattern                     |
| Input        | ✅  |   ✅   | RN `TextInput`; `onChangeText`, not `onChange`         |
| Label        | ✅  |   ✅   | `nativeID` + `onPress`, not `htmlFor`                  |
| Radio Group  | ✅  |   ✅   | `@rn-primitives/radio-group`                           |
| Select       | ✅  |   ✅   | Complex native impl; fully typed                       |
| Slider       | ✅  |   🚫   | No Expo-compatible RN primitive                        |
| Switch       | ✅  |   ✅   | `@rn-primitives/switch`                                |
| Textarea     | ✅  |   ✅   | `TextInput multiline`; `textAlignVertical="top"`       |
| Toggle       | ✅  |   ✅   | Pressable active state                                 |
| Toggle Group | ✅  |   ✅   | Multi/single modes                                     |

## Data Display

| Component   | Web | Native | Notes                                            |
| :---------- | :-: | :----: | :----------------------------------------------- |
| Accordion   | ✅  |   ✅   | `@rn-primitives/accordion` + Reanimated chevron  |
| Alert       | ✅  |   ✅   | default, destructive, warning, info              |
| Avatar      | ✅  |   ✅   | `@rn-primitives/avatar`                          |
| Badge       | ✅  |   ✅   | Text in View; NativeWind variants                |
| Calendar    | ✅  |   ✅   | `@react-native-community/datetimepicker` wrapped |
| Card        | ✅  |   ✅   | View/Text; full sub-components                   |
| Carousel    | ✅  |   ✅   | Paging via `ScrollView`                          |
| Chart       | ✅  |   🚫   | recharts web-only SVG; victory-native candidate  |
| Collapsible | ✅  |   ✅   | `@rn-primitives/collapsible`                     |
| Skeleton    | ✅  |   ✅   | Reanimated pulse vs CSS animation                |
| Table       | ✅  |   ✅   | View/Text rows; no HTML table                    |
| Text        | ✅  |   ✅   | Shared `variant` scale                           |

## Feedback

| Component    | Web | Native | Notes                                   |
| :----------- | :-: | :----: | :-------------------------------------- |
| Alert Dialog | ✅  |   ✅   | `@rn-primitives/alert-dialog` + overlay |
| Dialog       | ✅  |   ✅   | `@rn-primitives/dialog` modal + fade    |
| Hover Card   | ✅  |   ✅   | `@rn-primitives/hover-card`             |
| Popover      | ✅  |   ✅   | Modal-based                             |
| Progress     | ✅  |   ✅   | View-based bar                          |
| Sheet        | ✅  |   ✅   | SlideInRight/Left; `side` supported     |
| Sonner       | ✅  |   🚫   | Web toast lib; use `Toast` on native    |
| Toast        | ✅  |   ✅   | `@rn-primitives/toast` + FadeInUp       |
| Tooltip      | ✅  |   ✅   | `@rn-primitives/tooltip` + FadeIn/Out   |

## Navigation

| Component       | Web | Native | Notes                                    |
| :-------------- | :-: | :----: | :--------------------------------------- |
| Breadcrumb      | ✅  |   ✅   | View/Text links                          |
| Command         | ✅  |   🚫   | cmdk-based; no RN equivalent             |
| Context Menu    | ✅  |   ✅   | `@rn-primitives/context-menu`            |
| Drawer          | ✅  |   ✅   | `@rn-primitives/dialog` + SlideInDown    |
| Dropdown Menu   | ✅  |   ✅   | `@rn-primitives/dropdown-menu`           |
| Menubar         | ✅  |   ✅   | `@rn-primitives/menubar`                 |
| Navigation Menu | ✅  |   ✅   | `@rn-primitives/navigation-menu`         |
| Pagination      | ✅  |   ✅   | Button-based controls                    |
| Search          | ✅  |   ✅   | Command palette pattern                  |
| Tabs            | ✅  |   ✅   | `@rn-primitives/tabs` + TextClassContext |

## Messaging (web-first, landed 2026-09-17)

| Component        | Web | Native | Notes                                                        |
| :--------------- | :-: | :----: | :----------------------------------------------------------- |
| Attachment       | ✅  |   🚫   | Stub: View passthrough; full impl deferred                   |
| Bubble           | ✅  |   🚫   | Stub: View passthrough; 7 variants + reactions deferred      |
| Marker           | ✅  |   🚫   | Stub: View passthrough; separator/border variants deferred   |
| Message          | ✅  |   🚫   | Stub: View passthrough; align + slots deferred               |
| Message Scroller | ✅  |   🚫   | Stub: ScrollView viewport; `@shadcn/react` has no RN mapping |
| Questionnaire    | ✅  |   🚫   | Stub: View/Pressable; `@shadcn/react` has no RN mapping      |

## Layout / Utilities

| Component    | Web | Native | Notes                               |
| :----------- | :-: | :----: | :---------------------------------- |
| Aspect Ratio | ✅  |   ✅   | `@rn-primitives/aspect-ratio`       |
| Resizable    | ✅  |   🚫   | Drag panels; not a native pattern   |
| Scroll Area  | ✅  |   🚫   | Use RN `ScrollView` directly        |
| Separator    | ✅  |   ✅   | `@rn-primitives/separator`          |
| Theme Toggle | ✅  |   ✅   | Dark/light/system via ThemeProvider |

See also: [Component Registry](./component-registry.md) (per-component test status), [Divergence Registry](./divergence-registry.md) (intent behind differences).
