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
  ({ className, placeholder = 'Search docs...', variant = 'default', ...props }, ref) => {
    return (
      <Button
        variant="outline"
        className={cn(
          'relative h-9 text-sm text-muted-foreground transition-all transition-colors',
          variant === 'default'
            ? 'w-full justify-start pr-12'
            : 'w-9 justify-center px-0 md:w-40 md:justify-start md:px-3 md:pr-12 lg:w-64',
          className,
        )}
        ref={ref}
        {...props}
      >
        <span className="inline-flex items-center gap-2">
          <SearchIcon className="h-4 w-4 shrink-0" />
          <span className={cn('truncate', variant === 'compact' && 'hidden md:inline')}>{placeholder}</span>
        </span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
    );
  },
);
SearchTrigger.displayName = 'SearchTrigger';
