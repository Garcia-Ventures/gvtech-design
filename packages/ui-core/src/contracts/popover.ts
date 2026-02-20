import * as React from 'react';

export interface PopoverBaseProps {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
}

export interface PopoverTriggerBaseProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export interface PopoverContentBaseProps {
  children?: React.ReactNode;
  className?: string;
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
}

export interface PopoverAnchorBaseProps {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
}
