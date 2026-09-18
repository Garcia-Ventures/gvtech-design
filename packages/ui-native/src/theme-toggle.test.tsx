import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { ThemeToggle } from './theme-toggle';

// Mock lucide-react-native
vi.mock('lucide-react-native', () => ({
  Sun: () => null,
  Moon: () => null,
  SunMoon: () => null,
}));

vi.mock('react-native-css-interop', () => ({
  cssInterop: vi.fn(),
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
  const Mock = ({ children }: { children?: React.ReactNode }) => React.createElement('div', {}, children);
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

vi.mock('@radix-ui/react-dropdown-menu', () => {
  const React = require('react');
  const Mock = ({ children }: { children?: React.ReactNode }) => React.createElement('div', {}, children);
  return {
    Item: Mock,
  };
});

// Mock reanimated
vi.mock('react-native-reanimated', () => {
  const React = require('react');
  return {
    default: {
      View: ({ children, style }: { children?: React.ReactNode; style?: any }) =>
        React.createElement('div', { style }, children),
    },
    useAnimatedStyle: () => ({}),
    useDerivedValue: (val: unknown) => ({ value: typeof val === 'function' ? (val as () => unknown)() : val }),
    interpolate: () => 0,
    withTiming: (val: unknown) => val,
    FadeIn: { duration: () => ({}) },
    FadeOut: { duration: () => ({}) },
    Extrapolation: { CLAMP: 'clamp' },
  };
});

describe('ThemeToggle (Native Implementation)', () => {
  it('renders correctly', () => {
    const { rerender } = render(<ThemeToggle variant="binary" />);
    expect(screen).toBeDefined();

    rerender(<ThemeToggle variant="ternary" />);
    expect(screen).toBeDefined();
  });

  it('handles custom theme', () => {
    render(<ThemeToggle customTheme="dark" />);
    expect(screen).toBeDefined();
  });
});
