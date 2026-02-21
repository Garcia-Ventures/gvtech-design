import { DialogBaseProps, DialogContentBaseProps } from '@gv-tech/ui-core';
import * as DialogPrimitive from '@rn-primitives/dialog';
import { X } from 'lucide-react-native';
import * as React from 'react';
import { StyleSheet, View, type ViewStyle } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { cn } from './lib/utils';

const Dialog = DialogPrimitive.Root;

export interface DialogProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>, DialogBaseProps {}

export interface DialogContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, DialogContentBaseProps {
  portalHost?: string;
  overlayClassName?: string;
  overlayStyle?: ViewStyle;
}

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay: React.ForwardRefExoticComponent<
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay> &
    React.RefAttributes<React.ElementRef<typeof DialogPrimitive.Overlay>>
> = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  return (
    <DialogPrimitive.Overlay style={StyleSheet.absoluteFill} asChild ref={ref} {...props}>
      <Animated.View
        entering={FadeIn.duration(150)}
        exiting={FadeOut.duration(150)}
        className={cn('z-50 bg-black/80 flex justify-center items-center p-2', className)}
      />
    </DialogPrimitive.Overlay>
  );
});
DialogOverlay.displayName = DialogPrimitive.Overlay?.displayName || 'DialogOverlay';

const DialogContent = React.forwardRef<React.ElementRef<typeof DialogPrimitive.Content>, DialogContentProps>(
  ({ className, children, portalHost, overlayClassName, overlayStyle, ...props }, ref) => {
    return (
      <DialogPortal hostName={portalHost}>
        <DialogOverlay className={overlayClassName} style={overlayStyle} />
        <DialogPrimitive.Content ref={ref} asChild {...props}>
          <Animated.View
            entering={FadeIn.duration(150)}
            exiting={FadeOut.duration(150)}
            className={cn(
              'z-50 max-w-lg gap-4 border border-border bg-background p-6 shadow-lg sm:rounded-lg w-full rounded-xl',
              className,
            )}
          >
            {children}
            <DialogPrimitive.Close
              className={
                'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground'
              }
            >
              <X size={18} className="text-muted-foreground" />
              <View className="sr-only">
                <DialogPrimitive.Title>Close</DialogPrimitive.Title>
              </View>
            </DialogPrimitive.Close>
          </Animated.View>
        </DialogPrimitive.Content>
      </DialogPortal>
    );
  },
);
DialogContent.displayName = DialogPrimitive.Content?.displayName || 'DialogContent';

const DialogHeader = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof View>) => (
  <View className={cn('flex flex-col gap-1.5 text-center sm:text-left', className)} {...props} />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }: React.ComponentPropsWithoutRef<typeof View>) => (
  <View className={cn('flex flex-col-reverse sm:flex-row sm:justify-end gap-2', className)} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg native:text-xl font-semibold leading-none tracking-tight text-foreground', className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title?.displayName || 'DialogTitle';

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm native:text-base text-muted-foreground', className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description?.displayName || 'DialogDescription';

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
