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
          'border-input text-foreground placeholder:text-muted-foreground focus:border-ring flex h-10 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-sm transition-colors disabled:opacity-50',
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
