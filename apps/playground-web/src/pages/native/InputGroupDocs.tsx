import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { InputGroup, InputGroupAddon, InputGroupInput, Text } from '@gv-tech/ui-native';
import { Search } from 'lucide-react-native';

export function InputGroupDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="An input with prefix/suffix addons."
        code={`<InputGroup>
  <InputGroupAddon>
    <Search size={16} />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon align="inline-end"><Text>⌘K</Text></InputGroupAddon>
</InputGroup>`}
      >
        <InputGroup className="max-w-sm">
          <InputGroupAddon>
            <Search size={16} className="text-muted-foreground" />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon align="inline-end">
            <Text className="text-muted-foreground border-border rounded border px-1 text-xs">⌘K</Text>
          </InputGroupAddon>
        </InputGroup>
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
