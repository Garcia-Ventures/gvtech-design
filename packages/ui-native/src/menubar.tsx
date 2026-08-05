import type {
  MenubarBaseProps,
  MenubarCheckboxItemBaseProps,
  MenubarContentBaseProps,
  MenubarItemBaseProps,
  MenubarLabelBaseProps,
  MenubarRadioItemBaseProps,
  MenubarSeparatorBaseProps,
  MenubarShortcutBaseProps,
  MenubarSubContentBaseProps,
  MenubarSubTriggerBaseProps,
  MenubarTriggerBaseProps,
} from '@gv-tech/ui-core';
import * as MenubarPrimitive from '@rn-primitives/menubar';
import { Check, ChevronRight, Circle } from 'lucide-react-native';
import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { wrapTextChildren } from './lib/render-native';
import { cn } from './lib/utils';
import { Text } from './text';

export const Menubar = React.forwardRef<React.ComponentRef<typeof MenubarPrimitive.Root>, MenubarBaseProps>(
  ({ className, children, value: valueProp, onValueChange: onValueChangeProp, ...props }, ref) => {
    const [localValue, setLocalValue] = React.useState<string | undefined>(valueProp || '');
    const value = valueProp !== undefined ? valueProp : localValue;
    const onValueChange = (val: string | undefined) => {
      setLocalValue(val);
      onValueChangeProp?.(val || '');
    };

    return (
      <MenubarPrimitive.Root
        ref={ref}
        value={value}
        onValueChange={onValueChange}
        className={cn(
          'bg-background border-border flex flex-row items-center space-x-1 rounded-md border p-1 shadow-sm',
          className,
        )}
        {...props}
      >
        {children}
      </MenubarPrimitive.Root>
    );
  },
);
Menubar.displayName = 'Menubar';

export const MenubarMenu = MenubarPrimitive.Menu;

export const MenubarPortal = MenubarPrimitive.Portal;

export const MenubarGroup = MenubarPrimitive.Group;

export const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

export const MenubarSub = MenubarPrimitive.Sub;

const MenubarOverlay = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  return (
    <MenubarPrimitive.Overlay style={Platform.OS !== 'web' ? StyleSheet.absoluteFill : undefined} ref={ref} {...props}>
      <Animated.View
        entering={FadeIn.duration(100)}
        exiting={FadeOut.duration(100)}
        className={cn('absolute inset-0 z-50 bg-black/30', className)}
      />
    </MenubarPrimitive.Overlay>
  );
});
MenubarOverlay.displayName = 'MenubarOverlay';

export const MenubarTrigger = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Trigger>,
  MenubarTriggerBaseProps
>(({ className, children, ...props }, ref) => {
  return (
    <MenubarPrimitive.Trigger
      ref={ref}
      className={cn(
        'focus:bg-accent focus:text-accent-foreground active:bg-accent active:text-accent-foreground flex flex-row items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none',
        className,
      )}
      {...props}
    >
      {wrapTextChildren(children as React.ReactNode, Text)}
    </MenubarPrimitive.Trigger>
  );
});
MenubarTrigger.displayName = 'MenubarTrigger';

export const MenubarContent = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Content>,
  MenubarContentBaseProps
>(({ className, children, ...props }, ref) => {
  return (
    <MenubarPortal>
      <MenubarOverlay />
      <MenubarPrimitive.Content
        ref={ref}
        className={cn(
          'bg-popover border-border z-50 min-w-[12rem] overflow-hidden rounded-md border p-1 shadow-md',
          className,
        )}
        {...props}
      >
        {children}
      </MenubarPrimitive.Content>
    </MenubarPortal>
  );
});
MenubarContent.displayName = 'MenubarContent';

export const MenubarItem = React.forwardRef<React.ComponentRef<typeof MenubarPrimitive.Item>, MenubarItemBaseProps>(
  ({ className, children, inset, ...props }, ref) => {
    return (
      <MenubarPrimitive.Item
        ref={ref}
        className={cn(
          'focus:bg-accent focus:text-accent-foreground active:bg-accent active:text-accent-foreground relative flex flex-row items-center rounded-sm px-2 py-1.5 text-sm outline-none',
          inset && 'pl-8',
          className,
        )}
        {...props}
      >
        {wrapTextChildren(children as React.ReactNode, Text)}
      </MenubarPrimitive.Item>
    );
  },
);
MenubarItem.displayName = 'MenubarItem';

