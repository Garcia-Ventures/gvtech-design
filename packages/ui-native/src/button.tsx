import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Pressable, Text, View } from 'react-native';

import type { ButtonBaseProps } from '@gv-tech/ui-core';
import { wrapTextChildren } from './lib/render-native';
import { cn } from './lib/utils';

const buttonVariants = cva(
  'flex-row items-center justify-center gap-2 rounded-md transition-colors active:opacity-80',
  {
    variants: {
      variant: {
        default: 'bg-primary shadow-sm',
        destructive: 'bg-destructive shadow-sm',
        outline: 'border border-input bg-transparent shadow-sm',
        secondary: 'bg-secondary shadow-sm',
        ghost: 'bg-transparent',
        link: 'bg-transparent',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-12 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

const buttonTextVariants = cva('text-sm font-medium', {
  variants: {
    variant: {
      default: 'text-primary-foreground',
      destructive: 'text-destructive-foreground',
      outline: 'text-foreground',
      secondary: 'text-secondary-foreground',
      ghost: 'text-foreground',
      link: 'text-primary underline',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface ButtonProps extends VariantProps<typeof buttonVariants>, ButtonBaseProps {
  onPress?: () => void;
}

const Button = React.forwardRef<View, ButtonProps>(
  ({ className, variant, size, onPress, children, disabled, ...props }, ref) => {
    return (
      <Pressable
        ref={ref}
        onPress={onPress}
        disabled={disabled}
        className={cn(buttonVariants({ variant, size, className }), disabled && 'opacity-50')}
        {...props}
      >
        {wrapTextChildren(children, Text, {
          className: cn(buttonTextVariants({ variant })),
        })}
      </Pressable>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
