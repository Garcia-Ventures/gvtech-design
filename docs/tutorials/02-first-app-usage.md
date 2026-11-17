# Tutorial: Use in Your App

> Learning-oriented. Pick one install path, then render a Button on that platform's tokens.

`@gv-tech/ui-web`, `@gv-tech/ui-native`, `@gv-tech/design-tokens`, and `@gv-tech/ui-core` release together. Install them from the same release. The package floor is `^2.29.4`.

## Pick a path

| You want…                                  | Install                                           |
| :----------------------------------------- | :------------------------------------------------ |
| Web components from the published build    | `@gv-tech/ui-web` and `@gv-tech/design-tokens`    |
| Native components from the published build | `@gv-tech/ui-native` and `@gv-tech/design-tokens` |
| Every web component from one package       | `@gv-tech/design-system`                          |
| To own the web source in the app           | The shadcn registry URL below                     |

Follow one row. The meta package is the web bundle. It is not a shortcut around the native Metro setup.

## Web — published build

```bash
bun add @gv-tech/ui-web @gv-tech/design-tokens
```

In the global stylesheet, import tokens before Tailwind. Dark mode is in [Use Tokens](../how-to/use-tokens-tailwind-v4.md).

```css
@import '@gv-tech/design-tokens/theme.css';
@import 'tailwindcss';
```

```tsx
import { Button } from '@gv-tech/ui-web';

export function App() {
  return <Button>Click me</Button>;
}
```

`@gv-tech/design-system` exports the same web components. Use it when one package is worth the wider install. The stylesheet import stays the same.

## Web — own the source

```bash
npx shadcn@latest add "https://github.com/Garcia-Ventures/gvtech-design/tree/main/packages/ui-web"
```

That copies component source into the app. Keep the `theme.css` import above. Registry JSON is built by `bun run build:registry`.

The matching `packages/ui-native` URL copies source only. It does not configure Metro, Babel, NativeWind, or tokens. The supported native install is the published package and the setup how-to.

## Native — published build

```bash
bun add @gv-tech/ui-native @gv-tech/design-tokens nativewind@5.0.0-rc.1 react-native-css@3.1.0-rc.1
```

Finish Metro, Babel, `native.css`, and `ThemeProvider` in [Set up React Native](../how-to/setup-react-native.md). A Button import on its own does not paint the forest primary.

```tsx
import { Button, Text } from '@gv-tech/ui-native';

<Button onPress={() => {}}>
  <Text>Tap me</Text>
</Button>;
```

`onPress`, not `onClick`. The rest of the platform map is in the [Divergence Registry](../reference/divergence-registry.md).

## Check support before you build

- [Component Registry](../reference/component-registry.md) — implemented, planned, or web-only.
- [Parity Matrix](../reference/parity-matrix.md) — notes per group.
- [Divergence Registry](../reference/divergence-registry.md) — `Input` uses `onChangeText`, `Dialog` is a modal, `Sonner` is `Toast` on native.

## Next

- Theming: [Use Tokens](../how-to/use-tokens-tailwind-v4.md) on web, [Set up React Native](../how-to/setup-react-native.md) on native.
- Contributing a component: [Create a Component](./03-create-component.md).
