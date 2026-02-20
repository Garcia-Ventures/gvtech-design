import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '.';

describe('ContextMenu', () => {
  it('renders trigger', () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger>Right click here</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Item 1</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>,
    );

    expect(screen.getByText('Right click here')).toBeInTheDocument();
  });

  it('shows menu on right click', async () => {
    const user = userEvent.setup();
    render(
      <ContextMenu>
        <ContextMenuTrigger>Right click here</ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Item 1</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>,
    );

    const trigger = screen.getByText('Right click here');
    await user.pointer({ keys: '[MouseRight]', target: trigger });

    // Ensure item is visible. Radix UI ContextMenu might render it in a portal.
    expect(screen.getByText('Item 1')).toBeVisible();
  });
});
