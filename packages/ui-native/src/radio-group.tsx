import { RadioGroupBaseProps, RadioGroupItemBaseProps } from '@gv-tech/ui-core';
import * as RadioGroupPrimitive from '@rn-primitives/radio-group';
import { Circle } from 'lucide-react-native';
import * as React from 'react';

import { cn } from './lib/utils';

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>, RadioGroupBaseProps {}

const RadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
  ({ className, ...props }, ref) => {
    return <RadioGroupPrimitive.Root className={cn('web:grid gap-2', className)} {...props} ref={ref} />;
  },
);
RadioGroup.displayName = RadioGroupPrimitive.Root?.displayName || 'RadioGroup';

export interface RadioGroupItemProps
  extends Omit<React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>, 'disabled'>, RadioGroupItemBaseProps {}

const RadioGroupItem = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, RadioGroupItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          'aspect-square h-4 w-4 native:h-5 native:w-5 rounded-full border border-primary text-primary web:ring-offset-background web:focus:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
          props.disabled && 'web:cursor-not-allowed opacity-50',
          className,
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <Circle className="h-2.5 w-2.5 fill-current text-current" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );
  },
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item?.displayName || 'RadioGroupItem';

export { RadioGroup, RadioGroupItem };
