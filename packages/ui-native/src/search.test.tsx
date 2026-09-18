import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { SearchTrigger } from './search';

vi.mock('lucide-react-native', () => ({
  Search: () => 'Search',
}));

vi.mock('@rn-primitives/dialog', () => ({
  Root: ({ children }: any) => children,
  Trigger: ({ children }: any) => children,
  Portal: ({ children }: any) => children,
  Overlay: ({ children }: any) => children,
  Content: ({ children }: any) => children,
  Title: ({ children }: any) => children,
  Description: ({ children }: any) => children,
  Close: ({ children }: any) => children,
}));

describe('Search (Native Implementation)', () => {
  it('renders correctly', () => {
    render(<SearchTrigger />);
    expect(screen.getByText('Search docs...')).toBeDefined();
  });
});
