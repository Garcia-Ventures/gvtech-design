---
name: setup-ui-native
description: Complete 6-step end-to-end setup guide for @gv-tech/ui-native, NativeWind v5 preview, Metro, Babel, and TypeScript in React Native and Expo projects.
---

# React Native Setup Skill (@gv-tech/ui-native)

Use this skill when installing and configuring `@gv-tech/ui-native` in Expo or React Native CLI projects.

## 6-Step Setup Instructions

### Step 1: Install NativeWind v5 & Dependencies

```bash
npm install @gv-tech/ui-native @gv-tech/design-tokens nativewind@^5.0.0-preview.4 lucide-react-native react-native-reanimated react-native-svg
```

Add the `lightningcss` override in your `package.json` to prevent build deserialization issues with NativeWind v5 previews:

```json
"overrides": {
  "lightningcss": "1.30.1"
}
```

### Step 2: Create Global CSS (`src/global.css`)

```css
@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/preflight.css' layer(base);
@import 'tailwindcss/utilities.css';
@import 'nativewind/theme';

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
  }
}
```

Import `global.css` at the top of your root entry point (`App.tsx` or `index.js`):

```typescript
import './src/global.css';
```

### Step 3: Configure Tailwind CSS (`tailwind.config.js`)

**CRITICAL**: You MUST include `./node_modules/@gv-tech/ui-native/dist/**/*.mjs` in the `content` array or Tailwind will purge all component class names, causing transparent backgrounds!

```javascript
const { preset } = require('@gv-tech/design-tokens');

module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@gv-tech/ui-native/dist/**/*.mjs',
    './node_modules/@gv-tech/ui-native/src/**/*.{ts,tsx}',
  ],
  presets: [require('nativewind/preset'), preset],
};
```

### Step 4: Configure Metro Bundler (`metro.config.js`)

```javascript
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);
config.resolver.sourceExts = [...config.resolver.sourceExts, 'native.tsx', 'native.ts', 'native.js'];

module.exports = withNativeWind(config, { input: './src/global.css' });
```

### Step 5: TypeScript & Babel Configuration

Create `nativewind-env.d.ts` in project root:

```typescript
/// <reference types="nativewind/types" />
```

Add Reanimated worklet plugin to `babel.config.js`:

```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-worklets/plugin'],
  };
};
```

### Step 6: Root App Setup & Layout Best Practices

Screen root views MUST use `flex-1 bg-background`:

```tsx
import './src/global.css';
import { View } from 'react-native';
import { ThemeProvider, Button, Text } from '@gv-tech/ui-native';

export default function App() {
  return (
    <ThemeProvider value="system">
      <View className="flex-1 items-center justify-center bg-background p-6">
        <Button>
          <Text>Native Button</Text>
        </Button>
      </View>
    </ThemeProvider>
  );
}
```
