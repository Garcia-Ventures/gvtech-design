import * as TooltipPrimitive from '@rn-primitives/tooltip';
import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { cn } from './lib/utils';
import { Text } from './text';

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent: React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & { portalHost?: string } & React.RefAttributes<
      React.ElementRef<typeof TooltipPrimitive.Content>
    >
> = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & {
    portalHost?: string;
  }
>(
  (
    { className, portalHost, ...props },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _ref,
  ) => (
    <TooltipPrimitive.Portal hostName={portalHost}>
      <TooltipPrimitive.Overlay style={Platform.OS !== 'web' ? StyleSheet.absoluteFill : undefined}>
        <Animated.View
          entering={FadeIn}
          exiting={FadeOut}
          className={cn(
            'border-border bg-popover web:animate-in web:fade-in-0 web:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 overflow-hidden rounded-md border px-3 py-1.5 shadow-md',
            className,
          )}
        >
          <Text className="text-popover-foreground native:text-base text-sm">{props.children}</Text>
        </Animated.View>
      </TooltipPrimitive.Overlay>
    </TooltipPrimitive.Portal>
  ),
);
TooltipContent.displayName = TooltipPrimitive.Content?.displayName || 'TooltipContent';

const TooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>;

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
