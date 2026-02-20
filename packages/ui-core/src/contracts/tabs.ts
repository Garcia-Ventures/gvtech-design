import * as React from 'react';

export interface TabsBaseProps {
  children?: React.ReactNode;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  dir?: 'ltr' | 'rtl';
  activationMode?: 'automatic' | 'manual';
}

export interface TabsListBaseProps {
  children?: React.ReactNode;
  className?: string;
  loop?: boolean;
}

export interface TabsTriggerBaseProps {
  children?: React.ReactNode;
  className?: string;
  value: string;
  disabled?: boolean;
}

export interface TabsContentBaseProps {
  children?: React.ReactNode;
  className?: string;
  value: string;
  forceMount?: true;
}
