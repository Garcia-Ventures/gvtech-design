import * as React from 'react';

export interface FieldSetBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface FieldLegendBaseProps {
  className?: string;
  variant?: 'legend' | 'label';
  children?: React.ReactNode;
}

export interface FieldGroupBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export type FieldOrientation = 'vertical' | 'horizontal' | 'responsive';

export interface FieldBaseProps {
  className?: string;
  orientation?: FieldOrientation | null;
  children?: React.ReactNode;
}

export interface FieldContentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface FieldLabelBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface FieldTitleBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface FieldDescriptionBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface FieldSeparatorBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface FieldErrorBaseProps {
  className?: string;
  errors?: Array<{ message?: string } | undefined>;
  children?: React.ReactNode;
}
