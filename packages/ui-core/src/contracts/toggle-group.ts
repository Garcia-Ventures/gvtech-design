import * as React from 'react';
import { ToggleSize, ToggleVariant } from './toggle';

export interface ToggleGroupBaseProps {
  children?: React.ReactNode;
  className?: string;
  variant?: ToggleVariant;
  size?: ToggleSize;
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  value?: string | string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onValueChange?: (value: any) => void;
  disabled?: boolean;
}

export interface ToggleGroupItemBaseProps {
  children?: React.ReactNode;
  className?: string;
  value: string;
  variant?: ToggleVariant;
  size?: ToggleSize;
  disabled?: boolean;
}
