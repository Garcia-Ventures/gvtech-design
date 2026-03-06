import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { toast } from 'sonner';
/*   @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */
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

const isNative = false as boolean;

const platform = 'web' as string;

export function SearchDocs() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <ComponentShowcase
        title="Quick Search"
        description="A shortcut-ready search trigger for headers. Press Cmd+K or Ctrl+K to open."
        code={`<Search>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
      <CommandItem>Calculator</CommandItem>
    </CommandGroup>
  </CommandList>
</Search>
<SearchTrigger onClick={() => setOpen(true)} placeholder="Search documentation..." />`}
      >
        <div className="w-full space-y-4">
          <div className="bg-muted/40 border-border/50 flex items-center justify-between rounded-xl border p-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg shadow-sm">
                <span className="text-primary-foreground text-xs font-bold">GV</span>
              </div>
              <span className="hidden text-sm font-semibold md:inline">Documentation</span>
            </div>
            <Search open={open} onOpenChange={setOpen}>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem
                    onSelect={() => {
                      toast.success('Selected Calendar');
                      setOpen(false);
                    }}
                  >
                    Calendar
                  </CommandItem>
                  <CommandItem
                    onSelect={() => {
                      toast.success('Selected Search Emoji');
                      setOpen(false);
                    }}
                  >
                    Search Emoji
                  </CommandItem>
                  <CommandItem
                    onSelect={() => {
                      toast.success('Selected Calculator');
                      setOpen(false);
                    }}
                  >
                    Calculator
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Search>
            <div className="flex max-w-sm flex-1 justify-end">
              <SearchTrigger onClick={() => setOpen(true)} placeholder="Search documentation..." className="w-full" />
            </div>
          </div>
          <p className="text-muted-foreground text-center text-xs italic">Try clicking the trigger or pressing ⌘K</p>
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="Compact Variant"
        description="A strictly small version of the trigger, ideal for headers where horizontal space is at a premium."
        code={`<SearchTrigger variant="compact" />`}
      >
        <div className="bg-muted/40 border-border/50 flex w-full items-center justify-between rounded-xl border p-3 shadow-sm">
          <div className="bg-accent border-border/50 h-8 w-8 rounded-full border" />
          <SearchTrigger variant="compact" onClick={() => setOpen(true)} />
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="Responsive Variant"
        description="Starts compact but expands on larger screens (2xl) to show the full search input."
        code={`<SearchTrigger variant="compact" responsive />`}
      >
        <div className="bg-muted/40 border-border/50 flex w-full flex-col gap-4 rounded-xl border p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Simulated Header</span>
            <SearchTrigger variant="compact" responsive onClick={() => setOpen(true)} />
          </div>
          <div className="bg-primary/5 border-primary/20 rounded border p-3">
            <p className="text-primary mb-1 text-xs font-medium tracking-wider uppercase">Note</p>
            <p className="text-muted-foreground text-xs">
              On screens larger than 1536px (2xl), this trigger will automatically expand into a full search bar.
            </p>
          </div>
        </div>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Search Props</h3>
        <PropsTable
          props={[
            {
              name: 'open',
              type: 'boolean',
              required: false,
              description: 'Whether the search dialog is open.',
            },
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              required: false,
              description: 'Event handler called when the open state changes.',
            },
            {
              name: 'children',
              type: 'ReactNode',
              required: false,
              description: 'The search content (CommandInput, CommandList, etc.).',
            },
          ]}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h3 className="text-xl font-semibold">SearchTrigger Props</h3>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              required: false,
              description: 'Additional CSS classes to apply.',
            },
            {
              name: 'onClick',
              type: 'MouseEventHandler',
              required: false,
              description: 'Click event handler to trigger the search.',
            },
            {
              name: 'placeholder',
              type: 'string',
              defaultValue: '"Search docs..."',
              required: false,
              description: 'The placeholder text to display in the trigger.',
            },
            {
              name: 'variant',
              type: '"default" | "compact"',
              defaultValue: '"default"',
              required: false,
              description: 'The visual style of the trigger.',
            },
            {
              name: 'responsive',
              type: 'boolean',
              defaultValue: 'false',
              required: false,
              description: 'Whether the compact variant should expand on large (2xl+) screens.',
            },
          ]}
        />
      </div>

      <div className="mt-12 space-y-6">
        <div>
          <h3 className="text-xl font-semibold">Integrations</h3>
          <p className="text-muted-foreground mt-2">
            The Search component is designed to be highly composable, making it easy to integrate with external search
            providers like Algolia, ElasticSearch, or custom APIs.
          </p>
        </div>

        <div className="bg-muted/50 rounded-lg border p-6">
          <h4 className="font-medium">External Provider Pattern</h4>
          <p className="text-muted-foreground mt-1 text-sm">
            You can use the `onValueChange` prop of `CommandInput` to trigger external searches and dynamically render
            `CommandGroup` and `CommandItem` components with the results.
          </p>
          <pre className="bg-background mt-4 overflow-x-auto rounded-md p-4 text-xs">
            <code>{`const [results, setResults] = React.useState([]);

const handleSearch = async (query) => {
  const data = await algoliaIndex.search(query);
  setResults(data.hits);
};

return (
  <Search>
    <CommandInput 
      placeholder="Search docs..." 
      onValueChange={handleSearch} 
    />
    <CommandList>
      {results.length > 0 ? (
        <CommandGroup heading="Results">
          {results.map((hit) => (
            <CommandItem key={hit.objectID}>
              {hit.title}
            </CommandItem>
          ))}
        </CommandGroup>
      ) : (
        <CommandEmpty>No results found.</CommandEmpty>
      )}
    </CommandList>
  </Search>
);`}</code>
          </pre>
        </div>
      </div>
    </>
  );
}
