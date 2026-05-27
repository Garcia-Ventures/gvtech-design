import type {
  NavigationMenuBaseProps,
  NavigationMenuContentBaseProps,
  NavigationMenuIndicatorBaseProps,
  NavigationMenuItemBaseProps,
  NavigationMenuLinkBaseProps,
  NavigationMenuListBaseProps,
  NavigationMenuTriggerBaseProps,
  NavigationMenuViewportBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

export const NavigationMenu: React.FC<NavigationMenuBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const NavigationMenuList: React.FC<NavigationMenuListBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const NavigationMenuItem: React.FC<NavigationMenuItemBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const NavigationMenuTrigger: React.FC<NavigationMenuTriggerBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const NavigationMenuContent: React.FC<NavigationMenuContentBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const NavigationMenuLink: React.FC<NavigationMenuLinkBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const NavigationMenuViewport: React.FC<NavigationMenuViewportBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const NavigationMenuIndicator: React.FC<NavigationMenuIndicatorBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};
