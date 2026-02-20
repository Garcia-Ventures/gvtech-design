import * as React from 'react';

export interface AlertBaseProps {
  variant?: 'default' | 'destructive' | 'warning' | 'info';
  className?: string;
  children?: React.ReactNode;
}

export interface AlertTitleBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AlertDescriptionBaseProps {
  className?: string;
  children?: React.ReactNode;
}
