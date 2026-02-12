import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export function PopoverDocs() {
  return (
    <ComponentSection title="Popover" description="Displays rich content in a portal, triggered by a button.">
      <ComponentShowcase
        title="Default"
        description="A default popover."
        code={`<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="grid gap-4">
      <div className="space-y-2">
        <h4 className="font-medium leading-none">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="width">Width</Label>
          <Input
            id="width"
            defaultValue="100%"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxWidth">Max. width</Label>
          <Input
            id="maxWidth"
            defaultValue="300px"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="height">Height</Label>
          <Input
            id="height"
            defaultValue="25px"
            className="col-span-2 h-8"
          />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="maxHeight">Max. height</Label>
          <Input
            id="maxHeight"
            defaultValue="none"
            className="col-span-2 h-8"
          />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`}
      >
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="width">Width</Label>
                  <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxWidth">Max. width</Label>
                  <Input id="maxWidth" defaultValue="300px" className="col-span-2 h-8" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="height">Height</Label>
                  <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <Label htmlFor="maxHeight">Max. height</Label>
                  <Input id="maxHeight" defaultValue="none" className="col-span-2 h-8" />
                </div>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-sm text-muted-foreground">
          The Popover component is built on top of{' '}
          <a
            href="https://www.radix-ui.com/primitives/docs/components/popover"
            className="underline"
            target="_blank"
            rel="noreferrer"
          >
            Radix UI Popover
          </a>
          .
        </p>

        <h4 className="text-lg font-medium mt-6">Popover (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'defaultOpen',
              type: 'boolean',
              description: 'The open state of the popover when it is initially rendered.',
            },
            {
              name: 'open',
              type: 'boolean',
              description: 'The controlled open state of the popover.',
            },
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Event handler called when the open state changes.',
            },
            {
              name: 'modal',
              type: 'boolean',
              defaultValue: 'false',
              description: 'The modality of the popover.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">PopoverContent</h4>
        <PropsTable
          props={[
            {
              name: 'onOpenAutoFocus',
              type: '(event: Event) => void',
              description: 'Event handler called when focus moves into the component after opening.',
            },
            {
              name: 'onCloseAutoFocus',
              type: '(event: Event) => void',
              description: 'Event handler called when focus moves to the trigger after closing.',
            },
            {
              name: 'onEscapeKeyDown',
              type: '(event: KeyboardEvent) => void',
              description: 'Event handler called when the escape key is down.',
            },
            {
              name: 'onPointerDownOutside',
              type: '(event: PointerDownOutsideEvent) => void',
              description: 'Event handler called when a pointer event occurs outside the bounds of the component.',
            },
            {
              name: 'onFocusOutside',
              type: '(event: FocusOutsideEvent) => void',
              description: 'Event handler called when focus moves outside the bounds of the component.',
            },
            {
              name: 'onInteractOutside',
              type: '(event: PointerDownOutsideEvent | FocusOutsideEvent) => void',
              description:
                'Event handler called when an interaction (pointer or focus) happens outside the bounds of the component.',
            },
            {
              name: 'forceMount',
              type: 'boolean',
              description: 'Used to force mounting when more control is needed.',
            },
          ]}
        />
      </div>
    </ComponentSection>
  );
}
