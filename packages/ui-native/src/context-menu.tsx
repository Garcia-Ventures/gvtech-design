import type {
  ContextMenuBaseProps,
  ContextMenuCheckboxItemBaseProps,
  ContextMenuContentBaseProps,
  ContextMenuGroupBaseProps,
  ContextMenuItemBaseProps,
  ContextMenuLabelBaseProps,
  ContextMenuRadioGroupBaseProps,
  ContextMenuRadioItemBaseProps,
  ContextMenuSeparatorBaseProps,
  ContextMenuShortcutBaseProps,
  ContextMenuSubBaseProps,
  ContextMenuSubContentBaseProps,
  ContextMenuSubTriggerBaseProps,
  ContextMenuTriggerBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

export const ContextMenu: React.FC<ContextMenuBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const ContextMenuTrigger: React.FC<ContextMenuTriggerBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const ContextMenuContent: React.FC<ContextMenuContentBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const ContextMenuItem: React.FC<ContextMenuItemBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const ContextMenuCheckboxItem: React.FC<ContextMenuCheckboxItemBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const ContextMenuRadioItem: React.FC<ContextMenuRadioItemBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const ContextMenuLabel: React.FC<ContextMenuLabelBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const ContextMenuSeparator: React.FC<ContextMenuSeparatorBaseProps> = ({ className }) => {
  return <View className={className} />;
};

export const ContextMenuShortcut: React.FC<ContextMenuShortcutBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const ContextMenuSub: React.FC<ContextMenuSubBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const ContextMenuSubTrigger: React.FC<ContextMenuSubTriggerBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const ContextMenuSubContent: React.FC<ContextMenuSubContentBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const ContextMenuGroup: React.FC<ContextMenuGroupBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const ContextMenuRadioGroup: React.FC<ContextMenuRadioGroupBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const ContextMenuPortal: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};
