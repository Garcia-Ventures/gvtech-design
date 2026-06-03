import { theme as designTokens } from '@gv-tech/design-tokens';
import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useTheme } from './use-theme';

// Mock nativewind using a dynamic module-level variable
let mockColorScheme = 'light';
const mockSetColorScheme = vi.fn();

vi.mock('nativewind', () => ({
  useColorScheme: () => ({
    colorScheme: mockColorScheme,
    setColorScheme: mockSetColorScheme,
  }),
}));

describe('useTheme (Native)', () => {
  it('returns default light tokens when colorScheme is light', () => {
    mockColorScheme = 'light';
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('light');
    expect(result.current.resolvedTheme).toBe('light');
    expect(result.current.tokens).toEqual(designTokens.light);
  });

  it('returns dark tokens when colorScheme is dark', () => {
    mockColorScheme = 'dark';
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('dark');
    expect(result.current.resolvedTheme).toBe('dark');
    expect(result.current.tokens).toEqual(designTokens.dark);
  });

  it('allows changing the theme via setTheme', () => {
    const { result } = renderHook(() => useTheme());
    result.current.setTheme('dark');
    expect(mockSetColorScheme).toHaveBeenCalledWith('dark');
  });
});
