import type {
  PaginationBaseProps,
  PaginationContentBaseProps,
  PaginationEllipsisBaseProps,
  PaginationItemBaseProps,
  PaginationLinkBaseProps,
  PaginationNextBaseProps,
  PaginationPreviousBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

export const Pagination: React.FC<PaginationBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const PaginationContent: React.FC<PaginationContentBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const PaginationItem: React.FC<PaginationItemBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const PaginationLink: React.FC<PaginationLinkBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const PaginationEllipsis: React.FC<PaginationEllipsisBaseProps> = ({ className }) => {
  return <View className={className} />;
};

export const PaginationNext: React.FC<PaginationNextBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const PaginationPrevious: React.FC<PaginationPreviousBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};
