import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function SwitchDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default switch for Native."
        code={`import { Switch, Label } from "@gv-tech/design-system";
import { View } from "react-native";

export function SwitchExample() {
  return (
    <View className="flex flex-row items-center space-x-2">
      <Switch nativeID="airplane-mode" />
      <Label nativeID="airplane-mode">Airplane Mode</Label>
    </View>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Switch component for Native is built on top of <code>@rn-primitives/switch</code>.
        </p>

        <h4 className="mt-6 text-lg font-medium">Switch (Root)</h4>
        <PropsTable
          props={[
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
              description: 'When true, prevents interaction.',
            },
            {
              name: 'nativeID',
              type: 'string',
              description: 'Used to link the switch with a Label.',
            },
          ]}
        />
      </div>
    </>
  );
}
