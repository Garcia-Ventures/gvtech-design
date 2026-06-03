import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import { Sidebar } from '@gv-tech/ui-native';

export function SidebarDocs() {
  return (
    <>
      <ComponentShowcase>
        <Sidebar />
      </ComponentShowcase>
      <PropsTable name="Sidebar" />
    </>
  );
}
