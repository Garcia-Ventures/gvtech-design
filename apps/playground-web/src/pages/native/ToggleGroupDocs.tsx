import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function ToggleGroupDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default toggle group for Native."
        code={`import { ToggleGroup, ToggleGroupItem } from "@gv-tech/design-system";
import { Bold, Italic, Underline } from "lucide-react-native";

export function ToggleGroupExample() {
  return (
    <ToggleGroup type="multiple">
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold size={16} className="text-foreground" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic size={16} className="text-foreground" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline size={16} className="text-foreground" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The ToggleGroup component for Native is built on top of <code>@rn-primitives/toggle-group</code>.
        </p>

        <h4 className="mt-6 text-lg font-medium">ToggleGroup (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'type',
              type: '"single" | "multiple"',
              required: true,
              description: 'Determines whether a single or multiple items can be pressed at a time.',
            },
            {
              name: 'value',
              type: 'string | string[]',
              description: 'The controlled value of the pressed item.',
            },
            {
              name: 'onValueChange',
              type: '(value: string | string[]) => void',
              description: 'Event handler called when the value changes.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'When true, prevents interaction.',
            },
          ]}
        />
      </div>
    </>
  );
}
