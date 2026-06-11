import * as React from 'react';
import { View, ViewProps } from 'react-native';
import { useTheme } from './hooks/use-theme';
import { cn } from './lib/utils';

export interface ThemeProviderProps extends ViewProps {
  children: React.ReactNode;
  [key: string]: unknown;
}

export function ThemeProvider({ children, className, style, ...props }: ThemeProviderProps) {
  const { theme, tokens } = useTheme();
  const isDark = theme === 'dark';

  return (
    <View
      className={cn('flex-1', isDark ? 'dark' : '', className)}
      style={[{ backgroundColor: tokens.background }, style]}
      {...props}
    >
      {children}
    </View>
  );
}
