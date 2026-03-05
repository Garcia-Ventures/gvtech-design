import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Label } from './label';

// Mock primitives
vi.mock('@rn-primitives/label', () => {
  const React = require('react');
  return {
    Root: ({ children, onPress, className }: any) =>
      React.createElement('div', { onClick: onPress, className }, children),
    Text: ({ children, className }: any) => React.createElement('span', { className }, children),
  };
});

describe('Label (Native Implementation)', () => {
  it('renders correctly', () => {
    render(<Label>Label text</Label>);
    expect(screen.getByText('Label text')).toBeDefined();
  });

  it('handles onPress', () => {
    const onPress = vi.fn();
    render(<Label onPress={onPress}>Clickable label</Label>);

    fireEvent.click(screen.getByText('Clickable label'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
