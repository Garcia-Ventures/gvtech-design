import { ProgressBaseProps } from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

import { cn } from './lib/utils';

const Progress = React.forwardRef<
  React.ElementRef<typeof View>,
  React.ComponentPropsWithoutRef<typeof View> & ProgressBaseProps
>(({ className, value, ...props }, ref) => (
  <View
    ref={ref}
    className={cn('bg-muted relative h-2 w-full overflow-hidden rounded-full', className)}
    accessibilityRole="progressbar"
    role="progressbar"
    {...props}
  >
    <View className="bg-primary h-full rounded-full" style={{ width: `${value || 0}%` }} />
  </View>
));
Progress.displayName = 'Progress';

export { Progress };
