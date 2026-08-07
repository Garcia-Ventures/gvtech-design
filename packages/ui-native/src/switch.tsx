import { SwitchBaseProps } from '@gv-tech/ui-core';
import * as SwitchPrimitive from '@rn-primitives/switch';
import * as React from 'react';

import { cn } from './lib/utils';

export interface SwitchProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>, 'checked' | 'onCheckedChange'>,
    SwitchBaseProps {}

const Switch = React.forwardRef<React.ComponentRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  ({ className, checked = false, onCheckedChange, style, ...props }, ref) => {
    const isChecked = checked ?? false;

    return (
      <SwitchPrimitive.Root
        ref={ref}
        checked={isChecked}
        onCheckedChange={onCheckedChange || (() => {})}
        className={cn(
          'peer focus-visible:ring-ring focus-visible:ring-offset-background flex h-6 w-11 shrink-0 cursor-pointer flex-row items-center rounded-full border-2 border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          isChecked ? 'bg-primary' : 'bg-input',
          className,
        )}
        style={
          typeof style === 'function'
            ? (state) => [{ width: 44, height: 24, minWidth: 44, minHeight: 24, flexShrink: 0 }, style(state)]
            : [{ width: 44, height: 24, minWidth: 44, minHeight: 24, flexShrink: 0 }, style]
        }
        {...props}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            'bg-background pointer-events-none block h-5 w-5 rounded-full shadow-lg ring-0 transition-transform',
            isChecked ? 'translate-x-5' : 'translate-x-0',
          )}
          style={{ width: 20, height: 20, flexShrink: 0 }}
        />
      </SwitchPrimitive.Root>
    );
  },
);
Switch.displayName = SwitchPrimitive.Root?.displayName || 'Switch';

export { Switch };
