import { docConfig } from '@/config/docs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, ScrollArea, cn } from '@gv-tech/ui-web';
import { NavLink } from 'react-router-dom';
import { version } from '../../../../../package.json';

interface SidebarProps {
  className?: string;
  onLinkClick?: () => void;
}

export function Sidebar({ className, onLinkClick }: SidebarProps) {
  return (
    <div className={cn('bg-card flex h-full w-64 flex-col border-r', className)}>
      <div className="flex h-14 shrink-0 items-center border-b p-6">
        <div className="flex items-center gap-2 text-xl font-bold">
          <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded text-xs">
            GV
          </div>
          GVTech Design
        </div>
        <div className="ml-auto flex flex-col items-end gap-0.5">
          <span className="text-muted-foreground font-mono text-[10px]">v{version}</span>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4">
          <Accordion type="multiple" defaultValue={docConfig.map((c) => c.title)} className="w-full">
            {docConfig.map((category) => {
              const items = category.items;
              const filteredItems = items; // Show all items regardless of platform

              return (
                <AccordionItem value={category.title} key={category.title} className="border-none">
                  <AccordionTrigger className="py-2 text-sm font-semibold hover:no-underline">
                    {category.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-2">
                    <div className="flex flex-col space-y-1">
                      {filteredItems.map((item) => {
                        const isUniversal =
                          category.title !== 'Getting Started' &&
                          item.platforms.includes('web') &&
                          item.platforms.includes('native');
                        return (
                          <NavLink
                            key={item.href}
                            to={`/docs/${item.href}`}
                            onClick={onLinkClick}
                            className={({ isActive }) =>
                              cn(
                                'group hover:bg-muted/50 text-muted-foreground flex items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors',
                                isActive && 'bg-accent text-accent-foreground font-medium',
                              )
                            }
                          >
                            <span>{item.title}</span>
                            {isUniversal && (
                              <span
                                className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                                title="Universal Component (available on both Web & Native)"
                              />
                            )}
                          </NavLink>
                        );
                      })}
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
