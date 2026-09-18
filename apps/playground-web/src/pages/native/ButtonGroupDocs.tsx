import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function ButtonGroupDocs() {
  return (
    <>
      <ComponentShowcase
        title="Horizontal"
        description="A group of buttons aligned horizontally."
        code={`import { Button, ButtonGroup, ButtonGroupSeparator, Text } from '@gv-tech/ui-native';

export function ButtonGroupExample() {
  return (
    <ButtonGroup>
      <Button><Text>One</Text></Button>
      <ButtonGroupSeparator />
      <Button><Text>Two</Text></Button>
      <ButtonGroupSeparator />
      <Button><Text>Three</Text></Button>
    </ButtonGroup>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'orientation',
              type: '"horizontal" | "vertical"',
              defaultValue: '"horizontal"',
              description: 'The orientation of the button group.',
            },
          ]}
        />
      </div>
    </>
  );
}
