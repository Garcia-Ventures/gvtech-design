# Reference: Platform Divergence Registry

Document intentional platform differences here. Each entry preserves the _semantic intent_ across platforms.

| Component    | Web behavior                      | Native behavior                                | Semantic intent                |
| :----------- | :-------------------------------- | :--------------------------------------------- | :----------------------------- |
| Button       | `onClick`                         | `onPress` (Pressable)                          | User activates an action       |
| Input        | `onChange` → `event.target.value` | `onChangeText` → `string`                      | User enters text               |
| Label        | `htmlFor` association             | `nativeID` + `onPress`                         | Label identifies a control     |
| Checkbox     | Browser checkbox input            | `@rn-primitives/checkbox` Pressable            | Binary selection toggle        |
| Dialog       | Radix overlay                     | `@rn-primitives/dialog` modal                  | Blocking modal surface         |
| Sheet        | Radix side panel                  | SlideInRight/Left Reanimated                   | Supplemental edge panel        |
| Toast        | `sonner` library                  | `@rn-primitives/toast` + Reanimated            | Transient dismissible feedback |
| Skeleton     | CSS `animate-pulse`               | Reanimated `withRepeat`/`withTiming`           | Loading placeholder            |
| Tooltip      | Radix hover                       | `@rn-primitives/tooltip` + FadeIn (long-press) | Contextual help                |
| Table        | HTML table/tr/td                  | `View` rows + `Text` cells                     | Tabular data                   |
| Text         | span/p + `cn()`                   | RN `Text` + `variant`                          | Typographic content            |
| Accordion    | Radix + CSS height                | Reanimated chevron + content                   | Expandable section             |
| Drawer (web) | vaul bottom sheet                 | Use `Sheet` on native                          | Edge-anchored modal panel      |
| Scroll Area  | Custom scrollbar                  | Use RN `ScrollView`                            | Scrollable region              |
| Sonner       | Web toast lib                     | Use `Toast` on native                          | Notification toasts            |
| Popover      | Radix portal                      | Centered modal overlay                         | Floating contextual content    |
| Progress     | CSS bar                           | View-based bar                                 | Task completion indicator      |

Rule: add a row whenever native UX must differ. New components: propose the divergence in the PR and link it here.
