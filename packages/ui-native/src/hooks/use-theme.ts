import { theme as designTokens } from '@gv-tech/design-tokens';
import { useColorScheme } from 'nativewind';

export function useTheme() {
  const { colorScheme, setColorScheme } = useColorScheme();

  const resolvedTheme = colorScheme as 'light' | 'dark';

  // Default to light theme tokens if resolvedTheme is dark or invalid
  const activeTokens = resolvedTheme === 'dark' ? designTokens.dark : designTokens.light;

  return {
    theme: colorScheme,
    setTheme: setColorScheme,
    resolvedTheme,
    tokens: activeTokens,
  };
}
