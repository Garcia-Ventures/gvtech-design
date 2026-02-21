import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function SearchDocs() {
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
      />

      <ComponentShowcase
        title="Compact Variant"
        description="A smaller version of the trigger, ideal for dense headers or mobile-first layouts."
        code={`<SearchTrigger variant="compact" />`}
      />

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
