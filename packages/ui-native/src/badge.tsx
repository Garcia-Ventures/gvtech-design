import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Text, View } from 'react-native';

import { cn } from './lib/utils';

const badgeVariants = cva('flex-row items-center rounded-md border px-2 py-0.5', {
  variants: {
    variant: {
      default: 'border-transparent bg-primary',
      secondary: 'border-transparent bg-secondary',
      destructive: 'border-transparent bg-destructive',
      outline: 'border-border bg-transparent',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const badgeTextVariants = cva('text-xs font-semibold', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      secondary: 'text-secondary-foreground',
      destructive: 'text-destructive-foreground',
      outline: 'text-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface BadgeProps extends React.ComponentPropsWithoutRef<typeof View>, VariantProps<typeof badgeVariants> {
  textClassName?: string;
}

import { wrapTextChildren } from './lib/render-native';

function Badge({ className, textClassName, variant, children, ...props }: BadgeProps) {
  return (
    <View className={cn(badgeVariants({ variant }), className)} {...props}>
      {wrapTextChildren(children, Text, {
        className: cn(badgeTextVariants({ variant }), textClassName),
      })}
    </View>
  );
}

export { Badge, badgeVariants };
