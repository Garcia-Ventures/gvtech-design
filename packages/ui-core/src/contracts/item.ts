import * as React from 'react';

export interface ItemGroupBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ItemSeparatorBaseProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export type ItemVariant = 'default' | 'outline' | 'muted';
export type ItemSize = 'default' | 'sm' | 'xs';

export interface ItemBaseProps {
  className?: string;
  variant?: ItemVariant | null;
  size?: ItemSize | null;
  children?: React.ReactNode;
}

export type ItemMediaVariant = 'default' | 'icon' | 'image';

export interface ItemMediaBaseProps {
  className?: string;
  variant?: ItemMediaVariant | null;
  children?: React.ReactNode;
}

export interface ItemContentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ItemTitleBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ItemDescriptionBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ItemActionsBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ItemHeaderBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ItemFooterBaseProps {
  className?: string;
  children?: React.ReactNode;
}
