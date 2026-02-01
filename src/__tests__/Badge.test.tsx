import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from '../Badge';
import '@testing-library/jest-dom';

describe('Badge', () => {
  it('renders with children text', () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('renders with different statuses', () => {
    const { rerender } = render(<Badge status="positive">Positive</Badge>);
    expect(screen.getByText('Positive')).toBeInTheDocument();

    rerender(<Badge status="negative">Negative</Badge>);
    expect(screen.getByText('Negative')).toBeInTheDocument();

    rerender(<Badge status="warning">Warning</Badge>);
    expect(screen.getByText('Warning')).toBeInTheDocument();

    rerender(<Badge status="error">Error</Badge>);
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
