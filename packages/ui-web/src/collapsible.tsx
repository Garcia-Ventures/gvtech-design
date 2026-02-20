import { CollapsibleBaseProps, CollapsibleContentBaseProps, CollapsibleTriggerBaseProps } from '@gv-tech/ui-core';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
export type {
  CollapsibleContentBaseProps as CollapsibleContentProps,
  CollapsibleBaseProps as CollapsibleProps,
  CollapsibleTriggerBaseProps as CollapsibleTriggerProps,
};
