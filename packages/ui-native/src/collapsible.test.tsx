import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './collapsible';

// Mock the primitive
/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */
vi.mock('@rn-primitives/collapsible', () => {
  const React = require('react');
  return {
    Root: ({ children, open, onOpenChange, ...props }: any) =>
      React.createElement(
        'div',
        props,
        React.Children.map(children, (child: any) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as any, { open, onOpenChange });
          }
          return child;
        }),
      ),
    Trigger: ({ children, open, onOpenChange, ...props }: any) =>
      React.createElement('button', { onClick: () => onOpenChange?.(!open), ...props }, children),
    Content: ({ children, open, ...props }: any) => (open ? React.createElement('div', props, children) : null),
  };
});
/* eslint-enable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */

describe('Collapsible (Native Implementation)', () => {
  it('renders correctly and toggles content', async () => {
    const TestComponent = () => {
      const [open, setOpen] = React.useState(false);
      return (
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger>Toggle</CollapsibleTrigger>
          <CollapsibleContent>Content</CollapsibleContent>
        </Collapsible>
      );
    };

    render(<TestComponent />);

    expect(screen.queryByText('Content')).toBeNull();

    const trigger = screen.getByRole('button', { name: /toggle/i });
    fireEvent.click(trigger);

    expect(await screen.findByText('Content')).toBeDefined();
  });
});
