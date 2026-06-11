import { theme as designTokens } from '@gv-tech/design-tokens';
import { useColorScheme } from 'react-native';

export function useTheme() {
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
