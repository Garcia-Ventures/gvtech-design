# Component Registry

> **Last verified:** 2026-11-09 against `packages/ui-native/src/index.ts`. Regenerate the shadcn JSON with `bun run build:registry`, then update the marks below. Group notes: [Parity Matrix](./parity-matrix.md).

This document serves as the single source of truth for the implementation status of all components within the GV Tech Design System.

> **Legend:** ✅ Exported implementation | ⏳ Planned, not exported | 🚫 Web-only, not exported | 🟢 Test file present | — No test file. `—` is not a pass. Test-column cleanup is EP-18.

| Component             | Web Implementation | Native Implementation | Web Tests | Native Tests |
| :-------------------- | :----------------: | :-------------------: | :-------: | :----------: |
| **Accordion**         |         ✅         |          ✅           |    🟢     |      🟢      |
| **Alert**             |         ✅         |          ✅           |    🟢     |      🟢      |
| **Alert Dialog**      |         ✅         |          ✅           |    🟢     |      🟢      |
| **Aspect Ratio**      |         ✅         |          ✅           |    🟢     |      —       |
| **Attachment**        |         ✅         |          ⏳           |    🟢     |      —       |
| **Avatar**            |         ✅         |          ✅           |    🟢     |      🟢      |
| **Badge**             |         ✅         |          ✅           |    🟢     |      🟢      |
| **Breadcrumb**        |         ✅         |          ✅           |    🟢     |      —       |
| **Bubble**            |         ✅         |          ⏳           |    🟢     |      —       |
| **Button**            |         ✅         |          ✅           |    🟢     |      🟢      |
| **Button Group**      |         ✅         |          ✅           |    🟢     |      🟢      |
| **Calendar**          |         ✅         |          ✅           |    🟢     |      —       |
| **Card**              |         ✅         |          ✅           |    🟢     |      🟢      |
| **Carousel**          |         ✅         |          ✅           |    🟢     |      —       |
| **Chart**             |         ✅         |          🚫           |    🟢     |      —       |
| **Checkbox**          |         ✅         |          ✅           |    🟢     |      🟢      |
| **Collapsible**       |         ✅         |          ✅           |    🟢     |      🟢      |
| **Combobox**          |         ✅         |          ✅           |    🟢     |      🟢      |
| **Command**           |         ✅         |          🚫           |    🟢     |      —       |
| **Context Menu**      |         ✅         |          ✅           |    🟢     |      —       |
| **Dialog**            |         ✅         |          ✅           |    🟢     |      🟢      |
| **Direction**         |         ✅         |          ✅           |    🟢     |      🟢      |
| **Drawer**            |         ✅         |          ✅           |    🟢     |      —       |
| **Dropdown Menu**     |         ✅         |          ✅           |    🟢     |      —       |
| **Empty State**       |         ✅         |          ✅           |    🟢     |      🟢      |
| **Field**             |         ✅         |          ✅           |    🟢     |      🟢      |
| **Form**              |         ✅         |          ✅           |    🟢     |      —       |
| **Hover Card**        |         ✅         |          ✅           |    🟢     |      —       |
| **Input**             |         ✅         |          ✅           |    🟢     |      🟢      |
| **Input Group**       |         ✅         |          ✅           |    🟢     |      🟢      |
| **Input OTP**         |         ✅         |          ✅           |    🟢     |      🟢      |
| **Item**              |         ✅         |          ✅           |    🟢     |      🟢      |
| **Kbd**               |         ✅         |          ✅           |    🟢     |      🟢      |
| **Label**             |         ✅         |          ✅           |    🟢     |      🟢      |
| **Marker**            |         ✅         |          ⏳           |    🟢     |      —       |
| **Message**           |         ✅         |          ⏳           |    🟢     |      —       |
| **Message Scroller**  |         ✅         |          ⏳           |    🟢     |      —       |
| **Menubar**           |         ✅         |          ✅           |    🟢     |      —       |
| **Native Select**     |         ✅         |          ✅           |    🟢     |      🟢      |
| **Navigation Menu**   |         ✅         |          ✅           |    🟢     |      —       |
| **Pagination**        |         ✅         |          ✅           |    🟢     |      —       |
| **Popover**           |         ✅         |          ✅           |    🟢     |      —       |
| **Progress**          |         ✅         |          ✅           |    🟢     |      —       |
| **Questionnaire**     |         ✅         |          ⏳           |    🟢     |      —       |
| **Radio Group**       |         ✅         |          ✅           |    🟢     |      🟢      |
| **Resizable**         |         ✅         |          🚫           |    🟢     |      —       |
| **Scroll Area**       |         ✅         |          ✅           |    🟢     |      —       |
| **Scroll To Top**     |         ✅         |          ✅           |    🟢     |      🟢      |
| **Search**            |         ✅         |          ✅           |    🟢     |      🟢      |
| **Select**            |         ✅         |          ✅           |    🟢     |      🟢      |
| **Separator**         |         ✅         |          ✅           |    🟢     |      🟢      |
| **Sheet**             |         ✅         |          ✅           |    🟢     |      🟢      |
| **Sidebar**           |         ✅         |          ✅           |    🟢     |      🟢      |
| **Skeleton**          |         ✅         |          ✅           |    🟢     |      🟢      |
| **Slider**            |         ✅         |          ✅           |    🟢     |      —       |
| **Sonner**            |         ✅         |          🚫           |    🟢     |      —       |
| **Spinner**           |         ✅         |          ✅           |    🟢     |      🟢      |
| **Support FAB**       |         ✅         |          ✅           |    🟢     |      🟢      |
| **Switch**            |         ✅         |          ✅           |    🟢     |      🟢      |
| **Table**             |         ✅         |          ✅           |    🟢     |      🟢      |
| **Table Of Contents** |         ✅         |          ✅           |    🟢     |      🟢      |
| **Tabs**              |         ✅         |          ✅           |    🟢     |      🟢      |
| **Text**              |         ✅         |          ✅           |    🟢     |      🟢      |
| **Textarea**          |         ✅         |          ✅           |    🟢     |      🟢      |
| **Theme Toggle**      |         ✅         |          ✅           |    🟢     |      🟢      |
| **Toast**             |         ✅         |          ✅           |    🟢     |      🟢      |
| **Toggle**            |         ✅         |          ✅           |    🟢     |      🟢      |
| **Toggle Group**      |         ✅         |          ✅           |    🟢     |      🟢      |
| **Tooltip**           |         ✅         |          ✅           |    🟢     |      🟢      |
