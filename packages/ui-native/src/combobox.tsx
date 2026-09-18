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
import { Check, ChevronDown, X } from 'lucide-react-native';
import * as React from 'react';
import { Pressable, TextInput, View } from 'react-native';
import { Dialog, DialogContent, DialogTrigger } from './dialog';
import { wrapTextChildren } from './lib/render-native';
import { cn } from './lib/utils';
import { Text } from './text';

// Context to share state across compound components
const ComboboxContext = React.createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
  value: string;
  setValue: (value: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
} | null>(null);

function useCombobox() {
  const context = React.useContext(ComboboxContext);
  if (!context) {
    throw new Error('Combobox components must be rendered within a Combobox provider');
  }
  return context;
}

export interface ComboboxProps extends React.ComponentProps<typeof View> {
  value?: string;
  onValueChange?: (value: string) => void;
}

function Combobox({ className, value: controlledValue, onValueChange, ...props }: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [internalValue, setInternalValue] = React.useState(controlledValue || '');
  const [searchQuery, setSearchQuery] = React.useState('');

  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const setValue = (newValue: string) => {
    setInternalValue(newValue);
    onValueChange?.(newValue);
    setOpen(false);
  };

  return (
    <ComboboxContext.Provider value={{ open, setOpen, value, setValue, searchQuery, setSearchQuery }}>
      <Dialog open={open} onOpenChange={setOpen}>
        <View className={cn('relative', className)} {...props} />
      </Dialog>
    </ComboboxContext.Provider>
  );
}

function ComboboxValue({ className, children, ...props }: React.ComponentProps<typeof View> & ComboboxValueBaseProps) {
  const { value } = useCombobox();
  return (
    <View className={className} {...props}>
      <Text className="text-sm">{children || value || 'Select an item...'}</Text>
    </View>
  );
}

function ComboboxTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Pressable> & ComboboxTriggerBaseProps) {
  return (
    <DialogTrigger asChild>
      <Pressable
        className={cn(
          'border-input bg-background text-foreground flex h-10 w-full flex-row items-center justify-between rounded-md border px-3 py-2 text-sm',
          className,
        )}
        {...props}
      >
        <View className="flex-1 flex-row items-center">{wrapTextChildren(children, Text)}</View>
        <ChevronDown size={16} className="text-muted-foreground opacity-50" />
      </Pressable>
    </DialogTrigger>
  );
}

function ComboboxClear({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Pressable> & ComboboxClearBaseProps) {
  const { setValue } = useCombobox();
  return (
    <Pressable
      className={cn('flex items-center justify-center p-1', className)}
      onPress={() => setValue('')}
      {...props}
    >
      {children || <X size={14} className="text-muted-foreground" />}
    </Pressable>
  );
}

function ComboboxInput({
  className,
  showClear,
  showTrigger,
  placeholder = 'Search...',
  ...props
}: React.ComponentProps<typeof TextInput> & ComboboxInputBaseProps) {
  const { searchQuery, setSearchQuery } = useCombobox();
  return (
    <View className="border-border flex flex-row items-center border-b px-3">
      <TextInput
        className={cn('flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none', className)}
        placeholder={placeholder}
        placeholderTextColor="#a1a1aa"
        value={searchQuery}
        onChangeText={setSearchQuery}
        autoFocus
        {...props}
      />
    </View>
  );
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
  return (
    <DialogContent className="p-0">
      <View
        className={cn('bg-popover flex max-h-96 w-full flex-col overflow-hidden rounded-md', className)}
        {...props}
      />
    </DialogContent>
  );
}

function ComboboxList({ className, ...props }: React.ComponentProps<typeof View> & ComboboxListBaseProps) {
  return <View className={cn('max-h-[300px] overflow-hidden', className)} {...props} />;
}

export type ComboboxItemProps = React.ComponentProps<typeof Pressable> &
  ComboboxItemBaseProps & {
    value: string;
  };

function ComboboxItem({ className, children, value: itemValue, ...props }: ComboboxItemProps) {
  const { value, setValue, searchQuery } = useCombobox();

  // Basic filtering mechanism
  const textContent = React.Children.toArray(children).join('').toLowerCase();
  if (
    searchQuery &&
    !textContent.includes(searchQuery.toLowerCase()) &&
    !itemValue.toLowerCase().includes(searchQuery.toLowerCase())
  ) {
    return null;
  }

  const isSelected = value === itemValue;

  return (
    <Pressable
      className={cn(
        'active:bg-accent relative flex w-full flex-row items-center rounded-sm py-2.5 pr-8 pl-2 text-sm outline-none',
        isSelected && 'bg-accent',
        className,
      )}
      onPress={() => setValue(itemValue)}
      {...props}
    >
      <View className="flex-1">
        {wrapTextChildren(children, Text, { className: isSelected ? 'font-semibold' : '' })}
      </View>
      {isSelected && (
        <View className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
          <Check size={16} className="text-foreground" />
        </View>
      )}
    </Pressable>
  );
}

function ComboboxGroup({ className, ...props }: React.ComponentProps<typeof View> & ComboboxGroupBaseProps) {
  return <View className={cn('text-foreground overflow-hidden p-1', className)} {...props} />;
}

function ComboboxLabel({ className, ...props }: React.ComponentProps<typeof View> & ComboboxLabelBaseProps) {
  return <View className={cn('text-muted-foreground px-2 py-1.5 text-xs font-semibold', className)} {...props} />;
}

function ComboboxCollection({ className, ...props }: React.ComponentProps<typeof View> & ComboboxCollectionBaseProps) {
  return <View className={className} {...props} />;
}

function ComboboxEmpty({ className, children, ...props }: React.ComponentProps<typeof View> & ComboboxEmptyBaseProps) {
  const { searchQuery } = useCombobox();

  if (!searchQuery) {
    return null;
  }

  return (
    <View className={cn('py-6 text-center text-sm', className)} {...props}>
      <Text className="text-muted-foreground text-center">{children || 'No results found.'}</Text>
    </View>
  );
}

function ComboboxSeparator({ className, ...props }: React.ComponentProps<typeof View> & ComboboxSeparatorBaseProps) {
  return <View className={cn('bg-muted -mx-1 h-px', className)} {...props} />;
}

function ComboboxChips({ className, ...props }: React.ComponentProps<typeof View> & ComboboxChipsBaseProps) {
  return <View className={cn('flex flex-row flex-wrap gap-1', className)} {...props} />;
}

function ComboboxChip({
  className,
  showRemove,
  children,
  ...props
}: React.ComponentProps<typeof View> & ComboboxChipBaseProps) {
  return (
    <View
      className={cn(
        'bg-secondary text-secondary-foreground flex flex-row items-center rounded-md px-2 py-1',
        className,
      )}
      {...props}
    >
      {wrapTextChildren(children, Text, { className: 'text-xs' })}
      {showRemove && <X size={12} className="ml-1 opacity-50" />}
    </View>
  );
}

function ComboboxChipsInput({
  className,
  ...props
}: React.ComponentProps<typeof TextInput> & ComboboxChipsInputBaseProps) {
  return <TextInput className={cn('flex-1 bg-transparent px-2 py-1 outline-none', className)} {...props} />;
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
