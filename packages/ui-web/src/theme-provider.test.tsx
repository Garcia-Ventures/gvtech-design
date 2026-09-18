'use client';

import { render, screen } from '@testing-library/react';
import { useTheme } from 'next-themes';
import { describe, expect, it } from 'vitest';
import { ThemeProvider } from './theme-provider';

// A simple consumer component to check context values
function ThemeConsumer() {
  const { theme, forcedTheme, resolvedTheme } = useTheme();
  return (
    <div>
      <span data-testid="theme">{theme}</span>
      <span data-testid="forcedTheme">{forcedTheme || 'none'}</span>
      <span data-testid="resolvedTheme">{resolvedTheme || 'none'}</span>
    </div>
  );
}

describe('ThemeProvider', () => {
  it('renders children correctly', () => {
    render(
      <ThemeProvider>
        <div data-testid="child">Hello World</div>
      </ThemeProvider>,
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('passes provider configuration props (such as defaultTheme) correctly', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <ThemeConsumer />
      </ThemeProvider>,
    );

    // next-themes initializes the theme inside useEffect.
    // By default, the initial theme prop is applied.
    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
  });

  it('respects forcedTheme prop when specified', () => {
    render(
      <ThemeProvider forcedTheme="light">
        <ThemeConsumer />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('forcedTheme')).toHaveTextContent('light');
  });
});
