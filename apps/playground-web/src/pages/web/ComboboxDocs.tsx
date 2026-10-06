import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function ComboboxDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A filterable popup selection control built on Base UI Combobox."
        code={`import { Combobox } from '@gv-tech/ui-web';

export function Example() {
  return <Combobox />;
}`}
      >
        <div className="text-muted-foreground text-sm">Combobox examples will be added here</div>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'value',
              type: 'Value | null',
              description: 'The controlled selected value.',
            },
            {
              name: 'defaultValue',
              type: 'Value | null',
              description: 'The uncontrolled initial selected value.',
            },
            {
              name: 'onValueChange',
              type: '(value: Value | null) => void',
              description: 'Called when the selected value changes.',
            },
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Called when the popup open state changes.',
            },
          ]}
        />
      </div>
    </>
  );
}
