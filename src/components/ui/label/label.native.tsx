import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Text } from 'react-native';

import { cn } from '@/lib/utils';

const labelVariants = cva('text-sm font-medium leading-none text-foreground');

const Label = React.forwardRef<
  React.ElementRef<typeof Text>,
  React.ComponentPropsWithoutRef<typeof Text> & VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => <Text ref={ref} className={cn(labelVariants(), className)} {...props} />);

Label.displayName = 'Label';

export { Label };
