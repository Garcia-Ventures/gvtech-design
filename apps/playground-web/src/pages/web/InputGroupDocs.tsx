import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@gv-tech/ui-web';
import { Search } from 'lucide-react';

export function InputGroupDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="An input with prefix/suffix addons."
        code={`<InputGroup>
  <InputGroupAddon>
    <Search className="size-4" />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
  <InputGroupAddon align="inline-end">⌘K</InputGroupAddon>
</InputGroup>`}
      >
        <InputGroup className="max-w-sm">
          <InputGroupAddon>
            <Search className="text-muted-foreground size-4" />
          </InputGroupAddon>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon align="inline-end" className="text-muted-foreground rounded border px-1 text-xs">
            ⌘K
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
              description: 'Additional CSS classes.',
            },
          ]}
        />
      </div>
    </>
  );
}
