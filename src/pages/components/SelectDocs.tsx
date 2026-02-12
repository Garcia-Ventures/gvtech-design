import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SelectDocs() {
  return (
    <ComponentSection
      title="Select"
      description="Displays a list of options for the user to pick from—triggered by a button."
    >
      <ComponentShowcase
        title="Default"
        description="A default select component."
        code={`<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="blueberry">Blueberry</SelectItem>
      <SelectItem value="grapes">Grapes</SelectItem>
      <SelectItem value="pineapple">Pineapple</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`}
      >
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Select component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/select"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Select
          </a>
          .
        </p>

        <h4 className="text-lg font-medium mt-6">Select (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'defaultValue',
              type: 'string',
              description: 'The value of the select when initially rendered.',
            },
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
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Event handler called when the open state changes.',
            },
            {
              name: 'dir',
              type: '"ltr" | "rtl"',
              description: 'The reading direction of the select.',
            },
            {
              name: 'name',
              type: 'string',
              description: 'The name of the select. Submitted with its owning form as part of a name/value pair.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'When true, prevents the user from interacting with select.',
            },
            {
              name: 'required',
              type: 'boolean',
              description:
                'When true, indicates that the user must select a value before the owning form can be submitted.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">SelectTrigger</h4>
        <PropsTable
          props={[
            {
              name: 'asChild',
              type: 'boolean',
              description: 'Change the default rendered element for the one passed as a child.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">SelectItem</h4>
        <PropsTable
          props={[
            {
              name: 'value',
              type: 'string',
              required: true,
              description: 'The value given as data when submitted with a name.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'When true, prevents the user from interacting with the item.',
            },
            {
              name: 'textValue',
              type: 'string',
              description:
                'Optional text used for typeahead purposes. By default the typeahead behavior will use the .textContent of the Item.',
            },
          ]}
        />
      </div>
    </ComponentSection>
  );
}
