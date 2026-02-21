import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function ProgressDocs() {
  return (
    <>
      <ComponentShowcase title="Default" description="A default progress bar." code={`<Progress value={33} />`} />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Progress component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/progress"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Progress
          </a>
          .
        </p>

        <h4 className="mt-6 text-lg font-medium">Progress (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'value',
              type: 'number | null',
              description: 'The progress value.',
            },
            {
              name: 'max',
              type: 'number',
              defaultValue: '100',
              description: 'The maximum progress value.',
            },
            {
              name: 'getValueLabel',
              type: '(value: number, max: number) => string',
              defaultValue: '"${value}%"',
              description:
                'A function to get the accessible label text representing the current value in a human-readable format.',
            },
          ]}
        />
      </div>
    </>
  );
}
