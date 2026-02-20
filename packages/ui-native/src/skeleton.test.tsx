import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Skeleton } from './skeleton';

// Mock reanimated
/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */
vi.mock('react-native-reanimated', () => {
  const React = require('react');
  return {
    default: {
      View: ({ children, style, ...props }: any) => React.createElement('div', { style, ...props }, children),
    },
    useAnimatedStyle: () => ({}),
    useSharedValue: (val: any) => ({ value: val }),
    withRepeat: (val: any) => val,
    withSequence: (...args: any[]) => args[0],
    withTiming: (val: any) => val,
    FadeIn: { duration: () => ({}) },
    FadeOut: { duration: () => ({}) },
  };
});
/* eslint-enable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */

describe('Skeleton (Native Implementation)', () => {
  it('renders correctly', () => {
    const { container } = render(<Skeleton className="w-10 h-10" />);
    expect(container.firstChild).toBeDefined();
  });
});
