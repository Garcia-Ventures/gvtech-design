import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';

export function SidebarDocs() {
  return (
    <>
      <ComponentShowcase>
        <div className="text-muted-foreground text-sm">Sidebar will be added here</div>
      </ComponentShowcase>
      <PropsTable name="Sidebar" />
    </>
  );
}
