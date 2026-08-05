import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function PopoverDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A popover implemented using a React Native Modal for Native."
        code={`import { 
  Popover, 
  PopoverTrigger, 
  PopoverContent, 
  Button, 
  Text, 
  Label, 
  Input 
} from '@gv-tech/design-system';

export function PopoverExample() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Text>Open popover</Text>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Label nativeID="popover-input">Popover content</Label>
        <Input nativeID="popover-input" placeholder="Type here..."/>
      </PopoverContent>
    </Popover>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Native Implementation Notes</h3>
        <p className="text-muted-foreground text-sm">
          The Popover component for Native is implemented using a <code>Modal</code> and centers its content with a
          dimmed background overlay.
        </p>

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
              description: 'NativeWind classes for styling the content container.',
            },
          ]}
        />
      </div>
    </>
  );
}
