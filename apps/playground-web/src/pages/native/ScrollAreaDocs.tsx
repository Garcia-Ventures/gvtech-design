import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */
import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function ScrollAreaDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default scroll area."
        code={`<ScrollArea className="h-72 w-48 rounded-md border">
  <div className="p-4">
    <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
    {tags.map((tag) => (
      <>
        <div key={tag} className="text-sm">
          {tag}
        </div>
        <Separator className="my-2" />
      </>
    ))}
  </div>
</ScrollArea>`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Scroll Area component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/scroll-area"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Scroll Area
          </a>
          .
        </p>

        <h4 className="mt-6 text-lg font-medium">ScrollArea (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'type',
              type: '"auto" | "always" | "scroll" | "hover"',
              defaultValue: '"hover"',
              description: 'Describes the nature of scrollbar visibility.',
            },
            {
              name: 'scrollHideDelay',
              type: 'number',
              defaultValue: '600',
              description:
                'If type is "scroll" or "hover", this property determines how long the scrollbar remains visible before hiding.',
            },
            {
              name: 'dir',
              type: '"ltr" | "rtl"',
              description: 'The reading direction of the scroll area.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">ScrollBar</h4>
        <PropsTable
          props={[
            {
              name: 'orientation',
              type: '"horizontal" | "vertical"',
              defaultValue: '"vertical"',
              description: 'The orientation of the scrollbar.',
            },
            {
              name: 'forceMount',
              type: 'boolean',
              description: 'Used to force mounting when more control is needed.',
            },
          ]}
        />
      </div>
    </>
  );
}
