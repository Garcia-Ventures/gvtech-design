import * as React from 'react';

export const emptyMediaVariantValues = ['default', 'icon'] as const;
export type EmptyMediaVariant = (typeof emptyMediaVariantValues)[number] | null;

export interface EmptyBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface EmptyMediaBaseProps {
  className?: string;
  children?: React.ReactNode;
  variant?: EmptyMediaVariant;
}
