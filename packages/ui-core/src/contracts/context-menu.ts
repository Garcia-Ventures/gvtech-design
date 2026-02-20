import * as React from 'react';

export interface ContextMenuBaseProps {
  children?: React.ReactNode;
}

export interface ContextMenuTriggerBaseProps {
  children: React.ReactNode;
  disabled?: boolean;
}

export interface ContextMenuContentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuItemBaseProps {
  className?: string;
  children?: React.ReactNode;
  inset?: boolean;
  disabled?: boolean;
  onSelect?: (event: Event) => void;
}

export interface ContextMenuCheckboxItemBaseProps {
  className?: string;
  children?: React.ReactNode;
  checked?: boolean | 'indeterminate';
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export interface ContextMenuRadioItemBaseProps {
  className?: string;
  children?: React.ReactNode;
  value: string;
  disabled?: boolean;
}

export interface ContextMenuLabelBaseProps {
  className?: string;
  children?: React.ReactNode;
  inset?: boolean;
}

export interface ContextMenuSeparatorBaseProps {
  className?: string;
}

export interface ContextMenuShortcutBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuSubBaseProps {
  children?: React.ReactNode;
}

export interface ContextMenuSubTriggerBaseProps {
  className?: string;
  children?: React.ReactNode;
  inset?: boolean;
}

export interface ContextMenuSubContentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuGroupBaseProps {
  children?: React.ReactNode;
}

export interface ContextMenuRadioGroupBaseProps {
  children?: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
}
