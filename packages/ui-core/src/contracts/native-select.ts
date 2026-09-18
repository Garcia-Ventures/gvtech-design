import * as React from 'react';

export type NativeSelectSize = 'sm' | 'default';

export interface NativeSelectBaseProps {
  className?: string;
  size?: NativeSelectSize;
  children?: React.ReactNode;
}

export interface NativeSelectOptionBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface NativeSelectOptGroupBaseProps {
  className?: string;
  children?: React.ReactNode;
}
