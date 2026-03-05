import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Text } from './text';

// Mock primitives
vi.mock('@rn-primitives/avatar', () => {
  const React = require('react');
  return {
    Root: ({ children, className }: any) => React.createElement('div', { className }, children),
    Image: ({ className, source }: any) => React.createElement('img', { className, src: source?.uri }),
    Fallback: ({ children, className }: any) => React.createElement('div', { className }, children),
  };
});

describe('Avatar (Native Implementation)', () => {
  it('renders correctly', () => {
    render(
      <Avatar>
        <AvatarImage source={{ uri: 'https://example.com/avatar.jpg' }} />
        <AvatarFallback>
          <Text>JD</Text>
        </AvatarFallback>
      </Avatar>,
    );

    // Avatar renders as a View, fallback text should be present
    expect(screen.getByText('JD')).toBeDefined();
  });
});
