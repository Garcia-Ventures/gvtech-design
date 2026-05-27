import type {
  DropdownMenuBaseProps,
  DropdownMenuCheckboxItemBaseProps,
  DropdownMenuContentBaseProps,
  DropdownMenuGroupBaseProps,
  DropdownMenuItemBaseProps,
  DropdownMenuLabelBaseProps,
  DropdownMenuRadioGroupBaseProps,
  DropdownMenuRadioItemBaseProps,
  DropdownMenuSeparatorBaseProps,
  DropdownMenuShortcutBaseProps,
  DropdownMenuSubBaseProps,
  DropdownMenuSubContentBaseProps,
  DropdownMenuSubTriggerBaseProps,
  DropdownMenuTriggerBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

export const DropdownMenu: React.FC<DropdownMenuBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const DropdownMenuContent: React.FC<DropdownMenuContentBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const DropdownMenuItem: React.FC<DropdownMenuItemBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const DropdownMenuCheckboxItem: React.FC<DropdownMenuCheckboxItemBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const DropdownMenuRadioItem: React.FC<DropdownMenuRadioItemBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const DropdownMenuLabel: React.FC<DropdownMenuLabelBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const DropdownMenuSeparator: React.FC<DropdownMenuSeparatorBaseProps> = ({ className }) => {
  return <View className={className} />;
};

export const DropdownMenuShortcut: React.FC<DropdownMenuShortcutBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const DropdownMenuSub: React.FC<DropdownMenuSubBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const DropdownMenuSubTrigger: React.FC<DropdownMenuSubTriggerBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const DropdownMenuSubContent: React.FC<DropdownMenuSubContentBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const DropdownMenuGroup: React.FC<DropdownMenuGroupBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const DropdownMenuRadioGroup: React.FC<DropdownMenuRadioGroupBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const DropdownMenuPortal: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};
