import * as React from 'react';

export interface SelectBaseProps {
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onValueChange?: (value: any) => void;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  dir?: 'ltr' | 'rtl';
  name?: string;
  autoComplete?: string;
  disabled?: boolean;
  required?: boolean;
}

export interface SelectGroupBaseProps {
  children?: React.ReactNode;
  className?: string;
}

export interface SelectValueBaseProps {
  className?: string;
  placeholder?: React.ReactNode;
}

export interface SelectTriggerBaseProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export interface SelectContentBaseProps {
  children?: React.ReactNode;
  className?: string;
  position?: 'popper' | 'item-aligned';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
}

export interface SelectLabelBaseProps {
  children?: React.ReactNode;
  className?: string;
}

export interface SelectItemBaseProps {
  children?: React.ReactNode;
  className?: string;
  value: string;
  disabled?: boolean;
}

export interface SelectSeparatorBaseProps {
  className?: string;
}

export interface SelectScrollUpButtonBaseProps {
  className?: string;
}

export interface SelectScrollDownButtonBaseProps {
  className?: string;
}
