import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DocPlatform, docConfig } from '@/config/docs';
import { cn } from '@/lib/utils';
import { NavLink } from 'react-router-dom';
import { version } from '../../../package.json';

interface SidebarProps {
  platform: DocPlatform;
}

export function Sidebar({ platform }: SidebarProps) {
  return (
    <div className="w-64 border-r bg-card flex flex-col h-full">
      <div className="p-6 h-14 flex items-center border-b shrink-0">
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="h-6 w-6 rounded bg-primary flex items-center justify-center text-primary-foreground text-xs">
            GV
          </div>
          GVTech Design
        </div>
        <span className="ml-auto text-xs text-muted-foreground">v{version}</span>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4">
          <Accordion type="multiple" defaultValue={docConfig.map((c) => c.title)} className="w-full">
            {docConfig.map((category) => {
              const filteredItems = category.items.filter((item) => item.platforms.includes(platform));

              if (filteredItems.length === 0) return null;

              return (
                <AccordionItem value={category.title} key={category.title} className="border-none">
                  <AccordionTrigger className="py-2 text-sm font-semibold hover:no-underline">
                    {category.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <div className="flex flex-col space-y-1">
                      {filteredItems.map((item) => (
                        <NavLink
                          key={item.href}
                          to={`/${platform}/${item.href}`}
                          className={({ isActive }) =>
                            cn(
                              'px-2 py-1.5 text-sm rounded-md transition-colors hover:bg-muted/50 text-muted-foreground',
                              isActive && 'bg-accent text-accent-foreground font-medium',
                            )
                          }
                        >
                          {item.title}
                        </NavLink>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </ScrollArea>
    </div>
  );
}
