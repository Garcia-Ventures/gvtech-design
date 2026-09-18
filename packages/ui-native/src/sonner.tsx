import type { SonnerBaseProps } from '@gv-tech/ui-core';
import * as React from 'react';
import { ToastProvider, ToastViewport } from './toast';

export const Toaster: React.FC<SonnerBaseProps> = () => {
  return (
    <ToastProvider>
      <ToastViewport />
    </ToastProvider>
  );
};
