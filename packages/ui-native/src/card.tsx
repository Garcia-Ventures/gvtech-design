import * as React from 'react';
import { Text, View } from 'react-native';

import type { CardBaseProps } from '@gv-tech/ui-core';
import { wrapTextChildren } from './lib/render-native';
import { cn } from './lib/utils';

export interface CardProps extends React.ComponentPropsWithoutRef<typeof View>, CardBaseProps {}

const Card = React.forwardRef<React.ElementRef<typeof View>, CardProps>(({ className, ...props }, ref) => (
  <View ref={ref} className={cn('rounded-xl border border-border bg-card shadow-sm', className)} {...props} />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef<React.ElementRef<typeof View>, React.ComponentPropsWithoutRef<typeof View>>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  ),
);
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => (
    <Text
      ref={ref}
      className={cn('font-semibold leading-none tracking-tight text-card-foreground text-lg', className)}
      {...props}
    />
  ),
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<React.ElementRef<typeof Text>, React.ComponentPropsWithoutRef<typeof Text>>(
  ({ className, ...props }, ref) => (
    <Text ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  ),
);
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<React.ElementRef<typeof View>, React.ComponentPropsWithoutRef<typeof View>>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn('p-6 pt-0', className)} {...props}>
      {wrapTextChildren(props.children, Text, { className: 'text-sm text-card-foreground' })}
    </View>
  ),
);
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<React.ElementRef<typeof View>, React.ComponentPropsWithoutRef<typeof View>>(
  ({ className, ...props }, ref) => (
    <View ref={ref} className={cn('flex flex-row items-center p-6 pt-0', className)} {...props} />
  ),
);
CardFooter.displayName = 'CardFooter';

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle };
