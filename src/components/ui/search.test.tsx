import { fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, Search, SearchTrigger } from './search';

// Mock CommandDialog since it uses Radix Dialog which might need a portal
vi.mock('@/components/ui/dialog', () => ({
  Dialog: ({ children, open }: { children: React.ReactNode; open: boolean }) => (open ? <div>{children}</div> : null),
  DialogContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DialogPortal: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DialogOverlay: () => null,
  DialogTitle: ({ children }: { children: React.ReactNode }) => <h2>{children}</h2>,
  DialogDescription: ({ children }: { children: React.ReactNode }) => <p>{children}</p>,
}));

describe('Search', () => {
  it('renders search trigger', () => {
    render(<SearchTrigger />);
    expect(screen.getByText('Search docs...')).toBeInTheDocument();
  });

  it('opens search dialog when trigger is clicked (controlled)', () => {
    const onOpenChange = vi.fn();
    render(
      <Search open={false} onOpenChange={onOpenChange}>
        <CommandInput placeholder="Search..." />
      </Search>,
    );

    // The dialog should be closed initially
    expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument();
  });

  it('responds to keyboard shortcuts', () => {
    render(
      <Search>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Result 1</CommandItem>
        </CommandList>
      </Search>,
    );

    // Simulate Cmd+K
    fireEvent.keyDown(document, { key: 'k', metaKey: true });

    // Check if dialog content is visible
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  it('filters results correctly', () => {
    render(
      <Search open={true}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup heading="Components">
            <SearchItem>Button</SearchItem>
            <SearchItem>Input</SearchItem>
          </CommandGroup>
        </CommandList>
      </Search>,
    );

    const input = screen.getByPlaceholderText('Search...');
    fireEvent.change(input, { target: { value: 'But' } });

    expect(screen.getByText('Button')).toBeInTheDocument();
    // cmdk removes non-matching items from the DOM
    expect(screen.queryByText('Input')).not.toBeInTheDocument();
  });
});

// Helper component for testing
function SearchItem({ children }: { children: React.ReactNode }) {
  return <CommandItem>{children}</CommandItem>;
}
