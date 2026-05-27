import type { SliderBaseProps } from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

export const Slider: React.FC<SliderBaseProps> = ({ className }) => {
  return <View className={className} />;
};
