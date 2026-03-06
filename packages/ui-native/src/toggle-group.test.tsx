import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Text } from './text';
import { ToggleGroup, ToggleGroupItem } from './toggle-group';

vi.mock('@rn-primitives/toggle', () => {
  return {
    Root: ({ children, className }: { children: React.ReactNode; className?: string }) =>
      React.createElement('button', { className }, children),
  };
});

// Mock primitives
vi.mock('@rn-primitives/toggle-group', () => {
  let onValueChangeHandler: ((value: string) => void) | undefined;

  return {
    Root: ({
      children,
      value,
      type,
      onValueChange,
    }: {
      children: React.ReactNode;
      value?: string[];
      type?: 'single' | 'multiple';
      onValueChange?: (value: string) => void;
    }) => {
      onValueChangeHandler = onValueChange;
      return React.createElement(
        'div',
        {
          'data-value': value,
          'data-type': type,
        },
        children,
      );
    },
    Item: ({ children, value, className }: { children: React.ReactNode; value: string; className?: string }) =>
      React.createElement(
        'button',
        {
          className,
          'data-value': value,
          onClick: () => onValueChangeHandler?.(value),
        },
        children,
      ),
    // Add a mock for @rn-primitives/toggle to prevent module not found error
    __esModule: true,
    default: {},
  };
});

describe('ToggleGroup (Native Implementation)', () => {
  it('renders correctly', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="item1">
          <Text>Item 1</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="item2">
          <Text>Item 2</Text>
        </ToggleGroupItem>
      </ToggleGroup>,
    );

    expect(screen.getByText('Item 1')).toBeDefined();
    expect(screen.getByText('Item 2')).toBeDefined();
  });

  it('handles value change', () => {
    const onValueChange = vi.fn();
    render(
      <ToggleGroup type="single" value="" onValueChange={onValueChange}>
        <ToggleGroupItem value="item1">
          <Text>Item 1</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="item2">
          <Text>Item 2</Text>
        </ToggleGroupItem>
      </ToggleGroup>,
    );

    fireEvent.click(screen.getByText('Item 1'));
    expect(onValueChange).toHaveBeenCalledWith('item1');
  });
});
