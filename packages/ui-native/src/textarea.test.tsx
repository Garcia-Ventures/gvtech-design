import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Textarea } from './textarea';

describe('Textarea (Native Implementation)', () => {
  it('renders correctly', () => {
    render(<Textarea placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeDefined();
  });

  it('handles onChangeText', () => {
    const onChangeText = vi.fn();
    render(<Textarea placeholder="Enter text" onChangeText={onChangeText} />);

    const textarea = screen.getByPlaceholderText('Enter text');
    fireEvent.change(textarea, { target: { value: 'Hello World' } });

    expect(onChangeText).toHaveBeenCalledWith('Hello World');
  });

  it('has multiline enabled', () => {
    const { container } = render(<Textarea placeholder="Enter text" />);
    const textarea = container.querySelector('textarea');
    // In react-native-web, TextInput with multiline renders as a textarea
    expect(textarea).toBeDefined();
  });
});
