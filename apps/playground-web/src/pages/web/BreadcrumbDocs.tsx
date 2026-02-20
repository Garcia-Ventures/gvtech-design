import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
/* eslint-disable @typescript-eslint/ban-ts-comment, @typescript-eslint/no-unused-vars */
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@gv-tech/ui-web';

// @ts-ignore

const isNative = false as boolean;

// @ts-ignore

const platform = 'web' as string;

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
      >
        <Breadcrumb>
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
        </Breadcrumb>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>

        <h4 className="text-lg font-medium mt-6">Breadcrumb (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'separator',
              type: 'ReactNode',
              description: 'Custom separator element.',
            },
          ]}
        />

        <h4 className="text-lg font-medium mt-6">BreadcrumbLink</h4>
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
