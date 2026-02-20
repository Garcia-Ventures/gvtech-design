import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

describe('Avatar', () => {
  it('renders correctly', () => {
    render(
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>,
    );

    // In JSDOM, image loading might not happen immediately or at all without mocking.
    // However, the elements should be in the DOM.
    // Radix conditionally renders Image or Fallback.
    // By default, it might render Image and hide Fallback, or vice versa depending on loading.

    // Let's check that the root is present
    const avatar = screen.getByText('CN')?.parentElement || screen.getByRole('img').parentElement;
    expect(avatar).toBeInTheDocument();
  });

  it('renders fallback when image is missing', () => {
    render(
      <Avatar>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>,
    );

    expect(screen.getByText('CN')).toBeInTheDocument();
  });
});
