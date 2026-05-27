import type {
  DrawerBaseProps,
  DrawerCloseBaseProps,
  DrawerContentBaseProps,
  DrawerDescriptionBaseProps,
  DrawerFooterBaseProps,
  DrawerHeaderBaseProps,
  DrawerTitleBaseProps,
  DrawerTriggerBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

export const Drawer: React.FC<DrawerBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const DrawerTrigger: React.FC<DrawerTriggerBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const DrawerContent: React.FC<DrawerContentBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const DrawerHeader: React.FC<DrawerHeaderBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const DrawerFooter: React.FC<DrawerFooterBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const DrawerTitle: React.FC<DrawerTitleBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const DrawerDescription: React.FC<DrawerDescriptionBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const DrawerClose: React.FC<DrawerCloseBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const DrawerOverlay: React.FC<{ className?: string }> = ({ className }) => {
  return <View className={className} />;
};

export const DrawerPortal: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};
