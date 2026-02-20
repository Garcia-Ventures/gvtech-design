import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Separator } from '.';

describe('Separator', () => {
  it('renders correctly', () => {
    render(<Separator data-testid="separator" />);
    expect(screen.getByTestId('separator')).toBeInTheDocument();
    expect(screen.getByTestId('separator')).toHaveClass('bg-border');
  });

  it('applies orientation classes', () => {
    render(<Separator orientation="vertical" data-testid="separator-vertical" />);
    expect(screen.getByTestId('separator-vertical')).toHaveClass('h-full w-[1px]');
  });
});
