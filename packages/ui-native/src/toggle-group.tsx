import { ToggleGroupBaseProps, ToggleGroupItemBaseProps } from '@gv-tech/ui-core';
import * as ToggleGroupPrimitive from '@rn-primitives/toggle-group';
import { type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from './lib/utils';
import { TextClassContext } from './text';
import { toggleVariants } from './toggle';

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
  size: 'default',
  variant: 'default',
});

export interface ToggleGroupProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>, 'value' | 'onValueChange' | 'type'>,
    ToggleGroupBaseProps {}

const ToggleGroup = React.forwardRef<React.ElementRef<typeof ToggleGroupPrimitive.Root>, ToggleGroupProps>(
  ({ className, variant, size, children, type, value, onValueChange, ...props }, ref) => (
    <ToggleGroupPrimitive.Root
      ref={ref}
      {...({
        type,
        value,
        onValueChange,
      } as unknown as React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Root>)}
      className={cn('flex flex-row items-center justify-center gap-1', className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  ),
);

ToggleGroup.displayName = ToggleGroupPrimitive.Root?.displayName || 'ToggleGroup';

export interface ToggleGroupItemProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>, 'children' | 'disabled'>,
    ToggleGroupItemBaseProps {}

const ToggleGroupItem = React.forwardRef<React.ElementRef<typeof ToggleGroupPrimitive.Item>, ToggleGroupItemProps>(
  ({ className, children, variant, size, value, ...props }, ref) => {
    const context = React.useContext(ToggleGroupContext);

    return (
      <TextClassContext.Provider
        value={cn(
          'text-sm native:text-base text-foreground font-medium',
          props.disabled && 'web:cursor-not-allowed opacity-50',
          value === '' && 'text-accent-foreground',
          className,
        )}
      >
        <ToggleGroupPrimitive.Item
          ref={ref}
          value={value}
          className={cn(
            toggleVariants({
              variant: context.variant || variant,
              size: context.size || size,
            }),
            className,
          )}
          {...props}
        >
          {children}
        </ToggleGroupPrimitive.Item>
      </TextClassContext.Provider>
    );
  },
);

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item?.displayName || 'ToggleGroupItem';

export { ToggleGroup, ToggleGroupItem };
