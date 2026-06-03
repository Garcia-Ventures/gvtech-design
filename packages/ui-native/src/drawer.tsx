import type {
  DrawerBaseProps,
  DrawerCloseBaseProps,
  DrawerContentBaseProps,
  DrawerDescriptionBaseProps,
  DrawerFooterBaseProps,
  DrawerHeaderBaseProps,
  DrawerTitleBaseProps,
  DrawerTriggerBaseProps,
} from '@gv-tech/ui-core';
import * as DialogPrimitive from '@rn-primitives/dialog';
import * as React from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from 'react-native-reanimated';
import { wrapTextChildren } from './lib/render-native';
import { cn } from './lib/utils';

export const Drawer: React.FC<DrawerBaseProps> = ({ children }) => {
  return <DialogPrimitive.Root>{children}</DialogPrimitive.Root>;
};
Drawer.displayName = 'Drawer';

export const DrawerTrigger = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Trigger>,
  DrawerTriggerBaseProps & { className?: string }
>(({ children, className, ...props }, ref) => {
  return (
    <DialogPrimitive.Trigger ref={ref} className={className} {...props}>
      {wrapTextChildren(children)}
    </DialogPrimitive.Trigger>
  );
});
DrawerTrigger.displayName = 'DrawerTrigger';

export const DrawerPortal = DialogPrimitive.Portal;

export type DrawerOverlayProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;
export type DrawerOverlayRef = React.ElementRef<typeof DialogPrimitive.Overlay>;

export const DrawerOverlay: React.ForwardRefExoticComponent<
  DrawerOverlayProps & React.RefAttributes<DrawerOverlayRef>
> = React.forwardRef<DrawerOverlayRef, DrawerOverlayProps>(({ className, ...props }, ref) => {
  return (
    <DialogPrimitive.Overlay style={StyleSheet.absoluteFill} asChild ref={ref} {...props}>
      <Animated.View
        entering={FadeIn.duration(150)}
        exiting={FadeOut.duration(150)}
        className={cn('z-50 bg-black/80', className)}
      />
    </DialogPrimitive.Overlay>
  );
});
DrawerOverlay.displayName = 'DrawerOverlay';

export const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  DrawerContentBaseProps & {
    portalHost?: string;
    overlayClassName?: string;
    overlayStyle?: ViewStyle;
  }
>(({ className, children, portalHost, overlayClassName, overlayStyle, ...props }, ref) => {
  return (
    <DrawerPortal hostName={portalHost}>
      <DrawerOverlay className={overlayClassName} style={overlayStyle} />
      <DialogPrimitive.Content ref={ref} asChild {...props}>
        <Animated.View
          entering={SlideInDown.duration(200)}
          exiting={SlideOutDown.duration(200)}
          className={cn(
            'border-border bg-background fixed inset-x-0 bottom-0 z-50 flex h-auto flex-col rounded-t-xl border p-6 pb-10 shadow-lg',
            className,
          )}
        >
          <View className="bg-muted mx-auto mb-4 h-1.5 w-12 rounded-full" />
          {children}
        </Animated.View>
      </DialogPrimitive.Content>
    </DrawerPortal>
  );
});
DrawerContent.displayName = 'DrawerContent';

export const DrawerHeader = ({ className, children, ...props }: DrawerHeaderBaseProps) => (
  <View className={cn('flex flex-col gap-1.5 text-center sm:text-left', className)} {...props}>
    {wrapTextChildren(children)}
  </View>
);
DrawerHeader.displayName = 'DrawerHeader';

export const DrawerFooter = ({ className, children, ...props }: DrawerFooterBaseProps) => (
  <View className={cn('mt-auto flex flex-col gap-2', className)} {...props}>
    {wrapTextChildren(children)}
  </View>
);
DrawerFooter.displayName = 'DrawerFooter';

export const DrawerClose = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Close>,
  DrawerCloseBaseProps & { className?: string }
>(({ children, className, ...props }, ref) => {
  return (
    <DialogPrimitive.Close ref={ref} className={className} {...props}>
      {wrapTextChildren(children)}
    </DialogPrimitive.Close>
  );
});
DrawerClose.displayName = 'DrawerClose';

export const DrawerTitle = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Title>, DrawerTitleBaseProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <DialogPrimitive.Title
        ref={ref}
        className={cn('text-foreground text-lg leading-none font-semibold tracking-tight', className)}
        {...props}
      >
        {wrapTextChildren(children)}
      </DialogPrimitive.Title>
    );
  },
);
DrawerTitle.displayName = 'DrawerTitle';

export const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DrawerDescriptionBaseProps
>(({ className, children, ...props }, ref) => {
  return (
    <DialogPrimitive.Description ref={ref} className={cn('text-muted-foreground text-sm', className)} {...props}>
      {wrapTextChildren(children)}
    </DialogPrimitive.Description>
  );
});
DrawerDescription.displayName = 'DrawerDescription';
