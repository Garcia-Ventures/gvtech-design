import * as React from 'react';

export interface MenubarBaseProps {
  children?: React.ReactNode;
  className?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  dir?: 'ltr' | 'rtl';
  loop?: boolean;
}

export interface MenubarMenuBaseProps {
  children?: React.ReactNode;
  value?: string;
}

export interface MenubarTriggerBaseProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export interface MenubarContentBaseProps {
  children?: React.ReactNode;
  className?: string;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  sideOffset?: number;
}

export interface MenubarItemBaseProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  inset?: boolean;
  onSelect?: (event: Event) => void;
}

export interface MenubarCheckboxItemBaseProps {
  children?: React.ReactNode;
  className?: string;
  checked?: boolean | 'indeterminate';
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export interface MenubarRadioItemBaseProps {
  children?: React.ReactNode;
  className?: string;
  value: string;
  disabled?: boolean;
}

export interface MenubarLabelBaseProps {
  children?: React.ReactNode;
  className?: string;
  inset?: boolean;
}

export interface MenubarSeparatorBaseProps {
  className?: string;
}

export interface MenubarShortcutBaseProps {
  children?: React.ReactNode;
  className?: string;
}

export interface MenubarSubBaseProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface MenubarSubTriggerBaseProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  inset?: boolean;
}

export interface MenubarSubContentBaseProps {
  children?: React.ReactNode;
  className?: string;
}
