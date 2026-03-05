import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Alert, AlertDescription, AlertTitle } from './alert';

describe('Alert (Native Implementation)', () => {
  it('renders correctly', () => {
    render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>Alert description</AlertDescription>
      </Alert>,
    );

    expect(screen.getByText('Alert Title')).toBeDefined();
    expect(screen.getByText('Alert description')).toBeDefined();
  });

  it('renders with different variants', () => {
    render(
      <Alert variant="destructive">
        <AlertTitle>Destructive Alert</AlertTitle>
      </Alert>,
    );

    expect(screen.getByText('Destructive Alert')).toBeDefined();
  });
});
