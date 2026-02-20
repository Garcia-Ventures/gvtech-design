import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AspectRatio } from '.';

describe('AspectRatio', () => {
  it('renders correctly', () => {
    const { container } = render(
      <AspectRatio ratio={16 / 9}>
        <img src="test.jpg" alt="test" />
      </AspectRatio>,
    );

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();

    // Radix AspectRatio renders a wrapper with padding-bottom based on ratio
    // We can check if the wrapper style is applied
    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyle({ paddingBottom: expect.stringMatching(/%$/) });
  });

  it('renders with custom ratio', () => {
    const { container } = render(
      <AspectRatio ratio={1 / 1}>
        <div>Square</div>
      </AspectRatio>,
    );

    expect(screen.getByText('Square')).toBeInTheDocument();
    const wrapper = container.firstChild;
    // 1/1 ratio should be 100% padding-bottom
    expect(wrapper).toHaveStyle({ paddingBottom: '100%' });
  });
});
