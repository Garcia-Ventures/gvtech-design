'use client';

import { act, fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ScrollToTop } from './scroll-to-top';

const setScrollY = (value: number) => {
  Object.defineProperty(window, 'scrollY', {
    configurable: true,
    writable: true,
    value,
  });
};

describe('ScrollToTop', () => {
  beforeEach(() => {
    setScrollY(0);
    Object.defineProperty(window, 'scrollTo', {
      configurable: true,
      writable: true,
      value: vi.fn(),
    });
  });

  it('is hidden by default before the threshold is reached', () => {
    render(<ScrollToTop label="Back to top" />);
    expect(screen.getByRole('button', { name: /back to top/i })).toHaveAttribute('data-state', 'hidden');
  });

  it('appears after scrolling beyond threshold', () => {
    render(<ScrollToTop label="Back to top" threshold={120} />);

    setScrollY(250);
    fireEvent.scroll(window);

    expect(screen.getByRole('button', { name: /back to top/i })).toHaveAttribute('data-state', 'visible');
  });

  it('animates out and scrolls to top when clicked', () => {
    vi.useFakeTimers();

    render(<ScrollToTop label="Back to top" threshold={80} exitDuration={400} behavior="auto" />);

    setScrollY(300);
    fireEvent.scroll(window);

    const button = screen.getByRole('button', { name: /back to top/i });
    expect(button).toHaveAttribute('data-state', 'visible');

    fireEvent.click(button);
    expect(button).toHaveAttribute('data-state', 'exiting');

    act(() => {
      vi.advanceTimersByTime(400);
    });

    setScrollY(0);
    fireEvent.scroll(window);

    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
    expect(button).toHaveAttribute('data-state', 'hidden');

    vi.useRealTimers();
  });

  it('supports a custom scroll target element', () => {
    const target = document.createElement('div');
    Object.defineProperty(target, 'scrollTop', {
      configurable: true,
      writable: true,
      value: 0,
    });
    Object.defineProperty(target, 'scrollTo', {
      configurable: true,
      writable: true,
      value: vi.fn(),
    });

    render(<ScrollToTop label="Back to top" threshold={50} scrollTarget={target} behavior="auto" />);

    target.scrollTop = 120;
    fireEvent.scroll(target);

    const button = screen.getByRole('button', { name: /back to top/i });
    expect(button).toHaveAttribute('data-state', 'visible');

    vi.useFakeTimers();
    fireEvent.click(button);

    act(() => {
      vi.advanceTimersByTime(450);
    });

    expect(target.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'auto' });
    vi.useRealTimers();
  });

  it('stays dismissed while still above threshold after click', () => {
    vi.useFakeTimers();

    render(<ScrollToTop label="Back to top" threshold={100} exitDuration={300} behavior="smooth" />);

    setScrollY(240);
    fireEvent.scroll(window);

    const button = screen.getByRole('button', { name: /back to top/i });
    expect(button).toHaveAttribute('data-state', 'visible');

    fireEvent.click(button);
    expect(button).toHaveAttribute('data-state', 'exiting');

    act(() => {
      vi.advanceTimersByTime(300);
    });

    // Simulate in-progress smooth scroll where we're still above threshold.
    setScrollY(180);
    fireEvent.scroll(window);
    expect(button).toHaveAttribute('data-state', 'exiting');

    // Once back near top, it should settle hidden without reappearing.
    setScrollY(0);
    fireEvent.scroll(window);
    expect(button).toHaveAttribute('data-state', 'hidden');

    vi.useRealTimers();
  });
});
