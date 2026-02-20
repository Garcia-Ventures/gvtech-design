import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function LabelDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default label."
        code={`<Label htmlFor="terms">Accept terms and conditions</Label>`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Label component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/label"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Label
          </a>
          .
        </p>
        <PropsTable
          props={[
            {
              name: 'htmlFor',
              type: 'string',
              description: 'The id of the element the label is associated with.',
            },
            {
              name: 'asChild',
              type: 'boolean',
              description: 'Change the default rendered element for the one passed as a child.',
            },
          ]}
        />
      </div>
    </>
  );
}
