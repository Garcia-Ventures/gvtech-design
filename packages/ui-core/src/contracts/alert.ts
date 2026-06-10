import * as React from 'react';

export const alertVariantValues = ['default', 'destructive', 'warning', 'info'] as const;
export type AlertVariant = (typeof alertVariantValues)[number] | null;
export interface AlertBaseProps {
  variant?: AlertVariant;
  className?: string;
  children?: React.ReactNode;
}

export interface AlertTitleBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AlertDescriptionBaseProps {
  className?: string;
  children?: React.ReactNode;
}
