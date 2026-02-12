import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog';

describe('Dialog', () => {
  it('renders trigger correctly', () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>,
    );

    expect(screen.getByText('Open Dialog')).toBeInTheDocument();
  });

  it('opens and closes the dialog', async () => {
    const user = userEvent.setup();
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
            <DialogDescription>This action cannot be undone.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose>Close Dialog</DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>,
    );

    // Dialog content should not be visible initially (or not in document)
    expect(screen.queryByText('Are you sure absolutely sure?')).not.toBeInTheDocument();

    // Open dialog
    await user.click(screen.getByText('Open Dialog'));

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Are you sure absolutely sure?')).toBeVisible();

    // Close dialog
    // We can use the close button we added
    await user.click(screen.getByText('Close Dialog'));

    // Should be closed
    // Radix UI Dialog unmounts content when closed
    expect(screen.queryByText('Are you sure absolutely sure?')).not.toBeInTheDocument();
  });
});
