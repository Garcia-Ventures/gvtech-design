import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function AccordionDocs() {
  return (
    <>
      <ComponentShowcase
        title="Example"
        description="A simple accordion with multiple items on Native."
        code={`import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger,
  Text
} from "@gv-tech/design-system";

export function AccordionExample() {
  return (
    <Accordion type="multiple" collapsible defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <Text>Is it accessible?</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text>Yes. It adheres to the WAI-ARIA design pattern using @rn-primitives.</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <Text>Is it styled?</Text>
        </AccordionTrigger>
        <AccordionContent>
          <Text>Yes. It uses NativeWind for consistent styling across platforms.</Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Accordion component for Native is built on top of <code>@rn-primitives/accordion</code>.
        </p>
        <PropsTable
          props={[
            {
              name: 'type',
              type: '"single" | "multiple"',
              defaultValue: '"single"',
              description: 'Whether one or multiple items can be opened at the same time.',
            },
            {
              name: 'collapsible',
              type: 'boolean',
              defaultValue: 'false',
              description: 'When type is "single", allows closing content when clicking trigger for an open item.',
            },
            {
              name: 'defaultValue',
              type: 'string | string[]',
              description: 'The value of the item(s) to expand by default.',
            },
            {
              name: 'value',
              type: 'string | string[]',
              description: 'The controlled value of the item(s) to expand.',
            },
            {
              name: 'onValueChange',
              type: '(value: string | string[]) => void',
              description: 'Event handler called when the expanded state of an item changes.',
            },
          ]}
        />
      </div>
    </>
  );
}
