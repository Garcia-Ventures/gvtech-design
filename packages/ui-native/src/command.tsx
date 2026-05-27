import type {
  CommandBaseProps,
  CommandEmptyBaseProps,
  CommandGroupBaseProps,
  CommandInputBaseProps,
  CommandItemBaseProps,
  CommandListBaseProps,
  CommandSeparatorBaseProps,
  CommandShortcutBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

export const Command: React.FC<CommandBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const CommandDialog: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

export const CommandInput: React.FC<CommandInputBaseProps> = ({ className }) => {
  return <View className={className} />;
};

export const CommandList: React.FC<CommandListBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const CommandEmpty: React.FC<CommandEmptyBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const CommandGroup: React.FC<CommandGroupBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const CommandItem: React.FC<CommandItemBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const CommandSeparator: React.FC<CommandSeparatorBaseProps> = ({ className }) => {
  return <View className={className} />;
};

export const CommandShortcut: React.FC<CommandShortcutBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};
