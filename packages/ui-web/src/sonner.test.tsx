import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Toaster } from '.';

describe('Sonner Toaster', () => {
  it('renders correctly', () => {
    const { container } = render(<Toaster />);
    // Sonner renders a list/container. Since it's a portal or fixed, we check presence.
    // However, without triggering a toast, it might be empty or hidden.
    // We check if the container renders without crashing.
    expect(container).toBeInTheDocument();
  });
});
