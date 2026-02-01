import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Link } from '../Link';
import '@testing-library/jest-dom';

describe('Link', () => {
  it('renders a link with correct text', () => {
    render(<Link href="https://example.com">Example</Link>);
    const linkElement = screen.getByRole('link', { name: /example/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'https://example.com');
  });

  it('renders as a button when isButton is true', () => {
    render(<Link isButton>Button Link</Link>);
    const buttonElement = screen.getByRole('button', { name: /button link/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders an arrow icon when withArrow is true', () => {
    const { container } = render(<Link withArrow>Arrow Link</Link>);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('renders with secondary styling', () => {
    render(<Link secondary>Secondary Link</Link>);
    const linkElement = screen.getByText('Secondary Link').closest('a');
    expect(linkElement).toHaveStyle('color: rgb(153, 153, 153)'); // color.mediumdark
  });
});
