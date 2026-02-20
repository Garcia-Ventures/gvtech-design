import * as React from 'react';

export interface SheetBaseProps {
  children?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  modal?: boolean;
}

export interface SheetTriggerBaseProps {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export interface SheetCloseBaseProps {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
}

export interface SheetPortalBaseProps {
  children?: React.ReactNode;
  className?: string;
  forceMount?: true;
}

export interface SheetOverlayBaseProps {
  className?: string;
  forceMount?: true;
}

export interface SheetContentBaseProps {
  children?: React.ReactNode;
  className?: string;
  side?: 'top' | 'bottom' | 'left' | 'right';
}

export interface SheetHeaderBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SheetFooterBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SheetTitleBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SheetDescriptionBaseProps {
  className?: string;
  children?: React.ReactNode;
}
