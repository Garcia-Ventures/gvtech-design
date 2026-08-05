import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function CheckboxDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A basic checkbox for Native."
        code={`import { Checkbox } from "@gv-tech/design-system";

export function CheckboxExample() {
  return <Checkbox nativeID="terms" />;
}`}
      />

      <ComponentShowcase
        title="With Label"
        description="A checkbox with a label for Native."
        code={`import { Checkbox, Label } from "@gv-tech/design-system";
import { View } from "react-native";

export function CheckboxWithLabel() {
  return (
    <View className="flex flex-row items-center space-x-2">
      <Checkbox nativeID="terms-label" />
      <Label nativeID="terms-label">Accept terms and conditions</Label>
    </View>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Checkbox component for Native is built on top of <code>@rn-primitives/checkbox</code>.
        </p>
        <PropsTable
          props={[
            {
              name: 'checked',
              type: 'boolean',
              description: 'The controlled checked state of the checkbox.',
            },
            {
              name: 'onCheckedChange',
              type: '(checked: boolean) => void',
              description: 'Event handler called when the checked state changes.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Whether the checkbox is disabled.',
            },
            {
              name: 'nativeID',
              type: 'string',
              description: 'Used to link the checkbox with a Label.',
            },
          ]}
        />
      </div>
    </>
  );
}
