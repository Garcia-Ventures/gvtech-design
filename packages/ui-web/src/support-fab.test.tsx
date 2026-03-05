'use client';

import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { SupportFab } from './support-fab';

vi.mock('./dialog', () => ({
  Dialog: ({ open, children }: { open?: boolean; children: React.ReactNode }) => <div>{open ? children : null}</div>,
  DialogContent: ({ children }: { children: React.ReactNode }) => <div data-testid="desktop-dialog">{children}</div>,
  DialogHeader: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DialogTitle: ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>,
  DialogDescription: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
}));

vi.mock('./drawer', () => ({
  Drawer: ({ open, children }: { open?: boolean; children: React.ReactNode }) => <div>{open ? children : null}</div>,
  DrawerContent: ({ children }: { children: React.ReactNode }) => <div data-testid="mobile-drawer">{children}</div>,
  DrawerHeader: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DrawerTitle: ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>,
  DrawerDescription: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
}));

const setMobile = (isMobile: boolean) => {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: vi.fn().mockImplementation(
      (query: string) =>
        ({
          matches: query === '(max-width: 767px)' ? isMobile : false,
          media: query,
          onchange: null,
          addListener: vi.fn(),
          removeListener: vi.fn(),
          addEventListener: vi.fn(),
          removeEventListener: vi.fn(),
          dispatchEvent: vi.fn(),
        }) as MediaQueryList,
    ),
  });
};

describe('SupportFab', () => {
  it('renders the floating support button', () => {
    setMobile(false);
    render(<SupportFab creatorId="eng618" />);

    expect(screen.getByRole('button', { name: /support this project/i })).toBeInTheDocument();
  });

  it('opens the desktop dialog and renders embed url', () => {
    setMobile(false);
    render(<SupportFab creatorId="eng618" />);

    fireEvent.click(screen.getByRole('button', { name: /support this project/i }));

    expect(screen.getByTestId('desktop-dialog')).toBeInTheDocument();
    expect(screen.getByTitle(/buy me a coffee support form/i)).toHaveAttribute(
      'src',
      'https://www.buymeacoffee.com/widget/page/eng618',
    );
  });

  it('opens the mobile drawer on mobile screens', () => {
    setMobile(true);
    render(<SupportFab creatorId="eng618" />);

    fireEvent.click(screen.getByRole('button', { name: /support this project/i }));

    expect(screen.getByTestId('mobile-drawer')).toBeInTheDocument();
  });

  it('supports controlled open state', () => {
    setMobile(false);
    const onOpenChange = vi.fn();

    render(<SupportFab creatorId="eng618" open={false} onOpenChange={onOpenChange} />);

    fireEvent.click(screen.getByRole('button', { name: /support this project/i }));

    expect(onOpenChange).toHaveBeenCalledWith(true);
    expect(screen.queryByTestId('desktop-dialog')).not.toBeInTheDocument();
  });

  it('derives page and embed links from supportUrl and creatorId', () => {
    setMobile(false);
    render(<SupportFab supportUrl="https://www.buymeacoffee.com" creatorId="@eng618" defaultOpen />);

    expect(screen.getByTitle(/buy me a coffee support form/i)).toHaveAttribute(
      'src',
      'https://www.buymeacoffee.com/widget/page/eng618',
    );

    const fallbackLink = screen.getByRole('link', { name: /open buy me a coffee/i });
    expect(fallbackLink).toHaveAttribute('href', 'https://www.buymeacoffee.com/eng618');
    expect(fallbackLink).toHaveAttribute('target', '_blank');
    expect(fallbackLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
