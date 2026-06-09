import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function RadioGroupDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default radio group for Native."
        code={`import { RadioGroup, RadioGroupItem, Label } from "@gv-tech/design-system";
import { View } from "react-native";

export function RadioExample() {
  return (
    <RadioGroup defaultValue="option-one">
      <View className="flex flex-row items-center space-x-2">
        <RadioGroupItem value="option-one" nativeID="option-one" />
        <Label nativeID="option-one">Option One</Label>
      </View>
      <View className="flex flex-row items-center space-x-2">
        <RadioGroupItem value="option-two" nativeID="option-two" />
        <Label nativeID="option-two">Option Two</Label>
      </View>
    </RadioGroup>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Radio Group component for Native is built on top of <code>@rn-primitives/radio-group</code>.
        </p>

        <h4 className="mt-6 text-lg font-medium">RadioGroup (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'value',
              type: 'string',
              description: 'The controlled value of the radio item to check.',
            },
            {
              name: 'onValueChange',
              type: '(value: string) => void',
              description: 'Event handler called when the value changes.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'When true, prevents interaction.',
            },
          ]}
        />
      </div>
    </>
  );
}
