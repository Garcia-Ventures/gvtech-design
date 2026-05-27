import type { AspectRatioBaseProps } from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

export const AspectRatio: React.FC<AspectRatioBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};
