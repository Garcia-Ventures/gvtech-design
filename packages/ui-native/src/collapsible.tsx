import { CollapsibleBaseProps, CollapsibleContentBaseProps, CollapsibleTriggerBaseProps } from '@gv-tech/ui-core';
import * as CollapsiblePrimitive from '@rn-primitives/collapsible';

const Collapsible: typeof CollapsiblePrimitive.Root = CollapsiblePrimitive.Root;

const CollapsibleTrigger: typeof CollapsiblePrimitive.Trigger = CollapsiblePrimitive.Trigger;

const CollapsibleContent: typeof CollapsiblePrimitive.Content = CollapsiblePrimitive.Content;

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
export type {
  CollapsibleContentBaseProps as CollapsibleContentProps,
  CollapsibleBaseProps as CollapsibleProps,
  CollapsibleTriggerBaseProps as CollapsibleTriggerProps,
};
