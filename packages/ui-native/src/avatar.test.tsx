import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';
import { Text } from './text';

// Mock primitives
import React from 'react';
vi.mock('@rn-primitives/avatar', () => {
  return {
    Root: ({ children, className }: { children: React.ReactNode; className?: string }) =>
      React.createElement('div', { className }, children),
    Image: ({ className, source }: { className?: string; source?: { uri: string } }) =>
      React.createElement('img', { className, src: source?.uri }),
    Fallback: ({ children, className }: { children: React.ReactNode; className?: string }) =>
      React.createElement('div', { className }, children),
  };
});

describe('Avatar (Native Implementation)', () => {
  it('renders correctly', () => {
    render(
      <Avatar alt="JD">
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
