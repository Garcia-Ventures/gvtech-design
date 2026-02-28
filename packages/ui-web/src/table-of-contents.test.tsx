import { render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { TableOfContents } from './table-of-contents';

// Mock IntersectionObserver
const observeMock = vi.fn();
const unobserveMock = vi.fn();
const disconnectMock = vi.fn();

class MockIntersectionObserver {
  constructor(callback: IntersectionObserverCallback) {
    // @ts-expect-error - callback is required for mock behavior
    this.callback = callback;
  }
  observe = observeMock;
  unobserve = unobserveMock;
  disconnect = disconnectMock;
}

describe('TableOfContents', () => {
  beforeEach(() => {
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver);
  });

  afterEach(() => {
    document.body.innerHTML = '';
    vi.restoreAllMocks();
  });

  it('renders a list of headings found in the content', () => {
    render(
      <TableOfContents>
        <TableOfContents.List />
        <TableOfContents.Content>
          <h2 id="section-1">Section 1</h2>
          <p>Some text</p>
          <h3 id="section-1-1">Section 1.1</h3>
          <p>More text</p>
          <h2 id="section-2">Section 2</h2>
        </TableOfContents.Content>
      </TableOfContents>,
    );

    expect(screen.getByRole('link', { name: 'Section 1' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Section 1.1' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Section 2' })).toBeInTheDocument();

    // Check hrefs
    expect(screen.getByRole('link', { name: 'Section 1' })).toHaveAttribute('href', '#section-1');
  });

  it('respects minLevel and maxLevel props from root', () => {
    render(
      <TableOfContents minLevel={2} maxLevel={2}>
        <TableOfContents.List />
        <TableOfContents.Content>
          <h2 id="section-1">Section 1</h2>
          <h3 id="section-1-1">Section 1.1</h3>
        </TableOfContents.Content>
      </TableOfContents>,
    );

    expect(screen.getByRole('link', { name: 'Section 1' })).toBeInTheDocument();
    // h3 should be filtered out
    expect(screen.queryByRole('link', { name: 'Section 1.1' })).not.toBeInTheDocument();
  });

  it('automatically generates IDs for headings that lack them', () => {
    render(
      <TableOfContents>
        <TableOfContents.List />
        <TableOfContents.Content>
          <h2>No ID Heading</h2>
        </TableOfContents.Content>
      </TableOfContents>,
    );

    const link = screen.getByRole('link', { name: 'No ID Heading' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '#no-id-heading');

    const heading = document.querySelector('h2');
    expect(heading).toHaveAttribute('id', 'no-id-heading');
  });

  it('renders custom class names on root', () => {
    const { container } = render(
      <TableOfContents className="custom-toc">
        <TableOfContents.List />
        <TableOfContents.Content>
          <h2>Section</h2>
        </TableOfContents.Content>
      </TableOfContents>,
    );
    expect(container.firstChild).toHaveClass('custom-toc');
  });

  it('allows controlled activeId override', () => {
    render(
      <TableOfContents activeId="section-2">
        <TableOfContents.List />
        <TableOfContents.Content>
          <h2 id="section-1">Section 1</h2>
          <h2 id="section-2">Section 2</h2>
        </TableOfContents.Content>
      </TableOfContents>,
    );

    const activeLink = screen.getByRole('link', { name: 'Section 2' });
    expect(activeLink).toHaveClass('font-medium', 'text-primary');

    const inactiveLink = screen.getByRole('link', { name: 'Section 1' });
    expect(inactiveLink).toHaveClass('text-muted-foreground');
  });
});
