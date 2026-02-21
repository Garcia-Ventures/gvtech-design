import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function ToggleGroupDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default toggle group."
        code={`<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The ToggleGroup component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/toggle-group"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Toggle Group
          </a>
          .
        </p>

        <h4 className="mt-6 text-lg font-medium">ToggleGroup (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'type',
              type: '"single" | "multiple"',
              required: true,
              description: 'Determines whether a single or multiple items can be pressed at a time.',
            },
            {
              name: 'defaultValue',
              type: 'string | string[]',
              description: 'The value of the item to show as pressed when initially rendered.',
            },
            {
              name: 'value',
              type: 'string | string[]',
              description: 'The controlled value of the pressed item.',
            },
            {
              name: 'onValueChange',
              type: '(value: string | string[]) => void',
              description: 'Event handler called when the value changes.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'When true, prevents the user from interacting with the toggle group.',
            },
            {
              name: 'rovingFocus',
              type: 'boolean',
              defaultValue: 'true',
              description: 'When false, roving focus is disabled.',
            },
            {
              name: 'orientation',
              type: '"horizontal" | "vertical"',
              description: 'The orientation of the component.',
            },
            {
              name: 'dir',
              type: '"ltr" | "rtl"',
              description: 'The reading direction of the toggle group.',
            },
            {
              name: 'variant',
              type: '"default" | "outline"',
              defaultValue: '"default"',
              description: 'The visual variant of the toggle group.',
            },
            {
              name: 'size',
              type: '"default" | "sm" | "lg"',
              defaultValue: '"default"',
              description: 'The size of the toggle group.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">ToggleGroupItem</h4>
        <PropsTable
          props={[
            {
              name: 'value',
              type: 'string',
              required: true,
              description: 'A unique value for the item.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'When true, prevents the user from interacting with the item.',
            },
          ]}
        />
      </div>
    </>
  );
}
