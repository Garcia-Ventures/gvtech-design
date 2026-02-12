import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';

describe('DropdownMenu', () => {
  it('renders trigger correctly', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    expect(screen.getByText('Open Menu')).toBeInTheDocument();
  });

  it('opens menu on click', async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    await user.click(screen.getByText('Open Menu'));

    expect(screen.getByText('My Account')).toBeVisible();
    expect(screen.getByText('Profile')).toBeVisible();
  });

  it('handles checkbox items', async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked>Checked Item</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={false}>Unchecked Item</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    await user.click(screen.getByText('Open'));

    const checkedItem = screen.getByText('Checked Item');
    // const uncheckedItem = screen.getByText('Unchecked Item');

    expect(checkedItem).toBeVisible();
    // Radix UI adds data-state="checked" or similar.
    // But testing-library's toBeChecked() works on roles like 'checkbox' or 'menuitemcheckbox'
    expect(screen.getByRole('menuitemcheckbox', { name: 'Checked Item' })).toBeChecked();
    expect(screen.getByRole('menuitemcheckbox', { name: 'Unchecked Item' })).not.toBeChecked();
  });

  it('handles radio items', async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value="top">
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    await user.click(screen.getByText('Open'));

    expect(screen.getByRole('menuitemradio', { name: 'Top' })).toBeChecked();
    expect(screen.getByRole('menuitemradio', { name: 'Bottom' })).not.toBeChecked();
  });
});
