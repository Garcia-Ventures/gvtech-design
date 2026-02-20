'use client';

import { GripVertical } from 'lucide-react';
import * as React from 'react';
import { Group, Panel, Separator } from 'react-resizable-panels';

import { ResizableHandleBaseProps, ResizablePanelBaseProps, ResizablePanelGroupBaseProps } from '@gv-tech/ui-core';
import { cn } from './lib/utils';

// Assuming newer version uses PanelGroup/PanelResizeHandle, but user code used Group/Separator.
// Let's check if PanelGroup exists, if not fallback to Group.
// Actually, I should inspect the user's code again.
// User code:
// const ResizablePanelGroup = ({ ... }: React.ComponentProps<typeof Group> ...
// const ResizableHandle = ({ ... }: React.ComponentProps<typeof Separator> ...

// It seems the user is using an older version or a specific version where Group and Separator are the exports.
// I will align with user's code.

const ResizablePanelGroup = ({
  className,
  direction,
  ...props
}: React.ComponentProps<typeof Group> & ResizablePanelGroupBaseProps) => (
  <Group
    orientation={direction}
    className={cn('flex h-full w-full data-[panel-group-direction=vertical]:flex-col', className)}
    {...props}
  />
);

const ResizablePanel = Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Separator> & ResizableHandleBaseProps) => (
  <Separator
    className={cn(
      'relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90',
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <GripVertical className="h-2.5 w-2.5" />
      </div>
    )}
  </Separator>
);

export { ResizableHandle, ResizablePanel, ResizablePanelGroup };
export type {
  ResizableHandleBaseProps as ResizableHandleProps,
  ResizablePanelGroupBaseProps as ResizablePanelGroupProps,
  ResizablePanelBaseProps as ResizablePanelProps,
};
