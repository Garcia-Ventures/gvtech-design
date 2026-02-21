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
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay> &
    React.RefAttributes<React.ElementRef<typeof AlertDialogPrimitive.Overlay>>
> = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  return (
    <AlertDialogPrimitive.Overlay style={StyleSheet.absoluteFill} asChild ref={ref} {...props}>
      <Animated.View
        entering={FadeIn.duration(150)}
        exiting={FadeOut.duration(150)}
        className={cn('z-50 bg-black/80 flex justify-center items-center p-2', className)}
      />
    </AlertDialogPrimitive.Overlay>
  );
});
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay?.displayName || 'AlertDialogOverlay';

const AlertDialogContent: React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content> & {
    portalHost?: string;
    overlayClassName?: string;
    overlayStyle?: ViewStyle;
  } & React.RefAttributes<React.ElementRef<typeof AlertDialogPrimitive.Content>>
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
            'z-50 max-w-lg gap-4 border border-border bg-background p-6 shadow-lg sm:rounded-lg w-full rounded-xl',
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
  <View className={cn('flex flex-col-reverse sm:flex-row sm:justify-end gap-2', className)} {...props} />
);
AlertDialogFooter.displayName = 'AlertDialogFooter';

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn('text-lg native:text-xl font-semibold text-foreground', className)}
    {...props}
  />
));
AlertDialogTitle.displayName = AlertDialogPrimitive.Title?.displayName || 'AlertDialogTitle';

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn('text-sm native:text-base text-muted-foreground', className)}
    {...props}
  />
));
AlertDialogDescription.displayName = AlertDialogPrimitive.Description?.displayName || 'AlertDialogDescription';

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
));
AlertDialogAction.displayName = AlertDialogPrimitive.Action?.displayName || 'AlertDialogAction';

const AlertDialogCancel = React.forwardRef<
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
