import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function InputDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default input field."
        code={`<Input type="email" placeholder="Email" />`}
      />
      <ComponentShowcase
        title="File"
        description="A file input field."
        code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="picture">Picture</Label>
  <Input id="picture" type="file" />
</div>`}
      />

      <ComponentShowcase
        title="Disabled"
        description="A disabled input field."
        code={`<Input disabled type="email" placeholder="Email" />`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">The Input component extends the standard HTML input element.</p>
        <PropsTable
          props={[
            {
              name: 'type',
              type: 'string',
              defaultValue: '"text"',
              description: 'The type of input to render.',
            },
            {
              name: 'className',
              type: 'string',
              description: isNative ? 'Tailwind (NativeWind) classes.' : 'Additional CSS classes to apply.',
            },
            ...[
              {
                name: 'placeholderClassName',
                type: 'string',
                description: 'Styling for the placeholder text (NativeWind).',
              },
            ],
            {
              name: 'value',
              type: 'string | number | readonly string[]',
              description: 'The value of the input.',
            },
            {
              name: 'placeholder',
              type: 'string',
              description: 'The placeholder text for the input.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'Whether the input is disabled.',
            },
            {
              name: 'onChange',
              type: '(event: React.ChangeEvent<HTMLInputElement>) => void',
              description: 'Event handler called when the value changes.',
            },
          ]}
        />
      </div>
    </>
  );
}
