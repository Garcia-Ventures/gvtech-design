'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as React from 'react';

import {
  TooltipBaseProps,
  TooltipContentBaseProps,
  TooltipProviderBaseProps,
  TooltipTriggerBaseProps,
} from '@gv-tech/ui-core';
import { cn } from './lib/utils';

export type TooltipProviderProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Provider> &
  TooltipProviderBaseProps;

const TooltipProvider = ({ delayDuration = 0, ...props }: TooltipProviderProps) => (
  <TooltipPrimitive.Provider delayDuration={delayDuration} {...props} />
);

export type TooltipProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> & TooltipBaseProps;

const Tooltip = ({ ...props }: TooltipProps) => <TooltipPrimitive.Root {...props} />;

export type TooltipTriggerProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Trigger> &
  TooltipTriggerBaseProps;

const TooltipTrigger = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Trigger>, TooltipTriggerProps>(
  ({ className, ...props }, ref) => <TooltipPrimitive.Trigger ref={ref} className={className} {...props} />,
);
TooltipTrigger.displayName = TooltipPrimitive.Trigger.displayName;

export type TooltipContentProps = React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> &
  TooltipContentBaseProps;

const TooltipContent = React.forwardRef<React.ElementRef<typeof TooltipPrimitive.Content>, TooltipContentProps>(
  ({ className, sideOffset = 4, ...props }, ref) => (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  ),
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
