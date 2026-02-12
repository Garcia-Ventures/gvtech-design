'use client';

import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { cn } from '@/lib/utils';
import { Search as SearchIcon } from 'lucide-react';
import * as React from 'react';

export interface SearchProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Search({ children, open: customOpen, onOpenChange }: SearchProps) {
  const [open, setOpen] = React.useState(false);

  const isControlled = customOpen !== undefined;
  const isOpen = isControlled ? customOpen : open;

  const setIsOpen = React.useCallback(
    (value: boolean | ((prev: boolean) => boolean)) => {
      if (isControlled) {
        const nextValue = typeof value === 'function' ? value(isOpen) : value;
        onOpenChange?.(nextValue);
      } else {
        setOpen(value);
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

export interface SearchTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  placeholder?: string;
  variant?: 'default' | 'compact';
}

export const SearchTrigger = React.forwardRef<HTMLButtonElement, SearchTriggerProps>(
  ({ className, placeholder = 'Search docs...', variant = 'default', ...props }, ref) => {
    return (
      <Button
        variant="outline"
        className={cn(
          'relative h-9 text-sm text-muted-foreground transition-all transition-colors',
          variant === 'default'
            ? 'w-full justify-start sm:pr-12 md:w-40 lg:w-64'
            : 'w-9 justify-center px-0 sm:w-24 sm:justify-start sm:px-3 sm:pr-12',
          className,
        )}
        ref={ref}
        {...props}
      >
        <span className="inline-flex items-center gap-2">
          <SearchIcon className="h-4 w-4 shrink-0" />
          {variant === 'default' && <span className="truncate">{placeholder}</span>}
        </span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
    );
  },
);
SearchTrigger.displayName = 'SearchTrigger';

export { CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList };
