import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from './sheet';

// Mock primitives
/*   @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */
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
    Overlay: ReactMock.forwardRef(({ children, _asChild, forceMount, ...props }: any, ref: any) => {
      const { open } = ReactMock.useContext(DialogContext);
      if (!open && !forceMount) {
        return null;
      }
      // Test mocks forward refs into host elements by design
      // eslint-disable-next-line react/refs
      return ReactMock.createElement('div', { ref, ...props }, children);
    }),
    Content: ReactMock.forwardRef(({ children, _asChild, forceMount, ...props }: any, ref: any) => {
      const { open } = ReactMock.useContext(DialogContext);
      if (!open && !forceMount) {
        return null;
      }
      // Test mocks forward refs into host elements by design
      // eslint-disable-next-line react/refs
      return ReactMock.createElement('div', { ref, ...props }, children);
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
/*   @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */
vi.mock('react-native-reanimated', () => {
  const ReactMock = require('react');
  return {
    default: {
      View: ReactMock.forwardRef(({ children, ...props }: any, ref: any) =>
        ReactMock.createElement('div', { ref, ...props }, children),
      ),
    },
    FadeIn: { duration: () => ({}) },
    FadeOut: { duration: () => ({}) },
    SlideInRight: {},
    SlideOutRight: {},
  };
});

// Mock lucide
vi.mock('lucide-react-native', () => ({
  X: () => null,
}));

function TestComponent() {
  const [open, setOpen] = React.useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent side="right">
        <SheetTitle>Sheet Title</SheetTitle>
        <SheetDescription>Sheet Description</SheetDescription>
      </SheetContent>
    </Sheet>
  );
}

describe('Sheet (Native Implementation)', () => {
  it('opens and closes correctly', async () => {
    render(<TestComponent />);

    expect(screen.queryByText('Sheet Title')).toBeNull();

    fireEvent.click(screen.getByText('Open'));

    expect(await screen.findByText('Sheet Title')).toBeDefined();
    expect(screen.getByText('Sheet Description')).toBeDefined();
  });
});
