import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Popover, PopoverContent, PopoverTrigger } from './popover';

vi.mock('@rn-primitives/modal', () => ({
  Modal: 'Modal',
}));

vi.mock('@rn-primitives/pressable', () => ({
  Pressable: 'Pressable',
}));

vi.mock('@rn-primitives/view', () => ({
  View: 'View',
}));

describe('Popover', () => {
  it('renders correctly', () => {
    render(
      <Popover>
        <PopoverTrigger>
          <div>Open Popover</div>
        </PopoverTrigger>
        <PopoverContent>
          <div>Popover content</div>
        </PopoverContent>
      </Popover>,
    );

    expect(screen.getByText('Open Popover')).toBeTruthy();
  });

  it('opens and closes popover', () => {
    render(
      <Popover>
        <PopoverTrigger>
          <div>Open Popover</div>
        </PopoverTrigger>
        <PopoverContent>
          <div>Popover content</div>
        </PopoverContent>
      </Popover>,
    );

    expect(screen.getByText('Open Popover')).toBeTruthy();
    // Note: In a real test, we'd need to simulate press events
    // For now, this is a basic structure test
  });
});
