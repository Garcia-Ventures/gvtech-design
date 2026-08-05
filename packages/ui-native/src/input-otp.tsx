import type {
  InputOTPBaseProps,
  InputOTPGroupBaseProps,
  InputOTPSeparatorBaseProps,
  InputOTPSlotBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { Text, View } from 'react-native';
import { cn } from './lib/utils';

function InputOTP({ className, containerClassName, ...props }: React.ComponentProps<typeof View> & InputOTPBaseProps) {
  return (
    <View
      className={cn('border-destructive/50 rounded-md border border-dashed p-4', containerClassName, className)}
      {...props}
    >
      <Text className="text-destructive font-mono text-xs">InputOTP (Not Implemented)</Text>
    </View>
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<typeof View> & InputOTPGroupBaseProps) {
  return <View className={className} {...props} />;
}

function InputOTPSlot({ className, index, ...props }: React.ComponentProps<typeof View> & InputOTPSlotBaseProps) {
  return <View className={className} {...props} />;
}

function InputOTPSeparator({ className, ...props }: React.ComponentProps<typeof View> & InputOTPSeparatorBaseProps) {
  return <View className={className} {...props} />;
}

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
