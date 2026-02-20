import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Checkbox } from './checkbox';

// Mock the primitive to avoid JSX parsing issues in node_modules
/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */
vi.mock('@rn-primitives/checkbox', () => {
  const React = require('react');
  return {
    Root: React.forwardRef(({ children, className, checked, onCheckedChange, ...props }: any, ref: any) =>
      React.createElement(
        'div',
        {
          ref,
          role: 'checkbox',
          'aria-checked': checked,
          className,
          onClick: () => onCheckedChange?.(!checked),
          ...props,
        },
        children,
      ),
    ),
    Indicator: ({ children, className }: any) => React.createElement('div', { className }, children),
  };
});
/* eslint-enable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */

vi.mock('lucide-react-native', () => ({
  Check: () => null,
  Circle: () => null,
  ChevronDown: () => null,
  ChevronUp: () => null,
  X: () => null,
}));

describe('Checkbox (Native Implementation)', () => {
  it('renders correctly', () => {
    const { container } = render(<Checkbox checked={false} onCheckedChange={() => {}} />);
    expect(container.firstChild).toBeDefined();
  });

  it('handles onCheckedChange', () => {
    const onCheckedChange = vi.fn();
    render(<Checkbox checked={false} onCheckedChange={onCheckedChange} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('reflects checked state', () => {
    render(<Checkbox checked={true} onCheckedChange={() => {}} />);
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });
});
