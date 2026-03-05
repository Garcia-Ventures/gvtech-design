import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Switch } from './switch';

// Mock primitives
vi.mock('@rn-primitives/switch', () => {
  const React = require('react');
  return {
    Root: ({ children, checked, onCheckedChange, className }: any) =>
      React.createElement(
        'button',
        {
          className,
          onClick: () => onCheckedChange?.(!checked),
          'aria-checked': checked,
          role: 'switch',
        },
        children,
      ),
    Thumb: ({ className }: any) => React.createElement('div', { className }),
  };
});

describe('Switch (Native Implementation)', () => {
  it('renders correctly', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toBeDefined();
  });

  it('handles checked state change', () => {
    const onCheckedChange = vi.fn();
    render(<Switch checked={false} onCheckedChange={onCheckedChange} />);

    const switchElement = screen.getByRole('switch');
    fireEvent.click(switchElement);
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('respects initial checked state', () => {
    const onCheckedChange = vi.fn();
    render(<Switch checked={true} onCheckedChange={onCheckedChange} />);

    const switchElement = screen.getByRole('switch');
    fireEvent.click(switchElement);
    expect(onCheckedChange).toHaveBeenCalledWith(false);
  });
});
