'use client';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import {
  MessageScroller,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from './message-scroller';

describe('MessageScroller', () => {
  it('renders content inside provider', () => {
    render(
      <MessageScrollerProvider>
        <MessageScroller>
          <MessageScrollerViewport>
            <MessageScrollerContent>
              <MessageScrollerItem>First</MessageScrollerItem>
            </MessageScrollerContent>
          </MessageScrollerViewport>
        </MessageScroller>
      </MessageScrollerProvider>,
    );
    expect(screen.getByText('First')).toBeInTheDocument();
  });
});
