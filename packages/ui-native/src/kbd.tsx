import type { KbdBaseProps, KbdGroupBaseProps } from '@gv-tech/ui-core';
import * as React from 'react';
import { Text, View } from 'react-native';
import { cn } from './lib/utils';

function Kbd({ className, ...props }: React.ComponentProps<typeof Text> & KbdBaseProps) {
  return (
    <Text className={cn('bg-muted text-muted-foreground rounded-sm px-1 font-mono text-xs', className)} {...props} />
  );
}

function KbdGroup({ className, ...props }: React.ComponentProps<typeof View> & KbdGroupBaseProps) {
  return <View className={cn('flex flex-row items-center gap-1', className)} {...props} />;
}

export { Kbd, KbdGroup };
