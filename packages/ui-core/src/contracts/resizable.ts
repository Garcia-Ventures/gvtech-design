import * as React from 'react';

export interface ResizablePanelGroupBaseProps {
  children?: React.ReactNode;
  className?: string;
  orientation?: 'horizontal' | 'vertical';
  autoSaveId?: string;
  storage?: unknown;
}

export interface ResizablePanelBaseProps {
  children?: React.ReactNode;
  className?: string;
  defaultSize?: number | string;
  minSize?: number | string;
  maxSize?: number | string;
  collapsible?: boolean;
  collapsedSize?: number | string;
  minPixelSize?: number;
  maxPixelSize?: number;
  order?: number;
  tagName?: string;
  id?: string;
  onCollapse?: () => void;
  onExpand?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onResize?: (size: any, id: string | number | undefined, prevSize: any) => void;
}

export interface ResizableHandleBaseProps {
  className?: string;
  withHandle?: boolean;
  disabled?: boolean;
  tagName?: string;
  id?: string;
  hitAreaMargins?: { top?: number; bottom?: number; left?: number; right?: number };
}
