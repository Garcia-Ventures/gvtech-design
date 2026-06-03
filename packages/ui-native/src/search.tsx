import { SearchBaseProps, SearchTriggerBaseProps } from '@gv-tech/ui-core';
import { Search as SearchIcon } from 'lucide-react-native';
import * as React from 'react';
import { Platform, Text, View } from 'react-native';
import { Button } from './button';
import { Dialog } from './dialog';
import { cn } from './lib/utils';

export type SearchProps = SearchBaseProps;

export function Search({ children, open: customOpen, onOpenChange }: SearchProps) {
  const [open, setOpen] = React.useState(false);
  const isControlled = customOpen !== undefined;
  const isOpen = isControlled ? (customOpen as boolean) : open;

  const setIsOpen = React.useCallback(
    (value: boolean) => {
      if (isControlled) {
        onOpenChange?.(value);
      } else {
        setOpen(value);
      }
    },
    [isControlled, onOpenChange],
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {children}
    </Dialog>
  );
}

export interface SearchTriggerProps
  extends Omit<React.ComponentPropsWithoutRef<typeof Button>, 'variant'>, SearchTriggerBaseProps {}

export const SearchTrigger = React.forwardRef<React.ElementRef<typeof Button>, SearchTriggerProps>(
  ({ className, placeholder, variant = 'default', responsive = false, ...props }, ref) => {
    const defaultPlaceholder = variant === 'compact' ? 'Search...' : 'Search docs...';
    const activePlaceholder = placeholder || defaultPlaceholder;

    return (
      <Button
        variant="outline"
        className={cn(
          'relative h-12 flex-row justify-start pl-3 text-sm transition-all sm:h-9',
          variant === 'default'
            ? 'w-full pr-12'
            : cn('w-12 px-0 sm:w-9 sm:justify-center', responsive && 'md:w-48 md:justify-start md:px-3 md:pr-12'),
          className,
        )}
        ref={ref}
        {...props}
      >
        <View className="flex-row items-center gap-2">
          <SearchIcon className="text-muted-foreground shrink-0" size={18} />
          <Text
            className={cn(
              'text-muted-foreground truncate',
              variant === 'compact' && (responsive ? 'hidden md:flex' : 'hidden'),
            )}
          >
            {activePlaceholder}
          </Text>
        </View>
        <View
          className={cn(
            'bg-muted absolute top-2 right-2 hidden h-6 flex-row items-center gap-1 rounded border px-1.5 opacity-100',
            variant === 'default' && Platform.OS !== 'android' && Platform.OS !== 'ios' && 'sm:flex',
            variant === 'compact' && responsive && Platform.OS !== 'android' && Platform.OS !== 'ios' && 'md:flex',
          )}
        >
          <Text className="text-muted-foreground font-mono text-[10px] font-medium">⌘K</Text>
        </View>
      </Button>
    );
  },
);
SearchTrigger.displayName = 'SearchTrigger';
