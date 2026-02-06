import { ComponentSection, ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonDocs() {
  return (
    <ComponentSection title="Skeleton" description="Use to show a placeholder while content is loading.">
      <ComponentShowcase
        title="Default"
        description="A basic skeleton loader."
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

      <ComponentShowcase
        title="Card"
        description="A skeleton for card loading states."
        code={`<div className="flex flex-col space-y-3">
  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}
      >
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </ComponentShowcase>
    </ComponentSection>
  );
}
