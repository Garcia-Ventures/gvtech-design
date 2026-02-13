import type { ThemeProviderProps as NextThemesProviderProps } from 'next-themes';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export type ThemeProviderProps = NextThemesProviderProps;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      {children}
    </NextThemesProvider>
  );
}
