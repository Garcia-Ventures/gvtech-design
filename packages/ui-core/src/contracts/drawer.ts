import * as React from 'react';

export interface DrawerBaseProps {
  children?: React.ReactNode;
  shouldScaleBackground?: boolean;
}

export interface DrawerTriggerBaseProps {
  children: React.ReactNode;
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
  children?: React.ReactNode;
}
