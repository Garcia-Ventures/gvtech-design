import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function InputGroupDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="An input with prefix/suffix addons for Native."
        code={`import { InputGroup, InputGroupAddon, InputGroupInput, Text } from '@gv-tech/ui-native';
import { Search } from 'lucide-react-native';

export function InputGroupExample() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupAddon>
        <Search size={16} />
      </InputGroupAddon>
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon align="inline-end">
        <Text>⌘K</Text>
      </InputGroupAddon>
    </InputGroup>
  );
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
