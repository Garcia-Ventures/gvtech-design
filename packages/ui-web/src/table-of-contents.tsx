'use client';

import {
  HeadingItem,
  TableOfContentsBaseProps,
  TableOfContentsContentBaseProps,
  TableOfContentsListBaseProps,
  TableOfContentsRootBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { cn, slugify } from './lib/utils';

// Context for sharing heading data
interface TOCContextValue {
  headings: HeadingItem[];
  activeId: string | null;
  registerHeadings: (headings: HeadingItem[]) => void;
  setActiveId: (id: string | null) => void;
  config: TableOfContentsBaseProps;
}

const TOCContext = React.createContext<TOCContextValue | null>(null);

function useTOC() {
  const context = React.useContext(TOCContext);
  if (!context) {
    throw new Error('TOC components must be used within a TableOfContents provider');
  }
  return context;
}

export type TableOfContentsProps = TableOfContentsRootBaseProps;

/**
 * Root component that provides the Table of Contents context.
 * Can be used as a wrapper OR standalone.
 * If used as a wrapper: <TableOfContents><List /><Content>{children}</Content></TableOfContents>
 * If used standalone: <TableOfContents /> (requires container ref or defaults to document)
 */
function TableOfContents({
  children,
  className,
  activeId: activeIdOverride,
  minLevel = 1,
  maxLevel = 3,
  selector = 'h1, h2, h3, h4, h5, h6',
}: TableOfContentsProps) {
  const [headings, setHeadings] = React.useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = React.useState<string | null>(null);

  const registerHeadings = React.useCallback((newHeadings: HeadingItem[]) => {
    setHeadings((prev) => {
      if (JSON.stringify(prev) === JSON.stringify(newHeadings)) {
        return prev;
      }
      return newHeadings;
    });
  }, []);

  const value = React.useMemo(
    () => ({
      headings,
      activeId: activeIdOverride || activeId,
      registerHeadings,
      setActiveId,
      config: { minLevel, maxLevel, selector, className },
    }),
    [headings, activeId, activeIdOverride, registerHeadings, minLevel, maxLevel, selector, className],
  );

  return (
    <TOCContext.Provider value={value}>
      <div className={cn('relative', className)}>
        {children || (
          <div className="flex flex-col gap-4">
            <TableOfContentsList />
            <TableOfContentsContent>{null}</TableOfContentsContent>
          </div>
        )}
      </div>
    </TOCContext.Provider>
  );
}

/**
 * Renders the actual list of links.
 */
function TableOfContentsList({ className }: TableOfContentsListBaseProps) {
  const { headings, activeId } = useTOC();

  if (headings.length === 0) {
    return null;
  }

  // Find the minimum level in the current headings to determine basic indentation mapping
  const currentMinLevel = Math.min(...headings.map((h) => h.level));

  return (
    <nav className={cn('space-y-2', className)} aria-label="Table of contents">
      <ul className="m-0 list-none text-sm">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;
          const paddingLeft = `${(heading.level - currentMinLevel) * 1}rem`;

          return (
            <li key={heading.id} className="mt-0 pt-2">
              <a
                href={`#${heading.id}`}
                className={cn(
                  'hover:text-foreground inline-block no-underline transition-colors',
                  isActive ? 'text-primary font-medium' : 'text-muted-foreground',
                )}
                style={{ paddingLeft }}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/**
 * Wraps the content area and automatically detects headings within it.
 */
function TableOfContentsContent({ children, className }: TableOfContentsContentBaseProps) {
  const { registerHeadings, setActiveId, config } = useTOC();
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const root = contentRef.current;
    if (!root) {
      return;
    }

    const queryHeadings = () => {
      const elements = Array.from(root.querySelectorAll(config.selector || 'h1, h2, h3, h4, h5, h6')).filter(
        (element) => {
          const level = parseInt(element.tagName.charAt(1), 10);
          return level >= (config.minLevel || 1) && level <= (config.maxLevel || 3);
        },
      );

      const headingItems: HeadingItem[] = elements.map((element) => {
        if (!element.id) {
          element.id = slugify(element.textContent || 'heading');
        }
        return {
          id: element.id,
          text: element.textContent || '',
          level: parseInt(element.tagName.charAt(1), 10),
        };
      });

      registerHeadings(headingItems);
      return elements;
    };

    // Initial query
    const elements = queryHeadings();

    // Intersection Observer for active ID
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '0px 0px -80% 0px',
        threshold: 0.1,
      },
    );

    elements.forEach((el) => observer.observe(el));

    // Mutation Observer for dynamic content
    const mutationObserver = new MutationObserver(() => {
      const newElements = queryHeadings();
      observer.disconnect();
      newElements.forEach((el) => observer.observe(el));
    });

    mutationObserver.observe(root, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [config.selector, config.minLevel, config.maxLevel, registerHeadings, setActiveId]);

  return (
    <div ref={contentRef} className={className}>
      {children}
    </div>
  );
}

TableOfContents.List = TableOfContentsList;
TableOfContents.Content = TableOfContentsContent;

export type {
  TableOfContentsContentBaseProps as TableOfContentsContentProps,
  TableOfContentsListBaseProps as TableOfContentsListProps,
} from '@gv-tech/ui-core';
export { TableOfContents, TableOfContentsContent, TableOfContentsList };
