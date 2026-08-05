import { theme as designTokens } from '@gv-tech/design-tokens';
import * as React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeContext } from '../theme-provider';

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context) {
    return context;
  }

  const colorScheme = useColorScheme();

  const resolvedTheme = colorScheme as 'light' | 'dark';

  // Default to light theme tokens if resolvedTheme is dark or invalid
  const activeTokens = resolvedTheme === 'dark' ? designTokens.dark : designTokens.light;

  return {
    theme: colorScheme,
    resolvedTheme,
    tokens: activeTokens,
  };
}
