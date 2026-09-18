import type {
  NativeSelectBaseProps,
  NativeSelectOptGroupBaseProps,
  NativeSelectOptionBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { Text, View } from 'react-native';
import { cn } from './lib/utils';

function NativeSelect({ className, size, ...props }: React.ComponentProps<typeof View> & NativeSelectBaseProps) {
  // Native select relies on @react-native-picker/picker, providing shim
  return (
    <View className={cn('border-input rounded-md border p-2', className)} {...props}>
      <Text className="text-muted-foreground">Select Not Implemented (Use Picker)</Text>
    </View>
  );
}

function NativeSelectOption({ className, ...props }: React.ComponentProps<typeof View> & NativeSelectOptionBaseProps) {
  return <View className={className} {...props} />;
}

function NativeSelectOptGroup({
  className,
  ...props
}: React.ComponentProps<typeof View> & NativeSelectOptGroupBaseProps) {
  return <View className={className} {...props} />;
}

export { NativeSelect, NativeSelectOptGroup, NativeSelectOption };
