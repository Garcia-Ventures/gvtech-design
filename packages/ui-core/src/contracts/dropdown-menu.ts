import * as React from 'react';

export interface DropdownMenuBaseProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
}

export interface DropdownMenuTriggerBaseProps {
  children: React.ReactNode;
  asChild?: boolean;
}

export interface DropdownMenuContentBaseProps {
  className?: string;
  children?: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
  alignOffset?: number;
}

export interface DropdownMenuItemBaseProps {
  className?: string;
  children?: React.ReactNode;
  inset?: boolean;
  disabled?: boolean;
  onSelect?: (event: Event) => void;
}

export interface DropdownMenuCheckboxItemBaseProps {
  className?: string;
  children?: React.ReactNode;
  checked?: boolean | 'indeterminate';
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export interface DropdownMenuRadioItemBaseProps {
  className?: string;
  children?: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface DropdownMenuLabelBaseProps {
  className?: string;
  children?: React.ReactNode;
  inset?: boolean;
}

export interface DropdownMenuSeparatorBaseProps {
  className?: string;
}

export interface DropdownMenuShortcutBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface DropdownMenuSubBaseProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface DropdownMenuSubTriggerBaseProps {
  className?: string;
  children?: React.ReactNode;
  inset?: boolean;
}

export interface DropdownMenuSubContentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface DropdownMenuGroupBaseProps {
  children?: React.ReactNode;
}

export interface DropdownMenuRadioGroupBaseProps {
  children?: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
}
