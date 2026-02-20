import { SwitchBaseProps } from '@gv-tech/ui-core';
import * as SwitchPrimitive from '@rn-primitives/switch';
import * as React from 'react';

import { cn } from './lib/utils';

export interface SwitchProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>, 'checked' | 'onCheckedChange'>,
    SwitchBaseProps {}

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  ({ className, checked, onCheckedChange, ...props }, ref) => (
    <SwitchPrimitive.Root
      className={cn(
        'peer inline-flex h-6 w-11 shrink-0 cursor-pointer flex-row items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
        className,
      )}
      {...props}
      checked={checked ?? false}
      onCheckedChange={onCheckedChange || (() => {})}
      ref={ref}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
        )}
      />
    </SwitchPrimitive.Root>
  ),
);
Switch.displayName = SwitchPrimitive.Root?.displayName || 'Switch';

export { Switch };
