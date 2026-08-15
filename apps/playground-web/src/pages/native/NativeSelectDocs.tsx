import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function NativeSelectDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A native select dropdown for Native."
        code={`import { NativeSelect } from '@gv-tech/ui-native';

export function NativeSelectExample() {
  return <NativeSelect className="w-[200px]" />;
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
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
