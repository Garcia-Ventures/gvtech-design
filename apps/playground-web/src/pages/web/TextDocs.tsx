import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Text } from '@gv-tech/ui-web';

export function TextDocs() {
  return (
    <>
      <ComponentShowcase
        title="Headings"
        description="Headings are used for page titles, section dividers, and important visual structural cues."
        code={`<div className="space-y-4">
  <Text variant="h1">Heading 1</Text>
  <Text variant="h2">Heading 2</Text>
  <Text variant="h3">Heading 3</Text>
  <Text variant="h4">Heading 4</Text>
</div>`}
      >
        <div className="space-y-4">
          <Text variant="h1">Heading 1</Text>
          <Text variant="h2">Heading 2</Text>
          <Text variant="h3">Heading 3</Text>
          <Text variant="h4">Heading 4</Text>
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="Body & Small Body"
        description="Body and small variants are optimized for readability in paragraph blocks and core user interface elements."
        code={`<div className="space-y-4">
  <Text variant="body">This is body text. The default premium font family provides an elite checkbook reading experience.</Text>
  <Text variant="bodySmall">This is bodySmall text, perfect for detailed logs, minor descriptions, or secondary information.</Text>
</div>`}
      >
        <div className="space-y-4">
          <Text variant="body">
            This is body text. The default premium font family provides an elite checkbook reading experience.
          </Text>
          <Text variant="bodySmall">
            This is bodySmall text, perfect for detailed logs, minor descriptions, or secondary information.
          </Text>
        </div>
      </ComponentShowcase>

      <ComponentShowcase
        title="Utility Typography"
        description="Utility variants such as overlines, captions, and labels help establish clean functional layouts."
        code={`<div className="space-y-4">
  <Text variant="label">LABEL TYPOGRAPHY</Text>
  <Text variant="overline">OVERLINE TYPOGRAPHY</Text>
  <Text variant="caption">Caption label or footnotes</Text>
</div>`}
      >
        <div className="space-y-4">
          <div>
            <Text variant="label">LABEL TYPOGRAPHY</Text>
          </div>
          <div>
            <Text variant="overline">OVERLINE TYPOGRAPHY</Text>
          </div>
          <div>
            <Text variant="caption">Caption label or footnotes</Text>
          </div>
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
