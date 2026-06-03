import { docConfig } from '@/config/docs';
import { safeTrack } from '@/lib/analytics';
import {
  cn,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@gv-tech/ui-web';
import { NavLink, useLocation } from 'react-router-dom';
import { version } from '../../../../../package.json';

interface DocsSidebarProps {
  className?: string;
}

export function DocsSidebar({ className }: DocsSidebarProps) {
  const location = useLocation();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar className={className}>
      <SidebarHeader className="flex h-14 shrink-0 flex-row items-center border-b p-6">
        <div className="flex items-center gap-2 text-xl font-bold">
          <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded text-xs">
            GV
          </div>
          GVTech Design
        </div>
        <div className="ml-auto flex flex-col items-end gap-0.5">
          <span className="text-muted-foreground font-mono text-[10px]">v{version}</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4">
        {docConfig.map((category) => {
          const items = category.items;
          const filteredItems = items; // Show all items regardless of platform

          return (
            <SidebarGroup key={category.title} className="px-0 py-2">
              <SidebarGroupLabel className="text-foreground px-2 text-sm font-semibold">
                {category.title}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {filteredItems.map((item) => {
                    const isUniversal =
                      category.title !== 'Getting Started' &&
                      item.platforms.includes('web') &&
                      item.platforms.includes('native');

                    const isActive = location.pathname.includes(`/docs/${item.href}`);

                    return (
                      <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton asChild isActive={isActive} className="w-full justify-between">
                          <NavLink
                            to={`/docs/${item.href}`}
                            onClick={() => {
                              setOpenMobile(false);
                              safeTrack('docs_nav_click', {
                                props: {
                                  source: 'sidebar',
                                  from_path: location.pathname,
                                  target_path: `/docs/${item.href}`,
                                  target_slug: item.href,
                                  target_title: item.title,
                                  target_category: category.title,
                                },
                              });
                            }}
                            className={cn(isActive && 'font-medium')}
                          >
                            <span>{item.title}</span>
                            {isUniversal && (
                              <span
                                className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                                title="Universal Component (available on both Web & Native)"
                              />
                            )}
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          );
        })}
      </SidebarContent>
    </Sidebar>
  );
}
