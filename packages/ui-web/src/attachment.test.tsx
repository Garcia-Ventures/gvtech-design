'use client';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Attachment, AttachmentContent, AttachmentTitle } from './attachment';

describe('Attachment', () => {
  it('renders title', () => {
    render(
      <Attachment>
        <AttachmentContent>
          <AttachmentTitle>deck.pdf</AttachmentTitle>
        </AttachmentContent>
      </Attachment>,
    );
    expect(screen.getByText('deck.pdf')).toBeInTheDocument();
  });

  it('reflects state, size, and orientation attributes', () => {
    render(
      <Attachment state="uploading" size="sm" orientation="vertical" data-testid="att">
        <AttachmentContent>
          <AttachmentTitle>video.mp4</AttachmentTitle>
        </AttachmentContent>
      </Attachment>,
    );
    const el = screen.getByTestId('att');
    expect(el).toHaveAttribute('data-state', 'uploading');
    expect(el).toHaveAttribute('data-size', 'sm');
    expect(el).toHaveAttribute('data-orientation', 'vertical');
  });
});
