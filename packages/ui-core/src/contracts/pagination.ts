import * as React from 'react';
import { ButtonSize } from './button';

export interface PaginationBaseProps {
  children?: React.ReactNode;
  className?: string;
}

export interface PaginationContentBaseProps {
  children?: React.ReactNode;
  className?: string;
}

export interface PaginationItemBaseProps {
  children?: React.ReactNode;
  className?: string;
}

export interface PaginationLinkBaseProps {
  children?: React.ReactNode;
  className?: string;
  isActive?: boolean;
  size?: ButtonSize;
}

export interface PaginationEllipsisBaseProps {
  className?: string;
}

export interface PaginationNextBaseProps {
  children?: React.ReactNode;
  className?: string;
}

export interface PaginationPreviousBaseProps {
  children?: React.ReactNode;
  className?: string;
}
