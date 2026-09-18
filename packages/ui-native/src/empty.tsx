import type { EmptyBaseProps, EmptyMediaBaseProps } from '@gv-tech/ui-core';
import * as React from 'react';
import { Text, View } from 'react-native';
import { cn } from './lib/utils';

function Empty({ className, ...props }: React.ComponentProps<typeof View> & EmptyBaseProps) {
  return (
    <View
      className={cn(
        'border-border flex w-full items-center justify-center rounded-xl border-2 border-dashed p-6',
        className,
      )}
      {...props}
    />
  );
}

function EmptyHeader({ className, ...props }: React.ComponentProps<typeof View>) {
  return <View className={cn('flex flex-col items-center gap-2', className)} {...props} />;
}

function EmptyMedia({ className, variant, ...props }: React.ComponentProps<typeof View> & EmptyMediaBaseProps) {
  return <View className={cn('flex items-center justify-center', className)} {...props} />;
}

function EmptyTitle({ className, ...props }: React.ComponentProps<typeof Text>) {
  return <Text className={cn('text-foreground text-lg font-semibold', className)} {...props} />;
}

function EmptyDescription({ className, ...props }: React.ComponentProps<typeof Text>) {
  return <Text className={cn('text-muted-foreground text-center text-sm', className)} {...props} />;
}

function EmptyContent({ className, ...props }: React.ComponentProps<typeof View>) {
  return <View className={cn('mt-4 flex flex-col items-center gap-2', className)} {...props} />;
}

export { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle };
