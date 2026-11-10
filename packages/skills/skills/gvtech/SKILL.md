---
name: gvtech
description: Set up and use @gv-tech/ui-web and @gv-tech/ui-native, including Tailwind v4, NativeWind v5, and theme tokens.
---

# GV Tech design system

Use this when installing or building UI with `@gv-tech/ui-web` or `@gv-tech/ui-native` in an application. Props come from `@gv-tech/ui-core`. Import components from the platform package. Style with semantic classes (`bg-background`, `text-foreground`, `bg-primary`, `border-border`, `bg-muted`) and merge classes with `cn()`.

Icons are `lucide-react` on web and `lucide-react-native` on native.

## Web

```bash
npm install @gv-tech/ui-web @gv-tech/design-tokens lucide-react next-themes
```

In the global stylesheet, import tokens before Tailwind, then scan the published components:

```css
@import '@gv-tech/design-tokens/theme.css';
@import 'tailwindcss';

@source 'node_modules/@gv-tech/ui-web/dist/**/*.mjs';
```

`theme.css` already contains the `@theme` color map and the `:root` / `.dark` HSL channels. Do not paste a second copy.

Wrap the root with `ThemeProvider` from `@gv-tech/ui-web` (`attribute="class"`, `defaultTheme="system"`, `enableSystem`). It toggles the `.dark` class.

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from '@gv-tech/ui-web';
```

## Native

NativeWind v5 preview. Pin `lightningcss` to `1.30.1` in `overrides` (and in `resolutions` when the installer reads that field).

```bash
npm install @gv-tech/ui-native @gv-tech/design-tokens nativewind@^5.0.0-preview.4 lucide-react-native react-native-reanimated react-native-svg
```

```json
{
  "overrides": {
    "lightningcss": "1.30.1"
  }
}
```

`src/global.css` uses NativeWind's layered entry, then the same `:root` and `.dark` channel variables that ship in `@gv-tech/design-tokens` `theme.css` (`@layer base` only, not the `@theme` block):

```css
@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/preflight.css' layer(base);
@import 'tailwindcss/utilities.css';
@import 'nativewind/theme';
```

Import that file from the app entry (`App.tsx` or `index.js`).

Tailwind must see the published components or classes are purged:

```js
content: [
  './App.{js,jsx,ts,tsx}',
  './src/**/*.{js,jsx,ts,tsx}',
  './node_modules/@gv-tech/ui-native/dist/**/*.mjs',
],
```

Metro:

```js
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './src/global.css' });
```

`nativewind-env.d.ts` at the project root, included from `tsconfig.json`:

```ts
/// <reference types="nativewind/types" />
```

Babel (`react-native-worklets/plugin` last):

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-worklets/plugin'],
  };
};
```

Screen roots use `flex-1 bg-background`. Text strings go inside `<Text>`. Press handlers are `onPress`, not `onClick`.

```tsx
import { Button, Text, ThemeProvider } from '@gv-tech/ui-native';
import { View } from 'react-native';

export default function App() {
  return (
    <ThemeProvider value="system">
      <View className="bg-background flex-1 items-center justify-center p-6">
        <Button onPress={() => {}}>
          <Text>Continue</Text>
        </Button>
      </View>
    </ThemeProvider>
  );
}
```
