import type {
  ItemActionsBaseProps,
  ItemBaseProps,
  ItemContentBaseProps,
  ItemDescriptionBaseProps,
  ItemFooterBaseProps,
  ItemGroupBaseProps,
  ItemHeaderBaseProps,
  ItemMediaBaseProps,
  ItemSeparatorBaseProps,
  ItemTitleBaseProps,
} from '@gv-tech/ui-core';
import { View } from 'react-native';
import { cn } from './lib/utils';
import { Text } from './text';

function Item({ className, variant, size, ...props }: React.ComponentProps<typeof View> & ItemBaseProps) {
  return (
    <View className={cn('flex flex-row flex-wrap items-center gap-2 rounded-lg border p-3', className)} {...props} />
  );
}

function ItemActions({ className, ...props }: React.ComponentProps<typeof View> & ItemActionsBaseProps) {
  return <View className={cn('flex flex-row items-center gap-2', className)} {...props} />;
}

function ItemContent({ className, ...props }: React.ComponentProps<typeof View> & ItemContentBaseProps) {
  return <View className={cn('flex flex-1 flex-col gap-1', className)} {...props} />;
}

function ItemDescription({ className, ...props }: React.ComponentProps<typeof Text> & ItemDescriptionBaseProps) {
  return <Text variant="bodySmall" className={cn('text-muted-foreground', className)} {...props} />;
}

function ItemFooter({ className, ...props }: React.ComponentProps<typeof View> & ItemFooterBaseProps) {
  return <View className={cn('flex w-full flex-row items-center justify-between gap-2', className)} {...props} />;
}

function ItemGroup({ className, ...props }: React.ComponentProps<typeof View> & ItemGroupBaseProps) {
  return <View className={cn('flex flex-col gap-4', className)} {...props} />;
}

function ItemHeader({ className, ...props }: React.ComponentProps<typeof View> & ItemHeaderBaseProps) {
  return <View className={cn('flex w-full flex-row items-center justify-between gap-2', className)} {...props} />;
}

function ItemMedia({ className, variant, ...props }: React.ComponentProps<typeof View> & ItemMediaBaseProps) {
  return <View className={cn('flex shrink-0 items-center justify-center gap-2', className)} {...props} />;
}

function ItemSeparator({
  className,
  orientation,
  ...props
}: React.ComponentProps<typeof View> & ItemSeparatorBaseProps) {
  return <View className={cn('bg-border my-2 h-px w-full', className)} {...props} />;
}

function ItemTitle({ className, ...props }: React.ComponentProps<typeof Text> & ItemTitleBaseProps) {
  return <Text variant="bodySmall" className={cn('font-medium', className)} {...props} />;
}

export {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
};
