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
import { track } from '@plausible-analytics/tracker';
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
    (href: string, title: string, category: string) => {
      setOpen(false);
      track('docs_search_select', {
        props: {
          result_slug: href,
          result_title: title,
          result_category: category,
        },
      });
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
                <CommandItem
                  key={item.href}
                  value={item.title}
                  onSelect={() => onSelect(item.href, item.title, category.title)}
                >
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
  responsive?: boolean;
}

export function DocSearch({ variant = 'default', className, placeholder, responsive }: DocSearchProps) {
  const context = React.useContext(SearchContext);
  if (!context) {
    throw new Error('DocSearch must be used within a DocSearchProvider');
  }

  const defaultPlaceholder = variant === 'compact' ? 'Search...' : 'Search documentation...';

  return (
    <SearchTrigger
      onClick={() => {
        track('docs_search_open', {
          props: {
            source: variant,
          },
        });
        context.setOpen(true);
      }}
      variant={variant}
      className={className}
      placeholder={placeholder || defaultPlaceholder}
      responsive={responsive}
    />
  );
}
