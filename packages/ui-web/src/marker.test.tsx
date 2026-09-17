'use client';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Marker, MarkerContent } from './marker';

describe('Marker', () => {
  it('renders content', () => {
    render(
      <Marker>
        <MarkerContent>Today</MarkerContent>
      </Marker>,
    );
    expect(screen.getByText('Today')).toBeInTheDocument();
  });

  it('applies variant attribute', () => {
    render(
      <Marker variant="separator" data-testid="marker">
        <MarkerContent>Today</MarkerContent>
      </Marker>,
    );
    expect(screen.getByTestId('marker')).toHaveAttribute('data-variant', 'separator');
  });
});
