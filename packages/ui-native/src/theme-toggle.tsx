import { ThemeToggleBaseProps } from '@gv-tech/ui-core';
import { Moon, Sun, SunMoon } from 'lucide-react-native';
import { View } from 'react-native';
import { Button } from './button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu';
import { useTheme } from './hooks/use-theme';
import { iconWithClassName } from './lib/iconWithClassName';
import { cn } from './lib/utils';
import { Text } from './text';

iconWithClassName(Sun);
iconWithClassName(Moon);
iconWithClassName(SunMoon);

export type ThemeToggleProps = ThemeToggleBaseProps;

export function ThemeToggle({ variant = 'binary', onThemeChange, customTheme, className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const currentTheme = (customTheme ?? theme) as 'light' | 'dark' | 'system';

  // Determine the effective theme for icon rendering
  const effectiveTheme = customTheme ? customTheme : resolvedTheme;
  const isDark = effectiveTheme === 'dark';
  const isSystem = currentTheme === 'system';

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    if (onThemeChange) {
      onThemeChange(newTheme);
    } else {
      setTheme(newTheme as 'light' | 'dark');
    }
  };

  const IconToggle = () => (
    <View className="flex h-6 w-6 items-center justify-center">
      <View
        className={cn(
          'items-center justify-center transition-all',
          !isSystem && !isDark ? 'scale-100 rotate-0 opacity-100' : 'absolute scale-0 -rotate-90 opacity-0',
        )}
      >
        <Sun size={18} className="text-foreground" />
      </View>
      <View
        className={cn(
          'items-center justify-center transition-all',
          !isSystem && isDark ? 'scale-100 rotate-0 opacity-100' : 'absolute scale-0 rotate-90 opacity-0',
        )}
      >
        <Moon size={18} className="text-foreground" />
      </View>
      <View
        className={cn(
          'items-center justify-center transition-all',
          isSystem ? 'scale-100 rotate-0 opacity-100' : 'absolute scale-0 rotate-90 opacity-0',
        )}
      >
        <SunMoon size={18} className="text-foreground" />
      </View>
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
