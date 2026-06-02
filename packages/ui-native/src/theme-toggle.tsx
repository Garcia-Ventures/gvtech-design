import { ThemeToggleBaseProps } from '@gv-tech/ui-core';
import { Moon, Sun, SunMoon } from 'lucide-react-native';
import { useColorScheme } from 'nativewind';
import { View } from 'react-native';
import { Button } from './button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu';
import { cn } from './lib/utils';
import { Text } from './text';

export type ThemeToggleProps = ThemeToggleBaseProps;

export function ThemeToggle({ variant = 'binary', onThemeChange, customTheme, className }: ThemeToggleProps) {
  const { colorScheme, setColorScheme } = useColorScheme();

  const currentTheme = (customTheme ?? colorScheme) as 'light' | 'dark' | 'system';

  // Determine if dark based on currentTheme
  const isDark = currentTheme === 'dark';
  const isSystem = currentTheme === 'system';

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    if (onThemeChange) {
      onThemeChange(newTheme);
    } else {
      setColorScheme(newTheme);
    }
  };

  const IconToggle = () => (
    <View className="flex items-center justify-center">
      <Sun
        size={18}
        className={cn(
          'text-foreground transition-all',
          !isSystem && !isDark ? 'scale-100 rotate-0 opacity-100' : 'absolute scale-0 -rotate-90 opacity-0',
        )}
      />
      <Moon
        size={18}
        className={cn(
          'text-foreground transition-all',
          !isSystem && isDark ? 'scale-100 rotate-0 opacity-100' : 'absolute scale-0 rotate-90 opacity-0',
        )}
      />
      <SunMoon
        size={18}
        className={cn(
          'text-foreground transition-all',
          isSystem ? 'scale-100 rotate-0 opacity-100' : 'absolute scale-0 rotate-90 opacity-0',
        )}
      />
    </View>
  );

  if (variant === 'ternary') {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className={cn('relative h-9 w-9', className)}>
            <IconToggle />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={() => handleThemeChange('light')}>
            <Sun size={14} className="text-foreground mr-2" />
            <Text>Light</Text>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleThemeChange('dark')}>
            <Moon size={14} className="text-foreground mr-2" />
            <Text>Dark</Text>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleThemeChange('system')}>
            <SunMoon size={14} className="text-foreground mr-2" />
            <Text>System</Text>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn('relative h-9 w-9', className)}
      onPress={() => handleThemeChange(currentTheme === 'dark' ? 'light' : 'dark')}
    >
      <IconToggle />
    </Button>
  );
}
