import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Toggle } from '@gv-tech/ui-web';
import { Bold } from 'lucide-react';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = false as boolean;

// @ts-ignore

const platform = 'web' as string;

export function ToggleDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default toggle."
        code={`<Toggle aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>`}
      >
        <Toggle aria-label="Toggle bold" pressed={false} onPressedChange={() => {}}>
          <Bold className="h-4 w-4" />
        </Toggle>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Toggle component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/toggle"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Toggle
          </a>
          .
        </p>

        <h4 className="mt-6 text-lg font-medium">Toggle</h4>
        <PropsTable
          props={[
            {
              name: 'defaultPressed',
              type: 'boolean',
              description: 'The pressed state of the toggle when it is initially rendered.',
            },
            {
              name: 'pressed',
              type: 'boolean',
              description: 'The controlled pressed state of the toggle.',
            },
            {
              name: 'onPressedChange',
              type: '(pressed: boolean) => void',
              description: 'Event handler called when the pressed state of the toggle changes.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'When true, prevents the user from interacting with the toggle.',
            },
            {
              name: 'variant',
              type: '"default" | "outline"',
              defaultValue: '"default"',
              description: 'The visual variant of the toggle.',
            },
            {
              name: 'size',
              type: '"default" | "sm" | "lg"',
              defaultValue: '"default"',
              description: 'The size of the toggle.',
            },
          ]}
        />
      </div>
    </>
  );
}
