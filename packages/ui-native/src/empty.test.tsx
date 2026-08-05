import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './empty';

describe('Empty (Native Implementation)', () => {
  it('renders Empty correctly', () => {
    render(<Empty testID="empty-container" />);
    expect(screen.getByTestId('empty-container')).toBeDefined();
  });

  it('renders EmptyContent correctly', () => {
    render(<EmptyContent testID="empty-content" />);
    expect(screen.getByTestId('empty-content')).toBeDefined();
  });

  it('renders EmptyDescription correctly', () => {
    render(<EmptyDescription testID="empty-desc">No data available</EmptyDescription>);
    expect(screen.getByText('No data available')).toBeDefined();
    expect(screen.getByTestId('empty-desc')).toBeDefined();
  });

  it('renders EmptyHeader correctly', () => {
    render(<EmptyHeader testID="empty-header" />);
    expect(screen.getByTestId('empty-header')).toBeDefined();
  });

  it('renders EmptyMedia correctly with variant default', () => {
    render(<EmptyMedia testID="empty-media" variant="default" />);
    expect(screen.getByTestId('empty-media')).toBeDefined();
  });

  it('renders EmptyTitle correctly', () => {
    render(<EmptyTitle testID="empty-title">Title</EmptyTitle>);
    expect(screen.getByText('Title')).toBeDefined();
    expect(screen.getByTestId('empty-title')).toBeDefined();
  });
});
