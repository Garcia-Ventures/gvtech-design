import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function TextDocs() {
  return (
    <>
      <ComponentShowcase
        title="Headings"
        description="Text headings for Native."
        code={`import { Text } from "@gv-tech/design-system";

export function HeadingsExample() {
  return (
    <>
      <Text variant="h1">Native Heading 1</Text>
      <Text variant="h2">Native Heading 2</Text>
      <Text variant="h3">Native Heading 3</Text>
      <Text variant="h4">Native Heading 4</Text>
    </>
  );
}`}
      />

      <ComponentShowcase
        title="Body & Small Text"
        description="Paragraphs and smaller text for Native."
        code={`import { Text } from "@gv-tech/design-system";

export function BodyExample() {
  return (
    <>
      <Text variant="body">Native body text.</Text>
      <Text variant="bodySmall">Native smaller body text for descriptions.</Text>
    </>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'variant',
              type: '"h1" | "h2" | "h3" | "h4" | "body" | "bodySmall" | "caption" | "label" | "overline"',
              defaultValue: '"body"',
              description: 'The visual style and semantic level of the text.',
            },
            {
              name: 'className',
              type: 'string',
              description: 'NativeWind classes to apply.',
            },
          ]}
        />
      </div>
    </>
  );
}
