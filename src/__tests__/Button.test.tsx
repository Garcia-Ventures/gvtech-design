import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Button } from '../Button';
import assertNoA11yViolations from '../test-utils/axe';

describe('Button', () => {
  it('renders children text', async () => {
    const { container } = render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeTruthy();
    await assertNoA11yViolations(container);
  });

  it('applies disabled when isDisabled prop is true', async () => {
    const { container } = render(<Button isDisabled>Disabled</Button>);
    const btn = screen.getByText('Disabled').closest('button');
    expect(btn).toHaveAttribute('disabled');
    await assertNoA11yViolations(container);
  });

  it('mounts icon-only button with accessible name', async () => {
    // Render an icon-only button with aria-label to satisfy accessibility
    const { container } = render(
      <Button containsIcon aria-label="Icon action" isDisabled>
        {/* icon-only scenario simulated with no children */}
      </Button>,
    );
    const btn = screen.getByRole('button', { name: 'Icon action' });
    expect(btn).toBeTruthy();
    await assertNoA11yViolations(container);
  });

  it('fails axe for icon-only button without accessible name', async () => {
    const { container } = render(<Button containsIcon isDisabled />);
    // Expect the helper to throw with accessibility violations
    await expect(assertNoA11yViolations(container)).rejects.toThrow(/Accessibility violations detected/);
  });
});
