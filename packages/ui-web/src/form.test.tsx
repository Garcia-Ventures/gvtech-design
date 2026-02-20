import { Button, Input } from '@gv-tech/ui-web';
import { zodResolver } from '@hookform/resolvers/zod';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useForm } from 'react-hook-form';
import { describe, expect, it } from 'vitest';
import { z } from 'zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '.';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

function TestForm({ onSubmit }: { onSubmit: (values: z.infer<typeof formSchema>) => void }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

describe('Form', () => {
  it('renders form fields correctly', () => {
    render(<TestForm onSubmit={() => {}} />);

    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('shadcn')).toBeInTheDocument();
    expect(screen.getByText('This is your public display name.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('validates input and displays error message', async () => {
    const user = userEvent.setup();
    render(<TestForm onSubmit={() => {}} />);

    const submitButton = screen.getByRole('button', { name: 'Submit' });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Username must be at least 2 characters.')).toBeVisible();
    });
  });

  it('submits valid data', async () => {
    const user = userEvent.setup();
    const { vi } = await import('vitest');
    const mockSubmit = vi.fn();

    render(<TestForm onSubmit={mockSubmit} />);

    const input = screen.getByLabelText('Username');
    await user.type(input, 'johndoe');
    await user.click(screen.getByRole('button', { name: 'Submit' }));

    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({ username: 'johndoe' }, expect.anything());
    });
  });
});
