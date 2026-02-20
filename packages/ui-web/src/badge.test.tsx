import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from './badge';

describe('Badge', () => {
  it('renders correctly', () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('renders variants', () => {
    const { rerender, getByText } = render(<Badge variant="default">Default</Badge>);
    expect(getByText('Default')).toHaveClass('bg-primary');

    rerender(<Badge variant="secondary">Secondary</Badge>);
    expect(getByText('Secondary')).toHaveClass('bg-secondary');

    rerender(<Badge variant="destructive">Destructive</Badge>);
    expect(getByText('Destructive')).toHaveClass('bg-destructive');

    rerender(<Badge variant="outline">Outline</Badge>);
    expect(getByText('Outline')).toHaveClass('text-foreground');
  });
});
