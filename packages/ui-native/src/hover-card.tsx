import type { HoverCardBaseProps, HoverCardContentBaseProps, HoverCardTriggerBaseProps } from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

export const HoverCard: React.FC<HoverCardBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const HoverCardTrigger: React.FC<HoverCardTriggerBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const HoverCardContent: React.FC<HoverCardContentBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};
