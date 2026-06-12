import { theme as designTokens } from '@gv-tech/design-tokens';
import * as React from 'react';
import { useColorScheme, View, ViewProps } from 'react-native';
import { cn } from './lib/utils';

export interface ThemeContextValue {
  theme: 'light' | 'dark' | 'system';
  resolvedTheme: 'light' | 'dark';
  tokens: typeof designTokens.light | typeof designTokens.dark;
}

export const ThemeContext = React.createContext<ThemeContextValue | null>(null);

export interface ThemeProviderProps extends ViewProps {
  children: React.ReactNode;
  value?: 'light' | 'dark' | 'system';
  [key: string]: unknown;
}

export function ThemeProvider({ children, className, style, value, ...props }: ThemeProviderProps) {
  const systemScheme = useColorScheme();
  const theme = value || 'system';
  const resolvedTheme = theme === 'system' ? (systemScheme === 'dark' ? 'dark' : 'light') : theme;
  const tokens = resolvedTheme === 'dark' ? designTokens.dark : designTokens.light;

  const isDark = resolvedTheme === 'dark';

  const contextValue = React.useMemo<ThemeContextValue>(
    () => ({
      theme,
      resolvedTheme,
      tokens,
    }),
    [theme, resolvedTheme, tokens],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <View
        className={cn('flex-1', isDark ? 'dark' : '', className)}
        style={[{ backgroundColor: tokens.background }, style]}
        {...props}
      >
        {children}
      </View>
    </ThemeContext.Provider>
  );
}
