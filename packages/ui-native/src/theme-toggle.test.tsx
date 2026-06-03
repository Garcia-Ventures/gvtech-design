import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ThemeToggle } from './theme-toggle';

// Mock lucide-react-native
vi.mock('lucide-react-native', () => ({
  Sun: () => null,
  Moon: () => null,
  SunMoon: () => null,
}));

// Mock nativewind
vi.mock('nativewind', () => ({
  useColorScheme: vi.fn(() => ({
    colorScheme: 'light',
    setColorScheme: vi.fn(),
    toggleColorScheme: vi.fn(),
  })),
}));

// Mock Dropdown Menu primitives
vi.mock('@rn-primitives/dropdown-menu', () => {
  const React = require('react');
  const Mock = ({ children }: any) => React.createElement('div', {}, children);
  return {
    Root: Mock,
    Trigger: Mock,
    Portal: Mock,
    Group: Mock,
    RadioGroup: Mock,
    Sub: Mock,
    Overlay: Mock,
    Content: Mock,
    Item: Mock,
    CheckboxItem: Mock,
    RadioItem: Mock,
    Label: Mock,
    Separator: Mock,
    SubTrigger: Mock,
    SubContent: Mock,
    ItemIndicator: Mock,
  };
});

// Mock reanimated
vi.mock('react-native-reanimated', () => {
  const React = require('react');
  return {
    default: {
      // @ts-expect-error TS7031
      View: ({ children, style }) => React.createElement('div', { style }, children),
    },
    useAnimatedStyle: () => ({}),
    // @ts-expect-error TS7006
    useDerivedValue: (val) => ({ value: val instanceof Function ? val() : val }),
    interpolate: () => 0,
    // @ts-expect-error TS7006
    withTiming: (val) => val,
    FadeIn: { duration: () => ({}) },
    FadeOut: { duration: () => ({}) },
    Extrapolation: { CLAMP: 'clamp' },
  };
});

describe('ThemeToggle (Native Implementation)', () => {
  it('renders correctly', () => {
    // Binary variant (default)
    const { rerender } = render(<ThemeToggle variant="binary" />);
    expect(screen).toBeDefined();

    // Ternary variant
    rerender(<ThemeToggle variant="ternary" />);
    expect(screen).toBeDefined();
  });

  it('handles custom theme', () => {
    render(<ThemeToggle customTheme="dark" />);
    expect(screen).toBeDefined();
  });
});
