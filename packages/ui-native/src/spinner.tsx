import type { SpinnerBaseProps } from '@gv-tech/ui-core';
import * as React from 'react';
import { ActivityIndicator } from 'react-native';

function Spinner({ className, ...props }: React.ComponentProps<typeof ActivityIndicator> & SpinnerBaseProps) {
  return <ActivityIndicator size="small" {...props} />;
}

export { Spinner };
