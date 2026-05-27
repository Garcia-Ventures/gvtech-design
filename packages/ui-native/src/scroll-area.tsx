import type { ScrollAreaBaseProps, ScrollBarBaseProps } from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

export const ScrollArea: React.FC<ScrollAreaBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const ScrollBar: React.FC<ScrollBarBaseProps> = ({ className }) => {
  return <View className={className} />;
};
