import * as React from 'react';

export interface SearchBaseProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface SearchTriggerBaseProps {
  className?: string;
  placeholder?: string;
  variant?: 'default' | 'compact';
}
