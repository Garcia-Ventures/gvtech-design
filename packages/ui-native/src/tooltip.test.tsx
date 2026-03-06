// Fix for __DEV__ global required by react-native-reanimated
globalThis.__DEV__ = false;
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Text } from './text';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';

// Mock primitives
vi.mock('@rn-primitives/tooltip', () => {
  return {
    Root: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, {}, children),
    Trigger: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, {}, children),
    Overlay: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, {}, children),
    Content: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, {}, children),
    Portal: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, {}, children),
  };
});

describe('Tooltip (Native Implementation)', () => {
  it('renders correctly', () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Text>Hover me</Text>
          </TooltipTrigger>
          <TooltipContent>
            <Text>Tooltip content</Text>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );

    expect(screen.getByText('Hover me')).toBeDefined();
  });
});
