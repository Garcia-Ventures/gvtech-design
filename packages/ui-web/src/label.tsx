import { Label as LabelPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from './lib/utils';

import type { LabelBaseProps } from '@gv-tech/ui-core';

function Label({ className, ...props }: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export { Label };

// Verify that the component satisfies the ui-core contract
export type ___verifyLabelContract = React.ComponentProps<typeof Label> extends LabelBaseProps ? true : false;
