import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

// @ts-ignore

const isNative = true as boolean;

// @ts-ignore

const platform = 'native' as string;

export function BreadcrumbDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A basic breadcrumb navigation."
        code={`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/components">Components</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>

        <h4 className="mt-6 text-lg font-medium">Breadcrumb (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'separator',
              type: 'ReactNode',
              description: 'Custom separator element.',
            },
          ]}
        />

        <h4 className="mt-6 text-lg font-medium">BreadcrumbLink</h4>
        <PropsTable
          props={[
            {
              name: 'asChild',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Change the default rendered element for the one passed as a child.',
            },
            {
              name: 'href',
              type: 'string',
              description: 'The URL of the link.',
            },
          ]}
        />
      </div>
    </>
  );
}
