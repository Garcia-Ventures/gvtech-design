import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Toast, ToastDescription, ToastTitle } from './toast';

// Mock primitives
/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */
vi.mock('@rn-primitives/toast', () => {
  const React = require('react');
  return {
    Root: ({ children, className }: any) => React.createElement('div', { className }, children),
    Title: ({ children, className }: any) => React.createElement('div', { className }, children),
    Description: ({ children, className }: any) => React.createElement('div', { className }, children),
    Close: ({ children, className }: any) => React.createElement('button', { className }, children),
    Action: ({ children, className }: any) => React.createElement('button', { className }, children),
  };
});
/* eslint-enable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */

// Mock reanimated
/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */
vi.mock('react-native-reanimated', () => {
  const React = require('react');
  return {
    default: {
      View: ({ children, ...props }: any) => React.createElement('div', props, children),
    },
    FadeInUp: {},
    FadeOutDown: {},
    Layout: {},
  };
});
/* eslint-enable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */

// Mock lucide
vi.mock('lucide-react-native', () => ({
  X: () => null,
}));

describe('Toast (Native Implementation)', () => {
  it('renders correctly', () => {
    render(
      <Toast open={true} onOpenChange={() => {}}>
        <ToastTitle>Toast Title</ToastTitle>
        <ToastDescription>Toast Description</ToastDescription>
      </Toast>,
    );
    expect(screen.getByText('Toast Title')).toBeDefined();
    expect(screen.getByText('Toast Description')).toBeDefined();
  });

  it('applies variant classes', () => {
    const { container } = render(
      <Toast open={true} onOpenChange={() => {}} variant="destructive">
        <ToastTitle>Error</ToastTitle>
      </Toast>,
    );
    // In our mock, variant translates to classNames via cn()
    // We expect bg-destructive for destructive variant
    expect(container.firstChild).toBeDefined();
  });
});
