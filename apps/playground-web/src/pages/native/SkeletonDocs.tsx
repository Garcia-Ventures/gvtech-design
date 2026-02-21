import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */
import { ComponentShowcase } from '@/components/docs/ComponentShowcase';

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function SkeletonDocs() {
  return (
    <>
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
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>

        <h4 className="mt-6 text-lg font-medium">Skeleton</h4>
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
    </>
  );
}
