'use client';

import { SearchBaseProps, SearchTriggerBaseProps } from '@gv-tech/ui-core';
import { Search as SearchIcon } from 'lucide-react';
import * as React from 'react';
import { Button } from './button';
import { CommandDialog } from './command';
import { cn } from './lib/utils';

export type SearchProps = SearchBaseProps;

export function Search({ children, open: customOpen, onOpenChange, disableShortcut }: SearchProps) {
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
    if (disableShortcut) {
      return;
    }

    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [setIsOpen, disableShortcut]);

  return (
    <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
      {children}
    </CommandDialog>
  );
}

export interface SearchTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, SearchTriggerBaseProps {}

export const SearchTrigger = React.forwardRef<HTMLButtonElement, SearchTriggerProps>(
  ({ className, placeholder, variant = 'default', responsive = true, ...props }, ref) => {
    const defaultPlaceholder = variant === 'compact' ? 'Search...' : 'Search docs...';
    const activePlaceholder = placeholder || defaultPlaceholder;

    return (
      <Button
        variant="outline"
        className={cn(
          'text-muted-foreground relative h-9 text-sm transition-all transition-colors',
          variant === 'default'
            ? 'w-full justify-start pr-12'
            : cn('w-auto justify-between gap-2 px-2', responsive && 'md:w-64 md:px-3'),
          className,
        )}
        ref={ref}
        {...props}
      >
        <span className="inline-flex flex-1 items-center gap-2 overflow-hidden">
          <SearchIcon className="h-4 w-4 shrink-0" />
          <span className={cn('truncate', variant === 'compact' && (responsive ? 'hidden md:inline' : 'hidden'))}>
            {activePlaceholder}
          </span>
        </span>
        <kbd
          className={cn(
            'bg-muted pointer-events-none h-6 shrink-0 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none',
            variant === 'default' ? 'absolute top-1.5 right-1.5 hidden sm:flex' : 'flex',
          )}
        >
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
    );
  },
);
SearchTrigger.displayName = 'SearchTrigger';
