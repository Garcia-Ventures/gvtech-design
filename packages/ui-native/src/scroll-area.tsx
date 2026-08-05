import type { ScrollAreaBaseProps, ScrollBarBaseProps } from '@gv-tech/ui-core';
import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { cn } from './lib/utils';

export const ScrollArea = React.forwardRef<ScrollView, ScrollAreaBaseProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <ScrollView
        ref={ref}
        className={cn('flex-1', className)}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        {...props}
      >
        <View>{children}</View>
      </ScrollView>
    );
  },
);
ScrollArea.displayName = 'ScrollArea';

export const ScrollBar: React.FC<ScrollBarBaseProps> = () => {
  // Natively, we rely on the ScrollView's built-in indicators.
  // This component is a no-op shim for contract compatibility.
  return null;
};
ScrollBar.displayName = 'ScrollBar';
