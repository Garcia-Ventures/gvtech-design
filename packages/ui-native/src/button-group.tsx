import type { ButtonGroupBaseProps, ButtonGroupSeparatorBaseProps, ButtonGroupTextBaseProps } from '@gv-tech/ui-core';
import * as React from 'react';
import { Text, View } from 'react-native';
import { cn } from './lib/utils';

// TODO: Implement proper React Native ButtonGroup logic
function ButtonGroup({ className, orientation, ...props }: React.ComponentProps<typeof View> & ButtonGroupBaseProps) {
  return <View className={cn('flex flex-row', className)} {...props} />;
}

function ButtonGroupText({
  className,
  asChild,
  ...props
}: React.ComponentProps<typeof Text> & ButtonGroupTextBaseProps) {
  return <Text className={cn('text-sm font-medium', className)} {...props} />;
}

function ButtonGroupSeparator({
  className,
  orientation,
  ...props
}: React.ComponentProps<typeof View> & ButtonGroupSeparatorBaseProps) {
  return <View className={cn('bg-border h-full w-px', className)} {...props} />;
}

// Stub for buttonGroupVariants to satisfy web/native shared imports if needed
const buttonGroupVariants = () => '';

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText, buttonGroupVariants };
