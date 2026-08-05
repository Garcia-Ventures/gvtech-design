'use client';

import { Progress as ProgressPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from './lib/utils';

import type { ProgressBaseProps } from '@gv-tech/ui-core';

function Progress({ className, value, ...props }: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      value={value}
      className={cn('bg-muted relative flex h-1 w-full items-center overflow-x-hidden rounded-full', className)}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary size-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };

// Verify that the component satisfies the ui-core contract
export type ___verifyProgressContract = React.ComponentProps<typeof Progress> extends ProgressBaseProps ? true : false;
