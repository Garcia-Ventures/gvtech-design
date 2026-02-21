import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */
import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function RadioGroupDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default radio group."
        code={`<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Radio Group component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/radio-group"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Radio Group
          </a>
          .
        </p>

        <h4 className="mt-6 text-lg font-medium">RadioGroup (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'defaultValue',
              type: 'string',
              description: 'The value of the radio item that should be checked when initially rendered.',
            },
            {
              name: 'value',
              type: 'string',
              description: 'The controlled value of the radio item to check.',
            },
            {
              name: 'onValueChange',
              type: '(value: string) => void',
              description: 'Event handler called when the value changes.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'When true, prevents the user from interacting with radio items.',
            },
            {
              name: 'required',
              type: 'boolean',
              description:
                'When true, indicates that the user must check a radio item before the owning form can be submitted.',
            },
            {
              name: 'name',
              type: 'string',
              description: 'The name of the group. Submitted with its owning form as part of a name/value pair.',
            },
            {
              name: 'dir',
              type: '"ltr" | "rtl"',
              description: 'The reading direction of the radio group.',
            },
            {
              name: 'orientation',
              type: '"horizontal" | "vertical"',
              defaultValue: '"vertical"',
              description: 'The orientation of the component.',
            },
            {
              name: 'loop',
              type: 'boolean',
              defaultValue: 'true',
              description: 'When true, keyboard navigation will loop from last item to first, and vice versa.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">RadioGroupItem</h4>
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
              description: 'When true, prevents the user from interacting with the radio item.',
            },
            {
              name: 'required',
              type: 'boolean',
              description:
                'When true, indicates that the user must check the radio item before the owning form can be submitted.',
            },
          ]}
        />
      </div>
    </>
  );
}
