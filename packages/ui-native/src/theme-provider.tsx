import { useColorScheme } from 'nativewind';
import * as React from 'react';
import { View } from 'react-native';
import { cn } from './lib/utils';

export function ThemeProvider({ children, className }: { children: React.ReactNode; className?: string }) {
  const { colorScheme } = useColorScheme();
  return <View className={cn('flex-1', colorScheme === 'dark' ? 'dark' : '', className)}>{children}</View>;
}
