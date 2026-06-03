import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { DirectionProvider } from '@gv-tech/ui-native';
import { Text, View } from 'react-native';

export function DirectionDocs() {
  return (
    <>
      <ComponentShowcase
        title="Provider"
        description="A provider to manage RTL/LTR direction."
        code={`<DirectionProvider dir="rtl">
  {children}
</DirectionProvider>`}
      >
        <DirectionProvider dir="ltr">
          <View className="border-border rounded border p-4">
            <Text>LTR Context</Text>
          </View>
        </DirectionProvider>
      </ComponentShowcase>

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
