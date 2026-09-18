import * as React from 'react';

export type DirectionType = 'ltr' | 'rtl';

export interface DirectionProviderBaseProps {
  children?: React.ReactNode;
  dir?: DirectionType;
  direction?: DirectionType;
}
