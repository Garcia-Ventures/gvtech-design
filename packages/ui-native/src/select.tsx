import {
  SelectBaseProps,
  SelectContentBaseProps,
  SelectGroupBaseProps,
  SelectItemBaseProps,
  SelectLabelBaseProps,
  SelectScrollDownButtonBaseProps,
  SelectScrollUpButtonBaseProps,
  SelectSeparatorBaseProps,
  SelectTriggerBaseProps,
  SelectValueBaseProps,
} from '@gv-tech/ui-core';
import * as SelectPrimitive from '@rn-primitives/select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react-native';
import * as React from 'react';
import { Platform, StyleSheet, View, type ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';

import { cn } from './lib/utils';

export interface SelectProps
  extends
    Omit<
      React.ComponentPropsWithoutRef<typeof SelectPrimitive.Root>,
      'value' | 'defaultValue' | 'onValueChange' | 'disabled'
    >,
    SelectBaseProps {}

const Select = SelectPrimitive.Root;

export interface SelectGroupProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Group>, SelectGroupBaseProps {}

const SelectGroup = SelectPrimitive.Group;

export interface SelectValueProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>, 'placeholder'>, SelectValueBaseProps {}

const SelectValue = SelectPrimitive.Value;

export interface SelectTriggerProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>, 'children' | 'disabled'>,
    SelectTriggerBaseProps {}

const SelectTrigger = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Trigger>, SelectTriggerProps>(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        'native:h-12 border-input bg-background text-muted-foreground web:ring-offset-background web:focus:outline-none web:focus:ring-2 web:focus:ring-ring web:focus:ring-offset-2 flex h-10 flex-row items-center justify-between rounded-md border px-3 py-2 text-sm [&>span]:line-clamp-1',
        props.disabled && 'web:cursor-not-allowed opacity-50',
        className,
      )}
      {...props}
    >
      <>{children}</>
      <ChevronDown size={16} aria-hidden={true} className="text-foreground opacity-50" />
    </SelectPrimitive.Trigger>
  ),
);
SelectTrigger.displayName = SelectPrimitive.Trigger?.displayName || 'SelectTrigger';

export interface SelectScrollUpButtonProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>, SelectScrollUpButtonBaseProps {}

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  SelectScrollUpButtonProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    // @ts-expect-error TODO: fix type
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronUp size={14} className="text-foreground" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName =
  ((SelectPrimitive.ScrollUpButton as unknown as Record<string, unknown>)?.displayName as string | undefined) ||
  'SelectScrollUpButton';

export interface SelectScrollDownButtonProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>, SelectScrollDownButtonBaseProps {}

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  SelectScrollDownButtonProps
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    // @ts-expect-error TODO: fix type
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronDown size={14} className="text-foreground" />
  </SelectPrimitive.ScrollDownButton>
));

SelectScrollDownButton.displayName =
  ((SelectPrimitive.ScrollDownButton as unknown as Record<string, unknown>)?.displayName as string | undefined) ||
  'SelectScrollDownButton';

export interface SelectContentProps
  extends Omit<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>, 'position'>, SelectContentBaseProps {
  portalHost?: string;
  overlayClassName?: string;
  overlayStyle?: ViewStyle;
}

const SelectContent = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Content>, SelectContentProps>(
  ({ className, children, position = 'popper', portalHost, overlayClassName, overlayStyle, ...props }, ref) => {
    const { open } = SelectPrimitive.useRootContext();

    return (
      <SelectPrimitive.Portal hostName={portalHost}>
        <SelectPrimitive.Overlay style={Platform.OS !== 'web' ? StyleSheet.absoluteFill : undefined} asChild>
          <Animated.View className={overlayClassName} style={overlayStyle} />
        </SelectPrimitive.Overlay>
        <SelectPrimitive.Content
          ref={ref}
          className={cn(
            'border-border bg-popover data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] rounded-md border shadow-md',
            position === 'popper' &&
              'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
            open ? 'web:zoom-in-95 web:animate-in web:fade-in-0' : 'web:zoom-out-95 web:animate-out web:fade-out-0',
            className,
          )}
          position={position}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.Viewport
            className={cn(
              'p-1',
              position === 'popper' &&
                'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
            )}
          >
            {children}
          </SelectPrimitive.Viewport>
          <SelectScrollDownButton />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    );
  },
);
SelectContent.displayName = SelectPrimitive.Content?.displayName || 'SelectContent';

export interface SelectLabelProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>, SelectLabelBaseProps {}

const SelectLabel = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Label>, SelectLabelProps>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Label
      ref={ref}
      className={cn('text-popover-foreground py-1.5 pr-2 pl-8 text-sm font-semibold', className)}
      {...props}
    />
  ),
);
SelectLabel.displayName = SelectPrimitive.Label?.displayName || 'SelectLabel';

export interface SelectItemProps
  extends
    Omit<React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>, 'children' | 'disabled' | 'label'>,
    SelectItemBaseProps {
  label?: string;
}

const SelectItem = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Item>, SelectItemProps>(
  ({ className, children, label, ...props }, ref) => {
    const itemLabel = label || (typeof children === 'string' ? children : '');
    return (
      <SelectPrimitive.Item
        ref={ref}
        label={itemLabel}
        className={cn(
          'web:hover:bg-accent/50 web:focus:bg-accent web:focus:text-accent-foreground web:hover:text-accent-foreground relative flex w-full cursor-default flex-row items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none data-[disabled]:opacity-50',
          props.disabled && 'web:pointer-events-none',
          className,
        )}
        {...props}
      >
        <View
          className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
          {...({} as Record<string, unknown>)}
        >
          <SelectPrimitive.ItemIndicator>
            <Check size={14} strokeWidth={3} className="text-popover-foreground" {...({} as Record<string, unknown>)} />
          </SelectPrimitive.ItemIndicator>
        </View>
        {/* @ts-expect-error TODO: fix type */}
        <SelectPrimitive.ItemText className="text-popover-foreground native:text-base text-sm">
          {children}
        </SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    );
  },
);
SelectItem.displayName = SelectPrimitive.Item?.displayName || 'SelectItem';

export interface SelectSeparatorProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>, SelectSeparatorBaseProps {}

const SelectSeparator = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Separator>, SelectSeparatorProps>(
  ({ className, ...props }, ref) => (
    <SelectPrimitive.Separator
      ref={ref}
      className={cn('bg-muted -mx-1 my-1 h-px', className)}
      {...(props as Record<string, unknown>)}
    />
  ),
);
SelectSeparator.displayName = SelectPrimitive.Separator?.displayName || 'SelectSeparator';

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
