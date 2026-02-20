import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Checkbox, Label } from '@gv-tech/ui-web';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = false as boolean;

// @ts-ignore

const platform = 'web' as string;

export function CheckboxDocs() {
  return (
    <>
      <ComponentShowcase title="Default" description="A basic checkbox." code={`<Checkbox id="terms" />`}>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="With Label"
        description="A checkbox with a label."
        code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="Disabled"
        description="A disabled checkbox."
        code={`<div className="flex items-center space-x-2">
  <Checkbox id="terms-disabled" disabled />
  <Label htmlFor="terms-disabled">Accept terms and conditions</Label>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Checkbox id="terms-disabled" disabled />
          <Label htmlFor="terms-disabled" className="text-muted-foreground">
            Accept terms and conditions
          </Label>
        </div>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Checkbox component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/checkbox"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Checkbox
          </a>
          .
        </p>
        <PropsTable
          props={[
            {
              name: 'checked',
              type: 'boolean | "indeterminate"',
              description: 'The controlled checked state of the checkbox.',
            },
            {
              name: 'defaultChecked',
              type: 'boolean | "indeterminate"',
              description: 'The default checked state when uncontrolled.',
            },
            {
              name: 'onCheckedChange',
              type: '(checked: boolean | "indeterminate") => void',
              description: 'Event handler called when the checked state changes.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'When true, prevents the user from interacting with the checkbox.',
            },
          ]}
        />
      </div>
    </>
  );
}
