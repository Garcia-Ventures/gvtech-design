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
        'h-10 inline-flex flex-row items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
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
            'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
            props.disabled && 'opacity-50',
            value === props.value && 'bg-background shadow-sm shadow-foreground/10',
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
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    />
  ),
);
TabsContent.displayName = TabsPrimitive.Content?.displayName || 'TabsContent';

export { Tabs, TabsContent, TabsList, TabsTrigger };
