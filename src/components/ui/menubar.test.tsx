import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from './menubar';

describe('Menubar', () => {
  it('renders trigger correctly', () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );

    expect(screen.getByText('File')).toBeInTheDocument();
  });

  it('opens menu on click', async () => {
    const user = userEvent.setup();
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>New Window</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );

    await user.click(screen.getByText('File'));

    expect(screen.getByText('New Tab')).toBeVisible();
    expect(screen.getByText('New Window')).toBeVisible();
  });

  it('handles checkbox items', async () => {
    const user = userEvent.setup();
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarCheckboxItem checked>Show Sidebar</MenubarCheckboxItem>
            <MenubarCheckboxItem checked={false}>Show Status Bar</MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );

    await user.click(screen.getByText('View'));

    expect(screen.getByRole('menuitemcheckbox', { name: 'Show Sidebar' })).toBeChecked();
    expect(screen.getByRole('menuitemcheckbox', { name: 'Show Status Bar' })).not.toBeChecked();
  });

  it('handles radio items', async () => {
    const user = userEvent.setup();
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
          <MenubarContent>
            <MenubarRadioGroup value="andy">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>,
    );

    await user.click(screen.getByText('Profiles'));

    expect(screen.getByRole('menuitemradio', { name: 'Andy' })).toBeChecked();
    expect(screen.getByRole('menuitemradio', { name: 'Benoit' })).not.toBeChecked();
  });
});
