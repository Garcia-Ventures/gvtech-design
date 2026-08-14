import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function DirectionDocs() {
  return (
    <>
      <ComponentShowcase
        title="Provider"
        description="A provider to manage RTL/LTR direction."
        code={`import { DirectionProvider } from '@gv-tech/ui-native';
import { Text, View } from 'react-native';

export function DirectionExample() {
  return (
    <DirectionProvider dir="rtl">
      <View className="p-4 border border-border rounded">
        <Text>RTL Context</Text>
      </View>
    </DirectionProvider>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'dir',
              type: '"ltr" | "rtl"',
              defaultValue: '"ltr"',
              description: 'The layout direction.',
            },
          ]}
        />
      </div>
    </>
  );
}
