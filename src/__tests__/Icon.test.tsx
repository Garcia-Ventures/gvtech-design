import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Icon } from '../Icon';
import assertNoA11yViolations from '../test-utils/axe';

describe('Icon', () => {
  it('renders an svg for a valid icon key', async () => {
    const { container } = render(<Icon icon="check" data-testid="icon" />);
    const el = screen.getByTestId('icon');
    expect(el.tagName.toLowerCase()).toBe('svg');
    // path should exist (may be empty if icon not present)
    expect(el.querySelector('path')).not.toBeNull();
    await assertNoA11yViolations(container);
  });

  it('renders aria-hidden fallback for unknown icon key', async () => {
    const { container } = render(<Icon icon={'__does_not_exist__' as unknown as string} data-testid="missing" />);
    const el = screen.getByTestId('missing');
    expect(el.getAttribute('aria-hidden')).not.toBeNull();
    const path = el.querySelector('path');
    expect(path).not.toBeNull();
    expect(path?.getAttribute('d')).toBe('');
    await assertNoA11yViolations(container);
  });
});
