import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Toggle } from './toggle';

describe('Toggle', () => {
  it('renders correctly', () => {
    render(<Toggle aria-label="Toggle bold">B</Toggle>);
    expect(screen.getByLabelText('Toggle bold')).toBeInTheDocument();
  });

  it('toggles state', async () => {
    const user = userEvent.setup();
    render(<Toggle aria-label="Toggle italic" />);
    const toggle = screen.getByLabelText('Toggle italic');

    expect(toggle).toHaveAttribute('aria-pressed', 'false');
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-pressed', 'true');
  });
});
