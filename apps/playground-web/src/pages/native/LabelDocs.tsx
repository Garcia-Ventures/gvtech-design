import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function LabelDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default label for Native."
        code={`import { Label } from "@gv-tech/design-system";

export function LabelExample() {
  return (
    <Label nativeID="terms">
      Accept terms and conditions
    </Label>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Label component for Native is built on top of <code>@rn-primitives/label</code>.
        </p>
        <PropsTable
          props={[
            {
              name: 'nativeID',
              type: 'string',
              description: 'The id of the element the label is associated with.',
            },
            {
              name: 'onPress',
              type: '() => void',
              description: 'Native press event handler.',
            },
          ]}
        />
      </div>
    </>
  );
}
