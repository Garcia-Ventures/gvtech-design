import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Text } from './text';

vi.mock('react-native-reanimated', () => {
  return {
    __esModule: true,
    default: {
      View: ({ children, ...props }: { children?: React.ReactNode }) => React.createElement('div', props, children),
    },
  };
});

vi.mock('lucide-react-native', () => {
  const Icon = ({ ...props }: Record<string, unknown>) => React.createElement('svg', props);
  return {
    Check: Icon,
    ChevronDown: Icon,
    ChevronUp: Icon,
  };
});

// Mock primitives
vi.mock('@rn-primitives/select', () => {
  const Stub = ({
    children,
    className,
    asChild: _asChild,
    hostName: _hostName,
    ...props
  }: {
    children?: React.ReactNode;
    className?: string;
    asChild?: boolean;
    hostName?: string;
  }) => React.createElement('div', { className, ...props }, children);

  return {
    Root: ({ children }: { children: React.ReactNode }) => React.createElement('div', {}, children),
    Group: Stub,
    Trigger: ({ children, className }: { children: React.ReactNode; className?: string }) =>
      React.createElement('button', { className, type: 'button' }, children),
    Value: ({ placeholder, className }: { placeholder?: string; className?: string }) =>
      React.createElement('span', { className }, placeholder),
    Content: ({ children }: { children: React.ReactNode }) => React.createElement('div', {}, children),
    Portal: Stub,
    Overlay: Stub,
    Viewport: Stub,
    ScrollUpButton: Stub,
    ScrollDownButton: Stub,
    Label: Stub,
    Item: ({ children, value }: { children: React.ReactNode; value: string }) =>
      React.createElement('div', { 'data-value': value }, children),
    ItemIndicator: Stub,
    ItemText: ({ children }: { children: React.ReactNode }) => React.createElement('span', {}, children),
    Separator: Stub,
    useRootContext: () => ({ open: false }),
    // Add other exports as needed
    __esModule: true,
    default: {},
  };
});

describe('Select (Native Implementation)', () => {
  it('renders correctly', async () => {
    const { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } = await import('./select');

    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">
            <Text>Option 1</Text>
          </SelectItem>
          <SelectItem value="option2">
            <Text>Option 2</Text>
          </SelectItem>
        </SelectContent>
      </Select>,
    );

    expect(screen.getByText('Select an option')).toBeDefined();
  });
});
