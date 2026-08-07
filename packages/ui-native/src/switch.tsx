import { SwitchBaseProps } from '@gv-tech/ui-core';
import * as SwitchPrimitive from '@rn-primitives/switch';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { cn } from './lib/utils';

export interface SwitchProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>, 'checked' | 'onCheckedChange'>,
    SwitchBaseProps {}

const Switch = React.forwardRef<React.ComponentRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  ({ className, checked = false, onCheckedChange, style, ...props }, ref) => {
    const isChecked = Boolean(checked);

    const resolvedStyle =
      typeof style === 'function'
        ? (state: unknown) => ({
            width: 44,
            height: 24,
            minWidth: 44,
            minHeight: 24,
            flexShrink: 0,
            padding: 2,
            ...(StyleSheet.flatten(style(state as never)) || {}),
          })
        : {
            width: 44,
            height: 24,
            minWidth: 44,
            minHeight: 24,
            flexShrink: 0,
            padding: 2,
            ...(StyleSheet.flatten(style) || {}),
          };

    return (
      <SwitchPrimitive.Root
        ref={ref}
        checked={isChecked}
        onCheckedChange={onCheckedChange || (() => {})}
        className={cn(
          'peer focus-visible:ring-ring focus-visible:ring-offset-background inline-flex h-6 w-11 shrink-0 cursor-pointer flex-row items-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          isChecked ? 'bg-primary data-[state=checked]:bg-primary' : 'bg-input data-[state=unchecked]:bg-input',
          className,
        )}
        style={resolvedStyle as React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>['style']}
        {...props}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            'bg-background pointer-events-none block h-5 w-5 rounded-full shadow-md transition-transform',
            isChecked
              ? 'translate-x-5 data-[state=checked]:translate-x-5'
              : 'translate-x-0 data-[state=unchecked]:translate-x-0',
          )}
          style={{
            width: 20,
            height: 20,
            flexShrink: 0,
            transform: isChecked ? 'translateX(20px)' : 'translateX(0px)',
            marginLeft: isChecked ? 20 : 0,
          }}
        />
      </SwitchPrimitive.Root>
    );
  },
);
Switch.displayName = SwitchPrimitive.Root?.displayName || 'Switch';

export { Switch };
