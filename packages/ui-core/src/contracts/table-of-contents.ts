import * as React from 'react';

export interface TableOfContentsBaseProps {
  /**
   * Optional custom class name.
   */
  className?: string;

  /**
   * Optional currently active heading ID to override the intersection observer.
   */
  activeId?: string;

  /**
   * Optional minimum heading level to include.
   * Default: 1 (h1)
   */
  minLevel?: number;

  /**
   * Optional maximum heading level to include.
   * Default: 3 (h3)
   */
  maxLevel?: number;

  /**
   * The selector used to query the DOM for headings.
   * Default: "h1, h2, h3, h4, h5, h6"
   */
  selector?: string;
}

export interface TableOfContentsRootBaseProps extends TableOfContentsBaseProps {
  children: React.ReactNode;
}

export interface TableOfContentsListBaseProps {
  className?: string;
}

export interface TableOfContentsContentBaseProps {
  children: React.ReactNode;
  className?: string;
}

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}
