import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Separator } from './separator';

// Mock primitives
vi.mock('@rn-primitives/separator', () => {
  return {
    Root: ({ className, orientation }: { className?: string; orientation?: 'horizontal' | 'vertical' }) =>
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
