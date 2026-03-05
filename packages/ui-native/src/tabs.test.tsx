import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import { Text } from './text';

// Mock primitives
vi.mock('@rn-primitives/tabs', () => {
  const React = require('react');
  const TabsContext = React.createContext({ value: '', onValueChange: () => {} });

  return {
    Root: ({ children, value, onValueChange }: any) =>
      React.createElement(TabsContext.Provider, { value: { value, onValueChange } }, children),
    List: ({ children, className }: any) => React.createElement('div', { className }, children),
    Trigger: ({ children, value, className }: any) => {
      const { onValueChange } = React.useContext(TabsContext);
      return React.createElement('button', { className, onClick: () => onValueChange?.(value) }, children);
    },
    Content: ({ children, value, className }: any) => {
      const { value: currentValue } = React.useContext(TabsContext);
      return currentValue === value ? React.createElement('div', { className }, children) : null;
    },
    useRootContext: () => ({ value: '' }),
  };
});

describe('Tabs (Native Implementation)', () => {
  it('renders correctly', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">
            <Text>Tab 1</Text>
          </TabsTrigger>
          <TabsTrigger value="tab2">
            <Text>Tab 2</Text>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Text>Content 1</Text>
        </TabsContent>
        <TabsContent value="tab2">
          <Text>Content 2</Text>
        </TabsContent>
      </Tabs>,
    );

    expect(screen.getByText('Tab 1')).toBeDefined();
    expect(screen.getByText('Tab 2')).toBeDefined();
    expect(screen.getByText('Content 1')).toBeDefined();
  });

  it('handles tab switching', () => {
    const onValueChange = vi.fn();
    render(
      <Tabs value="tab1" onValueChange={onValueChange}>
        <TabsList>
          <TabsTrigger value="tab1">
            <Text>Tab 1</Text>
          </TabsTrigger>
          <TabsTrigger value="tab2">
            <Text>Tab 2</Text>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <Text>Content 1</Text>
        </TabsContent>
        <TabsContent value="tab2">
          <Text>Content 2</Text>
        </TabsContent>
      </Tabs>,
    );

    fireEvent.click(screen.getByText('Tab 2'));
    expect(onValueChange).toHaveBeenCalledWith('tab2');
  });
});
