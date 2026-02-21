import { TabsBaseProps, TabsContentBaseProps, TabsListBaseProps, TabsTriggerBaseProps } from '@gv-tech/ui-core';
import * as TabsPrimitive from '@rn-primitives/tabs';
import * as React from 'react';

import { cn } from './lib/utils';
import { TextClassContext } from './text';

const Tabs = TabsPrimitive.Root;

export interface TabsProps
  extends Omit<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>, 'onValueChange' | 'value'>, TabsBaseProps {}
export interface TabsListProps extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>, TabsListBaseProps {}
export interface TabsTriggerProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>, 'children' | 'disabled'>,
    TabsTriggerBaseProps {}
export interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>, TabsContentBaseProps {}

const TabsList = React.forwardRef<React.ElementRef<typeof TabsPrimitive.List>, TabsListProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        'bg-muted text-muted-foreground inline-flex h-10 flex-row items-center justify-center rounded-md p-1',
        className,
      )}
      {...props}
    />
  ),
);
TabsList.displayName = TabsPrimitive.List?.displayName || 'TabsList';

const TabsTrigger = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Trigger>, TabsTriggerProps>(
  ({ className, ...props }, ref) => {
    const { value } = TabsPrimitive.useRootContext();
    return (
      <TextClassContext.Provider
        value={cn(
          'text-sm native:text-base font-medium text-muted-foreground web:transition-all',
          value === props.value && 'text-foreground',
        )}
      >
        <TabsPrimitive.Trigger
          ref={ref}
          className={cn(
            'ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
            props.disabled && 'opacity-50',
            value === props.value && 'bg-background shadow-foreground/10 shadow-sm',
            className,
          )}
          {...props}
        />
      </TextClassContext.Provider>
    );
  },
);
TabsTrigger.displayName = TabsPrimitive.Trigger?.displayName || 'TabsTrigger';

const TabsContent = React.forwardRef<React.ElementRef<typeof TabsPrimitive.Content>, TabsContentProps>(
  ({ className, ...props }, ref) => (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(
        'ring-offset-background focus-visible:ring-ring mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
        className,
      )}
      {...props}
    />
  ),
);
TabsContent.displayName = TabsPrimitive.Content?.displayName || 'TabsContent';

export { Tabs, TabsContent, TabsList, TabsTrigger };
