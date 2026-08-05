import { theme as designTokens } from '@gv-tech/design-tokens';
import { renderHook } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { useTheme } from './use-theme';

// Mock react-native's useColorScheme
let mockColorScheme = 'light';

vi.mock('react-native', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-native')>();
  return {
    ...actual,
    useColorScheme: () => mockColorScheme,
  };
});

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
});
