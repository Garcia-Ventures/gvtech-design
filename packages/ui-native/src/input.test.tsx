import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Input } from './input';

describe('Input (Native Implementation)', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeDefined();
  });

  it('handles onChangeText', () => {
    const onChangeText = vi.fn();
    render(<Input placeholder="Enter text" onChangeText={onChangeText} />);

    const input = screen.getByPlaceholderText('Enter text');
    fireEvent.change(input, { target: { value: 'Hello' } });

    // Note: In react-native-web, onChange mapping might vary
    expect(onChangeText).toHaveBeenCalledWith('Hello');
  });

  it('is disabled when the editable prop is false', () => {
    render(<Input placeholder="Enter text" editable={false} />);
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toHaveProperty('readOnly', true);
  });
});
