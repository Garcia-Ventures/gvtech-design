import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function SeparatorDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A horizontal separator for Native."
        code={`import { Separator, Text } from "@gv-tech/design-system";
import { View } from "react-native";

export function SeparatorExample() {
  return (
    <View>
      <View className="space-y-1">
        <Text className="text-sm font-medium leading-none">Radix Primitives</Text>
        <Text className="text-sm text-muted-foreground">
          An open-source UI component library.
        </Text>
      </View>
      <Separator className="my-4" />
      <View className="flex flex-row h-5 items-center space-x-4">
        <Text className="text-sm">Blog</Text>
        <Separator orientation="vertical" />
        <Text className="text-sm">Docs</Text>
        <Separator orientation="vertical" />
        <Text className="text-sm">Source</Text>
      </View>
    </View>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Separator component for Native is built on top of <code>@rn-primitives/separator</code>.
        </p>

        <h4 className="mt-6 text-lg font-medium">Separator (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'orientation',
              type: '"horizontal" | "vertical"',
              defaultValue: '"horizontal"',
              description: 'The orientation of the separator.',
            },
          ]}
        />
      </div>
    </>
  );
}
