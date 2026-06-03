import { ComponentShowcase } from '@/components/docs/ComponentShowcase';
import { PropsTable } from '@/components/docs/PropsTable';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@gv-tech/ui-web';

export function SidebarDocs() {
  return (
    <>
      <ComponentShowcase
        title="Default"
        description="A default sidebar component."
        code={`<SidebarProvider>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Application</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Home</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</SidebarProvider>`}
      >
        <SidebarProvider className="bg-background h-[400px] min-h-0 w-full max-w-3xl overflow-hidden rounded-md border">
          <Sidebar className="border-border border-r">
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Application</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton isActive>Home</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>Inbox</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>Settings</SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <main className="text-muted-foreground flex flex-1 items-center justify-center p-6">Main Content</main>
        </SidebarProvider>
      </ComponentShowcase>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Props</h3>
        <p className="text-muted-foreground text-sm">
          The Sidebar component exposes multiple sub-components for layout composition.
        </p>

        <h4 className="mt-6 text-lg font-medium">Sidebar (Root)</h4>
        <PropsTable
          props={[
            {
              name: 'side',
              type: '"left" | "right"',
              defaultValue: '"left"',
              description: 'The side of the screen where the sidebar should appear.',
            },
            {
              name: 'variant',
              type: '"sidebar" | "floating" | "inset"',
              defaultValue: '"sidebar"',
              description: 'The visual variant of the sidebar.',
            },
            {
              name: 'collapsible',
              type: '"offcanvas" | "icon" | "none"',
              defaultValue: '"offcanvas"',
              description: 'How the sidebar behaves when collapsed.',
            },
          ]}
        />
      </div>
    </>
  );
}
