import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Button, ButtonGroup, ButtonGroupSeparator } from '@gv-tech/ui-web';

export function ButtonGroupDocs() {
  return (
    <>
      <ComponentShowcase
        title="Horizontal"
        description="A group of buttons aligned horizontally."
        code={`<ButtonGroup>
  <Button>One</Button>
  <ButtonGroupSeparator />
  <Button>Two</Button>
  <ButtonGroupSeparator />
  <Button>Three</Button>
</ButtonGroup>`}
      >
        <ButtonGroup>
          <Button>One</Button>
          <ButtonGroupSeparator />
          <Button>Two</Button>
          <ButtonGroupSeparator />
          <Button>Three</Button>
        </ButtonGroup>
      </ComponentShowcase>

      <ComponentShowcase
        title="Vertical"
        description="A group of buttons aligned vertically."
        code={`<ButtonGroup orientation="vertical">
  <Button>One</Button>
  <ButtonGroupSeparator orientation="horizontal" />
  <Button>Two</Button>
  <ButtonGroupSeparator orientation="horizontal" />
  <Button>Three</Button>
</ButtonGroup>`}
      >
        <ButtonGroup orientation="vertical">
          <Button>One</Button>
          <ButtonGroupSeparator orientation="horizontal" />
          <Button>Two</Button>
          <ButtonGroupSeparator orientation="horizontal" />
          <Button>Three</Button>
        </ButtonGroup>
      </ComponentShowcase>

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
