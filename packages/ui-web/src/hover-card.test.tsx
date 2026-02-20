import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '.';

describe('HoverCard', () => {
  it('renders trigger correctly', () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>,
    );

    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('shows content on hover', async () => {
    const user = userEvent.setup();
    render(
      <HoverCard openDelay={0} closeDelay={0}>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Content</HoverCardContent>
      </HoverCard>,
    );

    const trigger = screen.getByText('Hover me');

    // Initial state
    expect(screen.queryByText('Content')).not.toBeInTheDocument();

    // Hover
    await user.hover(trigger);

    // Should be visible
    await waitFor(() => {
      expect(screen.getByText('Content')).toBeVisible();
    });

    // Unhover
    await user.unhover(trigger);

    // Should be hidden
    await waitFor(() => {
      expect(screen.queryByText('Content')).not.toBeInTheDocument();
    });
  });
});
