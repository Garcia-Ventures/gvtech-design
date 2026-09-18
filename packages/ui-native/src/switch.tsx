import { SwitchBaseProps } from '@gv-tech/ui-core';
import * as SwitchPrimitives from '@rn-primitives/switch';
import * as React from 'react';

import { cn } from './lib/utils';

export interface SwitchProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>, 'checked' | 'onCheckedChange'>,
    SwitchBaseProps {}

const Switch = React.forwardRef<React.ComponentRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => (
    <SwitchPrimitives.Root
      ref={ref}
      checked={checked ?? false}
      onCheckedChange={onCheckedChange || (() => {})}
      className={cn(
        'peer focus-visible:ring-ring focus-visible:ring-offset-background data-[state=checked]:bg-primary data-[state=unchecked]:bg-input inline-flex h-6 w-11 shrink-0 cursor-pointer flex-row items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'bg-background pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[18px] data-[state=unchecked]:translate-x-0',
        )}
      />
    </SwitchPrimitives.Root>
  ),
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
