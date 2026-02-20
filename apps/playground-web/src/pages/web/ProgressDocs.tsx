import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Progress } from '@gv-tech/ui-web';
import { useEffect, useState } from 'react';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = false as boolean;

// @ts-ignore

const platform = 'web' as string;

export function ProgressDocs() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ComponentShowcase title="Default" description="A default progress bar." code={`<Progress value={33} />`}>
        <Progress value={progress} className="w-[60%]" />
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
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

        <h4 className="text-lg font-medium mt-6">Progress (Root)</h4>
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
