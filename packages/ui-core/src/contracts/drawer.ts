import * as React from 'react';

export interface DrawerBaseProps {
  children?: React.ReactNode;
  shouldScaleBackground?: boolean;
}

export interface DrawerTriggerBaseProps {
  children?:
    | React.ReactNode
    | ((state: any) /* eslint-disable-line @typescript-eslint/no-explicit-any */ => React.ReactNode);
  asChild?: boolean;
}

export interface DrawerContentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface DrawerHeaderBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface DrawerFooterBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface DrawerTitleBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface DrawerDescriptionBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface DrawerCloseBaseProps {
  children?:
    | React.ReactNode
    | ((state: any) /* eslint-disable-line @typescript-eslint/no-explicit-any */ => React.ReactNode);
  asChild?: boolean;
}
