import type {
  BreadcrumbBaseProps,
  BreadcrumbEllipsisBaseProps,
  BreadcrumbItemBaseProps,
  BreadcrumbLinkBaseProps,
  BreadcrumbListBaseProps,
  BreadcrumbPageBaseProps,
  BreadcrumbSeparatorBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

export const Breadcrumb: React.FC<BreadcrumbBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const BreadcrumbList: React.FC<BreadcrumbListBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const BreadcrumbItem: React.FC<BreadcrumbItemBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const BreadcrumbLink: React.FC<BreadcrumbLinkBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const BreadcrumbPage: React.FC<BreadcrumbPageBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const BreadcrumbSeparator: React.FC<BreadcrumbSeparatorBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const BreadcrumbEllipsis: React.FC<BreadcrumbEllipsisBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};
