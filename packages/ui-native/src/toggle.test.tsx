import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Text } from './text';
import { Toggle } from './toggle';

// Mock primitives
vi.mock('@rn-primitives/toggle', () => {
  return {
    Root: ({
      children,
      pressed,
      onPressedChange,
      className,
    }: {
      children: React.ReactNode;
      pressed?: boolean;
      onPressedChange?: (pressed: boolean) => void;
      className?: string;
    }) =>
      React.createElement(
        'button',
        {
          className,
          onClick: () => onPressedChange?.(!pressed),
          'aria-pressed': pressed,
        },
        children,
      ),
  };
});

describe('Toggle (Native Implementation)', () => {
  it('renders correctly', () => {
    render(
      <Toggle>
        <Text>Toggle me</Text>
      </Toggle>,
    );
    expect(screen.getByText('Toggle me')).toBeDefined();
  });

  it('handles press state change', () => {
    const onPressedChange = vi.fn();
    render(
      <Toggle pressed={false} onPressedChange={onPressedChange}>
        <Text>Toggle me</Text>
      </Toggle>,
    );

    fireEvent.click(screen.getByText('Toggle me'));
    expect(onPressedChange).toHaveBeenCalledWith(true);
  });
});
