import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */
import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function SeparatorDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A horizontal separator."
        code={`<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium leading-none">Radix Primitives</h4>
    <p className="text-sm text-muted-foreground">
      An open-source UI component library.
    </p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Separator component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/separator"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Separator
          </a>
          .
        </p>

        <h4 className="mt-6 text-lg font-medium">Separator (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'orientation',
              type: '"horizontal" | "vertical"',
              defaultValue: '"horizontal"',
              description: 'The orientation of the separator.',
            },
            {
              name: 'decorative',
              type: 'boolean',
              description:
                'When true, signifies that it is purely visual, covers it from the accessibility tree. When false, signifies that it is a semantic separator.',
            },
          ]}
        />
      </div>
    </>
  );
}
