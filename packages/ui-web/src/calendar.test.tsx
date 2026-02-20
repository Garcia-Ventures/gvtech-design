import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Calendar } from '.';

describe('Calendar', () => {
  it('renders correctly', () => {
    // Mock date to consistent rendering
    const date = new Date(2023, 0, 1); // Jan 1, 2023

    render(<Calendar mode="single" selected={date} month={date} />);

    expect(screen.getByText('January 2023')).toBeInTheDocument();
    const days = screen.getAllByText('1');
    expect(days.length).toBeGreaterThan(0);
    expect(screen.getByText('Su')).toBeInTheDocument(); // Sunday header
  });

  it('renders with class name', () => {
    const { container } = render(<Calendar className="test-class" />);
    // DayPicker renders a div with the class
    expect(container.firstChild).toHaveClass('test-class');
  });
});
