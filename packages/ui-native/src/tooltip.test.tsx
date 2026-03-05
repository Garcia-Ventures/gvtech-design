import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Text } from './text';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';

// Mock primitives
vi.mock('@rn-primitives/tooltip', () => {
  const React = require('react');
  return {
    Root: ({ children }: any) => React.createElement(React.Fragment, {}, children),
    Trigger: ({ children }: any) => React.createElement(React.Fragment, {}, children),
    Overlay: ({ children }: any) => React.createElement(React.Fragment, {}, children),
    Content: ({ children }: any) => React.createElement(React.Fragment, {}, children),
    Portal: ({ children }: any) => React.createElement(React.Fragment, {}, children),
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
