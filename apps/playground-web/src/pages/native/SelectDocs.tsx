import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function SelectDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default select component for Native."
        code={`import { 
  Select, 
  SelectTrigger, 
  SelectValue, 
  SelectContent, 
  SelectGroup, 
  SelectLabel, 
  SelectItem,
  Text 
} from "@gv-tech/design-system";

export function SelectExample() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel><Text>Fruits</Text></SelectLabel>
          <SelectItem value="apple"><Text>Apple</Text></SelectItem>
          <SelectItem value="banana"><Text>Banana</Text></SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Select component for Native is built on top of <code>@rn-primitives/select</code>.
        </p>

        <h4 className="mt-6 text-lg font-medium">Select (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'value',
              type: 'string',
              description: 'The controlled value of the select.',
            },
            {
              name: 'onValueChange',
              type: '(value: string) => void',
              description: 'Event handler called when the value changes.',
            },
            {
              name: 'open',
              type: 'boolean',
              description: 'The controlled open state of the select.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">SelectItem</h4>
        <PropsTable
          props={[
            {
              name: 'value',
              type: 'string',
              required: true,
              description: 'The value for the item.',
            },
            {
              name: 'label',
              type: 'string',
              description: 'The label to display (defaults to string children).',
            },
          ]}
        />
      </div>
    </>
  );
}
