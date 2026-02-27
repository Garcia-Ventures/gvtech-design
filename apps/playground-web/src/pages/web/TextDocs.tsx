import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Text } from '@gv-tech/ui-web';

export function TextDocs() {
  return (
    <>
      <ComponentShowcase
        title="Typography"
        description="The Text component provides a consistent way to render text with various styles and semantic levels."
        code={`<div className="space-y-4">
  <Text variant="h1">Heading 1</Text>
  <Text variant="h2">Heading 2</Text>
  <Text variant="h3">Heading 3</Text>
  <Text variant="h4">Heading 4</Text>
  <Text variant="body">Body text (default)</Text>
  <Text variant="bodySmall">Small body text.</Text>
  <Text variant="caption">Caption text.</Text>
  <Text variant="label">Label text.</Text>
  <Text variant="overline">Overline text.</Text>
</div>`}
      >
        <div className="space-y-4">
          <Text variant="h1">Heading 1</Text>
          <Text variant="h2">Heading 2</Text>
          <Text variant="h3">Heading 3</Text>
          <Text variant="h4">Heading 4</Text>
          <Text variant="body">Body text (default)</Text>
          <Text variant="bodySmall">Small body text.</Text>
          <Text variant="caption">Caption text.</Text>
          <Text variant="label">Label text.</Text>
          <Text variant="overline">Overline text.</Text>
        </div>
      </ComponentShowcase>

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
              name: 'as',
              type: 'keyof JSX.IntrinsicElements',
              description: 'Override the HTML element associated with the variant.',
            },
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS classes to apply.',
            },
          ]}
        />
      </div>
    </>
  );
}
