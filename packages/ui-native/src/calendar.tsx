import type { CalendarBaseProps } from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

export const Calendar: React.FC<CalendarBaseProps> = ({ className }) => {
  return <View className={className} />;
};
