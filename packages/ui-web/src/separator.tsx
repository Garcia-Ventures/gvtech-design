import { Separator as SeparatorPrimitive } from 'radix-ui';
import * as React from 'react';

import { cn } from './lib/utils';

import type { SeparatorBaseProps } from '@gv-tech/ui-core';

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch',
        className,
      )}
      {...props}
    />
  );
}

export { Separator };

// Verify that the component satisfies the ui-core contract
export type ___verifySeparatorContract =
  React.ComponentProps<typeof Separator> extends SeparatorBaseProps ? true : false;
