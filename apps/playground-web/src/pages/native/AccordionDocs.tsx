import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
// @ts-nocheck

export function AccordionDocs() {
  return (
    <>
      <ComponentShowcase
        title="Example"
        description="A simple accordion with three items."
        code={`import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@gv-tech/design-system";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isNative = true as boolean;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const platform = 'native' as string;

<Accordion type="multiple" collapsible defaultValue={["item-1"]}>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles that matches the other components' aesthetic.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It's animated by default, but you can disable it if you prefer.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
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
              description: 'The value of the item to expand by default.',
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
