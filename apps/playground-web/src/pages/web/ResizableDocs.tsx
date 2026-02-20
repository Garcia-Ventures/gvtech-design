import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@gv-tech/ui-web';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = false as boolean;

// @ts-ignore

const platform = 'web' as string;

export function ResizableDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A resizable panel group with three panels."
        code={`<ResizablePanelGroup
  direction="horizontal"
  className="max-w-md rounded-lg border"
>
  <ResizablePanel defaultSize={50}>
    <div className="flex h-[200px] items-center justify-center p-6">
      <span className="font-semibold">One</span>
    </div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel defaultSize={50}>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Two</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Three</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
</ResizablePanelGroup>`}
      >
        <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Two</span>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Resizable component is built on top of{' '}
          <a
            href="https://github.com/bvaughn/react-resizable-panels"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            react-resizable-panels
          </a>
          .
        </p>

        <h4 className="text-lg font-medium mt-6">ResizablePanelGroup</h4>
        <PropsTable
          props={[
            {
              name: 'direction',
              type: '"horizontal" | "vertical"',
              required: true,
              description: 'The direction of the panels.',
            },
            {
              name: 'onLayout',
              type: '(sizes: number[]) => void',
              description: 'Event handler called when the layout changes.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">ResizablePanel</h4>
        <PropsTable
          props={[
            {
              name: 'defaultSize',
              type: 'number',
              description: 'The initial size of the panel in percent.',
            },
            {
              name: 'minSize',
              type: 'number',
              description: 'The minimum size of the panel in percent.',
            },
            {
              name: 'maxSize',
              type: 'number',
              description: 'The maximum size of the panel in percent.',
            },
            {
              name: 'onResize',
              type: '(size: number) => void',
              description: 'Event handler called when the panel is resized.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">ResizableHandle</h4>
        <PropsTable
          props={[
            {
              name: 'withHandle',
              type: 'boolean',
              description: 'Whether to render a grip handle.',
            },
          ]}
        />
      </div>
    </>
  );
}
