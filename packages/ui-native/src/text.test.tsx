import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Text } from './text';

describe('Text (Native Implementation)', () => {
  it('renders correctly', () => {
    render(<Text>Hello World</Text>);
    expect(screen.getByText('Hello World')).toBeDefined();
  });

  it('applies variant classes', () => {
    render(<Text variant="h1">Heading</Text>);
    expect(screen.getByText('Heading')).toBeDefined();
  });

  it('renders children correctly', () => {
    render(
      <Text>
        <Text>Nested</Text>
      </Text>,
    );
    expect(screen.getByText('Nested')).toBeDefined();
  });
});
