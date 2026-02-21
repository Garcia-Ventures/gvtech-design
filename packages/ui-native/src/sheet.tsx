import * as DialogPrimitive from '@rn-primitives/dialog';
import { X } from 'lucide-react-native';
import * as React from 'react';
import { Platform, StyleSheet, View, type ViewStyle } from 'react-native';
import Animated, { FadeIn, FadeOut, SlideInRight, SlideOutRight } from 'react-native-reanimated';

import { type DialogContentProps } from './dialog';
import { cn } from './lib/utils';
import { Text } from './text';

const Sheet = DialogPrimitive.Root;

const SheetTrigger = DialogPrimitive.Trigger;

const SheetClose = DialogPrimitive.Close;

const SheetPortal = DialogPrimitive.Portal;

const SheetOverlay: React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> &
    React.RefAttributes<React.ElementRef<typeof DialogPrimitive.Overlay>>
> = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  return (
    <DialogPrimitive.Overlay
      style={Platform.OS !== 'web' ? StyleSheet.absoluteFill : undefined}
      asChild
      ref={ref}
      {...props}
    >
      <Animated.View
        entering={FadeIn.duration(150)}
        exiting={FadeOut.duration(150)}
        className={cn('absolute inset-0 z-50 bg-black/80  web:cursor-default', className)}
      />
    </DialogPrimitive.Overlay>
  );
});
SheetOverlay.displayName = DialogPrimitive.Overlay?.displayName || 'SheetOverlay';

const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DialogContentProps & {
    side?: 'top' | 'right' | 'bottom' | 'left';
    overlayClassName?: string;
    overlayStyle?: ViewStyle;
  }
>(({ className, children, side = 'right', overlayClassName, overlayStyle, ...props }, ref) => {
  const isWeb = Platform.OS === 'web';
  // TODO: Add support for other sides
  const entering = isWeb ? undefined : SlideInRight;
  const exiting = isWeb ? undefined : SlideOutRight;

  return (
    <SheetPortal>
      <SheetOverlay className={overlayClassName} style={overlayStyle} />
      <DialogPrimitive.Content ref={ref} asChild {...props}>
        <Animated.View
          entering={entering}
          exiting={exiting}
          className={cn(
            'absolute z-50 h-full w-3/4 gap-4 bg-background p-6 shadow-lg web:cursor-default web:duration-200 web:ease-in-out',
            side === 'right' &&
              'right-0 top-0 border-l border-border data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right',
            side === 'left' &&
              'left-0 top-0 border-r border-border data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
            side === 'top' &&
              'top-0 w-full border-b border-border data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top',
            side === 'bottom' &&
              'bottom-0 w-full border-t border-border data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom',
            className,
          )}
        >
          {children}
          <DialogPrimitive.Close
            className={cn(
              'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary',
              'web:absolute web:right-4 web:top-4',
            )}
          >
            <X size={24} className="text-muted-foreground" />
            <Text className="sr-only">Close</Text>
          </DialogPrimitive.Close>
        </Animated.View>
      </DialogPrimitive.Content>
    </SheetPortal>
  );
});
SheetContent.displayName = DialogPrimitive.Content?.displayName || 'SheetContent';

const SheetHeader = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof View>) => (
  <View className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof View>) => (
  <View className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
);
SheetFooter.displayName = 'SheetFooter';

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title ref={ref} className={cn('text-lg font-semibold text-foreground', className)} {...props} />
));
SheetTitle.displayName = DialogPrimitive.Title?.displayName || 'SheetTitle';

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
));
SheetDescription.displayName = DialogPrimitive.Description?.displayName || 'SheetDescription';

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
