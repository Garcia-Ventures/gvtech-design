import * as React from 'react';

export const badgeVariantValues = ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as const;
export type BadgeVariant = (typeof badgeVariantValues)[number] | null;

export interface BadgeBaseProps {
  variant?: BadgeVariant;
  className?: string;
  children?: React.ReactNode;
}
