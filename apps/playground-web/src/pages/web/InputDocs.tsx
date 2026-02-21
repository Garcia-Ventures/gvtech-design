import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Button, Input, Label } from '@gv-tech/ui-web';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = false as boolean;

// @ts-ignore

const platform = 'web' as string;

export function InputDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default input field."
        code={`<Input type="email" placeholder="Email" />`}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
      </ComponentShowcase>

      {
        <ComponentShowcase
          title="File"
          description="A file input field."
          code={`<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="picture">Picture</Label>
  <Input id="picture" type="file" />
</div>`}
        >
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Picture</Label>
            <Input id="picture" type="file" />
          </div>
        </ComponentShowcase>
      }

      <ComponentShowcase
        title="Disabled"
        description="A disabled input field."
        code={`<Input disabled type="email" placeholder="Email" />`}
      >
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email-disabled">Email</Label>
          <Input disabled type="email" id="email-disabled" placeholder="Email" />
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="With Button"
        description="An input field with a button."
        code={`<div className="flex w-full max-w-sm items-center space-x-2">
  <Input type="email" placeholder="Email" />
  <Button type="submit">Subscribe</Button>
</div>`}
      >
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="email" placeholder="Email" />
          <Button type="submit">Subscribe</Button>
        </div>
      </ComponentShowcase>

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
                name: 'type',
                type: 'string',
                defaultValue: '"text"',
                description: 'The HTML input type.',
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
