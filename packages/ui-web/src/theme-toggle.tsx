'use client';

import { ThemeToggleBaseProps } from '@gv-tech/ui-core';
import { Moon, Sun, SunMoon } from 'lucide-react';
import { Button } from './button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu';
import { useTheme } from './hooks/use-theme';
import { cn } from './lib/utils';

export type ThemeToggleProps = ThemeToggleBaseProps;

export function ThemeToggle({ variant = 'binary', onThemeChange, customTheme, className }: ThemeToggleProps) {
  const { theme: nextTheme, setTheme: setNextTheme, resolvedTheme } = useTheme();

  // Use customTheme if provided, otherwise fallback to next-themes
  const currentTheme = customTheme ?? nextTheme;

  // Determine the effective theme for icon rendering
  const effectiveTheme = customTheme ? customTheme : resolvedTheme;
  const isDark = effectiveTheme === 'dark';
  const isSystem = currentTheme === 'system';

  const handleThemeChange = (newTheme: string) => {
    if (onThemeChange) {
      onThemeChange(newTheme);
    } else {
      setNextTheme(newTheme);
    }
  };

  const IconToggle = () => (
    <>
      <Sun
        className={cn(
          'h-[1.2rem] w-[1.2rem] transition-all',
          !isSystem && !isDark ? 'scale-100 rotate-0' : 'scale-0 -rotate-90',
        )}
      />
      <Moon
        className={cn(
          'absolute h-[1.2rem] w-[1.2rem] transition-all',
          !isSystem && isDark ? 'scale-100 rotate-0' : 'scale-0 rotate-90',
        )}
      />
      <SunMoon
        className={cn(
          'absolute h-[1.2rem] w-[1.2rem] transition-all',
          isSystem ? 'scale-100 rotate-0' : 'scale-0 rotate-90',
        )}
      />
      <span className="sr-only">Toggle theme</span>
    </>
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
          <DropdownMenuItem onClick={() => handleThemeChange('light')}>
            <Sun className="mr-2 h-4 w-4" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleThemeChange('dark')}>
            <Moon className="mr-2 h-4 w-4" />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleThemeChange('system')}>
            <SunMoon className="mr-2 h-4 w-4" />
            <span>System</span>
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
      onClick={() => handleThemeChange(currentTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      <IconToggle />
    </Button>
  );
}
