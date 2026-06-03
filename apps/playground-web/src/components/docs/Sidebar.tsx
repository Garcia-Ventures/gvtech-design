import { docConfig } from '@/config/docs';
import { safeTrack } from '@/lib/analytics';
import {
  cn,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from '@gv-tech/ui-web';
import { ChevronRight } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import { version } from '../../../../../package.json';

interface DocsSidebarProps {
  className?: string;
}

export function DocsSidebar({ className }: DocsSidebarProps) {
  const location = useLocation();
  const { setOpenMobile, state } = useSidebar();

  return (
    <Sidebar className={className} collapsible="icon">
      <SidebarHeader className="flex h-14 shrink-0 flex-row items-center border-b p-6 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-2">
        <div className="flex items-center gap-2 text-xl font-bold group-data-[collapsible=icon]:hidden">
          <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded text-xs">
            GV
          </div>
          GVTech Design
        </div>
        {/* Render only the logo when collapsed */}
        <div className="bg-primary text-primary-foreground hidden h-6 w-6 items-center justify-center rounded text-xs group-data-[collapsible=icon]:flex">
          GV
        </div>
        <div className="ml-auto flex flex-col items-end gap-0.5 group-data-[collapsible=icon]:hidden">
          <span className="text-muted-foreground font-mono text-[10px]">v{version}</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-4 group-data-[collapsible=icon]:p-2">
        <SidebarGroup className="p-0">
          <SidebarMenu>
            {docConfig.map((category) => {
              const items = category.items;
              const filteredItems = items; // Show all items regardless of platform
              const Icon = category.icon;

              const isCategoryActive = filteredItems.some((item) => location.pathname.includes(`/docs/${item.href}`));

              const MenuButton = (
                <SidebarMenuButton tooltip={category.title}>
                  {Icon && <Icon />}
                  <span>{category.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              );

              return (
                <Collapsible
                  key={category.title}
                  defaultOpen={isCategoryActive || category.title === 'Getting Started'}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    {state === 'collapsed' ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>{MenuButton}</DropdownMenuTrigger>
                        <DropdownMenuContent
                          side="right"
                          align="start"
                          className="w-56"
                          onCloseAutoFocus={(e) => e.preventDefault()}
                        >
                          <DropdownMenuLabel>{category.title}</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          {filteredItems.map((item) => {
                            const isUniversal =
                              category.title !== 'Getting Started' &&
                              item.platforms.includes('web') &&
                              item.platforms.includes('native');
                            const isActive = location.pathname.includes(`/docs/${item.href}`);

                            return (
                              <DropdownMenuItem asChild key={item.href} className={cn(isActive && 'bg-accent')}>
                                <NavLink
                                  to={`/docs/${item.href}`}
                                  onClick={() => {
                                    setOpenMobile(false);
                                  }}
                                  className="flex w-full cursor-pointer items-center justify-between"
                                >
                                  <span>{item.title}</span>
                                  {isUniversal && (
                                    <span
                                      className="ml-auto h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                                      title="Universal Component (available on both Web & Native)"
                                    />
                                  )}
                                </NavLink>
                              </DropdownMenuItem>
                            );
                          })}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <CollapsibleTrigger asChild>{MenuButton}</CollapsibleTrigger>
                    )}

                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {filteredItems.map((item) => {
                          const isUniversal =
                            category.title !== 'Getting Started' &&
                            item.platforms.includes('web') &&
                            item.platforms.includes('native');

                          const isActive = location.pathname.includes(`/docs/${item.href}`);

                          return (
                            <SidebarMenuSubItem key={item.href}>
                              <SidebarMenuSubButton asChild isActive={isActive}>
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
                                      className="ml-auto h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                                      title="Universal Component (available on both Web & Native)"
                                    />
                                  )}
                                </NavLink>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          );
                        })}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
