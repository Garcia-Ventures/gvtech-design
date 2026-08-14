import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function SpinnerDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A loading spinner component for Native."
        code={`import { Spinner } from '@gv-tech/ui-native';

export function SpinnerExample() {
  return <Spinner />;
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
