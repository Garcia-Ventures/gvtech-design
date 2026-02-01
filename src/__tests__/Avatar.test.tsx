import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from '../Avatar';
import '@testing-library/jest-dom';

describe('Avatar', () => {
  it('renders initials when no image is provided', () => {
    render(<Avatar username="John Doe" />);
    expect(screen.getByText('J')).toBeInTheDocument();
  });

  it('renders an image when src is provided', () => {
    render(<Avatar src="https://example.com/avatar.jpg" username="Jane Doe" />);
    const img = screen.getByAltText('Jane Doe');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('shows loading state accurately', () => {
    render(<Avatar loading username="Loading..." />);
    expect(screen.getByLabelText('Loading avatar ...')).toBeInTheDocument();
  });

  it('renders correct initial based on username', () => {
    render(<Avatar username="Eric Garcia" />);
    expect(screen.getByText('E')).toBeInTheDocument();
  });
});
