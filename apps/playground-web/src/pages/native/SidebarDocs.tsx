import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function SidebarDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="The native sidebar specification."
        code={`import { Sidebar } from '@gv-tech/ui-native';

export function SidebarExample() {
  return <Sidebar />;
}`}
      />
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">The Sidebar component specification for Native.</p>
        <PropsTable name="Sidebar" />
      </div>
    </>
  );
}
