import { PropsTable } from '@/components/docs/PropsTable';
import { TableOfContents, Text } from '@gv-tech/ui-native';
import { View } from 'react-native';

export function TableOfContentsDocs() {
  return (
    <>
      <View className="flex-col gap-4 p-4">
        <Text variant="h2">Native Implementation</Text>
        <Text variant="body">
          The Table of Contents component is currently a shim in React Native. Native styling and behavior can be
          implemented as needed using this component as a base.
        </Text>
        <TableOfContents />
      </View>

      <div className="space-y-4">
        <h3 className="px-4 text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: 'NativeWind classes.',
            },
          ]}
        />
      </div>
    </>
  );
}
