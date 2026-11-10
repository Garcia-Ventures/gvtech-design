import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonGroupVariants } from './button-group';
import { Text } from './text';

vi.mock('@rn-primitives/separator', () => {
  return {
    Root: ({ className, orientation }: { className?: string; orientation?: 'horizontal' | 'vertical' }) =>
      React.createElement('div', {
        className,
        'aria-orientation': orientation,
        role: 'separator',
      }),
  };
});

describe('ButtonGroup (Native Implementation)', () => {
  it('stacks vertically when orientation is vertical', () => {
    expect(buttonGroupVariants({ orientation: 'vertical' })).toContain('flex-col');
    render(
      <ButtonGroup orientation="vertical" testID="group">
        <Text>One</Text>
      </ButtonGroup>,
    );
    // react-native-web replaces View className with a compiled class, so the
    // orientation string is checked on buttonGroupVariants above.
    expect(screen.getByTestId('group')).toBeDefined();
    expect(screen.getByText('One')).toBeDefined();
  });

  it('lays out in a row by default', () => {
    expect(buttonGroupVariants({})).toContain('flex-row');
    render(
      <ButtonGroup testID="group">
        <Text>One</Text>
      </ButtonGroup>,
    );
    expect(screen.getByTestId('group')).toBeDefined();
  });

  it('renders a separator on the requested axis and a text slot', () => {
    render(
      <ButtonGroup>
        <ButtonGroupText>Label</ButtonGroupText>
        <ButtonGroupSeparator orientation="horizontal" />
      </ButtonGroup>,
    );
    expect(screen.getByText('Label')).toBeDefined();
    const separator = screen.getByRole('separator');
    expect(separator.className).toContain('h-[1px]');
    expect(separator.getAttribute('aria-orientation')).toBe('horizontal');
  });
});
