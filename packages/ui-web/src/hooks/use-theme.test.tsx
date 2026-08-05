import { renderHook } from '@testing-library/react';
import { theme } from '@gv-tech/design-tokens';
import { useTheme as useNextTheme } from 'next-themes';
import { describe, expect, it, vi, beforeEach } from 'vitest';
import { useTheme } from './use-theme';

// Mock next-themes
vi.mock('next-themes', () => {
  return {
    useTheme: vi.fn(),
  };
});

describe('useTheme hook', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should call useNextTheme and return light theme tokens when resolvedTheme is undefined', () => {
    const mockContext = {
      theme: undefined,
      setTheme: vi.fn(),
      resolvedTheme: undefined,
      themes: ['light', 'dark'],
      systemTheme: 'light',
    };
    vi.mocked(useNextTheme).mockReturnValue(mockContext);

    const { result } = renderHook(() => useTheme());

    expect(useNextTheme).toHaveBeenCalled();
    expect(result.current.theme).toBeUndefined();
    expect(result.current.resolvedTheme).toBeUndefined();
    expect(result.current.tokens).toEqual(theme.light);
  });

  it('should return light theme tokens when resolvedTheme is "light"', () => {
    const mockContext = {
      theme: 'light',
      setTheme: vi.fn(),
      resolvedTheme: 'light',
      themes: ['light', 'dark'],
      systemTheme: 'light',
    };
    vi.mocked(useNextTheme).mockReturnValue(mockContext);

    const { result } = renderHook(() => useTheme());

    expect(result.current.resolvedTheme).toBe('light');
    expect(result.current.tokens).toEqual(theme.light);
  });

  it('should return dark theme tokens when resolvedTheme is "dark"', () => {
    const mockContext = {
      theme: 'dark',
      setTheme: vi.fn(),
      resolvedTheme: 'dark',
      themes: ['light', 'dark'],
      systemTheme: 'dark',
    };
    vi.mocked(useNextTheme).mockReturnValue(mockContext);

    const { result } = renderHook(() => useTheme());

    expect(result.current.resolvedTheme).toBe('dark');
    expect(result.current.tokens).toEqual(theme.dark);
  });

  it('should fall back to light theme tokens when resolvedTheme is an invalid/custom value', () => {
    const mockContext = {
      theme: 'system',
      setTheme: vi.fn(),
      resolvedTheme: 'custom-theme' as any,
      themes: ['light', 'dark'],
      systemTheme: 'light',
    };
    vi.mocked(useNextTheme).mockReturnValue(mockContext);

    const { result } = renderHook(() => useTheme());

    expect(result.current.tokens).toEqual(theme.light);
  });

  it('should correctly expose all properties and methods returned by useNextTheme', () => {
    const setThemeMock = vi.fn();
    const mockContext = {
      theme: 'dark',
      setTheme: setThemeMock,
      forcedTheme: 'dark',
      resolvedTheme: 'dark',
      themes: ['light', 'dark', 'system'],
      systemTheme: 'dark' as const,
    };
    vi.mocked(useNextTheme).mockReturnValue(mockContext);

    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe('dark');
    expect(result.current.forcedTheme).toBe('dark');
    expect(result.current.resolvedTheme).toBe('dark');
    expect(result.current.themes).toEqual(['light', 'dark', 'system']);
    expect(result.current.systemTheme).toBe('dark');

    // Test that the exposed setTheme calls the mock
    result.current.setTheme('light');
    expect(setThemeMock).toHaveBeenCalledWith('light');
  });
});
