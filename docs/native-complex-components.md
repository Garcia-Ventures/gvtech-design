# Native Complex Components Tracker

This document tracks the implementation status and strategy for complex `@gv-tech/ui-native` components that require significant custom development or the integration of external dependencies.

## Status Overview

| Component     | Status  | Target Priority | Dependencies Needed?                                    |
| :------------ | :------ | :-------------- | :------------------------------------------------------ |
| **Calendar**  | Stubbed | High            | Yes (e.g., `react-native-calendars`)                    |
| **Chart**     | Stubbed | Medium          | Yes (e.g., `react-native-svg-charts`, `victory-native`) |
| **Command**   | Stubbed | Low             | No (Custom filtering / Modal required)                  |
| **Resizable** | Stubbed | Low             | No (Requires `react-native-gesture-handler`)            |

---

## Component Strategies

### Calendar

The Web component uses `react-day-picker`. For Native, achieving parity requires a robust date manipulation and calendar UI library.

- **Proposed Solution**: Integrate `react-native-calendars`.
- **Requirements**:
  - Mapping `ui-core` `CalendarBaseProps` to `react-native-calendars` props.
  - Custom styling utilizing the `design-tokens` package to match the web's visual appearance.

### Chart

The Web component relies heavily on `recharts`. There is no direct 1:1 translation for Native.

- **Proposed Solution**: Evaluate `victory-native` or `react-native-chart-kit`. `victory-native` offers more flexibility for complex data visualization.
- **Requirements**:
  - Establish a shared contract for chart configuration (data structure, colors, tooltips).
  - Implement a provider to inject `design-tokens` into the chart library's theme engine.

### Command

The Web component uses `cmdk` for an accessible command palette experience.

- **Proposed Solution**: Build a custom native command palette.
- **Requirements**:
  - Use `Dialog` for the overlay mechanism.
  - Implement a custom `TextInput` with fuzzy search/filtering capabilities.
  - Build `CommandGroup` and `CommandItem` using `FlatList` for performance with large datasets.

### Resizable

The Web component uses `react-resizable-panels`.

- **Proposed Solution**: Build a custom resizer using `react-native-gesture-handler` and `react-native-reanimated`.
- **Requirements**:
  - Implement a draggable `ResizableHandle`.
  - Use Reanimated shared values to dynamically adjust the Flexbox `flex` or `width`/`height` of `ResizablePanel` components based on gesture events.
