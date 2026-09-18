'use client';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Bubble, BubbleContent } from './bubble';

describe('Bubble', () => {
  it('renders content', () => {
    render(
      <Bubble>
        <BubbleContent>Hello</BubbleContent>
      </Bubble>,
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('applies variant and align attributes', () => {
    render(
      <Bubble variant="destructive" align="end" data-testid="bubble">
        <BubbleContent>Oops</BubbleContent>
      </Bubble>,
    );
    const el = screen.getByTestId('bubble');
    expect(el).toHaveAttribute('data-variant', 'destructive');
    expect(el).toHaveAttribute('data-align', 'end');
  });
});
