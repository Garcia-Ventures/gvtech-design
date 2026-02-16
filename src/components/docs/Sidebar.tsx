import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { FormInput, Home, Layers, LayoutGrid, MessageSquare, Navigation, Sparkles, Table2 } from 'lucide-react';
import * as React from 'react';
import { version } from '../../../package.json';

export type ComponentCategory =
  | 'getting-started'
  | 'layout'
  | 'forms'
  | 'data-display'
  | 'navigation'
  | 'feedback'
  | 'overlay'
  | 'advanced';

export interface NavItem {
  id: string;
  label: string;
  category: ComponentCategory;
}

interface SidebarProps {
  activeItem: string;
  onItemSelect: (id: string) => void;
  className?: string;
}

const categoryConfig: Record<ComponentCategory, { label: string; icon: React.ReactNode }> = {
  'getting-started': { label: 'Getting Started', icon: <Home className="h-4 w-4" /> },
  layout: { label: 'Layout', icon: <LayoutGrid className="h-4 w-4" /> },
  forms: { label: 'Forms', icon: <FormInput className="h-4 w-4" /> },
  'data-display': { label: 'Data Display', icon: <Table2 className="h-4 w-4" /> },
  navigation: { label: 'Navigation', icon: <Navigation className="h-4 w-4" /> },
  feedback: { label: 'Feedback', icon: <MessageSquare className="h-4 w-4" /> },
  overlay: { label: 'Overlay', icon: <Layers className="h-4 w-4" /> },
  advanced: { label: 'Advanced', icon: <Sparkles className="h-4 w-4" /> },
};

export const navItems: NavItem[] = [
  // Getting Started
  { id: 'getting-started', label: 'Introduction', category: 'getting-started' },
  { id: 'color-tokens', label: 'Color Tokens', category: 'getting-started' },
  { id: 'installation', label: 'Installation', category: 'getting-started' },

  // Layout
  { id: 'card', label: 'Card', category: 'layout' },
  { id: 'separator', label: 'Separator', category: 'layout' },
  { id: 'resizable', label: 'Resizable', category: 'layout' },
  { id: 'scroll-area', label: 'Scroll Area', category: 'layout' },
  { id: 'aspect-ratio', label: 'Aspect Ratio', category: 'layout' },

  // Forms
  { id: 'button', label: 'Button', category: 'forms' },
  { id: 'input', label: 'Input', category: 'forms' },
  { id: 'textarea', label: 'Textarea', category: 'forms' },
  { id: 'label', label: 'Label', category: 'forms' },
  { id: 'checkbox', label: 'Checkbox', category: 'forms' },
  { id: 'radio-group', label: 'Radio Group', category: 'forms' },
  { id: 'select', label: 'Select', category: 'forms' },
  { id: 'switch', label: 'Switch', category: 'forms' },
  { id: 'slider', label: 'Slider', category: 'forms' },
  { id: 'form', label: 'Form', category: 'forms' },

  // Data Display
  { id: 'badge', label: 'Badge', category: 'data-display' },
  { id: 'avatar', label: 'Avatar', category: 'data-display' },
  { id: 'table', label: 'Table', category: 'data-display' },
  { id: 'progress', label: 'Progress', category: 'data-display' },
  { id: 'skeleton', label: 'Skeleton', category: 'data-display' },
  { id: 'chart', label: 'Chart', category: 'data-display' },
  { id: 'calendar', label: 'Calendar', category: 'data-display' },

  // Navigation
  { id: 'tabs', label: 'Tabs', category: 'navigation' },
  { id: 'breadcrumb', label: 'Breadcrumb', category: 'navigation' },
  { id: 'pagination', label: 'Pagination', category: 'navigation' },
  { id: 'navigation-menu', label: 'Navigation Menu', category: 'navigation' },
  { id: 'menubar', label: 'Menubar', category: 'navigation' },

  // Feedback
  { id: 'alert', label: 'Alert', category: 'feedback' },
  { id: 'alert-dialog', label: 'Alert Dialog', category: 'feedback' },
  { id: 'dialog', label: 'Dialog', category: 'feedback' },
  { id: 'toast', label: 'Toast', category: 'feedback' },
  { id: 'sonner', label: 'Sonner', category: 'feedback' },

  // Overlay
  { id: 'popover', label: 'Popover', category: 'overlay' },
  { id: 'tooltip', label: 'Tooltip', category: 'overlay' },
  { id: 'hover-card', label: 'Hover Card', category: 'overlay' },
  { id: 'dropdown-menu', label: 'Dropdown Menu', category: 'overlay' },
  { id: 'context-menu', label: 'Context Menu', category: 'overlay' },
  { id: 'command', label: 'Command', category: 'overlay' },
  { id: 'search', label: 'Search', category: 'overlay' },
  { id: 'sheet', label: 'Sheet', category: 'overlay' },
  { id: 'drawer', label: 'Drawer', category: 'overlay' },

  // Advanced
  { id: 'accordion', label: 'Accordion', category: 'advanced' },
  { id: 'collapsible', label: 'Collapsible', category: 'advanced' },
  { id: 'carousel', label: 'Carousel', category: 'advanced' },
  { id: 'toggle', label: 'Toggle', category: 'advanced' },
  { id: 'toggle-group', label: 'Toggle Group', category: 'advanced' },
  { id: 'theme-toggle', label: 'Theme Toggle', category: 'advanced' },
];

export function Sidebar({ activeItem, onItemSelect, className }: SidebarProps) {
  const categories = Object.keys(categoryConfig) as ComponentCategory[];
  const [expandedCategories, setExpandedCategories] = React.useState<string[]>(['getting-started', 'forms']);

  // Ensure the category of the active item is expanded
  React.useEffect(() => {
    const activeNavItem = navItems.find((item) => item.id === activeItem);
    if (activeNavItem && !expandedCategories.includes(activeNavItem.category)) {
      setExpandedCategories((prev) => [...prev, activeNavItem.category]);
    }
  }, [activeItem, expandedCategories]);

  return (
    <div className={cn('w-64 border-r bg-muted/50 flex flex-col h-full', className)}>
      <div className="p-4 border-b">
        <h2 className="font-semibold text-lg">GV Design System</h2>
        <p className="text-xs text-muted-foreground">v{version}</p>
      </div>
      <ScrollArea className="flex-1">
        <nav className="p-2">
          <Accordion
            type="multiple"
            value={expandedCategories}
            onValueChange={setExpandedCategories}
            className="w-full space-y-1"
          >
            {categories.map((category) => {
              const config = categoryConfig[category];
              const items = navItems.filter((item) => item.category === category);

              if (items.length === 0) return null;

              return (
                <AccordionItem key={category} value={category} className="border-none">
                  <AccordionTrigger className="flex items-center gap-2 px-2 py-1.5 text-sm font-medium rounded-md hover:bg-accent/50 transition-colors hover:no-underline [&>svg]:h-4 [&>svg]:w-4">
                    <div className="flex items-center gap-2 flex-1">
                      {config.icon}
                      <span className="text-left">{config.label}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-1">
                    <div className="ml-4 mt-1 space-y-0.5 border-l pl-2">
                      {items.map((item) => (
                        <Button
                          key={item.id}
                          variant="ghost"
                          size="sm"
                          onClick={() => onItemSelect(item.id)}
                          className={cn(
                            'w-full justify-start h-8 px-2 font-normal',
                            activeItem === item.id && 'bg-accent text-accent-foreground',
                          )}
                        >
                          {item.label}
                        </Button>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </nav>
      </ScrollArea>
    </div>
  );
}
