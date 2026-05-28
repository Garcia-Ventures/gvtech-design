import type { ToasterBaseProps } from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';
import { useToast } from './hooks/use-toast';
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle } from './toast';

export const Toaster: React.FC<ToasterBaseProps> = () => {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      <View className="pointer-events-none absolute right-6 bottom-6 left-6 z-50 flex flex-col gap-2">
        {toasts.map(({ id, title, description, action, ...props }) => (
          <Toast key={id} {...props} className="pointer-events-auto">
            <View className="flex flex-1 flex-col gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </View>
            {action}
            <ToastClose />
          </Toast>
        ))}
      </View>
    </ToastProvider>
  );
};

export default Toaster;
