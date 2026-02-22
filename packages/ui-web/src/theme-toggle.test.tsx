import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'next-themes';
import { describe, expect, it, vi } from 'vitest';
import { ThemeToggle } from './theme-toggle';

// Mock the useTheme hook to control its return values
vi.mock('./hooks/use-theme', async () => {
  const actual = await vi.importActual('./hooks/use-theme');
  return {
    ...actual,
    useTheme: () => ({
      theme: 'light',
      setTheme: vi.fn(),
      resolvedTheme: 'light',
      tokens: {},
    }),
  };
});

describe('ThemeToggle', () => {
  it('renders binary toggle by default', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>,
    );
    // Use role button which is accessible
    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(button).toBeInTheDocument();
  });

  it('renders ternary toggle with dropdown', async () => {
    const user = userEvent.setup();
    render(
      <ThemeProvider>
        <ThemeToggle variant="ternary" />
      </ThemeProvider>,
    );
    const button = screen.getByRole('button'); // Dropdown trigger
    expect(button).toBeInTheDocument();

    // Open dropdown
    await user.click(button);
    expect(await screen.findByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
    expect(screen.getByText('System')).toBeInTheDocument();
  }, 10000);
});
