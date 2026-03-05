import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Separator } from './separator';

// Mock primitives
vi.mock('@rn-primitives/separator', () => {
  const React = require('react');
  return {
    Root: ({ className, orientation }: any) =>
      React.createElement('div', {
        className,
        'aria-orientation': orientation,
        role: 'separator',
      }),
  };
});

describe('Separator (Native Implementation)', () => {
  it('renders correctly', () => {
    render(<Separator />);
    expect(screen.getByRole('separator')).toBeDefined();
  });

  it('renders with custom orientation', () => {
    render(<Separator orientation="vertical" />);
    expect(screen.getByRole('separator')).toBeDefined();
  });
});
