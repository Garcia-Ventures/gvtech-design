import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './accordion';

// Mock primitives
/* eslint-disable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */
vi.mock('@rn-primitives/accordion', () => {
  const React = require('react');
  const AccordionContext = React.createContext({ isExpanded: false });

  return {
    Root: ({ children, className }: any) => React.createElement('div', { className }, children),
    Item: ({ children, className }: any) => React.createElement('div', { className }, children),
    Header: ({ children, className }: any) => React.createElement('div', { className }, children),
    Trigger: ({ children, className }: any) => {
      // isExpanded removed to fix unused warning
      return React.createElement('button', { className }, children);
    },
    Content: ({ children, className }: any) => {
      const { isExpanded } = React.useContext(AccordionContext);
      return isExpanded ? React.createElement('div', { className }, children) : null;
    },
    useItemContext: () => React.useContext(AccordionContext),
  };
});

// Mock reanimated
vi.mock('react-native-reanimated', () => {
  const React = require('react');
  return {
    default: {
      View: ({ children, style }: any) => React.createElement('div', { style }, children),
    },
    useAnimatedStyle: () => ({}),
    useDerivedValue: (val: any) => ({ value: typeof val === 'function' ? val() : val }),
    interpolate: () => 0,
    withTiming: (val: any) => val,
    Extrapolation: { CLAMP: 'clamp' },
  };
});
/* eslint-enable @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */

// Mock lucide
vi.mock('lucide-react-native', () => ({
  ChevronDown: () => null,
}));

describe('Accordion (Native Implementation)', () => {
  it('renders correctly', () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div data-testid="trigger">Trigger</div>
          </AccordionTrigger>
          <AccordionContent>
            <div data-testid="content">Content</div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByTestId('trigger')).toBeDefined();
  });
});
