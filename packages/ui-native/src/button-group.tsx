// Native groups follow `orientation` and the separator's own orientation.
// Joined corner radii from the web CSS child selectors are not applied here.
// See the divergence registry.

import type { ButtonGroupBaseProps, ButtonGroupSeparatorBaseProps, ButtonGroupTextBaseProps } from '@gv-tech/ui-core';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Text, View } from 'react-native';

import { cn } from './lib/utils';
import { Separator } from './separator';

const buttonGroupVariants = cva('flex w-fit items-stretch', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

function ButtonGroup({
  className,
  orientation = 'horizontal',
  ...props
}: React.ComponentProps<typeof View> & VariantProps<typeof buttonGroupVariants> & ButtonGroupBaseProps) {
  return <View className={cn(buttonGroupVariants({ orientation }), className)} {...props} />;
}

function ButtonGroupText({
  className,
  asChild: _asChild,
  ...props
}: React.ComponentProps<typeof Text> & ButtonGroupTextBaseProps) {
  return (
    <Text
      className={cn('bg-muted text-foreground rounded-lg border px-2.5 text-sm font-medium', className)}
      {...props}
    />
  );
}

function ButtonGroupSeparator({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof Separator> & ButtonGroupSeparatorBaseProps) {
  return <Separator orientation={orientation} className={cn('bg-border', className)} {...props} />;
}

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonGroupVariants };
