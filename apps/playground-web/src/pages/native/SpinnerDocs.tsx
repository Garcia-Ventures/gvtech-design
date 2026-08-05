import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Spinner } from '@gv-tech/ui-native';

export function SpinnerDocs() {
  return (
    <>
      <ComponentShowcase title="Default" description="A loading spinner component." code={`<Spinner />`}>
        <Spinner />
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: 'Tailwind CSS classes.',
            },
          ]}
        />
      </div>
    </>
  );
}
