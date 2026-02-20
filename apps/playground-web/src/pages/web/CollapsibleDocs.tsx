import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from '@gv-tech/ui-web';
import { ChevronsUpDown } from 'lucide-react';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */
import * as React from 'react';

// @ts-ignore

const isNative = false as boolean;

// @ts-ignore

const platform = 'web' as string;

export function CollapsibleDocs() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A collapsible panel with animation."
        code={`const [isOpen, setIsOpen] = React.useState(false);

<Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
  <div className="flex items-center justify-between space-x-4 px-4">
    <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm" className="w-9 p-0">
        <ChevronsUpDown className="h-4 w-4" />
      </Button>
    </CollapsibleTrigger>
  </div>
  <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
    <div className="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
  </CollapsibleContent>
</Collapsible>`}
      >
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
          <div className="flex items-center justify-between space-x-4 px-4">
            <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" className="w-9 p-0">
                <ChevronsUpDown className="h-4 w-4" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
            <div className="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
          </CollapsibleContent>
        </Collapsible>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Collapsible component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/collapsible"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Collapsible
          </a>
          .
        </p>
        <PropsTable
          props={[
            {
              name: 'open',
              type: 'boolean',
              description: 'The controlled open state of the collapsible.',
            },
            {
              name: 'defaultOpen',
              type: 'boolean',
              description: 'The default open state when uncontrolled.',
            },
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Event handler called when the open state changes.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              description: 'When true, prevents the user from interacting with the collapsible.',
            },
          ]}
        />
        <h4 className="text-lg font-medium mt-6">CollapsibleContent</h4>
        <PropsTable
          props={[
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
