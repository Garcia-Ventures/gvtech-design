import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonDocs() {
  return (
    <ComponentSection title="Skeleton" description="Use to show a placeholder while content is loading.">
      <ComponentShowcase
        title="Default"
        description="A default skeleton."
        code={`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
      >
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>

        <h4 className="text-lg font-medium mt-6">Skeleton</h4>
        <PropsTable
          props={[
            {
              name: 'className',
              type: 'string',
              description: 'Additional class names to apply.',
            },
          ]}
        />
      </div>
    </ComponentSection>
  );
}
