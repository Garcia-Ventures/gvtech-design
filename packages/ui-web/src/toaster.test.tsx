'use client';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { toast, useToast } from './hooks/use-toast';
import { ToastAction } from './toast';
import { Toaster } from './toaster';

// Simple trigger component to fire different toast configurations
const MultiToastTrigger = () => {
  const { toast } = useToast();
  return (
    <div>
      <button
        onClick={() =>
          toast({
            title: 'Success Title',
            description: 'Operation completed successfully',
          })
        }
      >
        Trigger Success
      </button>
      <button
        onClick={() =>
          toast({
            title: 'Destructive Title',
            description: 'Something went wrong',
            variant: 'destructive',
          })
        }
      >
        Trigger Destructive
      </button>
      <button
        onClick={() =>
          toast({
            title: 'Action Title',
            description: 'Click the button',
            action: <ToastAction altText="Try again">Undo</ToastAction>,
          })
        }
      >
        Trigger Action
      </button>
    </div>
  );
};

describe('Toaster', () => {
  it('renders correctly with multiple different toast configurations', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Toaster />
        <MultiToastTrigger />
      </>,
    );

    // Initial check: no toasts are rendered
    expect(screen.queryByText('Success Title')).not.toBeInTheDocument();
    expect(screen.queryByText('Destructive Title')).not.toBeInTheDocument();
    expect(screen.queryByText('Action Title')).not.toBeInTheDocument();

    // Trigger Success Toast
    await user.click(screen.getByText('Trigger Success'));
    expect(await screen.findByText('Success Title')).toBeInTheDocument();
    expect(screen.getByText('Operation completed successfully')).toBeInTheDocument();

    // Trigger Destructive Toast (Note: limit might be 1, so the previous toast will be replaced/dismissed depending on the hook implementation)
    await user.click(screen.getByText('Trigger Destructive'));
    expect(await screen.findByText('Destructive Title')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();

    // Trigger Toast with Action
    await user.click(screen.getByText('Trigger Action'));
    expect(await screen.findByText('Action Title')).toBeInTheDocument();
    expect(screen.getByText('Click the button')).toBeInTheDocument();
    expect(screen.getByText('Undo')).toBeInTheDocument();
  });

  it('can trigger toast directly using exported toast function and clears properly', async () => {
    render(<Toaster />);

    expect(screen.queryByText('Direct Toast')).not.toBeInTheDocument();

    act(() => {
      toast({
        title: 'Direct Toast',
        description: 'Triggered from outside hook',
      });
    });

    expect(await screen.findByText('Direct Toast')).toBeInTheDocument();
    expect(screen.getByText('Triggered from outside hook')).toBeInTheDocument();
  });
});
