import type {
  MenubarBaseProps,
  MenubarCheckboxItemBaseProps,
  MenubarContentBaseProps,
  MenubarItemBaseProps,
  MenubarLabelBaseProps,
  MenubarMenuBaseProps,
  MenubarRadioItemBaseProps,
  MenubarSeparatorBaseProps,
  MenubarShortcutBaseProps,
  MenubarSubBaseProps,
  MenubarSubContentBaseProps,
  MenubarSubTriggerBaseProps,
  MenubarTriggerBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

export const Menubar: React.FC<MenubarBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MenubarMenu: React.FC<MenubarMenuBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const MenubarTrigger: React.FC<MenubarTriggerBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MenubarContent: React.FC<MenubarContentBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MenubarItem: React.FC<MenubarItemBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MenubarCheckboxItem: React.FC<MenubarCheckboxItemBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MenubarRadioItem: React.FC<MenubarRadioItemBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MenubarLabel: React.FC<MenubarLabelBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MenubarSeparator: React.FC<MenubarSeparatorBaseProps> = ({ className }) => {
  return <View className={className} />;
};

export const MenubarShortcut: React.FC<MenubarShortcutBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MenubarSub: React.FC<MenubarSubBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const MenubarSubTrigger: React.FC<MenubarSubTriggerBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MenubarSubContent: React.FC<MenubarSubContentBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MenubarGroup: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export const MenubarRadioGroup: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export const MenubarPortal: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};
