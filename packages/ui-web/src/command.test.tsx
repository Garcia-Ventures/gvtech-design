'use client';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '.';

describe('Command', () => {
  it('renders correctly', () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
    expect(screen.getByText('Suggestions')).toBeInTheDocument();
    expect(screen.getByText('Calendar')).toBeInTheDocument();
  });

  it('filters items based on input', async () => {
    const user = userEvent.setup();
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );

    const input = screen.getByPlaceholderText('Search...');
    await user.type(input, 'Cal');

    expect(screen.getByText('Calendar')).toBeVisible();
    expect(screen.getByText('Calculator')).toBeVisible();
    // search emoji should be filtered out
    // Note: cmdk might just hide items, so we check if they are visible or not
    // or checks class names.
    // Let's check if Search Emoji is not visible or removed
    const emoji = screen.queryByText('Search Emoji');
    // cmdk either removes filtered items or hides them — both mean "filtered out"
    const visibleEmojis = screen
      .queryAllByText('Search Emoji')
      .filter(
        (el) =>
          el instanceof HTMLElement &&
          getComputedStyle(el).display !== 'none' &&
          getComputedStyle(el).visibility !== 'hidden' &&
          !el.hidden &&
          el.getAttribute('aria-hidden') !== 'true',
      );
    expect(emoji === null || visibleEmojis.length === 0).toBe(true);
  });

  it('shows empty state when no results', async () => {
    const user = userEvent.setup();
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>,
    );

    const input = screen.getByPlaceholderText('Search...');
    await user.type(input, 'XYZ');

    expect(screen.getByText('No results found.')).toBeVisible();
  });
});
