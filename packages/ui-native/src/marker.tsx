import type { MarkerBaseProps, MarkerContentBaseProps, MarkerIconBaseProps } from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

// Web-first stub: structure-only passthrough until the full native
// implementation lands. See docs/reference/parity-matrix.md.
export const Marker: React.FC<MarkerBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MarkerIcon: React.FC<MarkerIconBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MarkerContent: React.FC<MarkerContentBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};
