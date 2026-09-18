import type {
  BubbleBaseProps,
  BubbleContentBaseProps,
  BubbleGroupBaseProps,
  BubbleReactionsBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

// Web-first stub: structure-only passthrough until the full native
// chat implementation lands. See docs/reference/parity-matrix.md.
export const BubbleGroup: React.FC<BubbleGroupBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const Bubble: React.FC<BubbleBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const BubbleContent: React.FC<BubbleContentBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const BubbleReactions: React.FC<BubbleReactionsBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};
