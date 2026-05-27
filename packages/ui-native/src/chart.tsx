import type {
  ChartContainerBaseProps,
  ChartLegendContentBaseProps,
  ChartTooltipContentBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

export const ChartContainer: React.FC<ChartContainerBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const ChartTooltipContent: React.FC<ChartTooltipContentBaseProps> = ({ className }) => {
  return <View className={className} />;
};

export const ChartLegendContent: React.FC<ChartLegendContentBaseProps> = ({ className }) => {
  return <View className={className} />;
};

export const ChartTooltip: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export const ChartLegend: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export const ChartStyle: React.FC = () => {
  return null;
};
