'use client';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Spinner } from '.';

describe('Spinner', () => {
  it('renders correctly with default role and aria-label', () => {
    render(<Spinner data-testid="spinner" />);
    const spinner = screen.getByTestId('spinner');

    expect(spinner).toBeInTheDocument();
    expect(spinner.tagName.toLowerCase()).toBe('svg');
    expect(spinner).toHaveAttribute('role', 'status');
    expect(spinner).toHaveAttribute('aria-label', 'Loading');
    expect(spinner).toHaveClass('size-4');
    expect(spinner).toHaveClass('animate-spin');
  });

  it('merges custom class names correctly', () => {
    render(<Spinner data-testid="spinner" className="size-8 text-blue-500" />);
    const spinner = screen.getByTestId('spinner');

    expect(spinner).toHaveClass('size-8');
    expect(spinner).toHaveClass('text-blue-500');
    expect(spinner).toHaveClass('animate-spin');
  });

  it('supports overriding default aria attributes and adding custom props', () => {
    render(
      <Spinner
        data-testid="spinner"
        aria-label="Processing"
        aria-describedby="spinner-description"
        style={{ color: 'rgb(255, 0, 0)' }}
      />,
    );
    const spinner = screen.getByTestId('spinner');

    expect(spinner).toHaveAttribute('aria-label', 'Processing');
    expect(spinner).toHaveAttribute('aria-describedby', 'spinner-description');
    expect(spinner).toHaveStyle({ color: 'rgb(255, 0, 0)' });
  });
});
