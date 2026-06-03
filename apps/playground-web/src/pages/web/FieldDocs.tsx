import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Field, FieldContent, FieldDescription, FieldLabel, Input } from '@gv-tech/ui-web';

export function FieldDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A form field with a label and description."
        code={`<Field>
  <FieldLabel>Username</FieldLabel>
  <FieldContent>
    <Input placeholder="Enter your username" />
    <FieldDescription>This is your public display name.</FieldDescription>
  </FieldContent>
</Field>`}
      >
        <Field className="w-full max-w-sm">
          <FieldLabel>Username</FieldLabel>
          <FieldContent>
            <Input placeholder="Enter your username" />
            <FieldDescription>This is your public display name.</FieldDescription>
          </FieldContent>
        </Field>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'orientation',
              type: '"vertical" | "horizontal" | "responsive"',
              defaultValue: '"vertical"',
              description: 'The orientation of the field components.',
            },
          ]}
        />
      </div>
    </>
  );
}
