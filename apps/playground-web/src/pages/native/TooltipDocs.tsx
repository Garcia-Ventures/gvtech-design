import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function TooltipDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A tooltip (tap to open on mobile) for Native."
        code={`import { 
  Tooltip, 
  TooltipTrigger, 
  TooltipContent, 
  Button, 
  Text 
} from "@gv-tech/design-system";

export function TooltipExample() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">
          <Text>Long press or tap</Text>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <Text>Add to library</Text>
      </TooltipContent>
    </Tooltip>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Tooltip component for Native is built on top of <code>@rn-primitives/tooltip</code>. Note: On touch
          devices, this component behaves as a tap-to-toggle or long-press-to-toggle depending on configuration.
        </p>

        <h4 className="mt-6 text-lg font-medium">Tooltip (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'open',
              type: 'boolean',
              description: 'The controlled open state of the tooltip.',
            },
            {
              name: 'onOpenChange',
              type: '(open: boolean) => void',
              description: 'Event handler called when the open state changes.',
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
          ]}
        />
      </div>
    </>
  );
}
