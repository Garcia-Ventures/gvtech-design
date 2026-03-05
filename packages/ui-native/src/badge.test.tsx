import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from './badge';

describe('Badge (Native Implementation)', () => {
  it('renders correctly', () => {
    render(<Badge>Badge text</Badge>);
    expect(screen.getByText('Badge text')).toBeDefined();
  });

  it('renders with different variants', () => {
    render(<Badge variant="secondary">Secondary Badge</Badge>);
    expect(screen.getByText('Secondary Badge')).toBeDefined();
  });
});
