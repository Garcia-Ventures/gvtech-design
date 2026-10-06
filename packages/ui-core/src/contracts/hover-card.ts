import * as React from 'react';

export interface HoverCardBaseProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  openDelay?: number;
  closeDelay?: number;
}

export interface HoverCardTriggerBaseProps {
  children?:
    | React.ReactNode
    | ((state: any) /* eslint-disable-line @typescript-eslint/no-explicit-any */ => React.ReactNode);
  asChild?: boolean;
  className?: string;
}

export interface HoverCardContentBaseProps {
  className?: string;
  children?: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
}
