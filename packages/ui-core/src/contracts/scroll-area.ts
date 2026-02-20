import * as React from 'react';

export interface ScrollAreaBaseProps {
  children?: React.ReactNode;
  className?: string;
  type?: 'auto' | 'always' | 'scroll' | 'hover';
  scrollHideDelay?: number;
  dir?: 'ltr' | 'rtl';
}

export interface ScrollBarBaseProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  forceMount?: true;
}
