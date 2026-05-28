import type {
  ContextMenuCheckboxItemBaseProps,
  ContextMenuContentBaseProps,
  ContextMenuItemBaseProps,
  ContextMenuLabelBaseProps,
  ContextMenuRadioItemBaseProps,
  ContextMenuSeparatorBaseProps,
  ContextMenuShortcutBaseProps,
  ContextMenuSubContentBaseProps,
  ContextMenuSubTriggerBaseProps,
} from '@gv-tech/ui-core';
import * as ContextMenuPrimitive from '@rn-primitives/context-menu';
import { Check, ChevronRight, Circle } from 'lucide-react-native';
import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { wrapTextChildren } from './lib/render-native';
import { cn } from './lib/utils';
import { Text } from './text';

export const ContextMenu = ContextMenuPrimitive.Root;

export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

export const ContextMenuPortal = ContextMenuPrimitive.Portal;

export const ContextMenuGroup = ContextMenuPrimitive.Group;

export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

export const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuOverlay = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  return (
    <ContextMenuPrimitive.Overlay
      style={Platform.OS !== 'web' ? StyleSheet.absoluteFill : undefined}
      ref={ref}
      {...props}
    >
      <Animated.View
        entering={FadeIn.duration(100)}
        exiting={FadeOut.duration(100)}
        className={cn('absolute inset-0 z-50 bg-black/30', className)}
      />
    </ContextMenuPrimitive.Overlay>
  );
});
ContextMenuOverlay.displayName = 'ContextMenuOverlay';

export const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  ContextMenuContentBaseProps
>(({ className, children, ...props }, ref) => {
  return (
    <ContextMenuPortal>
      <ContextMenuOverlay />
      <ContextMenuPrimitive.Content
        ref={ref}
        className={cn(
          'bg-popover border-border z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md',
          className,
        )}
        {...props}
      >
        {children}
      </ContextMenuPrimitive.Content>
    </ContextMenuPortal>
  );
});
ContextMenuContent.displayName = 'ContextMenuContent';

export const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  ContextMenuItemBaseProps
>(({ className, children, inset, ...props }, ref) => {
  return (
    <ContextMenuPrimitive.Item
      ref={ref}
      className={cn(
        'focus:bg-accent focus:text-accent-foreground active:bg-accent active:text-accent-foreground relative flex flex-row items-center rounded-sm px-2 py-1.5 text-sm outline-none',
        inset && 'pl-8',
        className,
      )}
      {...props}
    >
      {wrapTextChildren(children, Text)}
    </ContextMenuPrimitive.Item>
  );
});
ContextMenuItem.displayName = 'ContextMenuItem';

export const ContextMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
  ContextMenuCheckboxItemBaseProps
>(({ className, children, checked, onCheckedChange, ...props }, ref) => {
  return (
    <ContextMenuPrimitive.CheckboxItem
      ref={ref}
      checked={!!checked}
      onCheckedChange={onCheckedChange || (() => {})}
      className={cn(
        'focus:bg-accent focus:text-accent-foreground active:bg-accent active:text-accent-foreground relative flex flex-row items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none',
        className,
      )}
      {...props}
    >
      <View className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Check size={14} className="text-foreground" />
        </ContextMenuPrimitive.ItemIndicator>
      </View>
      {wrapTextChildren(children, Text)}
    </ContextMenuPrimitive.CheckboxItem>
  );
});
ContextMenuCheckboxItem.displayName = 'ContextMenuCheckboxItem';

export const ContextMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
  ContextMenuRadioItemBaseProps
>(({ className, children, value, ...props }, ref) => {
  return (
    <ContextMenuPrimitive.RadioItem
      ref={ref}
      value={value}
      className={cn(
        'focus:bg-accent focus:text-accent-foreground active:bg-accent active:text-accent-foreground relative flex flex-row items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none',
        className,
      )}
      {...props}
    >
      <View className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <Circle size={8} className="text-foreground fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </View>
      {wrapTextChildren(children, Text)}
    </ContextMenuPrimitive.RadioItem>
  );
});
ContextMenuRadioItem.displayName = 'ContextMenuRadioItem';

export const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  ContextMenuLabelBaseProps
>(({ className, children, inset, ...props }, ref) => {
  return (
    <ContextMenuPrimitive.Label
      ref={ref}
      className={cn('text-foreground px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
      {...props}
    >
      {wrapTextChildren(children, Text)}
    </ContextMenuPrimitive.Label>
  );
});
ContextMenuLabel.displayName = 'ContextMenuLabel';

export const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  ContextMenuSeparatorBaseProps
>(({ className, ...props }, ref) => {
  return <ContextMenuPrimitive.Separator ref={ref} className={cn('bg-border -mx-1 my-1 h-px', className)} {...props} />;
});
ContextMenuSeparator.displayName = 'ContextMenuSeparator';

export const ContextMenuShortcut = ({ className, children, ...props }: ContextMenuShortcutBaseProps) => {
  return (
    <Text className={cn('text-muted-foreground ml-auto text-xs tracking-widest', className)} {...props}>
      {children}
    </Text>
  );
};
ContextMenuShortcut.displayName = 'ContextMenuShortcut';

export const ContextMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
  ContextMenuSubTriggerBaseProps
>(({ className, children, inset, ...props }, ref) => {
  return (
    <ContextMenuPrimitive.SubTrigger
      ref={ref}
      className={cn(
        'focus:bg-accent focus:text-accent-foreground active:bg-accent active:text-accent-foreground flex flex-row items-center rounded-sm px-2 py-1.5 text-sm outline-none',
        inset && 'pl-8',
        className,
      )}
      {...props}
    >
      <View className="flex flex-row items-center gap-1.5">{wrapTextChildren(children, Text)}</View>
      <ChevronRight size={14} className="text-foreground ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  );
});
ContextMenuSubTrigger.displayName = 'ContextMenuSubTrigger';

export const ContextMenuSubContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
  ContextMenuSubContentBaseProps
>(({ className, children, ...props }, ref) => {
  return (
    <ContextMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        'bg-popover border-border z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md',
        className,
      )}
      {...props}
    >
      {children}
    </ContextMenuPrimitive.SubContent>
  );
});
ContextMenuSubContent.displayName = 'ContextMenuSubContent';
