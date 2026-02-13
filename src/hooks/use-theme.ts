import { theme } from '@/theme/tokens';
import { useTheme as useNextTheme } from 'next-themes';

export function useTheme() {
  const context = useNextTheme();
  const { resolvedTheme } = context;

  // Default to light theme tokens if resolvedTheme is undefined or invalid
  const activeTokens = resolvedTheme === 'dark' ? theme.dark : theme.light;

  return {
    ...context,
    tokens: activeTokens,
  };
}
