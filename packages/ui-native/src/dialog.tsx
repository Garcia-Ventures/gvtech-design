import { DialogBaseProps, DialogContentBaseProps } from '@gv-tech/ui-core';
import * as DialogPrimitive from '@rn-primitives/dialog';
import { X } from 'lucide-react-native';
import * as React from 'react';
import { Platform, View, type ViewStyle } from 'react-native';
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

export type DialogOverlayProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;
export type DialogOverlayRef = React.ComponentRef<typeof DialogPrimitive.Overlay>;

const DialogOverlay: React.ForwardRefExoticComponent<DialogOverlayProps & React.RefAttributes<DialogOverlayRef>> =
  React.forwardRef<DialogOverlayRef, DialogOverlayProps>(({ className, style, ...props }, ref) => {
    return (
      <DialogPrimitive.Overlay
        style={[
          {
            position: Platform.OS === 'web' ? 'fixed' : 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 50,
          } as unknown as ViewStyle,
          style,
        ]}
        asChild
        ref={ref}
        {...props}
      >
        <Animated.View
          entering={FadeIn.duration(150)}
          exiting={FadeOut.duration(150)}
          className={cn('flex items-center justify-center bg-black/80 p-2', className)}
        />
      </DialogPrimitive.Overlay>
    );
  });
DialogOverlay.displayName = DialogPrimitive.Overlay?.displayName || 'DialogOverlay';

export type DialogContentRef = React.ComponentRef<typeof DialogPrimitive.Content>;
const DialogContent: React.ForwardRefExoticComponent<DialogContentProps & React.RefAttributes<DialogContentRef>> =
  React.forwardRef<DialogContentRef, DialogContentProps>(
    ({ className, children, portalHost, overlayClassName, overlayStyle, ...props }, ref) => {
      const PlatformWrapper = React.useCallback(({ children }: { children: React.ReactNode }) => {
        if (Platform.OS === 'web') {
          return <>{children}</>;
        }
        return (
          <View
            pointerEvents="box-none"
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              zIndex: 50,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 16,
            }}
          >
            {children}
          </View>
        );
      }, []);

      return (
        <DialogPortal hostName={portalHost}>
          <DialogOverlay className={overlayClassName} style={overlayStyle} />
          <PlatformWrapper>
            <DialogPrimitive.Content ref={ref} {...props}>
              <View
                pointerEvents="box-none"
                className="absolute inset-0 z-50 flex items-center justify-center"
                style={Platform.OS === 'web' ? ({ position: 'fixed' } as unknown as ViewStyle) : undefined}
              >
                <Animated.View
                  entering={FadeIn.duration(150)}
                  exiting={FadeOut.duration(150)}
                  className={cn(
                    'border-border bg-background w-full max-w-lg gap-4 rounded-xl border p-6 shadow-lg sm:rounded-lg',
                    className,
                  )}
                >
                  {children}
                  <DialogPrimitive.Close
                    className={
                      'ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none'
                    }
                  >
                    <X size={18} className="text-muted-foreground" />
                    <View className="sr-only">
                      <DialogPrimitive.Title>Close</DialogPrimitive.Title>
                    </View>
                  </DialogPrimitive.Close>
                </Animated.View>
              </View>
            </DialogPrimitive.Content>
          </PlatformWrapper>
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
  <View className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

export type DialogTitleRef = React.ComponentRef<typeof DialogPrimitive.Title>;
export type DialogTitleProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
const DialogTitle: React.ForwardRefExoticComponent<DialogTitleProps & React.RefAttributes<DialogTitleRef>> =
  React.forwardRef<DialogTitleRef, DialogTitleProps>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
      ref={ref}
      className={cn('native:text-xl text-foreground text-lg leading-none font-semibold tracking-tight', className)}
      {...props}
    />
  ));
DialogTitle.displayName = DialogPrimitive.Title?.displayName || 'DialogTitle';

export type DialogDescriptionRef = React.ComponentRef<typeof DialogPrimitive.Description>;
export type DialogDescriptionProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;
const DialogDescription: React.ForwardRefExoticComponent<
  DialogDescriptionProps & React.RefAttributes<DialogDescriptionRef>
> = React.forwardRef<DialogDescriptionRef, DialogDescriptionProps>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('native:text-base text-muted-foreground text-sm', className)}
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
