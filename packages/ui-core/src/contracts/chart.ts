import * as React from 'react';

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & ({ color?: string; theme?: never } | { color?: never; theme: Record<string, string> });
};

export interface ChartContainerBaseProps {
  config: ChartConfig;
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export interface ChartTooltipContentBaseProps {
  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: 'line' | 'dot' | 'dashed';
  nameKey?: string;
  labelKey?: string;
  className?: string;
  labelClassName?: string;
}

export interface ChartLegendContentBaseProps {
  hideIcon?: boolean;
  nameKey?: string;
  className?: string;
}
