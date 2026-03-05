import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Search } from './search';

describe('Search (Native Implementation)', () => {
  it('renders correctly', () => {
    render(<Search />);
    expect(screen.getByText('Search is not yet implemented for React Native')).toBeDefined();
  });
});
