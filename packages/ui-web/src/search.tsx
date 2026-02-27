'use client';

import { SearchBaseProps, SearchTriggerBaseProps } from '@gv-tech/ui-core';
import { Search as SearchIcon } from 'lucide-react';
import * as React from 'react';
import { Button } from './button';
import { CommandDialog } from './command';
import { cn } from './lib/utils';

export type SearchProps = SearchBaseProps;

export function Search({ children, open: customOpen, onOpenChange }: SearchProps) {
  const [open, setOpen] = React.useState(false);

  // If customOpen is provided (controlled), use it. Otherwise use internal state.
  // Note: customOpen can be undefined, so we check explicit undefined check or just rely on contract.
  const isControlled = customOpen !== undefined;
  const isOpen = isControlled ? (customOpen as boolean) : open;

  // We need a setter that matches Dispatch<SetStateAction<boolean>> roughly,
  // but handles the controlled callback.
  const setIsOpen = React.useCallback(
    (value: boolean | ((prev: boolean) => boolean)) => {
      let nextValue: boolean;
      if (typeof value === 'function') {
        nextValue = value(isOpen);
      } else {
        nextValue = value;
      }

      if (isControlled) {
        onOpenChange?.(nextValue);
      } else {
        setOpen(nextValue);
      }
    },
    [isControlled, isOpen, onOpenChange],
  );

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [setIsOpen]);

  return (
    <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
      {children}
    </CommandDialog>
  );
}

export interface SearchTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, SearchTriggerBaseProps {}

export const SearchTrigger = React.forwardRef<HTMLButtonElement, SearchTriggerProps>(
  ({ className, placeholder, variant = 'default', responsive = false, ...props }, ref) => {
    const defaultPlaceholder = variant === 'compact' ? 'Search...' : 'Search docs...';
    const activePlaceholder = placeholder || defaultPlaceholder;

    return (
      <Button
        variant="outline"
        className={cn(
          'text-muted-foreground relative h-9 text-sm transition-all transition-colors',
          variant === 'default'
            ? 'w-full justify-start pr-12'
            : cn('w-9 justify-center px-0', responsive && '2xl:w-48 2xl:justify-start 2xl:px-3 2xl:pr-12'),
          className,
        )}
        ref={ref}
        {...props}
      >
        <span className="inline-flex items-center gap-2">
          <SearchIcon className="h-4 w-4 shrink-0" />
          <span className={cn('truncate', variant === 'compact' && (responsive ? 'hidden 2xl:inline' : 'hidden'))}>
            {activePlaceholder}
          </span>
        </span>
        <kbd
          className={cn(
            'bg-muted pointer-events-none absolute top-1.5 right-1.5 hidden h-6 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none',
            variant === 'default' && 'sm:flex',
            variant === 'compact' && responsive && '2xl:flex',
          )}
        >
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
    );
  },
);
SearchTrigger.displayName = 'SearchTrigger';
