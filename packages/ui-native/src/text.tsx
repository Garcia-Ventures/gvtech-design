import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Text as RNText } from 'react-native';

import type { TextBaseProps } from '@gv-tech/ui-core';
import { cn } from './lib/utils';

const TextClassContext = React.createContext<string | undefined>(undefined);

const textVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'text-4xl font-extrabold tracking-tight',
      h2: 'text-3xl font-semibold tracking-tight',
      h3: 'text-2xl font-semibold tracking-tight',
      h4: 'text-xl font-semibold tracking-tight',
      body: 'text-base leading-7',
      bodySmall: 'text-sm leading-6',
      caption: 'text-xs text-muted-foreground',
      label: 'text-sm font-medium',
      overline: 'text-xs font-semibold uppercase tracking-widest text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

export interface TextProps
  extends React.ComponentPropsWithoutRef<typeof RNText>, VariantProps<typeof textVariants>, TextBaseProps {}

const Text = React.forwardRef<React.ElementRef<typeof RNText>, TextProps>(
  ({ className, variant = 'body', children, ...props }, ref) => {
    return (
      <RNText ref={ref} className={cn(textVariants({ variant, className }))} {...props}>
        {children}
      </RNText>
    );
  },
);
Text.displayName = 'Text';

export { Text, TextClassContext, textVariants };
