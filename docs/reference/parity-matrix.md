# Reference: Platform Parity Matrix

> Facts only. Last verified: 2026-11-09 against `packages/ui-native/src` and `packages/ui-native/src/index.ts`.
> Legend: ✅ Exported implementation | ⏳ Planned, contract stays in `ui-core`, not exported from `@gv-tech/ui-native` | 🚫 Web-only, not exported. Use the substitute in the notes.

## Forms

| Component    | Web | Native | Notes                                                                |
| :----------- | :-: | :----: | :------------------------------------------------------------------- |
| Button       | ✅  |   ✅   | Pressable + all variants; `onPress` replaces `onClick`               |
| Button Group | ✅  |   ✅   | Orientation and separator match. Joined corner radii stay on the web |
| Checkbox     | ✅  |   ✅   | `@rn-primitives/checkbox`; size/stroke differ                        |
| Combobox     | ✅  |   ✅   | Modal + embedded search + FlatList                                   |
| Form         | ✅  |   ✅   | react-hook-form; web-first pattern                                   |
| Input        | ✅  |   ✅   | RN `TextInput`; `onChangeText`, not `onChange`                       |
| Label        | ✅  |   ✅   | `nativeID` + `onPress`, not `htmlFor`                                |
| Radio Group  | ✅  |   ✅   | `@rn-primitives/radio-group`                                         |
| Select       | ✅  |   ✅   | Complex native impl; fully typed                                     |
| Slider       | ✅  |   ✅   | `@rn-primitives/slider`                                              |
| Switch       | ✅  |   ✅   | `@rn-primitives/switch`                                              |
| Textarea     | ✅  |   ✅   | `TextInput multiline`; `textAlignVertical="top"`                     |
| Toggle       | ✅  |   ✅   | Pressable active state                                               |
| Toggle Group | ✅  |   ✅   | Multi/single modes                                                   |

## Data Display

| Component   | Web | Native | Notes                                                                    |
| :---------- | :-: | :----: | :----------------------------------------------------------------------- |
| Accordion   | ✅  |   ✅   | `@rn-primitives/accordion` + Reanimated chevron                          |
| Alert       | ✅  |   ✅   | default, destructive, warning, info                                      |
| Avatar      | ✅  |   ✅   | `@rn-primitives/avatar`                                                  |
| Badge       | ✅  |   ✅   | Text in View; NativeWind variants                                        |
| Calendar    | ✅  |   ✅   | `@react-native-community/datetimepicker` wrapped                         |
| Card        | ✅  |   ✅   | View/Text; full sub-components                                           |
| Carousel    | ✅  |   ✅   | Paging via `ScrollView`                                                  |
| Chart       | ✅  |   🚫   | Web-only. Recharts measures the DOM. No native port until a product asks |
| Collapsible | ✅  |   ✅   | `@rn-primitives/collapsible`                                             |
| Skeleton    | ✅  |   ✅   | Reanimated pulse vs CSS animation                                        |
| Table       | ✅  |   ✅   | View/Text rows; no HTML table                                            |
| Text        | ✅  |   ✅   | Shared `variant` scale                                                   |

## Feedback

| Component    | Web | Native | Notes                                         |
| :----------- | :-: | :----: | :-------------------------------------------- |
| Alert Dialog | ✅  |   ✅   | `@rn-primitives/alert-dialog` + overlay       |
| Dialog       | ✅  |   ✅   | `@rn-primitives/dialog` modal + fade          |
| Hover Card   | ✅  |   ✅   | `@rn-primitives/hover-card`                   |
| Popover      | ✅  |   ✅   | Modal-based                                   |
| Progress     | ✅  |   ✅   | View-based bar                                |
| Sheet        | ✅  |   ✅   | SlideInRight/Left; `side` supported           |
| Sonner       | ✅  |   🚫   | Web-only. Not exported. Use `Toast` on native |
| Toast        | ✅  |   ✅   | `@rn-primitives/toast` + FadeInUp             |
| Tooltip      | ✅  |   ✅   | `@rn-primitives/tooltip` + FadeIn/Out         |

## Navigation

| Component       | Web | Native | Notes                                          |
| :-------------- | :-: | :----: | :--------------------------------------------- |
| Breadcrumb      | ✅  |   ✅   | View/Text links                                |
| Command         | ✅  |   🚫   | Web-only. Not exported. Use `Search` on native |
| Context Menu    | ✅  |   ✅   | `@rn-primitives/context-menu`                  |
| Drawer          | ✅  |   ✅   | `@rn-primitives/dialog` + SlideInDown          |
| Dropdown Menu   | ✅  |   ✅   | `@rn-primitives/dropdown-menu`                 |
| Menubar         | ✅  |   ✅   | `@rn-primitives/menubar`                       |
| Navigation Menu | ✅  |   ✅   | `@rn-primitives/navigation-menu`               |
| Pagination      | ✅  |   ✅   | Button-based controls                          |
| Search          | ✅  |   ✅   | Command palette pattern                        |
| Tabs            | ✅  |   ✅   | `@rn-primitives/tabs` + TextClassContext       |

## Messaging (web-first, landed 2026-09-17)

| Component        | Web | Native | Notes                                                            |
| :--------------- | :-: | :----: | :--------------------------------------------------------------- |
| Attachment       | ✅  |   ⏳   | Planned. Not exported. Web implementation is the one to use      |
| Bubble           | ✅  |   ⏳   | Planned. Not exported. Web implementation is the one to use      |
| Marker           | ✅  |   ⏳   | Planned. Not exported. Web implementation is the one to use      |
| Message          | ✅  |   ⏳   | Planned. Not exported. Web implementation is the one to use      |
| Message Scroller | ✅  |   ⏳   | Planned. Not exported. Web uses `@shadcn/react/message-scroller` |
| Questionnaire    | ✅  |   ⏳   | Planned. Not exported. Web uses `@shadcn/react/questionnaire`    |

## Layout / Utilities

| Component    | Web | Native | Notes                                                                           |
| :----------- | :-: | :----: | :------------------------------------------------------------------------------ |
| Aspect Ratio | ✅  |   ✅   | `@rn-primitives/aspect-ratio`                                                   |
| Resizable    | ✅  |   🚫   | Web-only. Not exported. Use a fixed layout on native                            |
| Scroll Area  | ✅  |   ✅   | Exported `ScrollView` wrapper. Platform indicators. `ScrollBar` renders nothing |
| Separator    | ✅  |   ✅   | `@rn-primitives/separator`                                                      |
| Theme Toggle | ✅  |   ✅   | Dark/light/system via ThemeProvider                                             |

See also: [Component Registry](./component-registry.md) (per-component test status), [Divergence Registry](./divergence-registry.md) (intent behind differences).
