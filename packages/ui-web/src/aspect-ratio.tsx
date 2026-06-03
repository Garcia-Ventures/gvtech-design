'use client';

import { AspectRatio as AspectRatioPrimitive } from 'radix-ui';

import type { AspectRatioBaseProps } from '@gv-tech/ui-core';

function AspectRatio({ ...props }: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio };

// Verify that the component satisfies the ui-core contract
const _verifyAspectRatioContract: AspectRatioBaseProps = {} as unknown as React.ComponentProps<typeof AspectRatio>;
