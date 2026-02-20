import { ToggleBaseProps, toggleVariants } from '@gv-tech/ui-core';
import * as TogglePrimitive from '@rn-primitives/toggle';
import * as React from 'react';

import { cn } from './lib/utils';
import { TextClassContext } from './text';

export interface ToggleProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>, 'pressed' | 'onPressedChange' | 'children'>,
    ToggleBaseProps {}

const Toggle = React.forwardRef<React.ElementRef<typeof TogglePrimitive.Root>, ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <TextClassContext.Provider
      value={cn(
        'text-sm native:text-base text-foreground font-medium',
        props.pressed && 'text-accent-foreground',
        className,
      )}
    >
      <TogglePrimitive.Root
        ref={ref}
        className={cn(toggleVariants({ variant, size, className }))}
        {...props}
        pressed={props.pressed || false}
        onPressedChange={props.onPressedChange || (() => {})}
      />
    </TextClassContext.Provider>
  ),
);

Toggle.displayName = TogglePrimitive.Root?.displayName || 'Toggle';

export { Toggle, toggleVariants };
