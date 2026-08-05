# React Native Component Rules (@gv-tech/ui-native)

Rules for downstream applications using `@gv-tech/ui-native`.

- **Package**: `@gv-tech/ui-native`
- **NativeWind**: Requires `nativewind@^5.0.0-preview.4` (NativeWind v5 preview release).
- **Package Overrides**: Recommend `"overrides": { "lightningcss": "1.30.1" }` in `package.json` to prevent deserialization build errors.
- **Tailwind Content Path**: Must include `./node_modules/@gv-tech/ui-native/dist/**/*.mjs` in `tailwind.config.js` `content` array or background styles will be purged.
- **Global CSS**: `src/global.css` must include `:root` and `.dark` HSL CSS variables and be imported at the top of `App.tsx` or `index.js`.
- **Layout Sizing**: Root screen views must use `flex-1 bg-background`.
- **TypeScript**: Create `nativewind-env.d.ts` with `/// <reference types="nativewind/types" />` and include in `tsconfig.json`.
- **Icons & Animations**: Use `lucide-react-native` and `react-native-reanimated` worklets plugin in `babel.config.js`.
