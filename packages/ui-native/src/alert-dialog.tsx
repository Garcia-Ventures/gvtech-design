import * as AlertDialogPrimitive from '@rn-primitives/alert-dialog';
import * as React from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { buttonVariants } from './button';
import { cn } from './lib/utils';

const AlertDialog = AlertDialogPrimitive.Root;

const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

const AlertDialogPortal = AlertDialogPrimitive.Portal;

const AlertDialogOverlay: React.ForwardRefExoticComponent<
  AlertDialogOverlayProps & React.RefAttributes<React.ElementRef<typeof AlertDialogPrimitive.Overlay>>
> = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  return (
    <AlertDialogPrimitive.Overlay style={StyleSheet.absoluteFill} asChild ref={ref} {...props}>
      <Animated.View
        entering={FadeIn.duration(150)}
        exiting={FadeOut.duration(150)}
        className={cn('z-50 flex items-center justify-center bg-black/80 p-2', className)}
      />
    </AlertDialogPrimitive.Overlay>
  );
});
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay?.displayName || 'AlertDialogOverlay';

const AlertDialogContent: React.ForwardRefExoticComponent<
  AlertDialogContentProps & React.RefAttributes<React.ElementRef<typeof AlertDialogPrimitive.Content>>
> = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> & {
    portalHost?: string;
    overlayClassName?: string;
    overlayStyle?: ViewStyle;
  }
>(({ className, portalHost, overlayClassName, overlayStyle, ...props }, ref) => {
  return (
    <AlertDialogPortal hostName={portalHost}>
      <AlertDialogOverlay className={overlayClassName} style={overlayStyle} />
      <AlertDialogPrimitive.Content ref={ref} asChild {...props}>
        <Animated.View
          entering={FadeIn.duration(150)}
          exiting={FadeOut.duration(150)}
          className={cn(
            'border-border bg-background z-50 w-full max-w-lg gap-4 rounded-xl border p-6 shadow-lg sm:rounded-lg',
            className,
          )}
        />
      </AlertDialogPrimitive.Content>
    </AlertDialogPortal>
  );
});
AlertDialogContent.displayName = AlertDialogPrimitive.Content?.displayName || 'AlertDialogContent';

const AlertDialogHeader = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof View>) => (
  <View className={cn('flex flex-col gap-2 text-center sm:text-left', className)} {...props} />
);
AlertDialogHeader.displayName = 'AlertDialogHeader';

const AlertDialogFooter = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof View>) => (
  <View className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)} {...props} />
);
AlertDialogFooter.displayName = 'AlertDialogFooter';

const AlertDialogTitle: React.ForwardRefExoticComponent<
  AlertDialogTitleProps & React.RefAttributes<React.ElementRef<typeof AlertDialogPrimitive.Title>>
> = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('native:text-xl text-foreground text-lg font-semibold', className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title?.displayName || 'AlertDialogTitle';

const AlertDialogDescription: React.ForwardRefExoticComponent<
  AlertDialogDescriptionProps & React.RefAttributes<React.ElementRef<typeof AlertDialogPrimitive.Description>>
> = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn('native:text-base text-muted-foreground text-sm', className)}
    {...props}
  />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description?.displayName || 'AlertDialogDescription';

const AlertDialogAction: React.ForwardRefExoticComponent<
  AlertDialogActionProps & React.RefAttributes<React.ElementRef<typeof AlertDialogPrimitive.Action>>
> = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action?.displayName || 'AlertDialogAction';

const AlertDialogCancel: React.ForwardRefExoticComponent<
  AlertDialogCancelProps & React.RefAttributes<React.ElementRef<typeof AlertDialogPrimitive.Cancel>>
> = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: 'outline' }), 'mt-2 sm:mt-0', className)}
    {...props}
  />
));
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel?.displayName || 'AlertDialogCancel';

export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
};

export type AlertDialogOverlayProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>;
export type AlertDialogContentProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> & {
  portalHost?: string;
  overlayClassName?: string;
  overlayStyle?: ViewStyle;
};
export type AlertDialogHeaderProps = React.ComponentPropsWithoutRef<typeof View>;
export type AlertDialogFooterProps = React.ComponentPropsWithoutRef<typeof View>;
export type AlertDialogTitleProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>;
export type AlertDialogDescriptionProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>;
export type AlertDialogActionProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>;
export type AlertDialogCancelProps = React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>;
