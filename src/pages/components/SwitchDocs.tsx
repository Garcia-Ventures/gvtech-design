import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export function SwitchDocs() {
  return (
    <ComponentSection
      title="Switch"
      description="A control that allows the user to toggle between checked and not checked."
    >
      <ComponentShowcase
        title="Default"
        description="A default switch."
        code={`<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Airplane Mode</Label>
</div>`}
      >
        <div className="flex items-center space-x-2">
          <Switch id="airplane-mode" />
          <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Switch component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/switch"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Switch
          </a>
          .
        </p>

        <h4 className="text-lg font-medium mt-6">Switch (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'defaultChecked',
              type: 'boolean',
              description: 'The value of the switch when initially rendered.',
            },
            {
              name: 'checked',
              type: 'boolean',
              description: 'The controlled value of the switch.',
            },
            {
              name: 'onCheckedChange',
              type: '(checked: boolean) => void',
              description: 'Event handler called when the value changes.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'When true, prevents the user from interacting with the switch.',
            },
            {
              name: 'required',
              type: 'boolean',
              description:
                'When true, indicates that the user must toggle the switch before the owning form can be submitted.',
            },
            {
              name: 'name',
              type: 'string',
              description: 'The name of the switch. Submitted with its owning form as part of a name/value pair.',
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
