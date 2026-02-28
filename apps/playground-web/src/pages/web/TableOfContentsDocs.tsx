import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { TableOfContents, Text } from '@gv-tech/ui-web';

export function TableOfContentsDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="The Table of Contents automatically detects headings and renders a nested list of links. Use the wrapper pattern to restrict detection to a specific content area."
        code={`<TableOfContents>
  <div className="flex gap-10">
    <TableOfContents.List className="w-64" />
    <TableOfContents.Content className="flex-1">
      <h2>Introduction</h2>
      <p>...</p>
      <h2>Getting Started</h2>
      ...
    </TableOfContents.Content>
  </div>
</TableOfContents>`}
      >
        <TableOfContents>
          <div className="flex w-full flex-col gap-8 md:flex-row">
            <div className="bg-card w-full shrink-0 rounded-lg border p-4 shadow-sm md:w-64">
              <h4 className="text-muted-foreground mb-4 text-xs font-semibold tracking-wider uppercase">
                On this page
              </h4>
              <TableOfContents.List />
            </div>

            <TableOfContents.Content className="min-w-0 flex-1 space-y-8">
              <section>
                <Text variant="h2" id="introduction-demo" className="text-xl font-bold">
                  Introduction
                </Text>
                <Text variant="body" className="text-muted-foreground mt-2">
                  This component is designed to help users navigate long pages or documentation by providing a clear
                  overview of the content structure.
                </Text>
              </section>

              <section>
                <Text variant="h2" id="getting-started-demo" className="text-xl font-bold">
                  Getting Started
                </Text>
                <Text variant="body" className="text-muted-foreground mt-2">
                  To use the Table of Contents, simply wrap your content with `TableOfContents` and place
                  `TableOfContents.List` where you want the links to appear.
                </Text>

                <div className="mt-6 space-y-4">
                  <Text variant="h3" id="installation-demo" className="text-lg font-semibold">
                    Installation
                  </Text>
                  <Text variant="body" className="text-muted-foreground">
                    Install the package using your favorite package manager and import the component as shown in the
                    examples.
                  </Text>
                </div>

                <div className="mt-6 space-y-4">
                  <Text variant="h3" id="usage-demo" className="text-lg font-semibold">
                    Basic Usage
                  </Text>
                  <Text variant="body" className="text-muted-foreground">
                    The component follows a headless-first approach but provides sane defaults for styling and behavior.
                  </Text>
                </div>
              </section>

              <section>
                <Text variant="h2" id="advanced-customization-demo" className="text-xl font-bold">
                  Advanced Customization
                </Text>
                <Text variant="body" className="text-muted-foreground mt-2">
                  You can customize which headings are included by using the `minLevel` and `maxLevel` props on the root
                  component.
                </Text>
              </section>
            </TableOfContents.Content>
          </div>
        </TableOfContents>
      </ComponentShowcase>

      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold">TableOfContents (Root)</h3>
          <PropsTable
            props={[
              {
                name: 'minLevel',
                type: 'number',
                defaultValue: '1',
                description: 'The minimum heading level to include.',
              },
              {
                name: 'maxLevel',
                type: 'number',
                defaultValue: '3',
                description: 'The maximum heading level to include.',
              },
              {
                name: 'selector',
                type: 'string',
                defaultValue: '"h1, h2, h3, h4, h5, h6"',
                description: 'Custom selector for headings.',
              },
              {
                name: 'className',
                type: 'string',
                description: 'Additional CSS classes for the root wrapper.',
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
                description: 'Additional CSS classes for the navigation container.',
              },
            ]}
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold">TableOfContents.Content</h3>
          <PropsTable
            props={[
              {
                name: 'className',
                type: 'string',
                description: 'Additional CSS classes for the content area.',
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
