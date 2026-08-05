---
name: use-ui-native
description: Component usage patterns, layout rules, and NativeWind v5 practices for @gv-tech/ui-native in React Native and Expo apps.
---

# React Native Component Skill (@gv-tech/ui-native)

Use this skill when implementing or using `@gv-tech/ui-native` components in React Native and Expo mobile applications.

## Component Principles

1. **Imports**: Import components directly from `@gv-tech/ui-native`.
2. **Contracts**: Native component props align with base contracts in `@gv-tech/ui-core`.
3. **Layout View Constraints**:
   - Screen root containers MUST use `flex-1 bg-background`.
   - Never hardcode static pixel height offsets for views wrapping text content.
4. **Text Node Requirement**: Text strings must be wrapped inside `<Text>` components to prevent unhandled text node crashes on native platforms.
5. **Theme Tokens**: Use semantic token classes (`bg-background`, `text-foreground`, `bg-card`, `text-card-foreground`, `bg-primary`, `border-border`).

## Usage Example

```tsx
import * as React from 'react';
import { View } from 'react-native';
import { ThemeProvider, Card, CardHeader, CardTitle, CardContent, Text, Button } from '@gv-tech/ui-native';

export function Screen() {
  return (
    <ThemeProvider value="system">
      <View className="flex-1 items-center justify-center bg-background p-6">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Native Card</CardTitle>
          </CardHeader>
          <CardContent className="gap-4">
            <Text className="text-muted-foreground">Styled with NativeWind v5 and theme tokens.</Text>
            <Button onPress={() => console.log('Pressed')}>
              <Text>Continue</Text>
            </Button>
          </CardContent>
        </Card>
      </View>
    </ThemeProvider>
  );
}
```
