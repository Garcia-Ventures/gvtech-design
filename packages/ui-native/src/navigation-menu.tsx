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
import * as NavigationMenuPrimitive from '@rn-primitives/navigation-menu';
import { ChevronDown } from 'lucide-react-native';
import * as React from 'react';
import { GestureResponderEvent, View } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { cn } from './lib/utils';

export const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  NavigationMenuBaseProps
>(
  (
    { className, children, value, onValueChange, dir, orientation, delayDuration, skipDelayDuration, ...props },
    ref,
  ) => {
    return (
      <NavigationMenuPrimitive.Root
        ref={ref}
        value={value}
        onValueChange={onValueChange ? (val) => onValueChange(val || '') : () => {}}
        delayDuration={delayDuration}
        skipDelayDuration={skipDelayDuration}
        className={cn('relative z-10 flex flex-row items-center justify-center', className)}
        {...props}
      >
        {children}
      </NavigationMenuPrimitive.Root>
    );
  },
);
NavigationMenu.displayName = 'NavigationMenu';

export const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  NavigationMenuListBaseProps
>(({ className, children, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.List
      ref={ref}
      className={cn('group flex flex-1 list-none flex-row items-center justify-center gap-1', className)}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.List>
  );
});
NavigationMenuList.displayName = 'NavigationMenuList';

export const NavigationMenuItem = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Item>,
  NavigationMenuItemBaseProps
>(({ className, children, value, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Item ref={ref} value={value || ''} className={cn('relative', className)} {...props}>
      {children}
    </NavigationMenuPrimitive.Item>
  );
});
NavigationMenuItem.displayName = 'NavigationMenuItem';

export const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  NavigationMenuTriggerBaseProps
>(({ className, children, disabled, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Trigger
      ref={ref}
      disabled={disabled}
      className={cn(
        'group bg-background hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground active:bg-accent active:text-accent-foreground flex flex-row items-center justify-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <>{children}</>
      <ChevronDown
        size={12}
        className="text-muted-foreground transition-transform duration-200 group-data-[state=open]:rotate-180"
      />
    </NavigationMenuPrimitive.Trigger>
  );
});
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger';

export const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  NavigationMenuContentBaseProps
>(({ className, children, forceMount, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Content ref={ref} {...props}>
        <Animated.View
          entering={FadeIn.duration(150)}
          exiting={FadeOut.duration(150)}
          className={cn('bg-popover border-border z-50 overflow-hidden rounded-md border p-4 shadow-md', className)}
        >
          {children}
        </Animated.View>
      </NavigationMenuPrimitive.Content>
    </NavigationMenuPrimitive.Portal>
  );
});
NavigationMenuContent.displayName = 'NavigationMenuContent';

export const NavigationMenuLink = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Link>,
  NavigationMenuLinkBaseProps & { onPress?: () => void }
>(({ className, children, active, onSelect, onPress, href, ...props }, ref) => {
  const handlePress = (e: GestureResponderEvent) => {
    if (onPress) {
      onPress();
    }
    if (onSelect) {
      onSelect(e as unknown as Event);
    }
  };

  return (
    <NavigationMenuPrimitive.Link
      ref={ref}
      active={active}
      onPress={handlePress}
      className={cn(
        'hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground rounded-md px-3 py-2 text-sm font-medium transition-colors',
        active && 'bg-accent text-accent-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </NavigationMenuPrimitive.Link>
  );
});
NavigationMenuLink.displayName = 'NavigationMenuLink';

export const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  NavigationMenuViewportBaseProps
>(({ className, forceMount, ...props }, ref) => {
  return (
    <View className="absolute top-full left-0 flex justify-center">
      <NavigationMenuPrimitive.Viewport
        ref={ref}
        className={cn(
          'origin-top-center bg-popover text-popover-foreground border-border relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow-lg md:w-[var(--radix-navigation-menu-viewport-width)]',
          className,
        )}
        {...props}
      />
    </View>
  );
});
NavigationMenuViewport.displayName = 'NavigationMenuViewport';

export const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  NavigationMenuIndicatorBaseProps
>(({ className, forceMount, ...props }, ref) => {
  return (
    <NavigationMenuPrimitive.Indicator
      ref={ref}
      className={cn('z-10 flex h-1.5 items-end justify-center overflow-hidden transition-all duration-200', className)}
      {...props}
    >
      <View className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  );
});
NavigationMenuIndicator.displayName = 'NavigationMenuIndicator';
