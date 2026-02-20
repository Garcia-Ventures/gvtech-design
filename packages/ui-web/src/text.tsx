import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import type { TextBaseProps } from '@gv-tech/ui-core';
import { cn } from './lib/utils';

const textVariants = cva('', {
  variants: {
    variant: {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      body: 'leading-7',
      bodySmall: 'text-sm leading-6',
      caption: 'text-xs text-muted-foreground',
      label: 'text-sm font-medium leading-none',
      overline: 'text-xs font-semibold uppercase tracking-widest text-muted-foreground',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

// Map variant to the most semantic HTML element
const variantElementMap: Record<string, keyof React.JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  bodySmall: 'p',
  caption: 'span',
  label: 'label',
  overline: 'span',
};

export interface TextProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants>, TextBaseProps {
  as?: keyof React.JSX.IntrinsicElements;
}

const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ className, variant = 'body', as, children, ...props }, ref) => {
    const Comp = (as || variantElementMap[variant ?? 'body'] || 'p') as React.ElementType;
    return (
      <Comp ref={ref} className={cn(textVariants({ variant, className }))} {...props}>
        {children}
      </Comp>
    );
  },
);
Text.displayName = 'Text';

export { Text, textVariants };
