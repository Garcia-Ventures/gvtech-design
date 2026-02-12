import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Progress } from './progress';

describe('Progress', () => {
  it('renders correctly', () => {
    render(<Progress value={50} aria-label="progress-bar" />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '50');
  });

  it('renders correctly with no value', () => {
    render(<Progress aria-label="progress-bar" />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    // When value is undefined, Radix UI might behave in specific ways, typically indeterminate or 0.
    // Our wrapper: transform: `translateX(-${100 - (value || 0)}%)` -> -100%
  });
});
