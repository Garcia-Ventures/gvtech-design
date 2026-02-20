import * as React from 'react';
import { TextInput } from 'react-native';

import { cn } from './lib/utils';

export type TextareaProps = React.ComponentPropsWithoutRef<typeof TextInput>;

const Textarea = React.forwardRef<React.ElementRef<typeof TextInput>, TextareaProps>(
  ({ className, placeholderClassName, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        multiline
        numberOfLines={props.numberOfLines || 3}
        className={cn(
          'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:border-ring disabled:opacity-50',
          className,
        )}
        placeholderClassName={cn('text-muted-foreground', placeholderClassName)}
        textAlignVertical="top"
        {...props}
      />
    );
  },
);

Textarea.displayName = 'Textarea';

export { Textarea };
