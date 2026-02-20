import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { Text } from './text';

describe('Card (Native Implementation)', () => {
  it('renders all parts correctly', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Text>Card Content</Text>
        </CardContent>
        <CardFooter>
          <Text>Card Footer</Text>
        </CardFooter>
      </Card>,
    );

    expect(screen.getByText('Card Title')).toBeDefined();
    expect(screen.getByText('Card Description')).toBeDefined();
    expect(screen.getByText('Card Content')).toBeDefined();
    expect(screen.getByText('Card Footer')).toBeDefined();
  });

  it('renders with custom className without crashing', () => {
    const { container } = render(<Card className="custom-card" />);
    expect(container.firstChild).toBeDefined();
  });
});
