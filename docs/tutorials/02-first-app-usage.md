# Tutorial: Use in Your App

> Learning-oriented. Install the library in a fresh app and render a Button on web + native.

## 1. Install the meta-package

```bash
# npm
npm install @gv-tech/design-system
# bun
bun add @gv-tech/design-system
```

Or install slices directly: `@gv-tech/ui-web`, `@gv-tech/ui-native`, `@gv-tech/design-tokens`, `@gv-tech/ui-core`.

## 2. Web — Tailwind v4 setup

In your global CSS, import tokens **before** Tailwind (see [Use Tokens](../how-to/use-tokens-tailwind-v4.md)):

```css
/* src/globals.css */
@import '@gv-tech/design-tokens/theme.css';
@import 'tailwindcss';
```

Render:

```js
import { Button } from '@gv-tech/design-system';

function App() {
  return <Button>Click me</Button>;
}
```

## 3. Web — Own-the-code via shadcn CLI

If you prefer vendored source over the npm bundle:

```bash
# Web
npx shadcn@latest add "https://github.com/Garcia-Ventures/gvtech-design/tree/main/packages/ui-web"
# Native
npx shadcn@latest add "https://github.com/Garcia-Ventures/gvtech-design/tree/main/packages/ui-native"
```

Registry JSON is built by `bun run build:registry` into `packages/ui-web/registry.json` and `public/registry/`.

## 4. Native (Expo) — install peers

```bash
bun add @gv-tech/ui-native
expo install react-native-reanimated react-native-svg
# NativeWind ^5 preview + lightningcss override already in root package.json
```

```tsx
import { Button } from '@gv-tech/ui-native';
// onPress, not onClick — see Divergence Registry
<Button onPress={() => console.log('tap')}>Tap me</Button>;
```

Non-Expo bare RN: follow Reanimated Babel + platform setup docs, then same import.

## 5. Check support before you build

- [Component Registry](../reference/component-registry.md) — ✅ vs ⏳ per platform.
- [Parity Matrix](../reference/parity-matrix.md) — notes per group (Forms, Data Display, Feedback…).
- [Divergence Registry](../reference/divergence-registry.md) — e.g. `Input onChangeText`, `Dialog → modal`, `Sonner → Toast` on native.

## Next

- Theming deep-dive: [Use Tokens](../how-to/use-tokens-tailwind-v4.md).
- Contributing a missing native impl: [Create a Component](./03-create-component.md).
