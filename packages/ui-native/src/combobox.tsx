import type {
  ComboboxChipBaseProps,
  ComboboxChipsBaseProps,
  ComboboxChipsInputBaseProps,
  ComboboxClearBaseProps,
  ComboboxCollectionBaseProps,
  ComboboxContentBaseProps,
  ComboboxEmptyBaseProps,
  ComboboxGroupBaseProps,
  ComboboxInputBaseProps,
  ComboboxItemBaseProps,
  ComboboxLabelBaseProps,
  ComboboxListBaseProps,
  ComboboxSeparatorBaseProps,
  ComboboxTriggerBaseProps,
  ComboboxValueBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { Text, View } from 'react-native';
import { cn } from './lib/utils';

function Combobox({ className, ...props }: React.ComponentProps<typeof View>) {
  return (
    <View className={cn('border-destructive/50 rounded-md border border-dashed p-4', className)} {...props}>
      <Text className="text-destructive font-mono text-xs">Combobox (Not Implemented)</Text>
    </View>
  );
}

function ComboboxValue({ className, ...props }: React.ComponentProps<typeof View> & ComboboxValueBaseProps) {
  return <View className={className} {...props} />;
}

function ComboboxTrigger({ className, ...props }: React.ComponentProps<typeof View> & ComboboxTriggerBaseProps) {
  return <View className={className} {...props} />;
}

function ComboboxClear({ className, ...props }: React.ComponentProps<typeof View> & ComboboxClearBaseProps) {
  return <View className={className} {...props} />;
}

function ComboboxInput({
  className,
  showClear,
  showTrigger,
  ...props
}: React.ComponentProps<typeof View> & ComboboxInputBaseProps) {
  return <View className={className} {...props} />;
}

function ComboboxContent({
  className,
  side,
  sideOffset,
  align,
  alignOffset,
  anchor,
  ...props
}: React.ComponentProps<typeof View> & ComboboxContentBaseProps) {
  return <View className={className} {...props} />;
}

function ComboboxList({ className, ...props }: React.ComponentProps<typeof View> & ComboboxListBaseProps) {
  return <View className={className} {...props} />;
}

function ComboboxItem({ className, ...props }: React.ComponentProps<typeof View> & ComboboxItemBaseProps) {
  return <View className={className} {...props} />;
}

function ComboboxGroup({ className, ...props }: React.ComponentProps<typeof View> & ComboboxGroupBaseProps) {
  return <View className={className} {...props} />;
}

function ComboboxLabel({ className, ...props }: React.ComponentProps<typeof View> & ComboboxLabelBaseProps) {
  return <View className={className} {...props} />;
}

function ComboboxCollection({ className, ...props }: React.ComponentProps<typeof View> & ComboboxCollectionBaseProps) {
  return <View className={className} {...props} />;
}

function ComboboxEmpty({ className, ...props }: React.ComponentProps<typeof View> & ComboboxEmptyBaseProps) {
  return <View className={className} {...props} />;
}

function ComboboxSeparator({ className, ...props }: React.ComponentProps<typeof View> & ComboboxSeparatorBaseProps) {
  return <View className={className} {...props} />;
}

function ComboboxChips({ className, ...props }: React.ComponentProps<typeof View> & ComboboxChipsBaseProps) {
  return <View className={className} {...props} />;
}

function ComboboxChip({ className, showRemove, ...props }: React.ComponentProps<typeof View> & ComboboxChipBaseProps) {
  return <View className={className} {...props} />;
}

function ComboboxChipsInput({ className, ...props }: React.ComponentProps<typeof View> & ComboboxChipsInputBaseProps) {
  return <View className={className} {...props} />;
}

function useComboboxAnchor() {
  return React.useRef(null);
}

export {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxClear,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
};
