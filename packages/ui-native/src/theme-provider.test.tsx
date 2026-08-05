import { theme as designTokens } from '@gv-tech/design-tokens';
import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { useColorScheme } from 'react-native';
import { describe, expect, it, vi } from 'vitest';
import { ThemeContext, ThemeProvider } from './theme-provider';

// Mock react-native useColorScheme
vi.mock('react-native', async (importOriginal) => {
  const actual = await importOriginal<typeof import('react-native')>();
  return {
    ...actual,
    useColorScheme: vi.fn(() => 'light'),
  };
});

// Helper component to consume and display ThemeContext values
function ThemeConsumer() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    return <span data-testid="no-context">No Context</span>;
  }
  return (
    <div>
      <span data-testid="theme">{context.theme}</span>
      <span data-testid="resolvedTheme">{context.resolvedTheme}</span>
      <span data-testid="background-token">{context.tokens.background}</span>
    </div>
  );
}

describe('ThemeProvider (Native Implementation)', () => {
  it('renders children correctly', () => {
    render(
      <ThemeProvider>
        <span data-testid="child">Child Content</span>
      </ThemeProvider>,
    );
    expect(screen.getByTestId('child')).toHaveTextContent('Child Content');
  });

  it('provides ThemeContext with system light default', () => {
    vi.mocked(useColorScheme).mockReturnValue('light');

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('system');
    expect(screen.getByTestId('resolvedTheme')).toHaveTextContent('light');
    expect(screen.getByTestId('background-token')).toHaveTextContent(designTokens.light.background);
  });

  it('provides ThemeContext with system dark default', () => {
    vi.mocked(useColorScheme).mockReturnValue('dark');

    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('system');
    expect(screen.getByTestId('resolvedTheme')).toHaveTextContent('dark');
    expect(screen.getByTestId('background-token')).toHaveTextContent(designTokens.dark.background);
  });

  it('provides ThemeContext for explicit light value', () => {
    vi.mocked(useColorScheme).mockReturnValue('dark'); // system is dark but we pass light

    render(
      <ThemeProvider value="light">
        <ThemeConsumer />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('light');
    expect(screen.getByTestId('resolvedTheme')).toHaveTextContent('light');
    expect(screen.getByTestId('background-token')).toHaveTextContent(designTokens.light.background);
  });

  it('provides ThemeContext for explicit dark value', () => {
    vi.mocked(useColorScheme).mockReturnValue('light'); // system is light but we pass dark

    render(
      <ThemeProvider value="dark">
        <ThemeConsumer />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
    expect(screen.getByTestId('resolvedTheme')).toHaveTextContent('dark');
    expect(screen.getByTestId('background-token')).toHaveTextContent(designTokens.dark.background);
  });

  it('provides ThemeContext for explicit system value', () => {
    vi.mocked(useColorScheme).mockReturnValue('dark');

    render(
      <ThemeProvider value="system">
        <ThemeConsumer />
      </ThemeProvider>,
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('system');
    expect(screen.getByTestId('resolvedTheme')).toHaveTextContent('dark');
    expect(screen.getByTestId('background-token')).toHaveTextContent(designTokens.dark.background);
  });

  it('applies classes and styles correctly to the wrapping View on light theme', () => {
    vi.mocked(useColorScheme).mockReturnValue('light');

    const { container } = render(
      <ThemeProvider className="custom-class" style={{ opacity: 0.5 }}>
        <span />
      </ThemeProvider>,
    );

    const viewElement = container.firstChild as HTMLElement;
    expect(viewElement).toBeDefined();

    // Verify background color is set and matches a truthy background color
    expect(viewElement.style.backgroundColor).toBeTruthy();
    // Verify custom style is applied
    expect(viewElement.style.opacity).toBe('0.5');
  });

  it('applies classes and styles correctly to the wrapping View on dark theme', () => {
    vi.mocked(useColorScheme).mockReturnValue('dark');

    const { container } = render(
      <ThemeProvider className="custom-class">
        <span />
      </ThemeProvider>,
    );

    const viewElement = container.firstChild as HTMLElement;
    expect(viewElement).toBeDefined();

    // Verify background color is set and matches a truthy background color
    expect(viewElement.style.backgroundColor).toBeTruthy();
  });

  it('applies different background colors for light and dark themes', () => {
    vi.mocked(useColorScheme).mockReturnValue('light');
    const { container: lightContainer } = render(
      <ThemeProvider>
        <span />
      </ThemeProvider>,
    );
    const lightView = lightContainer.firstChild as HTMLElement;
    const lightBg = lightView.style.backgroundColor;

    vi.mocked(useColorScheme).mockReturnValue('dark');
    const { container: darkContainer } = render(
      <ThemeProvider>
        <span />
      </ThemeProvider>,
    );
    const darkView = darkContainer.firstChild as HTMLElement;
    const darkBg = darkView.style.backgroundColor;

    expect(lightBg).toBeTruthy();
    expect(darkBg).toBeTruthy();
    expect(lightBg).not.toBe(darkBg);
  });
});
