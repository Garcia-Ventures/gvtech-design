import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function TableOfContentsDocs() {
  return (
    <>
      <ComponentShowcase
        title="Native Usage"
        description="In React Native, the Table of Contents uses a registration-based system. Use TableOfContents.Heading to mark sections that should appear in the list."
        code={`import { TableOfContents, Text } from "@gv-tech/design-system";

<TableOfContents>
  <TableOfContents.List />
  <TableOfContents.Content>
    <TableOfContents.Heading level={2}>Introduction</TableOfContents.Heading>
    <Text>The Native Table of Contents component provides a way to navigate long scrollable content.</Text>
    
    <TableOfContents.Heading level={2}>Key Features</TableOfContents.Heading>
    <TableOfContents.Heading level={3}>Scroll Synchronization</TableOfContents.Heading>
    <Text>The TOC list updates its active state based on the current scroll position.</Text>
    
    <TableOfContents.Heading level={3}>Direct Navigation</TableOfContents.Heading>
    <Text>Tapping on a TOC item smoothly scrolls the content to the heading.</Text>
  </TableOfContents.Content>
</TableOfContents>`}
      />

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold">TableOfContents (Root)</h3>
          <PropsTable
            props={[
              {
                name: 'activeId',
                type: 'string',
                description: 'Optional currently active heading ID to override the automatic tracking.',
              },
              {
                name: 'children',
                type: 'ReactNode',
                description: 'The layout containing the List and Content.',
              },
            ]}
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold">TableOfContents.Heading</h3>
          <PropsTable
            props={[
              {
                name: 'children',
                type: 'string',
                description: 'The text content of the heading.',
              },
              {
                name: 'level',
                type: '1 | 2 | 3 | 4',
                defaultValue: '2',
                description: 'The visual level and nesting depth in the TOC.',
              },
              {
                name: 'id',
                type: 'string',
                description: 'Optional custom ID. If omitted, it is generated from the children text.',
              },
            ]}
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold">TableOfContents.List</h3>
          <PropsTable
            props={[
              {
                name: 'className',
                type: 'string',
                description: 'Additional styles for the list container.',
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
