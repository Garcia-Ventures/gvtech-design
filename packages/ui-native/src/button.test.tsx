import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './button';
import { Text } from './text';

describe('Button (Native Implementation)', () => {
  it('renders correctly', () => {
    render(
      <Button>
        <Text>Click me</Text>
      </Button>,
    );
    expect(screen.getByText('Click me')).toBeDefined();
  });

  it('handles onPress', () => {
    const onPress = vi.fn();
    render(
      <Button onPress={onPress}>
        <Text>Click me</Text>
      </Button>,
    );

    fireEvent.click(screen.getByText('Click me'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
