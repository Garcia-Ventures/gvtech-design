import { cn } from './lib/utils';

import type { SkeletonBaseProps } from '@gv-tech/ui-core';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="skeleton" className={cn('bg-muted animate-pulse rounded-md', className)} {...props} />;
}

export { Skeleton };

// Verify that the component satisfies the ui-core contract
export type ___verifySkeletonContract = React.ComponentProps<typeof Skeleton> extends SkeletonBaseProps ? true : false;
