import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function EmptyDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A generic empty state component for Native."
        code={`import { Empty, EmptyDescription, EmptyMedia, EmptyTitle } from '@gv-tech/ui-native';
import { FolderX } from 'lucide-react-native';

export function EmptyExample() {
  return (
    <Empty>
      <EmptyMedia variant="icon">
        <FolderX size={24} />
      </EmptyMedia>
      <EmptyTitle>No Files</EmptyTitle>
      <EmptyDescription>You have no files in this directory.</EmptyDescription>
    </Empty>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: 'NativeWind classes.',
            },
          ]}
        />
      </div>
    </>
  );
}
