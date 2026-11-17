# How-to: Set up React Native

Task: install `@gv-tech/ui-native` in an Expo app so a Button paints with GV semantic tokens in light and dark.

Tested with Expo SDK 58, NativeWind `5.0.0-rc.1`, and `react-native-css` `3.1.0-rc.1`, the same set `apps/native-playground` uses. `@gv-tech/ui-native` and `@gv-tech/design-tokens` release together. Install both from that release. The package floor is `^2.29.4`.

The supported install is the npm package. Copying `packages/ui-native` with the shadcn CLI does not configure Metro, Babel, NativeWind, or tokens.

## 1. Install

```bash
bun add @gv-tech/ui-native @gv-tech/design-tokens nativewind@5.0.0-rc.1 react-native-css@3.1.0-rc.1
bunx expo install react-native-reanimated react-native-svg react-native-worklets lucide-react-native
```

Pin both NativeWind packages exactly. `nativewind@5.0.0-rc.1` requires `react-native-css@3.1.0-rc.1`.

`expo install` picks the SDK build of Reanimated, SVG, and worklets. Reanimated 4 uses `react-native-worklets/plugin`, not `react-native-reanimated/plugin`.

NativeWind v5 needs `lightningcss` `1.30.1` in the app. Overrides in this repository do not apply to an app that depends on the published package. Add both fields when the installer reads them:

```json
{
  "overrides": {
    "lightningcss": "1.30.1"
  },
  "resolutions": {
    "lightningcss": "1.30.1"
  }
}
```

Then reinstall.

## 2. Global CSS

`src/global.css`:

```css
@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/preflight.css' layer(base);
@import 'tailwindcss/utilities.css';
@import 'nativewind/theme';
@import '@gv-tech/design-tokens/native.css';

@source './**/*.{js,jsx,ts,tsx}';
@source '../node_modules/@gv-tech/ui-native/src/**/*.{js,jsx,ts,tsx}';
```

`native.css` is generated from `theme.ts` and `palette.ts`. Its `@theme` block registers `bg-primary`, sidebar, brand, and semantic colors, and its radius tokens are pixels because React Native does not resolve CSS `calc()`. Light values sit on `:root`. Dark values sit in `@media (prefers-color-scheme: dark)`. NativeWind v5 rejects a `.dark` class selector.

Do not import `@gv-tech/design-tokens/theme.css` here. That file is the web sheet. It adds shadcn `@custom-variant` rules NativeWind does not use.

`@source` must see the package source. Metro loads the `react-native` export, which is `packages/ui-native/src/index.ts`, not `dist`. The playground points the second `@source` at `../../../packages/ui-native/src` because it consumes the workspace package. Tailwind v4 does not load a `content` array in `tailwind.config.js` unless the CSS file has `@config`, and `nativewind/preset` is not an export of NativeWind v5.

Import the CSS from the app entry. The playground does this in `apps/native-playground/src/app/App.tsx`:

```tsx
import './global.css';
```

## 3. Metro

`inlineVariables.exclude` lists every `--color-*` token. Without it, NativeWind bakes the light color into `bg-primary` and the dark media query never applies.

```js
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const { inlineVariables } = require('@gv-tech/design-tokens/native-preset');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, {
  input: './src/global.css',
  inlineVariables,
});
```

`apps/native-playground/metro.config.js` also wraps Nx and `react-native-svg-transformer`. Leave those out of an app. Set `userInterfaceStyle` to `automatic` in `app.json` so Expo follows the system scheme. `ThemeProvider` calls `Appearance.setColorScheme`, which is what the dark media query hears.

## 4. Babel

`react-native-worklets/plugin` stays last:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-worklets/plugin'],
  };
};
```

The playground also lists `@babel/plugin-proposal-export-namespace-from` before the worklets plugin. A new Expo SDK 58 app does not need that plugin.

## 5. TypeScript

`nativewind-env.d.ts` at the project root:

```ts
/// <reference types="nativewind/types" />
```

Include it from `tsconfig.json`.

## 6. Render

Wrap the tree in `ThemeProvider`. It sets `Appearance`, which switches the dark media query. Screen roots use `flex-1`. Strings go in `Text`. Press handlers are `onPress`.

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

The default button uses `bg-primary` (forest green in light, bright green in dark).

## 7. Bare React Native

Install Reanimated for that CLI, then use the same Babel plugin, Metro `withNativeWind` wrapper, CSS entry, and `inlineVariables` exclude list. There is no Expo install step to pick SDK versions. Match `react-native-reanimated`, `react-native-worklets`, and `react-native-svg` to the peers in `@gv-tech/ui-native`.

## When it looks wrong

- Classes missing after a production bundle: `@source` is not seeing `node_modules/@gv-tech/ui-native/src`.
- Unstyled primary: `native.css` is not imported, so `@theme` never registered `--color-primary`.
- Dark mode stays on the light primary: `inlineVariables.exclude` is missing, or the screen is outside `ThemeProvider`.
- Metro or lightningcss deserialization errors: [Debug NativeWind](./debug-nativewind.md).
- `onClick`, `onChange`, or `htmlFor`: [Divergence Registry](../reference/divergence-registry.md).
