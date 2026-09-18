import { render } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { describe, expect, it, vi } from 'vitest';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './form';

vi.mock('@rn-primitives/label', () => ({
  Root: ({ children }: any) => children,
  Text: ({ children }: any) => children,
}));

vi.mock('@rn-primitives/slot', () => ({
  Slot: ({ children }: any) => children,
}));

// A wrapper to use hooks inside tests
const TestFormWrapper = () => {
  const form = useForm({
    defaultValues: { testField: 'test' },
  });

  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="testField"
        render={() => (
          <FormItem>
            <FormLabel>Test Label</FormLabel>
            <FormControl>
              <></>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </Form>
  );
};

describe('Form (Native Implementation)', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<TestFormWrapper />);
    expect(getByText('Test Label')).toBeDefined();
  });
});
