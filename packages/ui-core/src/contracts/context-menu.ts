import * as React from 'react';

export interface ContextMenuBaseProps {
  children?: React.ReactNode;
}

export interface ContextMenuCheckboxItemBaseProps {
  className?: string;
  children?: React.ReactNode;
  checked?: boolean | 'indeterminate';
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export interface ContextMenuContentBaseProps {
  className?: string;
  children?: React.ReactNode;
  align?: 'start' | 'center' | 'end';
}

export interface ContextMenuGroupBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuItemBaseProps {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  inset?: boolean;
  onSelect?: (event: Event) => void;
}

export interface ContextMenuLabelBaseProps {
  className?: string;
  children?: React.ReactNode;
  inset?: boolean;
}

export interface ContextMenuRadioGroupBaseProps {
  className?: string;
  children?: React.ReactNode;
  value?: string;
  onValueChange?: (value: string) => void;
}

export interface ContextMenuRadioItemBaseProps {
  className?: string;
  children?: React.ReactNode;
  value: string;
  disabled?: boolean;
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

export interface ContextMenuTriggerBaseProps {
  className?: string;
  children?:
    | React.ReactNode
    | ((state: any) /* eslint-disable-line @typescript-eslint/no-explicit-any */ => React.ReactNode);
  disabled?: boolean | null;
}

export interface ContextMenuSubContentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ContextMenuSubTriggerBaseProps {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  inset?: boolean;
}
