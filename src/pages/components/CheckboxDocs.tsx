import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export function CheckboxDocs() {
  return (
    <ComponentSection
      title="Checkbox"
      description="A control that allows the user to toggle between checked and not checked."
    >
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
          <Checkbox id="terms2" />
          <Label htmlFor="terms2">Accept terms and conditions</Label>
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
            {
              name: 'required',
              type: 'boolean',
              description:
                'When true, indicates that the user must check the checkbox before the owning form can be submitted.',
            },
            {
              name: 'name',
              type: 'string',
              description: 'The name of the checkbox. Submitted with its owning form as part of a name/value pair.',
            },
            {
              name: 'value',
              type: 'string',
              defaultValue: '"on"',
              description: 'The value given as data when submitted with a name.',
            },
          ]}
        />
      </div>
    </ComponentSection>
  );
}
