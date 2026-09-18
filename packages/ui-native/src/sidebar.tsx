import type {
  SidebarBaseProps,
  SidebarContentBaseProps,
  SidebarFooterBaseProps,
  SidebarGroupActionBaseProps,
  SidebarGroupBaseProps,
  SidebarGroupContentBaseProps,
  SidebarGroupLabelBaseProps,
  SidebarHeaderBaseProps,
  SidebarInputBaseProps,
  SidebarInsetBaseProps,
  SidebarMenuActionBaseProps,
  SidebarMenuBadgeBaseProps,
  SidebarMenuBaseProps,
  SidebarMenuButtonBaseProps,
  SidebarMenuItemBaseProps,
  SidebarMenuSkeletonBaseProps,
  SidebarMenuSubBaseProps,
  SidebarMenuSubButtonBaseProps,
  SidebarMenuSubItemBaseProps,
  SidebarProviderBaseProps,
  SidebarRailBaseProps,
  SidebarSeparatorBaseProps,
  SidebarTriggerBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { Pressable, Text, View } from 'react-native';
import { cn } from './lib/utils';

function SidebarProvider({
  className,
  defaultOpen,
  open,
  onOpenChange,
  ...props
}: React.ComponentProps<typeof View> & SidebarProviderBaseProps) {
  return <View className={className} {...props} />;
}

function Sidebar({
  className,
  side,
  variant,
  collapsible,
  ...props
}: React.ComponentProps<typeof View> & SidebarBaseProps) {
  return (
    <View className={cn('border-destructive/50 rounded-md border border-dashed p-4', className)} {...props}>
      <Text className="text-destructive font-mono text-xs">Sidebar (Not Implemented)</Text>
    </View>
  );
}

function SidebarTrigger({ className, ...props }: React.ComponentProps<typeof Pressable> & SidebarTriggerBaseProps) {
  return <Pressable className={className} {...(props as Record<string, unknown>)} />;
}

function SidebarRail({ className, ...props }: React.ComponentProps<typeof View> & SidebarRailBaseProps) {
  return <View className={className} {...props} />;
}

function SidebarInset({ className, ...props }: React.ComponentProps<typeof View> & SidebarInsetBaseProps) {
  return <View className={className} {...props} />;
}

function SidebarInput({ className, ...props }: React.ComponentProps<typeof View> & SidebarInputBaseProps) {
  return <View className={className} {...props} />;
}

function SidebarHeader({ className, ...props }: React.ComponentProps<typeof View> & SidebarHeaderBaseProps) {
  return <View className={className} {...props} />;
}

function SidebarFooter({ className, ...props }: React.ComponentProps<typeof View> & SidebarFooterBaseProps) {
  return <View className={className} {...props} />;
}

function SidebarSeparator({ className, ...props }: React.ComponentProps<typeof View> & SidebarSeparatorBaseProps) {
  return <View className={className} {...props} />;
}

function SidebarContent({ className, ...props }: React.ComponentProps<typeof View> & SidebarContentBaseProps) {
  return <View className={className} {...props} />;
}

function SidebarGroup({ className, ...props }: React.ComponentProps<typeof View> & SidebarGroupBaseProps) {
  return <View className={className} {...props} />;
}

function SidebarGroupLabel({
  className,
  asChild,
  ...props
}: React.ComponentProps<typeof View> & SidebarGroupLabelBaseProps) {
  return <View className={className} {...props} />;
}

function SidebarGroupAction({
  className,
  asChild,
  ...props
}: React.ComponentProps<typeof Pressable> & SidebarGroupActionBaseProps) {
  return <Pressable className={className} {...(props as Record<string, unknown>)} />;
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<typeof View> & SidebarGroupContentBaseProps) {
  return <View className={className} {...props} />;
}

function SidebarMenu({ className, ...props }: React.ComponentProps<typeof View> & SidebarMenuBaseProps) {
  return <View className={className} {...props} />;
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<typeof View> & SidebarMenuItemBaseProps) {
  return <View className={className} {...props} />;
}

function SidebarMenuButton({
  className,
  asChild,
  isActive,
  variant,
  size,
  tooltip,
  ...props
}: React.ComponentProps<typeof Pressable> & SidebarMenuButtonBaseProps) {
  return <Pressable className={className} {...(props as Record<string, unknown>)} />;
}

function SidebarMenuAction({
  className,
  asChild,
  showOnHover,
  ...props
}: React.ComponentProps<typeof Pressable> & SidebarMenuActionBaseProps) {
  return <Pressable className={className} {...(props as Record<string, unknown>)} />;
}

function SidebarMenuBadge({ className, ...props }: React.ComponentProps<typeof View> & SidebarMenuBadgeBaseProps) {
  return <View className={className} {...props} />;
}

function SidebarMenuSkeleton({
  className,
  showIcon,
  ...props
}: React.ComponentProps<typeof View> & SidebarMenuSkeletonBaseProps) {
  return <View className={className} {...props} />;
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<typeof View> & SidebarMenuSubBaseProps) {
  return <View className={className} {...props} />;
}

function SidebarMenuSubItem({ className, ...props }: React.ComponentProps<typeof View> & SidebarMenuSubItemBaseProps) {
  return <View className={className} {...props} />;
}

function SidebarMenuSubButton({
  className,
  asChild,
  size,
  isActive,
  ...props
}: React.ComponentProps<typeof Pressable> & SidebarMenuSubButtonBaseProps) {
  return <Pressable className={className} {...(props as Record<string, unknown>)} />;
}

function useSidebar() {
  return {
    state: 'expanded',
    open: true,
    setOpen: () => {},
    openMobile: false,
    setOpenMobile: () => {},
    isMobile: false,
    toggleSidebar: () => {},
  };
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
