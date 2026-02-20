import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { useToast } from './hooks/use-toast';
import { Toaster } from './toaster';

// Test component to trigger toasts
const ToastTrigger = () => {
  const { toast } = useToast();
  return (
    <button
      onClick={() =>
        toast({
          title: 'Test Toast',
          description: 'This is a test message',
        })
      }
    >
      Show Toast
    </button>
  );
};

describe('Toast', () => {
  it('shows toast when triggered', async () => {
    const user = userEvent.setup();
    render(
      <>
        <Toaster />
        <ToastTrigger />
      </>,
    );

    expect(screen.queryByText('Test Toast')).not.toBeInTheDocument();

    await user.click(screen.getByText('Show Toast'));

    // Toast might take a moment to appear (animation)
    expect(await screen.findByText('Test Toast')).toBeInTheDocument();
    expect(screen.getByText('This is a test message')).toBeInTheDocument();
  });
});
