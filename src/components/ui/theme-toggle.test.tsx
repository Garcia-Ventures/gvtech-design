import { ThemeToggle } from '@/components/ui/theme-toggle';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import { describe, expect, it, vi } from 'vitest';

// Mock the useTheme hook to control its return values
vi.mock('@/hooks/use-theme', async () => {
  const actual = await vi.importActual('@/hooks/use-theme');
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
    render(
      <ThemeProvider>
        <ThemeToggle variant="ternary" />
      </ThemeProvider>,
    );
    const button = screen.getByRole('button'); // Dropdown trigger
    expect(button).toBeInTheDocument();

    // Open dropdown
    fireEvent.click(button);
    expect(await screen.findByText('Light')).toBeInTheDocument();
    expect(screen.getByText('Dark')).toBeInTheDocument();
    expect(screen.getByText('System')).toBeInTheDocument();
  });
});
