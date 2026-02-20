import { docConfig } from '@/config/docs';
import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Search,
  SearchTrigger,
} from '@gv-tech/ui-web';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

interface SearchContextType {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const SearchContext = React.createContext<SearchContextType | undefined>(undefined);

export function DocSearchProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const onSelect = React.useCallback(
    (href: string) => {
      setOpen(false);
      navigate(`/docs/${href}`);
    },
    [navigate],
  );

  return (
    <SearchContext.Provider value={{ open, setOpen }}>
      {children}
      <Search open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search documentation..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {docConfig.map((category) => (
            <CommandGroup key={category.title} heading={category.title}>
              {category.items.map((item) => (
                <CommandItem key={item.href} value={item.title} onSelect={() => onSelect(item.href)}>
                  {item.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Search>
    </SearchContext.Provider>
  );
}

interface DocSearchProps {
  variant?: 'default' | 'compact';
  className?: string;
  placeholder?: string;
}

export function DocSearch({ variant = 'default', className, placeholder = 'Search documentation...' }: DocSearchProps) {
  const context = React.useContext(SearchContext);
  if (!context) {
    throw new Error('DocSearch must be used within a DocSearchProvider');
  }

  return (
    <SearchTrigger
      onClick={() => context.setOpen(true)}
      variant={variant}
      className={className}
      placeholder={placeholder}
    />
  );
}
