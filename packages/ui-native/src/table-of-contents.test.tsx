import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  TableOfContents,
  TableOfContentsContent,
  TableOfContentsHeading,
  TableOfContentsList,
} from './table-of-contents';

// Mock react-native
/*   @typescript-eslint/no-require-imports, @typescript-eslint/no-explicit-any */
vi.mock('react-native', () => {
  const ReactMock = require('react');
  return {
    Platform: { OS: 'web' },
    View: ReactMock.forwardRef(({ children, onLayout, className, ...props }: any, ref: any) => {
      // Use onLayout if needed
      return ReactMock.createElement(
        'div',
        {
          ref,
          className,
          'data-onlayout': onLayout ? 'true' : 'false',
          ...props,
        },
        children,
      );
    }),
    ScrollView: ReactMock.forwardRef(({ children, className, ...props }: any, ref: any) => {
      const scrollTo = vi.fn();
      if (ref) {
        if (typeof ref === 'function') {
          ref({ scrollTo });
        } else {
          ref.current = { scrollTo };
        }
      }
      return ReactMock.createElement(
        'div',
        {
          ref,
          className,
          'data-testid': 'scroll-view',
          ...props,
          style: { overflow: 'scroll' },
        },
        children,
      );
    }),
    Text: ({ children, className, variant, ...props }: any) =>
      ReactMock.createElement('span', { className, 'data-variant': variant, ...props }, children),
    TouchableOpacity: ({ children, onPress, className, ...props }: any) =>
      ReactMock.createElement(
        'button',
        {
          onClick: onPress,
          className,
          'data-testid': props['data-testid'],
          ...props,
        },
        children,
      ),
  };
});

describe('TableOfContents (Native Implementation)', () => {
  it('renders correctly without crashing', () => {
    render(
      <TableOfContents>
        <TableOfContentsList className="toc-list" />
        <TableOfContentsContent>
          <TableOfContentsHeading level={2} id="intro">
            Introduction
          </TableOfContentsHeading>
          <TableOfContentsHeading level={2} id="features">
            Features
          </TableOfContentsHeading>
        </TableOfContentsContent>
      </TableOfContents>,
    );

    // Initial state: No TOC list items because onLayout hasn't fired in JSDOM
    expect(screen.queryByText('On this page')).toBeNull();
    expect(screen.getByText('Introduction')).toBeDefined();
  });

  it('exports all necessary components', () => {
    expect(TableOfContents).toBeDefined();
    expect(TableOfContentsList).toBeDefined();
    expect(TableOfContentsContent).toBeDefined();
    expect(TableOfContentsHeading).toBeDefined();
  });
});
