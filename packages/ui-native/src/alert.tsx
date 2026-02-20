import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Text, View } from 'react-native';

import { wrapTextChildren } from './lib/render-native';
import { cn } from './lib/utils';

const alertVariants = cva('relative w-full rounded-lg border p-4', {
  variants: {
    variant: {
      default: 'bg-background border-border',
      destructive: 'border-destructive/50 bg-destructive/10',
      warning: 'border-amber-500/50 bg-amber-500/10',
      info: 'border-blue-500/50 bg-blue-500/10',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const Alert = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View> & VariantProps<typeof alertVariants>
>(({ className, variant, children, ...props }, ref) => (
  <View ref={ref} className={cn(alertVariants({ variant }), className)} {...props}>
    {wrapTextChildren(children)}
  </View>
));
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => (
    <Text
      ref={ref}
      className={cn('mb-1 font-medium leading-none tracking-tight text-foreground', className)}
      {...props}
    />
  ),
);
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => (
    <Text ref={ref} className={cn('text-sm text-muted-foreground leading-relaxed', className)} {...props} />
  ),
);
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertDescription, AlertTitle };
