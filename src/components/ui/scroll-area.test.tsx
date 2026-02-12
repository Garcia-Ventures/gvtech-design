import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ScrollArea, ScrollBar } from './scroll-area';

describe('ScrollArea', () => {
  it('renders correctly', () => {
    render(
      <ScrollArea className="h-[200px] w-[350px]">
        <div>Content</div>
        <ScrollBar />
      </ScrollArea>,
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
