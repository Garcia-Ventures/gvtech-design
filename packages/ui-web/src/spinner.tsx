import type { SpinnerBaseProps } from '@gv-tech/ui-core';
import { cn } from 'cn';
import { Loader2Icon } from 'lucide-react';
import * as React from 'react';

function Spinner({ className, ...props }: React.ComponentProps<'output'> & SpinnerBaseProps) {
  return (
    <output
      data-slot="spinner"
      aria-label="Loading"
      className={cn('inline-flex size-4 animate-spin', className)}
      {...props}
    >
      <Loader2Icon aria-hidden="true" className="size-full" />
    </output>
  );
}

export { Spinner };
