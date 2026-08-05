'use client';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from './empty';

describe('Empty Component Suite', () => {
  it('renders Empty container correctly with default and custom classes and attributes', () => {
    render(
      <Empty data-testid="empty-root" className="custom-root-class" id="my-empty-container">
        Empty Content
      </Empty>,
    );

    const root = screen.getByTestId('empty-root');
    expect(root).toBeInTheDocument();
    expect(root).toHaveAttribute('data-slot', 'empty');
    expect(root).toHaveAttribute('id', 'my-empty-container');
    expect(root).toHaveClass('custom-root-class');
    expect(root).toHaveClass('flex', 'w-full', 'min-w-0', 'flex-1', 'flex-col', 'items-center', 'justify-center');
    expect(screen.getByText('Empty Content')).toBeInTheDocument();
  });

  it('renders EmptyHeader correctly', () => {
    render(
      <EmptyHeader data-testid="empty-header" className="custom-header">
        Header Content
      </EmptyHeader>,
    );

    const header = screen.getByTestId('empty-header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveAttribute('data-slot', 'empty-header');
    expect(header).toHaveClass('custom-header');
    expect(header).toHaveClass('flex', 'max-w-sm', 'flex-col', 'items-center', 'gap-2');
    expect(screen.getByText('Header Content')).toBeInTheDocument();
  });

  it('renders EmptyMedia with default variant and properties', () => {
    render(<EmptyMedia data-testid="empty-media">Media Content</EmptyMedia>);

    const media = screen.getByTestId('empty-media');
    expect(media).toBeInTheDocument();
    expect(media).toHaveAttribute('data-slot', 'empty-icon');
    expect(media).toHaveAttribute('data-variant', 'default');
    expect(media).toHaveClass('bg-transparent');
    expect(screen.getByText('Media Content')).toBeInTheDocument();
  });

  it('renders EmptyMedia with icon variant', () => {
    render(
      <EmptyMedia data-testid="empty-media-icon" variant="icon">
        Icon Content
      </EmptyMedia>,
    );

    const media = screen.getByTestId('empty-media-icon');
    expect(media).toBeInTheDocument();
    expect(media).toHaveAttribute('data-variant', 'icon');
    expect(media).toHaveClass('rounded-lg', 'bg-muted', 'text-foreground');
  });

  it('renders EmptyTitle correctly', () => {
    render(
      <EmptyTitle data-testid="empty-title" className="custom-title">
        Title Content
      </EmptyTitle>,
    );

    const title = screen.getByTestId('empty-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute('data-slot', 'empty-title');
    expect(title).toHaveClass('custom-title');
    expect(title).toHaveClass('text-sm', 'font-medium', 'tracking-tight');
    expect(screen.getByText('Title Content')).toBeInTheDocument();
  });

  it('renders EmptyDescription correctly', () => {
    render(
      <EmptyDescription data-testid="empty-description" className="custom-description">
        Description Content
      </EmptyDescription>,
    );

    const desc = screen.getByTestId('empty-description');
    expect(desc).toBeInTheDocument();
    expect(desc).toHaveAttribute('data-slot', 'empty-description');
    expect(desc).toHaveClass('custom-description');
    expect(desc).toHaveClass('text-muted-foreground');
    expect(screen.getByText('Description Content')).toBeInTheDocument();
  });

  it('renders EmptyContent correctly', () => {
    render(
      <EmptyContent data-testid="empty-content" className="custom-content">
        Child Content
      </EmptyContent>,
    );

    const content = screen.getByTestId('empty-content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveAttribute('data-slot', 'empty-content');
    expect(content).toHaveClass('custom-content');
    expect(content).toHaveClass('flex', 'w-full', 'max-w-sm', 'min-w-0', 'flex-col', 'items-center');
    expect(screen.getByText('Child Content')).toBeInTheDocument();
  });
});
