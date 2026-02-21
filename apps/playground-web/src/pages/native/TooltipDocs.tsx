import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */
import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function TooltipDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default tooltip."
        code={`<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Tooltip component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/tooltip"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Tooltip
          </a>
          .
        </p>

        <h4 className="mt-6 text-lg font-medium">TooltipProvider</h4>
        <PropsTable
          props={[
            {
              name: 'delayDuration',
              type: 'number',
              defaultValue: '700',
              description: 'The duration from when the mouse enters a tooltip trigger until the tooltip opens.',
            },
            {
              name: 'skipDelayDuration',
              type: 'number',
              defaultValue: '300',
              description: 'How much time a user has to enter another trigger without incurring a delay again.',
            },
            {
              name: 'disableHoverableContent',
              type: 'boolean',
              description:
                'When true, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">Tooltip (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'defaultOpen',
              type: 'boolean',
              description: 'The open state of the tooltip when it is initially rendered.',
            },
            {
              name: 'open',
              type: 'boolean',
              description: 'The controlled open state of the tooltip.',
            },
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Event handler called when the open state of the tooltip changes.',
            },
            {
              name: 'delayDuration',
              type: 'number',
              defaultValue: '700',
              description: 'The duration from when the mouse enters a tooltip trigger until the tooltip opens.',
            },
            {
              name: 'disableHoverableContent',
              type: 'boolean',
              description:
                'When true, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">TooltipContent</h4>
        <PropsTable
          props={[
            {
              name: 'side',
              type: '"top" | "right" | "bottom" | "left"',
              defaultValue: '"top"',
              description: 'The preferred side of the trigger to render against when open.',
            },
            {
              name: 'sideOffset',
              type: 'number',
              description: 'The distance in pixels from the trigger.',
            },
            {
              name: 'align',
              type: '"start" | "center" | "end"',
              defaultValue: '"center"',
              description: 'The preferred alignment against the trigger.',
            },
            {
              name: 'alignOffset',
              type: 'number',
              description: 'An offset in pixels from the "start" or "end" alignment options.',
            },
            {
              name: 'avoidCollisions',
              type: 'boolean',
              defaultValue: 'true',
              description:
                'When true, overrides the side and align preferences to prevent collisions with boundary edges.',
            },
          ]}
        />
      </div>
    </>
  );
}
