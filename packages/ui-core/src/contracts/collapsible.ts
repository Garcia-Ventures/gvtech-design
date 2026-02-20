import * as React from 'react';

export interface CollapsibleBaseProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export interface CollapsibleTriggerBaseProps {
  asChild?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export interface CollapsibleContentBaseProps {
  asChild?: boolean;
  children?: React.ReactNode;
  className?: string;
}
