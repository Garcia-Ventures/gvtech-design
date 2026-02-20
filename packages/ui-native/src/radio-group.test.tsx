import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { RadioGroup, RadioGroupItem } from './radio-group';

// Mock the primitive to avoid JSX parsing issues in node_modules
/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */
vi.mock('@rn-primitives/radio-group', () => {
  const React = require('react');
  return {
    Root: React.forwardRef(({ children, className, value, onValueChange, ...props }: any, ref: any) =>
      React.createElement(
        'div',
        { ref, className, ...props },
        React.Children.map(children, (child: any) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as any, {
              checked: (child.props as any).value === value,
              onCheckedChange: () => onValueChange?.((child.props as any).value),
            });
          }
          return child;
        }),
      ),
    ),
    Item: React.forwardRef(({ children, className, checked, onCheckedChange, ...props }: any, ref: any) =>
      React.createElement(
        'div',
        {
          ref,
          role: 'radio',
          'aria-checked': checked,
          className,
          onClick: onCheckedChange,
          ...props,
        },
        children,
      ),
    ),
    Indicator: ({ children, className }: any) => React.createElement('div', { className }, children),
    useRootContext: () => ({ value: 'option-one' }), // Basic mock
  };
});
/* eslint-enable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */

vi.mock('lucide-react-native', () => ({
  Circle: () => null,
  Check: () => null,
  ChevronDown: () => null,
  ChevronUp: () => null,
  X: () => null,
}));

describe('RadioGroup (Native Implementation)', () => {
  it('renders correctly', () => {
    render(
      <RadioGroup value="option-one" onValueChange={() => {}}>
        <RadioGroupItem value="option-one" aria-label="Option One" />
        <RadioGroupItem value="option-two" aria-label="Option Two" />
      </RadioGroup>,
    );
    expect(screen.getByLabelText('Option One')).toBeDefined();
    expect(screen.getByLabelText('Option Two')).toBeDefined();
  });

  it('handles value change', () => {
    const onValueChange = vi.fn();
    render(
      <RadioGroup value="option-one" onValueChange={onValueChange}>
        <RadioGroupItem value="option-one" aria-label="Option One" />
        <RadioGroupItem value="option-two" aria-label="Option Two" />
      </RadioGroup>,
    );

    fireEvent.click(screen.getByLabelText('Option Two'));
    expect(onValueChange).toHaveBeenCalledWith('option-two');
  });
});
