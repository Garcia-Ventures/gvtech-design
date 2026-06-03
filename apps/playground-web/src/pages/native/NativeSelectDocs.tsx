import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { NativeSelect } from '@gv-tech/ui-native';

export function NativeSelectDocs() {
  return (
    <>
      <ComponentShowcase title="Default" description="A native select dropdown." code={`<NativeSelect />`}>
        <NativeSelect className="w-[200px]" />
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
