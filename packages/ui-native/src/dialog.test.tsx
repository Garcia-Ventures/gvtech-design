import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from './dialog';

// Mock primitives
vi.mock('@rn-primitives/dialog', () => {
  const ReactMock = require('react');
  const DialogContext = ReactMock.createContext({ open: false, onOpenChange: (_any: any) => {} });

  return {
    Root: ({ children, open, onOpenChange }: any) =>
      ReactMock.createElement(DialogContext.Provider, { value: { open, onOpenChange } }, children),
    Trigger: ({ children, _asChild, ...props }: any) => {
      const { open, onOpenChange } = ReactMock.useContext(DialogContext);
      return ReactMock.createElement('button', { onClick: () => onOpenChange?.(!open), ...props }, children);
    },
    Portal: ({ children }: any) => {
      const { open } = ReactMock.useContext(DialogContext);
      return open ? ReactMock.createElement('div', { 'data-testid': 'portal' }, children) : null;
    },
    Overlay: ReactMock.forwardRef(({ children, _asChild, forceMount, style, ...props }: any, ref: any) => {
      const { open } = ReactMock.useContext(DialogContext);
      if (!open && !forceMount) {
        return null;
      }
      const flattenedStyle = Array.isArray(style) ? Object.assign({}, ...style) : style;
      // Test mocks forward refs into host elements by design
      // eslint-disable-next-line react/refs
      return ReactMock.createElement('div', { ref, style: flattenedStyle, ...props }, children);
    }),
    Content: ReactMock.forwardRef(({ children, _asChild, forceMount, style, ...props }: any, ref: any) => {
      const { open } = ReactMock.useContext(DialogContext);
      if (!open && !forceMount) {
        return null;
      }
      const flattenedStyle = Array.isArray(style) ? Object.assign({}, ...style) : style;
      // Test mocks forward refs into host elements by design
      // eslint-disable-next-line react/refs
      return ReactMock.createElement('div', { ref, style: flattenedStyle, ...props }, children);
    }),
    Title: ReactMock.forwardRef(({ children, _asChild, ...props }: any, ref: any) =>
      ReactMock.createElement('h2', { ref, ...props }, children),
    ),
    Description: ReactMock.forwardRef(({ children, _asChild, ...props }: any, ref: any) =>
      ReactMock.createElement('p', { ref, ...props }, children),
    ),
    Close: ReactMock.forwardRef(({ children, _asChild, ...props }: any, ref: any) => {
      const { onOpenChange } = ReactMock.useContext(DialogContext);
      // Test mocks forward refs into host elements by design
      // eslint-disable-next-line react/refs
      return ReactMock.createElement('button', { onClick: () => onOpenChange?.(false), ref, ...props }, children);
    }),
    useRootContext: () => ReactMock.useContext(DialogContext),
  };
});

// Mock reanimated
vi.mock('react-native-reanimated', () => {
  const ReactMock = require('react');
  return {
    default: {
      View: ReactMock.forwardRef(({ children, style, ...props }: any, ref: any) => {
        const flattenedStyle = Array.isArray(style) ? Object.assign({}, ...style) : style;
        return ReactMock.createElement('div', { ref, style: flattenedStyle, ...props }, children);
      }),
    },
    FadeIn: { duration: () => ({}) },
    FadeOut: { duration: () => ({}) },
  };
});

// Mock lucide
vi.mock('lucide-react-native', () => ({
  X: () => null,
}));

function TestComponent() {
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
}

describe('Dialog (Native Implementation)', () => {
  it('opens and closes correctly', async () => {
    render(<TestComponent />);

    expect(screen.queryByText('Title')).toBeNull();

    fireEvent.click(screen.getByText('Open'));

    expect(await screen.findByText('Title')).toBeDefined();
    expect(screen.getByText('Description')).toBeDefined();
  });
});
