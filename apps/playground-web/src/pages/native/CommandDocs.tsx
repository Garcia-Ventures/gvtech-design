import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function CommandDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A command palette with search and groups."
        code={`<Command className="rounded-lg border shadow-md md:min-w-[450px]">
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>
        <Calendar className="mr-2 h-4 w-4" />
        <span>Calendar</span>
      </CommandItem>
      <CommandItem>
        <Smile className="mr-2 h-4 w-4" />
        <span>Search Emoji</span>
      </CommandItem>
      <CommandItem>
        <Calculator className="mr-2 h-4 w-4" />
        <span>Calculator</span>
      </CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
        <User className="mr-2 h-4 w-4" />
        <span>Profile</span>
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <CreditCard className="mr-2 h-4 w-4" />
        <span>Billing</span>
        <CommandShortcut>⌘B</CommandShortcut>
      </CommandItem>
      <CommandItem>
        <Settings className="mr-2 h-4 w-4" />
        <span>Settings</span>
        <CommandShortcut>⌘S</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Command component is built on top of{' '}
          <a href="https://cmdk.paco.me/" className="underline" target="_blank" rel="noreferrer">
            cmdk
          </a>
          .
        </p>
        <h4 className="text-lg font-medium mt-6">Command (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'label',
              type: 'string',
              description: 'Accessible label for the command menu.',
            },
            {
              name: 'shouldFilter',
              type: 'boolean',
              defaultValue: 'true',
              description: 'Whether to filter items based on input.',
            },
            {
              name: 'filter',
              type: '(value: string, search: string) => number',
              description: 'Custom filter function.',
            },
            {
              name: 'value',
              type: 'string',
              description: 'Controlled value of the selected item.',
            },
            {
              name: 'onValueChange',
              type: '(value: string) => void',
              description: 'Event handler called when value changes.',
            },
            {
              name: 'loop',
              type: 'boolean',
              description: 'Whether to loop selection when navigating with keys.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">CommandInput</h4>
        <PropsTable
          props={[
            {
              name: 'placeholder',
              type: 'string',
              description: 'Placeholder text for the input.',
            },
            {
              name: 'value',
              type: 'string',
              description: 'Controlled value of the input.',
            },
            {
              name: 'onValueChange',
              type: '(value: string) => void',
              description: 'Event handler called when input value changes.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">CommandList</h4>
        <p className="text-sm text-muted-foreground">Contains items and groups.</p>

        <h4 className="text-lg font-medium mt-6">CommandItem</h4>
        <PropsTable
          props={[
            {
              name: 'disabled',
              type: 'boolean',
              description: 'Whether the item is disabled.',
            },
            {
              name: 'onSelect',
              type: '(value: string) => void',
              description: 'Event handler called when the item is selected.',
            },
            {
              name: 'value',
              type: 'string',
              description: 'Unique value for the item. Defaults to text content if not provided.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">CommandGroup</h4>
        <PropsTable
          props={[
            {
              name: 'heading',
              type: 'ReactNode',
              description: 'Heading for the group.',
            },
            {
              name: 'value',
              type: 'string',
              description: 'Unique value for the group.',
            },
          ]}
        />
      </div>
    </>
  );
}
