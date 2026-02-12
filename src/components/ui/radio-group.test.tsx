import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { RadioGroup, RadioGroupItem } from './radio-group';

describe('RadioGroup', () => {
  it('renders correctly', () => {
    render(
      <RadioGroup defaultValue="option-one">
        <RadioGroupItem value="option-one" id="option-one" aria-label="Option One" />
        <RadioGroupItem value="option-two" id="option-two" aria-label="Option Two" />
      </RadioGroup>,
    );

    expect(screen.getByRole('radio', { name: /Option One/i })).toBeInTheDocument();
    // Radix RadioGroup renders standard inputs visually hidden.
    // Testing library query by role 'radio' should find them.
    // However, since we didn't provide labels, we might need to rely on 'checked' state or IDs.

    const radio1 = screen.getByRole('radio', { checked: true });
    expect(radio1).toBeInTheDocument();
    expect(radio1).toHaveValue('option-one');
  });

  it('changes value on click', async () => {
    const user = userEvent.setup();
    render(
      <RadioGroup defaultValue="option-one">
        <RadioGroupItem value="option-one" />
        <RadioGroupItem value="option-two" data-testid="radio-two" />
      </RadioGroup>,
    );

    const radio2 = screen.getByTestId('radio-two');
    await user.click(radio2);

    expect(radio2).toBeChecked();
  });
});
