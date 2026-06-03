import * as React from 'react';

export interface SidebarProviderBaseProps {
  className?: string;
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

export interface SidebarBaseProps {
  className?: string;
  side?: 'left' | 'right';
  variant?: 'sidebar' | 'floating' | 'inset';
  collapsible?: 'offcanvas' | 'icon' | 'none';
  children?: React.ReactNode;
}

export interface SidebarTriggerBaseProps {
  className?: string;
}

export interface SidebarRailBaseProps {
  className?: string;
}

export interface SidebarInsetBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarInputBaseProps {
  className?: string;
}

export interface SidebarHeaderBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarFooterBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarSeparatorBaseProps {
  className?: string;
}

export interface SidebarContentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarGroupBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarGroupLabelBaseProps {
  className?: string;
  asChild?: boolean;
  children?: React.ReactNode;
}

export interface SidebarGroupActionBaseProps {
  className?: string;
  asChild?: boolean;
  children?: React.ReactNode;
}

export interface SidebarGroupContentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarMenuBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarMenuItemBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarMenuButtonBaseProps {
  className?: string;
  asChild?: boolean;
  isActive?: boolean;
  variant?: 'default' | 'outline' | null;
  size?: 'default' | 'sm' | 'lg' | null;
  tooltip?: string | any;
  children?: React.ReactNode;
}

export interface SidebarMenuActionBaseProps {
  className?: string;
  asChild?: boolean;
  showOnHover?: boolean;
  children?: React.ReactNode;
}

export interface SidebarMenuBadgeBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarMenuSkeletonBaseProps {
  className?: string;
  showIcon?: boolean;
}

export interface SidebarMenuSubBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarMenuSubItemBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SidebarMenuSubButtonBaseProps {
  className?: string;
  asChild?: boolean;
  size?: 'sm' | 'md';
  isActive?: boolean;
  children?: React.ReactNode;
}
