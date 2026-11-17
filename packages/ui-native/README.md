# @gv-tech/ui-native

React Native implementations of the GV Tech design system. Built with NativeWind v5 and React Native primitives for Expo.

## Installation

Full setup (Metro, Babel, tokens, `ThemeProvider`): [Set up React Native](../../docs/how-to/setup-react-native.md).

```bash
bun add @gv-tech/ui-native @gv-tech/design-tokens nativewind@5.0.0-rc.1 react-native-css@3.1.0-rc.1
bunx expo install react-native-reanimated react-native-svg react-native-worklets lucide-react-native
```

Pin `lightningcss` to `1.30.1` in the app `package.json` (`overrides` and `resolutions`). The pin in this repository does not apply to consumers.

```css
@import 'nativewind/theme';
@import '@gv-tech/design-tokens/native.css';

@source '../node_modules/@gv-tech/ui-native/src/**/*.{js,jsx,ts,tsx}';
```

```js
const { inlineVariables } = require('@gv-tech/design-tokens/native-preset');

module.exports = withNativeWind(config, {
  input: './src/global.css',
  inlineVariables,
});
```

Wrap the tree in `ThemeProvider`. Press handlers are `onPress`. Dark mode follows `Appearance`, not a `.dark` class.

```tsx
import { Button, Text, ThemeProvider } from '@gv-tech/ui-native';
```

`nativewind` and `tailwindcss` are peers so the app and the library share one copy. Metro loads them from the app.

## Features

- Same contracts as `@gv-tech/ui-web`, imported from `@gv-tech/ui-core`.
- Semantic colors from `@gv-tech/design-tokens` (`bg-primary`, `text-foreground`, `bg-background`).
- Icons from `lucide-react-native`.

---

This is a sub-package of the [GV Tech Design System](https://github.com/Garcia-Ventures/gvtech-design).
