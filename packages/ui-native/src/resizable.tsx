import type { ResizableHandleBaseProps, ResizablePanelBaseProps, ResizablePanelGroupBaseProps } from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

export const ResizablePanelGroup: React.FC<ResizablePanelGroupBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const ResizablePanel: React.FC<ResizablePanelBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const ResizableHandle: React.FC<ResizableHandleBaseProps> = ({ className }) => {
  return <View className={className} />;
};
