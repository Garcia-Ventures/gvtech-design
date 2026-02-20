import * as React from 'react';

export interface ResizablePanelGroupBaseProps {
  children?: React.ReactNode;
  className?: string;
  direction: 'horizontal' | 'vertical';
  autoSaveId?: string;
  storage?: unknown;
}

export interface ResizablePanelBaseProps {
  children?: React.ReactNode;
  className?: string;
  defaultSize?: number;
  minSize?: number;
  maxSize?: number;
  collapsible?: boolean;
  collapsedSize?: number;
  minPixelSize?: number;
  maxPixelSize?: number;
  order?: number;
  tagName?: string;
  id?: string;
  onCollapse?: () => void;
  onExpand?: () => void;
  onResize?: (size: number, prevSize: number | undefined) => void;
}

export interface ResizableHandleBaseProps {
  className?: string;
  withHandle?: boolean;
  disabled?: boolean;
  tagName?: string;
  id?: string;
  hitAreaMargins?: { top?: number; bottom?: number; left?: number; right?: number };
}
