import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Label } from './label';

describe('Label', () => {
  it('renders correctly', () => {
    render(<Label>Test Label</Label>);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders within the DOM', () => {
    const { container } = render(<Label>Test Label</Label>);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('supports htmlFor attribute', () => {
    render(
      <>
        <Label htmlFor="test-input">Test Input</Label>
        <input id="test-input" />
      </>,
    );

    const label = screen.getByText('Test Input');
    expect(label).toHaveAttribute('for', 'test-input');
  });
});
