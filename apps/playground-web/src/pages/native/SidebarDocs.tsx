import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Sidebar } from '@gv-tech/ui-native';

export function SidebarDocs() {
  return (
    <>
      <ComponentShowcase title="Default" description="The native sidebar is not yet implemented." code={`<Sidebar />`}>
        <Sidebar />
      </ComponentShowcase>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">The Sidebar component is not yet fully implemented for Native.</p>
        <PropsTable name="Sidebar" />
      </div>
    </>
  );
}
