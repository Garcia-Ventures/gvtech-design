import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
// @ts-nocheck

export function TextDocs() {
  return (
    <>
      <ComponentShowcase
        title="Headings (Native)"
        description="React Native text headings compiled for high contrast."
        code={`<Text variant="h1">Native Heading 1</Text>
<Text variant="h2">Native Heading 2</Text>
<Text variant="h3">Native Heading 3</Text>
<Text variant="h4">Native Heading 4</Text>`}
      />

      <ComponentShowcase
        title="Body & Small Text (Native)"
        description="Native paragraphs styled for perfect text contrast."
        code={`<Text variant="body">Native body text.</Text>
<Text variant="bodySmall">Native smaller body text for descriptions.</Text>`}
      />

      <ComponentShowcase
        title="Utility Text (Native)"
        description="Helper typographic components for metadata and parameters."
        code={`<Text variant="caption">Native caption text.</Text>
<Text variant="label">NATIVE LABEL</Text>
<Text variant="overline">NATIVE OVERLINE</Text>`}
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
