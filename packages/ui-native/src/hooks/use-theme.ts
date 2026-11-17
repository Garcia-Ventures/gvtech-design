import { theme as designTokens } from '@gv-tech/design-tokens';
import * as React from 'react';
import { useColorScheme } from 'react-native';

import { ThemeContext } from '../theme-provider';

export function useTheme() {
  const context = React.useContext(ThemeContext);
  // Read the system scheme on every render. Skipping it when ThemeProvider
  // is present changes hook order if the provider mounts or unmounts.
  const colorScheme = useColorScheme();

  if (context) {
    return context;
  }

  const resolvedTheme = colorScheme as 'light' | 'dark';

  // Default to light theme tokens if resolvedTheme is dark or invalid
  const activeTokens = resolvedTheme === 'dark' ? designTokens.dark : designTokens.light;

  return {
    theme: colorScheme,
    resolvedTheme,
    tokens: activeTokens,
  };
}
