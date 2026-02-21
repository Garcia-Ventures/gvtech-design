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

export type SheetOverlayRef = React.ElementRef<typeof DialogPrimitive.Overlay>;
export type SheetOverlayProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;
const SheetOverlay: React.ForwardRefExoticComponent<SheetOverlayProps & React.RefAttributes<SheetOverlayRef>> =
  React.forwardRef<SheetOverlayRef, SheetOverlayProps>(({ className, ...props }, ref) => {
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
          className={cn('web:cursor-default absolute inset-0 z-50 bg-black/80', className)}
        />
      </DialogPrimitive.Overlay>
    );
  });
SheetOverlay.displayName = DialogPrimitive.Overlay?.displayName || 'SheetOverlay';

export type SheetContentRef = React.ElementRef<typeof DialogPrimitive.Content>;
export type SheetContentProps = DialogContentProps & {
  side?: 'top' | 'right' | 'bottom' | 'left';
  overlayClassName?: string;
  overlayStyle?: ViewStyle;
};
const SheetContent: React.ForwardRefExoticComponent<SheetContentProps & React.RefAttributes<SheetContentRef>> =
  React.forwardRef<SheetContentRef, SheetContentProps>(
    ({ className, children, side = 'right', overlayClassName, overlayStyle, ...props }, ref) => {
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
                'bg-background web:cursor-default web:duration-200 web:ease-in-out absolute z-50 h-full w-3/4 gap-4 p-6 shadow-lg',
                side === 'right' &&
                  'border-border data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right top-0 right-0 border-l',
                side === 'left' &&
                  'border-border data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left top-0 left-0 border-r',
                side === 'top' &&
                  'border-border data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top top-0 w-full border-b',
                side === 'bottom' &&
                  'border-border data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom bottom-0 w-full border-t',
                className,
              )}
            >
              {children}
              <DialogPrimitive.Close
                className={cn(
                  'ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none',
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
    },
  );
SheetContent.displayName = DialogPrimitive.Content?.displayName || 'SheetContent';

const SheetHeader = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof View>) => (
  <View className={cn('flex flex-col space-y-2 text-center sm:text-left', className)} {...props} />
);
SheetHeader.displayName = 'SheetHeader';

const SheetFooter = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof View>) => (
  <View className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
);
SheetFooter.displayName = 'SheetFooter';

export type SheetTitleRef = React.ElementRef<typeof DialogPrimitive.Title>;
export type SheetTitleProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
const SheetTitle: React.ForwardRefExoticComponent<SheetTitleProps & React.RefAttributes<SheetTitleRef>> =
  React.forwardRef<SheetTitleRef, SheetTitleProps>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title ref={ref} className={cn('text-foreground text-lg font-semibold', className)} {...props} />
  ));
SheetTitle.displayName = DialogPrimitive.Title?.displayName || 'SheetTitle';

export type SheetDescriptionRef = React.ElementRef<typeof DialogPrimitive.Description>;
export type SheetDescriptionProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;
const SheetDescription: React.ForwardRefExoticComponent<
  SheetDescriptionProps & React.RefAttributes<SheetDescriptionRef>
> = React.forwardRef<SheetDescriptionRef, SheetDescriptionProps>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn('text-muted-foreground text-sm', className)} {...props} />
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
