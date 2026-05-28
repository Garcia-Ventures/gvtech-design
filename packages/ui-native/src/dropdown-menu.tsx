import type {
  DropdownMenuCheckboxItemBaseProps,
  DropdownMenuContentBaseProps,
  DropdownMenuItemBaseProps,
  DropdownMenuLabelBaseProps,
  DropdownMenuRadioItemBaseProps,
  DropdownMenuSeparatorBaseProps,
  DropdownMenuShortcutBaseProps,
  DropdownMenuSubContentBaseProps,
  DropdownMenuSubTriggerBaseProps,
} from '@gv-tech/ui-core';
import * as DropdownMenuPrimitive from '@rn-primitives/dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react-native';
import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { wrapTextChildren } from './lib/render-native';
import { cn } from './lib/utils';
import { Text } from './text';

export const DropdownMenu = DropdownMenuPrimitive.Root;

export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

export const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

export const DropdownMenuGroup = DropdownMenuPrimitive.Group;

export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

export const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuOverlay = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Overlay
      style={Platform.OS !== 'web' ? StyleSheet.absoluteFill : undefined}
      ref={ref}
      {...props}
    >
      <Animated.View
        entering={FadeIn.duration(100)}
        exiting={FadeOut.duration(100)}
        className={cn('absolute inset-0 z-50 bg-black/30', className)}
      />
    </DropdownMenuPrimitive.Overlay>
  );
});
DropdownMenuOverlay.displayName = 'DropdownMenuOverlay';

export const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  DropdownMenuContentBaseProps
>(({ className, children, side, ...props }, ref) => {
  const nativeSide = side === 'left' || side === 'right' ? 'bottom' : side;
  return (
    <DropdownMenuPortal>
      <DropdownMenuOverlay />
      <DropdownMenuPrimitive.Content
        ref={ref}
        side={nativeSide}
        className={cn(
          'bg-popover border-border z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md',
          className,
        )}
        {...props}
      >
        {children}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPortal>
  );
});
DropdownMenuContent.displayName = 'DropdownMenuContent';

export const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  DropdownMenuItemBaseProps
>(({ className, children, inset, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Item
      ref={ref}
      className={cn(
        'focus:bg-accent focus:text-accent-foreground active:bg-accent active:text-accent-foreground relative flex flex-row items-center rounded-sm px-2 py-1.5 text-sm outline-none',
        inset && 'pl-8',
        className,
      )}
      {...props}
    >
      {wrapTextChildren(children, Text)}
    </DropdownMenuPrimitive.Item>
  );
});
DropdownMenuItem.displayName = 'DropdownMenuItem';

export const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  DropdownMenuCheckboxItemBaseProps
>(({ className, children, checked, onCheckedChange, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.CheckboxItem
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
        <DropdownMenuPrimitive.ItemIndicator>
          <Check size={14} className="text-foreground" />
        </DropdownMenuPrimitive.ItemIndicator>
      </View>
      {wrapTextChildren(children, Text)}
    </DropdownMenuPrimitive.CheckboxItem>
  );
});
DropdownMenuCheckboxItem.displayName = 'DropdownMenuCheckboxItem';

export const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  DropdownMenuRadioItemBaseProps
>(({ className, children, value, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.RadioItem
      ref={ref}
      value={value}
      className={cn(
        'focus:bg-accent focus:text-accent-foreground active:bg-accent active:text-accent-foreground relative flex flex-row items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none',
        className,
      )}
      {...props}
    >
      <View className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle size={8} className="text-foreground fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </View>
      {wrapTextChildren(children, Text)}
    </DropdownMenuPrimitive.RadioItem>
  );
});
DropdownMenuRadioItem.displayName = 'DropdownMenuRadioItem';

export const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  DropdownMenuLabelBaseProps
>(({ className, children, inset, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Label
      ref={ref}
      className={cn('text-foreground px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
      {...props}
    >
      {wrapTextChildren(children, Text)}
    </DropdownMenuPrimitive.Label>
  );
});
DropdownMenuLabel.displayName = 'DropdownMenuLabel';

export const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  DropdownMenuSeparatorBaseProps
>(({ className, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.Separator ref={ref} className={cn('bg-border -mx-1 my-1 h-px', className)} {...props} />
  );
});
DropdownMenuSeparator.displayName = 'DropdownMenuSeparator';

export const DropdownMenuShortcut = ({ className, children, ...props }: DropdownMenuShortcutBaseProps) => {
  return (
    <Text className={cn('text-muted-foreground ml-auto text-xs tracking-widest', className)} {...props}>
      {children}
    </Text>
  );
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  DropdownMenuSubTriggerBaseProps
>(({ className, children, inset, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.SubTrigger
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
    </DropdownMenuPrimitive.SubTrigger>
  );
});
DropdownMenuSubTrigger.displayName = 'DropdownMenuSubTrigger';

export const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  DropdownMenuSubContentBaseProps
>(({ className, children, ...props }, ref) => {
  return (
    <DropdownMenuPrimitive.SubContent
      ref={ref}
      className={cn(
        'bg-popover border-border z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md',
        className,
      )}
      {...props}
    >
      {children}
    </DropdownMenuPrimitive.SubContent>
  );
});
DropdownMenuSubContent.displayName = 'DropdownMenuSubContent';
