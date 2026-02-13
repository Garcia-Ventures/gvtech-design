import { useTheme } from '@/hooks/use-theme';
import { theme } from '@/theme/tokens';
import { renderHook } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import { describe, expect, it } from 'vitest';

describe('useTheme', () => {
  it('returns default light tokens when no theme is set', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => <ThemeProvider>{children}</ThemeProvider>,
    });

    expect(result.current.tokens).toEqual(theme.light);
  });

  it('returns dark tokens when theme is dark', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: ({ children }) => (
        <ThemeProvider defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      ),
    });

    expect(result.current.tokens).toEqual(theme.dark);
  });
});
