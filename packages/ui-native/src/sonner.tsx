import type { SonnerBaseProps } from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

export const Toaster: React.FC<SonnerBaseProps> = ({ className }) => {
  return <View className={className} />;
};
