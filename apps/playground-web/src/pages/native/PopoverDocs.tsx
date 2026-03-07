import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function PopoverDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default (Native)"
        description="A popover implemented using a React Native Modal. Centers content and overlays the screen."
        code={`<Popover>
  <PopoverTrigger>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <Label>Popover content</Label>
    <Input placeholder="Type here..."/>
  </PopoverContent>
</Popover>`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Native Implementation Notes</h3>
        <p className="text-muted-foreground text-sm">
          The Popover component for React Native is implemented using a <b>Modal</b> and centers its content with a
          dimmed background overlay. It does not use Radix UI. Dismiss by tapping outside the content.
        </p>
        <ul className="text-muted-foreground ml-6 list-disc text-sm">
          <li>Content is always centered and overlays the entire screen.</li>
          <li>
            Props like <code>onOpenChange</code> and <code>open</code> are supported for controlled/uncontrolled usage.
          </li>
          <li>There is no floating positioning or anchor support (content is always centered).</li>
          <li>
            Use <code>PopoverTrigger</code> to open, and <code>PopoverContent</code> for the modal content.
          </li>
        </ul>

        <h4 className="mt-6 text-lg font-medium">Popover (Root)</h4>
        <PropsTable
          props={[
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
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">PopoverContent</h4>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: 'Tailwind/NativeWind classes for styling the content container.',
            },
            {
              name: 'children',
              type: 'React.ReactNode',
              description: 'Content to render inside the popover.',
            },
          ]}
        />
      </div>
    </>
  );
}
