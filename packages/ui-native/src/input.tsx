import * as React from 'react';
import { TextInput } from 'react-native';

import type { InputBaseProps } from '@gv-tech/ui-core';
import { cn } from './lib/utils';

export interface InputProps extends React.ComponentPropsWithoutRef<typeof TextInput>, InputBaseProps {}

const Input = React.forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, placeholderClassName, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-ring disabled:opacity-50',
          className,
        )}
        placeholderClassName={cn('text-muted-foreground', placeholderClassName)}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export { Input };
