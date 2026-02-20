import { Text } from '@gv-tech/ui-web';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Text', () => {
  it('renders correctly with default variant', () => {
    render(<Text>Hello World</Text>);
    const element = screen.getByText('Hello World');
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe('P'); // body is default and maps to <p>
  });

  it('renders different variants as correct HTML elements', () => {
    const { rerender } = render(<Text variant="h1">Heading 1</Text>);
    expect(screen.getByText('Heading 1').tagName).toBe('H1');

    rerender(<Text variant="h2">Heading 2</Text>);
    expect(screen.getByText('Heading 2').tagName).toBe('H2');

    rerender(<Text variant="h3">Heading 3</Text>);
    expect(screen.getByText('Heading 3').tagName).toBe('H3');

    rerender(<Text variant="h4">Heading 4</Text>);
    expect(screen.getByText('Heading 4').tagName).toBe('H4');

    rerender(<Text variant="caption">Caption</Text>);
    expect(screen.getByText('Caption').tagName).toBe('SPAN');
  });

  it('applies custom className', () => {
    render(<Text className="custom-text">Custom Text</Text>);
    expect(screen.getByText('Custom Text')).toHaveClass('custom-text');
  });
});
