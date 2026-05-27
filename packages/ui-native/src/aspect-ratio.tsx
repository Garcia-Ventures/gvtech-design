import type { AspectRatioBaseProps } from '@gv-tech/ui-core';
import * as AspectRatioPrimitive from '@rn-primitives/aspect-ratio';
import * as React from 'react';
import { cn } from './lib/utils';

export const AspectRatio: React.FC<AspectRatioBaseProps> = ({ children, className, ratio = 1 }) => {
  return (
    <AspectRatioPrimitive.Root ratio={ratio} className={cn('w-full', className)}>
      {children}
    </AspectRatioPrimitive.Root>
  );
};
AspectRatio.displayName = 'AspectRatio';