export const MenubarCheckboxItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.CheckboxItem>,
  MenubarCheckboxItemBaseProps
>(({ className, children, checked, onCheckedChange, ...props }, ref) => {
  return (
    <MenubarPrimitive.CheckboxItem
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
        <MenubarPrimitive.ItemIndicator>
          <Check size={14} className="text-foreground" />
        </MenubarPrimitive.ItemIndicator>
      </View>
      {wrapTextChildren(children as React.ReactNode, Text)}
    </MenubarPrimitive.CheckboxItem>
  );
});
MenubarCheckboxItem.displayName = 'MenubarCheckboxItem';

export const MenubarRadioItem = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.RadioItem>,
  MenubarRadioItemBaseProps
>(({ className, children, value, ...props }, ref) => {
  return (
    <MenubarPrimitive.RadioItem
      ref={ref}
      value={value}
      className={cn(
        'focus:bg-accent focus:text-accent-foreground active:bg-accent active:text-accent-foreground relative flex flex-row items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none',
        className,
      )}
      {...props}
    >
      <View className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <Circle size={8} className="text-foreground fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </View>
      {wrapTextChildren(children as React.ReactNode, Text)}
    </MenubarPrimitive.RadioItem>
  );
});
MenubarRadioItem.displayName = 'MenubarRadioItem';

export const MenubarLabel = React.forwardRef<React.ComponentRef<typeof MenubarPrimitive.Label>, MenubarLabelBaseProps>(
  ({ className, children, inset, ...props }, ref) => {
    return (
      <MenubarPrimitive.Label
        ref={ref}
        className={cn('text-foreground px-2 py-1.5 text-sm font-semibold', inset && 'pl-8', className)}
        {...props}
      >
        {wrapTextChildren(children as React.ReactNode, Text)}
      </MenubarPrimitive.Label>
    );
  },
);
MenubarLabel.displayName = 'MenubarLabel';

export const MenubarSeparator = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.Separator>,
  MenubarSeparatorBaseProps
>(({ className, ...props }, ref) => {
  return <MenubarPrimitive.Separator ref={ref} className={cn('bg-border -mx-1 my-1 h-px', className)} {...props} />;
});
MenubarSeparator.displayName = 'MenubarSeparator';

export const MenubarShortcut = ({ className, children, ...props }: MenubarShortcutBaseProps) => {
  return (
    <Text className={cn('text-muted-foreground ml-auto text-xs tracking-widest', className)} {...props}>
      {children}
    </Text>
  );
};
MenubarShortcut.displayName = 'MenubarShortcut';

export const MenubarSubTrigger = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.SubTrigger>,
  MenubarSubTriggerBaseProps
>(({ className, children, inset, ...props }, ref) => {
  return (
    <MenubarPrimitive.SubTrigger
      ref={ref}
      className={cn(
        'focus:bg-accent focus:text-accent-foreground active:bg-accent active:text-accent-foreground flex flex-row items-center rounded-sm px-2 py-1.5 text-sm outline-none',
        inset && 'pl-8',
        className,
      )}
      {...props}
    >
      <View className="flex flex-row items-center gap-1.5">{wrapTextChildren(children as React.ReactNode, Text)}</View>
      <ChevronRight size={14} className="text-foreground ml-auto" />
    </MenubarPrimitive.SubTrigger>
  );
});
MenubarSubTrigger.displayName = 'MenubarSubTrigger';

export const MenubarSubContent = React.forwardRef<
  React.ComponentRef<typeof MenubarPrimitive.SubContent>,
  MenubarSubContentBaseProps
>(({ className, children, ...props }, ref) => {
  return (
    <MenubarPrimitive.SubContent
      ref={ref}
      className={cn(
        'bg-popover border-border z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-md',
        className,
      )}
      {...props}
    >
      {children}
    </MenubarPrimitive.SubContent>
  );
});
MenubarSubContent.displayName = 'MenubarSubContent';
