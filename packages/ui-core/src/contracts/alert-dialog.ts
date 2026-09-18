import * as React from 'react';

export interface AlertDialogBaseProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

export interface AlertDialogContentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AlertDialogHeaderBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AlertDialogFooterBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AlertDialogTitleBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AlertDialogDescriptionBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AlertDialogActionBaseProps {
  className?: string;
  children?:
    | React.ReactNode
    | ((state: any) /* eslint-disable-line @typescript-eslint/no-explicit-any */ => React.ReactNode);
}

export interface AlertDialogCancelBaseProps {
  className?: string;
  children?:
    | React.ReactNode
    | ((state: any) /* eslint-disable-line @typescript-eslint/no-explicit-any */ => React.ReactNode);
}

export interface AlertDialogTriggerBaseProps {
  className?: string;
  children?:
    | React.ReactNode
    | ((state: any) /* eslint-disable-line @typescript-eslint/no-explicit-any */ => React.ReactNode);
  asChild?: boolean;
}
