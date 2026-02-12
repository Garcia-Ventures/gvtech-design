import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './resizable';

describe('Resizable', () => {
  it('renders correctly', () => {
    // Basic render test
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={50}>
          <div>One</div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <div>Two</div>
        </ResizablePanel>
      </ResizablePanelGroup>,
    );

    expect(screen.getByText('One')).toBeInTheDocument();
    expect(screen.getByText('Two')).toBeInTheDocument();
  });
});
