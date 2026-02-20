import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Slider } from '@gv-tech/ui-web';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = false as boolean;

// @ts-ignore

const platform = 'web' as string;

export function SliderDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default slider."
        code={`<Slider defaultValue={[33]} max={100} step={1} />`}
      >
        <Slider defaultValue={[33]} max={100} step={1} className="w-[60%]" />
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Slider component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/slider"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Slider
          </a>
          .
        </p>

        <h4 className="text-lg font-medium mt-6">Slider (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'defaultValue',
              type: 'number[]',
              description: 'The value of the slider when initially rendered.',
            },
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
              name: 'onValueCommit',
              type: '(value: number[]) => void',
              description: 'Event handler called when the value changes at the end of an interaction.',
            },
            {
              name: 'name',
              type: 'string',
              description: 'The name of the slider. Submitted with its owning form as part of a name/value pair.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'When true, prevents the user from interacting with the slider.',
            },
            {
              name: 'orientation',
              type: '"horizontal" | "vertical"',
              defaultValue: '"horizontal"',
              description: 'The orientation of the slider.',
            },
            {
              name: 'dir',
              type: '"ltr" | "rtl"',
              description: 'The reading direction of the slider.',
            },
            {
              name: 'min',
              type: 'number',
              defaultValue: '0',
              description: 'The minimum value for the range.',
            },
            {
              name: 'max',
              type: 'number',
              defaultValue: '100',
              description: 'The maximum value for the range.',
            },
            {
              name: 'step',
              type: 'number',
              defaultValue: '1',
              description: 'The stepping interval.',
            },
            {
              name: 'minStepsBetweenThumbs',
              type: 'number',
              defaultValue: '0',
              description: 'The minimum permitted step difference between thumbs.',
            },
            {
              name: 'inverted',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Whether the slider is visually inverted.',
            },
          ]}
        />
      </div>
    </>
  );
}
