import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ToggleGroup, ToggleGroupItem } from '.';

describe('ToggleGroup', () => {
  it('renders correctly', () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a" aria-label="Toggle A">
          A
        </ToggleGroupItem>
        <ToggleGroupItem value="b" aria-label="Toggle B">
          B
        </ToggleGroupItem>
      </ToggleGroup>,
    );

    expect(screen.getByLabelText('Toggle A')).toBeInTheDocument();
    expect(screen.getByLabelText('Toggle B')).toBeInTheDocument();
  });

  it('toggles selection', async () => {
    const user = userEvent.setup();
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="a" aria-label="Toggle A">
          A
        </ToggleGroupItem>
        <ToggleGroupItem value="b" aria-label="Toggle B">
          B
        </ToggleGroupItem>
      </ToggleGroup>,
    );

    const toggleA = screen.getByLabelText('Toggle A');
    await user.click(toggleA);
    expect(toggleA).toHaveAttribute('aria-checked', 'true');
  });
});
