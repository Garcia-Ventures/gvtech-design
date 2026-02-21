import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */
import {
  Accordion as WebAccordion,
  AccordionContent as WebAccordionContent,
  AccordionItem as WebAccordionItem,
  AccordionTrigger as WebAccordionTrigger,
} from '@gv-tech/ui-web';

// @ts-ignore

const isNative = false as boolean;

// @ts-ignore

const platform = 'web' as string;

export function AccordionDocs() {
  const Accordion = WebAccordion;
  const AccordionContent = WebAccordionContent;
  const AccordionItem = WebAccordionItem;
  const AccordionTrigger = WebAccordionTrigger;

  return (
    <>
      {null}
      <ComponentShowcase
        title="Default"
        description="A basic accordion component."
        code={`<Accordion type="single" collapsible className="w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>
      Yes. It's animated by default.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
      >
        <Accordion type="single" collapsible className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>

        <h4 className="mt-6 text-lg font-medium">Accordion (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'type',
              type: '"single" | "multiple"',
              description: 'Determines whether one or multiple items can be opened at the same time.',
              required: true,
            },
            {
              name: 'collapsible',
              type: 'boolean',
              defaultValue: 'false check',
              description: 'When type is "single", allows closing content when clicking trigger for an open item.',
            },
            {
              name: 'value',
              type: 'string | string[]',
              description: 'The controlled value of the item(s) to expand.',
            },
            {
              name: 'defaultValue',
              type: 'string | string[]',
              description: 'The default value of the item(s) to expand.',
            },
            {
              name: 'onValueChange',
              type: '(value: string | string[]) => void',
              description: 'Event handler called when the expanded state of an item changes.',
            },
            {
              name: 'disabled',
              type: 'boolean',
              defaultValue: 'false',
              description: 'When true, prevents the user from interacting with the accordion.',
            },
            {
              name: 'dir',
              type: '"ltr" | "rtl"',
              defaultValue: '"ltr"',
              description: 'The reading direction of the accordion.',
            },
            {
              name: 'orientation',
              type: '"vertical" | "horizontal"',
              defaultValue: '"vertical"',
              description: 'The orientation of the accordion.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">AccordionItem</h4>
        <PropsTable
          props={[
            {
              name: 'value',
              type: 'string',
              description: 'A unique value for the item.',
              required: true,
            },
            {
              name: 'disabled',
              type: 'boolean',
              defaultValue: 'false',
              description: 'When true, prevents the user from interacting with the item.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">AccordionTrigger</h4>
        <PropsTable
          props={[
            {
              name: 'children',
              type: 'ReactNode',
              description: 'The content of the trigger.',
            },
            ...(!isNative
              ? [
                  {
                    name: 'asChild',
                    type: 'boolean',
                    defaultValue: 'false',
                    description:
                      'Change the default rendered element for the one passed as a child, merging their props and behavior.',
                  },
                ]
              : []),
            {
              name: 'className',
              type: 'string',
              description: isNative ? 'Tailwind (NativeWind) classes.' : 'Additional CSS classes to apply.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">AccordionContent</h4>
        <PropsTable
          props={[
            {
              name: 'children',
              type: 'ReactNode',
              description: 'The content of the item.',
            },
            ...(!isNative
              ? [
                  {
                    name: 'forceMount',
                    type: 'boolean',
                    description:
                      'Used to force mounting when more control is needed. Useful when controlling animation with React libraries.',
                  },
                ]
              : []),
          ]}
        />
      </div>
    </>
  );
}
