import { SkeletonBaseProps } from '@gv-tech/ui-core';
import * as React from 'react';
import { cn } from './lib/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement> & SkeletonBaseProps) {
  return <div className={cn('bg-primary/10 animate-pulse rounded-md', className)} {...props} />;
}

export { Skeleton };
export type { SkeletonBaseProps as SkeletonProps };
