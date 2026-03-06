import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Text } from './text';

// Mock primitives
vi.mock('@rn-primitives/select', () => {
  return {
    Root: ({ children }: { children: React.ReactNode }) => React.createElement(React.Fragment, {}, children),
    Trigger: ({ children, className }: { children: React.ReactNode; className?: string }) =>
      React.createElement('button', { className }, children),
    Value: ({ placeholder, className }: { placeholder?: string; className?: string }) =>
      React.createElement('span', { className }, placeholder),
    Content: ({ children }: { children: React.ReactNode }) => React.createElement('div', {}, children),
    Item: ({ children, value }: { children: React.ReactNode; value: string }) =>
      React.createElement('div', { 'data-value': value }, children),
    ItemText: ({ children }: { children: React.ReactNode }) => React.createElement('span', {}, children),
    // Add other exports as needed
  };
});

describe('Select (Native Implementation)', () => {
  it('renders correctly', () => {
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
