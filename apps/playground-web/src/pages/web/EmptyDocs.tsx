import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Empty, EmptyDescription, EmptyMedia, EmptyTitle } from '@gv-tech/ui-web';
import { FolderX } from 'lucide-react';

export function EmptyDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A generic empty state component."
        code={`<Empty>
  <EmptyMedia variant="icon"><FolderX /></EmptyMedia>
  <EmptyTitle>No Files</EmptyTitle>
  <EmptyDescription>You have no files in this directory.</EmptyDescription>
</Empty>`}
      >
        <Empty>
          <EmptyMedia variant="icon">
            <FolderX className="text-muted-foreground h-6 w-6" />
          </EmptyMedia>
          <EmptyTitle>No Files</EmptyTitle>
          <EmptyDescription>You have no files in this directory.</EmptyDescription>
        </Empty>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: 'Additional CSS classes.',
            },
          ]}
        />
      </div>
    </>
  );
}
