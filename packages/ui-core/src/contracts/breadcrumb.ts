import * as React from 'react';

export interface BreadcrumbBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface BreadcrumbListBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface BreadcrumbItemBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface BreadcrumbLinkBaseProps {
  className?: string;
  children?: React.ReactNode;
  asChild?: boolean;
}

export interface BreadcrumbPageBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface BreadcrumbSeparatorBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface BreadcrumbEllipsisBaseProps {
  className?: string;
  children?: React.ReactNode;
}
