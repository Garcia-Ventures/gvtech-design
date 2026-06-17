import { ThemeToggleBaseProps } from '@gv-tech/ui-core';
import { Moon, Sun, SunMoon } from 'lucide-react-native';
import { Appearance, View } from 'react-native';
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
  const { theme, resolvedTheme, tokens } = useTheme();

  const currentTheme = (customTheme ?? theme) as 'light' | 'dark' | 'system';

  // Determine the effective theme for icon rendering
  const effectiveTheme = customTheme === 'system' || !customTheme ? resolvedTheme : customTheme;
  const isDark = effectiveTheme === 'dark';
  const isSystem = currentTheme === 'system';

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    if (onThemeChange) {
      onThemeChange(newTheme);
    } else {
      if (newTheme === 'system') {
        Appearance.setColorScheme('unspecified');
      } else {
        Appearance.setColorScheme(newTheme);
      }
    }
  };

  const IconToggle = () => (
    <View className="flex h-6 w-6 items-center justify-center">
      <View
        className={cn(
          'items-center justify-center transition-all',
          !isSystem && !isDark ? 'rotate-0 opacity-100' : 'absolute -rotate-90 opacity-0',
        )}
      >
        <Sun size={18} color={tokens.foreground} />
      </View>
      <View
        className={cn(
          'items-center justify-center transition-all',
          !isSystem && isDark ? 'rotate-0 opacity-100' : 'absolute rotate-90 opacity-0',
        )}
      >
        <Moon size={18} color={tokens.foreground} />
      </View>
      <View
        className={cn(
          'items-center justify-center transition-all',
          isSystem ? 'rotate-0 opacity-100' : 'absolute rotate-90 opacity-0',
        )}
      >
        <SunMoon size={18} color={tokens.foreground} />
      </View>
    </View>
  );

  if (variant === 'ternary') {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            'relative h-9 w-9 flex-row items-center justify-center rounded-md bg-transparent transition-colors active:opacity-80',
            className,
          )}
        >
          <IconToggle />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={() => handleThemeChange('light')}>
            <Sun size={14} color={tokens.foreground} className="mr-2" />
            <Text>Light</Text>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleThemeChange('dark')}>
            <Moon size={14} color={tokens.foreground} className="mr-2" />
            <Text>Dark</Text>
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => handleThemeChange('system')}>
            <SunMoon size={14} color={tokens.foreground} className="mr-2" />
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
