import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { Switch } from './switch';

// Mock primitives
vi.mock('@rn-primitives/switch', () => {
  return {
    Root: ({
      children,
      checked,
      onCheckedChange,
      className,
      dataSet,
    }: {
      children: React.ReactNode;
      checked?: boolean;
      onCheckedChange?: (checked: boolean) => void;
      className?: string;
      dataSet?: { state?: string };
    }) =>
      React.createElement(
        'button',
        {
          className,
          'data-state': dataSet?.state,
          onClick: () => onCheckedChange?.(!checked),
          'aria-checked': checked,
          role: 'switch',
        },
        children,
      ),
    Thumb: ({ className, dataSet }: { className?: string; dataSet?: { state?: string } }) =>
      React.createElement('div', { className, 'data-state': dataSet?.state, 'data-testid': 'switch-thumb' }),
  };
});

describe('Switch (Native Implementation)', () => {
  it('renders correctly', () => {
    render(<Switch />);
    expect(screen.getByRole('switch')).toBeDefined();
  });

  it('handles checked state change', () => {
    const onCheckedChange = vi.fn<() => void>();
    render(<Switch checked={false} onCheckedChange={onCheckedChange} />);

    const switchElement = screen.getByRole('switch');
    fireEvent.click(switchElement);
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it('respects initial checked state', () => {
    const onCheckedChange = vi.fn<() => void>();
    render(<Switch checked={true} onCheckedChange={onCheckedChange} />);

    const switchElement = screen.getByRole('switch');
    fireEvent.click(switchElement);
    expect(onCheckedChange).toHaveBeenCalledWith(false);
  });

  it('paints the checked state without data-state from the native primitive', () => {
    render(<Switch checked />);

    const switchElement = screen.getByRole('switch');
    const thumb = screen.getByTestId('switch-thumb');
    expect(switchElement.getAttribute('data-state')).toBe('checked');
    expect(switchElement.className).toContain('bg-primary');
    expect(thumb.getAttribute('data-state')).toBe('checked');
    expect(thumb.className).toContain('translate-x-[18px]');
  });

  it('paints the unchecked state', () => {
    render(<Switch checked={false} />);

    const switchElement = screen.getByRole('switch');
    const thumb = screen.getByTestId('switch-thumb');
    expect(switchElement.getAttribute('data-state')).toBe('unchecked');
    expect(switchElement.className).toContain('bg-input');
    expect(thumb.className).toContain('translate-x-0');
  });
});
