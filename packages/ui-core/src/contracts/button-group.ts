import * as React from 'react';

export const buttonGroupOrientationValues = ['horizontal', 'vertical'] as const;
export type ButtonGroupOrientation = (typeof buttonGroupOrientationValues)[number];

export interface ButtonGroupBaseProps {
  className?: string;
  children?: React.ReactNode;
  orientation?: ButtonGroupOrientation;
}

export interface ButtonGroupTextBaseProps {
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}

export interface ButtonGroupSeparatorBaseProps {
  className?: string;
  orientation?: ButtonGroupOrientation;
}
