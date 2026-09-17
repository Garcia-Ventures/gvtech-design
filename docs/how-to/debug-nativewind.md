# How-to: Debug NativeWind v5

Task: fix styling or build failures in `ui-native` / Expo playground.

## The lightningcss override (do not remove blindly)

Root `package.json` pins:

```json
"overrides": { "lightningcss": "1.30.1" },
"resolutions": { "lightningcss": "1.30.1" }
```

This is per NativeWind v5 docs (Tailwind v4 support) to avoid deserialization errors. Revisit only when upgrading NativeWind — remove, reinstall, run `bun run native:clear`, and confirm.

## Checklist

1. `className` uses `cn()` from `packages/ui-native/src/lib/utils` (not web utils).
2. Tokens come from `@gv-tech/design-tokens`, not hardcoded hex.
3. `Text` must wrap strings inside `View` (RN requirement — Badge/Text patterns).
4. Clear caches: `bun run native:clear`, then `bun run validate --help` → Build Registry step.
5. Vitest native tests use `react-native-web` shims — failures mentioning `Pressable`/`nativeID` usually mean a web-only prop leaked (`htmlFor`, `onClick`, `onChange`).

## Common mappings

| Web                               | Native                               |
| :-------------------------------- | :----------------------------------- |
| `onClick`                         | `onPress` (Pressable)                |
| `onChange` → `event.target.value` | `onChangeText` → `string`            |
| `htmlFor`                         | `nativeID` + `onPress`               |
| CSS `animate-pulse`               | Reanimated `withRepeat`/`withTiming` |
| HTML `<table>`                    | `View` rows + `Text` cells           |
