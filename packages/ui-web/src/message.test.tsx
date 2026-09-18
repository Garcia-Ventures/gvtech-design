'use client';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Message, MessageAvatar, MessageContent, MessageFooter, MessageGroup, MessageHeader } from './message';

describe('Message', () => {
  it('renders a thread with slots', () => {
    render(
      <MessageGroup>
        <Message>
          <MessageAvatar>AI</MessageAvatar>
          <MessageContent>
            <MessageHeader>Assistant</MessageHeader>
            <p>Hello</p>
            <MessageFooter>Delivered</MessageFooter>
          </MessageContent>
        </Message>
      </MessageGroup>,
    );
    expect(screen.getByText('Hello')).toBeInTheDocument();
    expect(screen.getByText('Assistant')).toBeInTheDocument();
  });

  it('aligns end via data attribute', () => {
    render(
      <Message align="end" data-testid="msg">
        <MessageContent>Hi</MessageContent>
      </Message>,
    );
    expect(screen.getByTestId('msg')).toHaveAttribute('data-align', 'end');
  });
});
