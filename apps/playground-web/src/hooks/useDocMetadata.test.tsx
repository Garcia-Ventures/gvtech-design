import { render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { useDocMetadata } from './useDocMetadata';

const TestComponent = ({ title, description }: { title: string; description?: string }) => {
  useDocMetadata({ title, description });
  return <div>Test</div>;
};

describe('useDocMetadata', () => {
  let originalTitle: string;

  beforeEach(() => {
    originalTitle = document.title;
    // Clean up any meta description elements in head
    const existing = document.querySelector('meta[name="description"]');
    if (existing) {
      existing.remove();
    }
  });

  afterEach(() => {
    document.title = originalTitle;
    const existing = document.querySelector('meta[name="description"]');
    if (existing) {
      existing.remove();
    }
  });

  it('should update document title and restore it on unmount', () => {
    document.title = 'Original Title';
    const { unmount } = render(<TestComponent title="Home" />);

    expect(document.title).toBe('Home | GV Tech Design System');

    unmount();
    expect(document.title).toBe('Original Title');
  });

  it('should update meta description and restore on unmount if it existed', () => {
    // Create an existing meta tag
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', 'Original description');
    document.head.appendChild(meta);

    const { unmount } = render(<TestComponent title="Home" description="New description" />);

    const currentMeta = document.querySelector('meta[name="description"]');
    expect(currentMeta).toBeInTheDocument();
    expect(currentMeta?.getAttribute('content')).toBe('New description');

    unmount();
    expect(currentMeta?.getAttribute('content')).toBe('Original description');
  });

  it('should create meta description if it does not exist', () => {
    const { unmount } = render(<TestComponent title="Home" description="Created description" />);

    const currentMeta = document.querySelector('meta[name="description"]');
    expect(currentMeta).toBeInTheDocument();
    expect(currentMeta?.getAttribute('content')).toBe('Created description');

    unmount();
    // In original code, if previousDescription was not present, it doesn't revert / remove.
    // So the meta description element still exists with 'Created description'.
    expect(currentMeta?.getAttribute('content')).toBe('Created description');
  });
});
