import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
// @ts-nocheck

export function TextDocs() {
  return (
    <>
      <ComponentShowcase
        title="Typography (Native)"
        description="The Text component in React Native provides styled text using NativeWind."
        code={`<Text variant="h1">Native Heading 1</Text>
<Text variant="h2">Native Heading 2</Text>
<Text variant="body">Native body text.</Text>
<Text variant="caption">Native caption text.</Text>`}
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
