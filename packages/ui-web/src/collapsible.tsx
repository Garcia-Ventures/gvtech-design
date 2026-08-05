'use client';

import { Collapsible as CollapsiblePrimitive } from 'radix-ui';

import type { CollapsibleBaseProps } from '@gv-tech/ui-core';

function Collapsible({ ...props }: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger({ ...props }: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return <CollapsiblePrimitive.CollapsibleTrigger data-slot="collapsible-trigger" {...props} />;
}

function CollapsibleContent({ ...props }: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return <CollapsiblePrimitive.CollapsibleContent data-slot="collapsible-content" {...props} />;
}

export { Collapsible, CollapsibleContent, CollapsibleTrigger };

// Verify that the component satisfies the ui-core contract
export type ___verifyCollapsibleContract =
  React.ComponentProps<typeof Collapsible> extends CollapsibleBaseProps ? true : false;
