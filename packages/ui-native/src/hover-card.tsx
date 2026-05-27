import type { HoverCardContentBaseProps } from '@gv-tech/ui-core';
import * as HoverCardPrimitive from '@rn-primitives/hover-card';
import * as React from 'react';
import { cn } from './lib/utils';

export const HoverCard = HoverCardPrimitive.Root;

export const HoverCardTrigger = HoverCardPrimitive.Trigger;

export const HoverCardContent = React.forwardRef<
  React.ElementRef<typeof HoverCardPrimitive.Content>,
  HoverCardContentBaseProps
>(({ className, children, ...props }, ref) => {
  return (
    <HoverCardPrimitive.Portal>
      <HoverCardPrimitive.Content
        ref={ref}
        className={cn(
          'bg-popover text-popover-foreground border-border z-50 w-64 rounded-md border p-4 shadow-md',
          className,
        )}
        {...props}
      >
        {children}
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Portal>
  );
});
HoverCardContent.displayName = HoverCardPrimitive.Content?.displayName || 'HoverCardContent';
