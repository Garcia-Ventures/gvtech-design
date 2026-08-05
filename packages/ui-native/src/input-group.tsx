import type {
  InputGroupAddonBaseProps,
  InputGroupBaseProps,
  InputGroupButtonBaseProps,
  InputGroupInputBaseProps,
  InputGroupTextareaBaseProps,
  InputGroupTextBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { Text, TextInput, View } from 'react-native';
import { Button } from './button';
import { cn } from './lib/utils';

function InputGroup({ className, ...props }: React.ComponentProps<typeof View> & InputGroupBaseProps) {
  return <View className={cn('border-input flex flex-row items-center rounded-md border', className)} {...props} />;
}

function InputGroupAddon({ className, align, ...props }: React.ComponentProps<typeof View> & InputGroupAddonBaseProps) {
  return <View className={cn('p-2', className)} {...props} />;
}

function InputGroupButton({
  className,
  type,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof Button> & InputGroupButtonBaseProps) {
  return (
    <Button
      variant={variant as React.ComponentProps<typeof Button>['variant']}
      size={size as React.ComponentProps<typeof Button>['size']}
      className={className}
      {...(props as Record<string, unknown>)}
    />
  );
}

function InputGroupText({ className, ...props }: React.ComponentProps<typeof Text> & InputGroupTextBaseProps) {
  return <Text className={cn('text-muted-foreground text-sm', className)} {...props} />;
}

function InputGroupInput({ className, ...props }: React.ComponentProps<typeof TextInput> & InputGroupInputBaseProps) {
  return <TextInput className={cn('text-foreground flex-1 px-3 py-2', className)} {...props} />;
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<typeof TextInput> & InputGroupTextareaBaseProps) {
  return <TextInput multiline className={cn('text-foreground flex-1 px-3 py-2', className)} {...props} />;
}

export { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput, InputGroupText, InputGroupTextarea };
