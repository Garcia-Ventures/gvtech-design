import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function BreadcrumbDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A basic breadcrumb navigation for Native."
        code={`import { 
  Breadcrumb, 
  BreadcrumbList, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from '@gv-tech/design-system';

export function BreadcrumbExample() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => console.log("home")}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => console.log("components")}>
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}`}
      />

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Breadcrumb component on Native uses <code>View</code> and <code>Pressable</code> (via{' '}
          <code>BreadcrumbLink</code>).
        </p>

        <h4 className="mt-6 text-lg font-medium">BreadcrumbLink</h4>
        <PropsTable
          props={[
            {
              name: 'onPress',
              type: '() => void',
              description: 'Native press event handler.',
            },
            {
              name: 'asChild',
              type: 'boolean',
              defaultValue: 'false',
              description: 'Change the default rendered element for the one passed as a child.',
            },
          ]}
        />
      </div>
    </>
  );
}
