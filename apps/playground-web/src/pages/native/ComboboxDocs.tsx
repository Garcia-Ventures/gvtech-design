import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function ComboboxDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A native combobox built using Dialog and FlatList concepts."
        code={`import { 
  Combobox, 
  ComboboxTrigger, 
  ComboboxContent, 
  ComboboxInput, 
  ComboboxList, 
  ComboboxItem, 
  ComboboxEmpty,
  ComboboxValue
} from "@gv-tech/design-system";

export function ComboboxExample() {
  return (
    <Combobox>
      <ComboboxTrigger>
        <ComboboxValue placeholder="Select framework..." />
      </ComboboxTrigger>
      <ComboboxContent>
        <ComboboxInput placeholder="Search framework..." />
        <ComboboxList>
          <ComboboxEmpty>No framework found.</ComboboxEmpty>
          <ComboboxItem value="next">Next.js</ComboboxItem>
          <ComboboxItem value="svelte">SvelteKit</ComboboxItem>
          <ComboboxItem value="nuxt">Nuxt.js</ComboboxItem>
          <ComboboxItem value="remix">Remix</ComboboxItem>
          <ComboboxItem value="astro">Astro</ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Native Implementation Notes</h3>
        <p className="text-muted-foreground text-sm">
          Unlike the web which relies on `cmdk` and `@base-ui/react`, the Native Combobox is a composite component
          utilizing `Dialog` to render a full-screen or bottom-sheet list of options. It manages its own internal
          filtering state to provide a seamless mobile experience.
        </p>

        <h4 className="mt-6 text-lg font-medium">Combobox (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'value',
              type: 'string',
              description: 'The controlled value of the combobox.',
            },
            {
              name: 'onValueChange',
              type: '(value: string) => void',
              description: 'Event handler called when a value is selected.',
            },
          ]}
        />
      </div>
    </>
  );
}
