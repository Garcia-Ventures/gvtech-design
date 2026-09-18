import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function SearchDocs() {
  return (
    <>
      <ComponentShowcase
        title="Quick Search"
        description="A search trigger for Native that opens a search modal."
        code={`import { Search, SearchTrigger, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@gv-tech/design-system";

export function SearchExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Search open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem><Text>Calendar</Text></CommandItem>
            <CommandItem><Text>Search Emoji</Text></CommandItem>
          </CommandGroup>
        </CommandList>
      </Search>
      <SearchTrigger onPress={() => setOpen(true)} placeholder="Search documentation..." />
    </>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Search Props</h3>
        <PropsTable
          props={[
            {
              name: 'open',
              type: 'boolean',
              description: 'Whether the search dialog is open.',
            },
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Event handler called when the open state changes.',
            },
          ]}
        />
      </div>

      <div className="mt-8 space-y-4">
        <h3 className="text-xl font-semibold">SearchTrigger Props</h3>
        <PropsTable
          props={[
            {
              name: 'onPress',
              type: '() => void',
              description: 'Press event handler to trigger the search.',
            },
            {
              name: 'placeholder',
              type: 'string',
              defaultValue: '"Search docs..."',
              description: 'The placeholder text to display in the trigger.',
            },
          ]}
        />
      </div>
    </>
  );
}
