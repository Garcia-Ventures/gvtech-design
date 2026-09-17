import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Marker, MarkerContent, MarkerIcon } from '@gv-tech/ui-web';

export function MarkerDocs() {
  return (
    <>
      <ComponentShowcase
        title="Variants"
        description="Markers annotate a timeline or feed: plain, ruled separator, or bordered section."
        code={`<Marker><MarkerContent>Conversation started</MarkerContent></Marker>
<Marker variant="separator"><MarkerContent>Today</MarkerContent></Marker>
<Marker variant="border"><MarkerContent>Pinned summary</MarkerContent></Marker>`}
      >
        <Marker>
          <MarkerContent>Conversation started</MarkerContent>
        </Marker>
        <Marker variant="separator">
          <MarkerContent>Today</MarkerContent>
        </Marker>
        <Marker variant="border">
          <MarkerContent>Pinned summary</MarkerContent>
        </Marker>
      </ComponentShowcase>

      <ComponentShowcase
        title="With icon"
        description="Pair MarkerIcon with MarkerContent for status-style markers."
        code={`<Marker>
  <MarkerIcon>●</MarkerIcon>
  <MarkerContent>Model switched to v2</MarkerContent>
</Marker>`}
      >
        <Marker>
          <MarkerIcon>●</MarkerIcon>
          <MarkerContent>Model switched to v2</MarkerContent>
        </Marker>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'variant',
              type: '"default" | "separator" | "border"',
              description: 'The visual style of the marker. Applies to Marker only.',
            },
            {
              name: 'asChild',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Render Marker as its child element. Applies to Marker only.',
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
