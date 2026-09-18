import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function SliderDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default slider for Native."
        code={`import { Slider } from "@gv-tech/design-system";

export function SliderExample() {
  const [value, setValue] = React.useState([33]);

  return (
    <Slider 
      value={value} 
      onValueChange={setValue} 
      max={100} 
      step={1} 
    />
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Slider component for Native is built on top of <code>@rn-primitives/slider</code>.
        </p>

        <h4 className="mt-6 text-lg font-medium">Slider (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'value',
              type: 'number[]',
              description: 'The controlled value of the slider.',
            },
            {
              name: 'onValueChange',
              type: '(value: number[]) => void',
              description: 'Event handler called when the value changes.',
            },
            {
              name: 'min',
              type: 'number',
              defaultValue: '0',
              description: 'The minimum value.',
            },
            {
              name: 'max',
              type: 'number',
              defaultValue: '100',
              description: 'The maximum value.',
            },
            {
              name: 'step',
              type: 'number',
              defaultValue: '1',
              description: 'The stepping interval.',
            },
          ]}
        />
      </div>
    </>
  );
}
