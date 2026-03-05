import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Progress } from './progress';

describe('Progress (Native Implementation)', () => {
  it('renders correctly', () => {
    render(<Progress />);
    // Progress renders as a View, just test it doesn't crash
    expect(screen.getByRole('progressbar')).toBeDefined();
  });

  it('shows progress value', () => {
    render(<Progress value={50} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toBeDefined();
    // The progress indicator should be styled with 50% width
  });
});
