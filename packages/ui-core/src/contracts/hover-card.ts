import * as React from 'react';

export interface HoverCardBaseProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  openDelay?: number;
  closeDelay?: number;
}

export interface HoverCardTriggerBaseProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export interface HoverCardContentBaseProps {
  className?: string;
  children?: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
}
