import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function SkeletonDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default skeleton for Native."
        code={`import { Skeleton } from "@gv-tech/design-system";
import { View } from "react-native";

export function SkeletonExample() {
  return (
    <View className="flex flex-row items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <View className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </View>
    </View>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Skeleton component for Native uses <code>react-native-reanimated</code> for a pulsing opacity effect.
        </p>

        <h4 className="mt-6 text-lg font-medium">Skeleton</h4>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: 'NativeWind classes to apply.',
            },
          ]}
        />
      </div>
    </>
  );
}
