import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Slider } from './slider';

describe('Slider', () => {
  it('renders correctly', () => {
    // Radix Slider uses ResizeObserver
    global.ResizeObserver = class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    };

    render(<Slider defaultValue={[50]} max={100} step={1} />);
    expect(screen.getByRole('slider')).toBeInTheDocument();
    expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '50');
  });
});
