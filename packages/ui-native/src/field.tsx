import type {
  FieldBaseProps,
  FieldContentBaseProps,
  FieldDescriptionBaseProps,
  FieldErrorBaseProps,
  FieldGroupBaseProps,
  FieldLabelBaseProps,
  FieldLegendBaseProps,
  FieldSeparatorBaseProps,
  FieldSetBaseProps,
  FieldTitleBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { Text, View } from 'react-native';
import { cn } from './lib/utils';

function Field({ className, orientation, ...props }: React.ComponentProps<typeof View> & FieldBaseProps) {
  return <View className={cn('flex flex-col gap-2', className)} {...props} />;
}

function FieldContent({ className, ...props }: React.ComponentProps<typeof View> & FieldContentBaseProps) {
  return <View className={cn('flex flex-col', className)} {...props} />;
}

function FieldDescription({ className, ...props }: React.ComponentProps<typeof Text> & FieldDescriptionBaseProps) {
  return <Text className={cn('text-muted-foreground text-sm', className)} {...props} />;
}

function FieldError({
  className,
  errors,
  children,
  ...props
}: React.ComponentProps<typeof Text> & FieldErrorBaseProps) {
  const message = children || (errors && errors[0]?.message);
  if (!message) {
    return null;
  }
  return (
    <Text className={cn('text-destructive text-sm', className)} {...props}>
      {message}
    </Text>
  );
}

function FieldGroup({ className, ...props }: React.ComponentProps<typeof View> & FieldGroupBaseProps) {
  return <View className={cn('flex flex-col gap-4', className)} {...props} />;
}

function FieldLabel({ className, ...props }: React.ComponentProps<typeof Text> & FieldLabelBaseProps) {
  return <Text className={cn('text-sm font-medium', className)} {...props} />;
}

function FieldLegend({ className, variant, ...props }: React.ComponentProps<typeof Text> & FieldLegendBaseProps) {
  return <Text className={cn('font-medium', variant === 'label' ? 'text-sm' : 'text-base', className)} {...props} />;
}

function FieldSeparator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof View> & FieldSeparatorBaseProps) {
  return (
    <View className={cn('bg-border my-2 h-px', className)} {...props}>
      {children ? <Text className="bg-background absolute px-2 text-xs">{children}</Text> : null}
    </View>
  );
}

function FieldSet({ className, ...props }: React.ComponentProps<typeof View> & FieldSetBaseProps) {
  return <View className={cn('flex flex-col gap-4', className)} {...props} />;
}

function FieldTitle({ className, ...props }: React.ComponentProps<typeof Text> & FieldTitleBaseProps) {
  return <Text className={cn('text-sm font-medium', className)} {...props} />;
}

export {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
};
