'use client';

import type { DirectionProviderBaseProps } from '@gv-tech/ui-core';
import { Direction } from 'radix-ui';
import * as React from 'react';

function DirectionProvider({
  dir,
  direction,
  children,
}: React.ComponentProps<typeof Direction.DirectionProvider> & DirectionProviderBaseProps) {
  return <Direction.DirectionProvider dir={direction ?? dir}>{children}</Direction.DirectionProvider>;
}

const useDirection = Direction.useDirection;

export { DirectionProvider, useDirection };
