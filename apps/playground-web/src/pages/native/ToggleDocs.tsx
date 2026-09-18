import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function ToggleDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default toggle for Native."
        code={`import { Toggle } from "@gv-tech/design-system";
import { Bold } from "lucide-react-native";

export function ToggleExample() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold size={16} className="text-foreground" />
    </Toggle>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Toggle component for Native is built on top of <code>@rn-primitives/toggle</code>.
        </p>

        <h4 className="mt-6 text-lg font-medium">Toggle</h4>
        <PropsTable
          props={[
            {
              name: 'pressed',
              type: 'boolean',
              description: 'The controlled pressed state of the toggle.',
            },
            {
              name: 'onPressedChange',
              type: '(pressed: boolean) => void',
              description: 'Event handler called when the pressed state changes.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'When true, prevents interaction.',
            },
            {
              name: 'variant',
              type: '"default" | "outline"',
              defaultValue: '"default"',
              description: 'The visual variant of the toggle.',
            },
            {
              name: 'size',
              type: '"default" | "sm" | "lg"',
              defaultValue: '"default"',
              description: 'The size of the toggle.',
            },
          ]}
        />
      </div>
    </>
  );
}
