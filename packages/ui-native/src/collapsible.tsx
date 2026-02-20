import { CollapsibleBaseProps, CollapsibleContentBaseProps, CollapsibleTriggerBaseProps } from '@gv-tech/ui-core';
import * as CollapsiblePrimitive from '@rn-primitives/collapsible';

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.Trigger;

const CollapsibleContent = CollapsiblePrimitive.Content;

export { Collapsible, CollapsibleContent, CollapsibleTrigger };
export type {
  CollapsibleContentBaseProps as CollapsibleContentProps,
  CollapsibleBaseProps as CollapsibleProps,
  CollapsibleTriggerBaseProps as CollapsibleTriggerProps,
};
