import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './dialog';

// Mock primitives
/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
vi.mock('@rn-primitives/dialog', () => {
  const React = require('react');
  const DialogContext = React.createContext({ open: false, onOpenChange: (_any: any) => {} });

  return {
    Root: ({ children, open, onOpenChange }: any) =>
      React.createElement(DialogContext.Provider, { value: { open, onOpenChange } }, children),
    Trigger: ({ children, asChild, ...props }: any) => {
      const { open, onOpenChange } = React.useContext(DialogContext);
      return React.createElement('button', { onClick: () => onOpenChange?.(!open), ...props }, children);
    },
    Portal: ({ children, hostName }: any) => {
      const { open } = React.useContext(DialogContext);
      return open ? React.createElement('div', { 'data-testid': 'portal' }, children) : null;
    },
    Overlay: React.forwardRef(({ children, asChild, forceMount, ...props }: any, ref: any) => {
      const { open } = React.useContext(DialogContext);
      if (!open && !forceMount) {
        return null;
      }
      return React.createElement('div', { ref, ...props }, children);
    }),
    Content: React.forwardRef(({ children, asChild, forceMount, ...props }: any, ref: any) => {
      const { open } = React.useContext(DialogContext);
      if (!open && !forceMount) {
        return null;
      }
      return React.createElement('div', { ref, ...props }, children);
    }),
    Title: React.forwardRef(({ children, asChild, ...props }: any, ref: any) =>
      React.createElement('h2', { ref, ...props }, children),
    ),
    Description: React.forwardRef(({ children, asChild, ...props }: any, ref: any) =>
      React.createElement('p', { ref, ...props }, children),
    ),
    Close: React.forwardRef(({ children, asChild, ...props }: any, ref: any) => {
      const { onOpenChange } = React.useContext(DialogContext);
      return React.createElement('button', { onClick: () => onOpenChange?.(false), ref, ...props }, children);
    }),
    useRootContext: () => React.useContext(DialogContext),
  };
});
/* eslint-enable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */

// Mock reanimated
/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */
vi.mock('react-native-reanimated', () => {
  const React = require('react');
  return {
    default: {
      View: React.forwardRef(({ children, ...props }: any, ref: any) =>
        React.createElement('div', { ref, ...props }, children),
      ),
    },
    FadeIn: { duration: () => ({}) },
    FadeOut: { duration: () => ({}) },
  };
});
/* eslint-enable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */

// Mock lucide
vi.mock('lucide-react-native', () => ({
  X: () => null,
}));

describe('Dialog (Native Implementation)', () => {
  it('opens and closes correctly', async () => {
    const TestComponent = () => {
      const [open, setOpen] = React.useState(false);
      return (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogContent>
        </Dialog>
      );
    };

    render(<TestComponent />);

    expect(screen.queryByText('Title')).toBeNull();

    fireEvent.click(screen.getByText('Open'));

    expect(await screen.findByText('Title')).toBeDefined();
    expect(screen.getByText('Description')).toBeDefined();
  });
});
