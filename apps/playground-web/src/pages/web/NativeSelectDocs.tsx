import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { NativeSelect, NativeSelectOption } from '@gv-tech/ui-web';

export function NativeSelectDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A native select dropdown."
        code={`<NativeSelect>
  <NativeSelectOption value="1">Option 1</NativeSelectOption>
  <NativeSelectOption value="2">Option 2</NativeSelectOption>
</NativeSelect>`}
      >
        <NativeSelect className="w-[200px]">
          <NativeSelectOption value="1">Option 1</NativeSelectOption>
          <NativeSelectOption value="2">Option 2</NativeSelectOption>
        </NativeSelect>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'size',
              type: '"sm" | "default"',
              defaultValue: '"default"',
              description: 'The size of the select.',
            },
          ]}
        />
      </div>
    </>
  );
}
