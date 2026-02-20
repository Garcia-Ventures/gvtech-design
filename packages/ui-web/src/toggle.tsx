'use client';

import * as TogglePrimitive from '@radix-ui/react-toggle';
import { VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { ToggleBaseProps, toggleVariants } from '@gv-tech/ui-core';
import { cn } from './lib/utils';

export interface ToggleProps
  extends
    React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    Omit<VariantProps<typeof toggleVariants>, 'size' | 'variant'>,
    ToggleBaseProps {}

const Toggle = React.forwardRef<React.ElementRef<typeof TogglePrimitive.Root>, ToggleProps>(
  ({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
  ),
);

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
