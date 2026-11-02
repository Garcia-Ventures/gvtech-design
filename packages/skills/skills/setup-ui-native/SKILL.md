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
@import '@gv-tech/design-tokens/theme.css';
@import 'tailwindcss/theme.css' layer(theme);
@import 'tailwindcss/preflight.css' layer(base);
@import 'tailwindcss/utilities.css';
@import 'nativewind/theme';

@layer base {
  :root {
    --background: 35 25% 88%;
    --foreground: 150 50% 22%;
    --card: 35 20% 94%;
    --card-foreground: 150 50% 22%;
    --popover: 35 20% 94%;
    --popover-foreground: 150 50% 22%;
    --primary: 150 50% 28%;
    --primary-foreground: 35 33% 97%;
    --secondary: 150 25% 40%;
    --secondary-foreground: 35 33% 97%;
    --muted: 35 15% 80%;
    --muted-foreground: 150 15% 32%;
    --accent: 35 18% 82%;
    --accent-foreground: 150 50% 22%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 35 33% 97%;
    --border: 35 15% 80%;
    --input: 35 15% 80%;
    --ring: 150 50% 28%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 30 15% 12%;
    --foreground: 35 20% 92%;
    --card: 30 12% 16%;
    --card-foreground: 35 20% 92%;
    --popover: 30 12% 16%;
    --popover-foreground: 35 20% 92%;
    --primary: 150 40% 55%;
    --primary-foreground: 150 45% 10%;
    --secondary: 150 30% 65%;
    --secondary-foreground: 150 45% 10%;
    --muted: 30 10% 22%;
    --muted-foreground: 35 12% 70%;
    --accent: 30 12% 18%;
    --accent-foreground: 35 20% 92%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 35 20% 92%;
    --border: 30 10% 22%;
    --input: 30 10% 22%;
    --ring: 150 40% 55%;
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
import { ThemeProvider, Button, Text } from '@gv-tech/ui-native';
import { View } from 'react-native';

export default function App() {
  return (
    <ThemeProvider value="system">
      <View className="bg-background flex-1 items-center justify-center p-6">
        <Button>
          <Text>Native Button</Text>
        </Button>
      </View>
    </ThemeProvider>
  );
}
```
