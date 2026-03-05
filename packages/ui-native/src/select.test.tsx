import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Text } from './text';

// Mock primitives
vi.mock('@rn-primitives/select', () => {
  const React = require('react');
  return {
    Root: ({ children }: any) => React.createElement(React.Fragment, {}, children),
    Trigger: ({ children, className }: any) => React.createElement('button', { className }, children),
    Value: ({ placeholder, className }: any) => React.createElement('span', { className }, placeholder),
    Content: ({ children }: any) => React.createElement('div', {}, children),
    Item: ({ children, value }: any) => React.createElement('div', { 'data-value': value }, children),
    ItemText: ({ children }: any) => React.createElement('span', {}, children),
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
