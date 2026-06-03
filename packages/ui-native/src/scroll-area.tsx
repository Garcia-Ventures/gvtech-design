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
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        {...props}
      >
        <View>{children}</View>
      </ScrollView>
    );
  },
);
ScrollArea.displayName = 'ScrollArea';

export const ScrollBar: React.FC<ScrollBarBaseProps> = () => {
  return null;
};
ScrollBar.displayName = 'ScrollBar';
