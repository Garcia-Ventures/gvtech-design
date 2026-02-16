import { Menu } from 'lucide-react';
import * as React from 'react';
import { Footer, Sidebar } from './components/docs';
import { navItems } from './components/docs/Sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './components/ui/breadcrumb';
import { Button } from './components/ui/button';
import { ScrollArea } from './components/ui/scroll-area';
import {
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Search,
  SearchTrigger,
} from './components/ui/search';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './components/ui/sheet';
import { Toaster as SonnerToaster } from './components/ui/sonner';
import { ThemeProvider } from './components/ui/theme-provider';
import { ThemeToggle } from './components/ui/theme-toggle';
import { Toaster } from './components/ui/toaster';
import { TooltipProvider } from './components/ui/tooltip';
import {
  AccordionDocs,
  AlertDialogDocs,
  AlertDocs,
  AspectRatioDocs,
  AvatarDocs,
  BadgeDocs,
  BreadcrumbDocs,
  ButtonDocs,
  CalendarDocs,
  CardDocs,
  CarouselDocs,
  ChartDocs,
  CheckboxDocs,
  CollapsibleDocs,
  ColorTokensDocs,
  CommandDocs,
  ContextMenuDocs,
  DialogDocs,
  DrawerDocs,
  DropdownMenuDocs,
  FormDocs,
  GettingStartedPage,
  HoverCardDocs,
  InputDocs,
  InstallationPage,
  LabelDocs,
  MenubarDocs,
  NavigationMenuDocs,
  PaginationDocs,
  PopoverDocs,
  ProgressDocs,
  RadioGroupDocs,
  ResizableDocs,
  ScrollAreaDocs,
  SearchDocs,
  SelectDocs,
  SeparatorDocs,
  SheetDocs,
  SkeletonDocs,
  SliderDocs,
  SonnerDocs,
  SwitchDocs,
  TableDocs,
  TabsDocs,
  TextareaDocs,
  ThemeToggleDocs,
  ToastDocs,
  ToggleDocs,
  ToggleGroupDocs,
  TooltipDocs,
} from './pages';

export default function App() {
  const [activeItem, setActiveItem] = React.useState('getting-started');
  const [searchOpen, setSearchOpen] = React.useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const renderContent = () => {
    switch (activeItem) {
      // Getting Started
      case 'getting-started':
        return <GettingStartedPage />;
      case 'color-tokens':
        return <ColorTokensDocs />;
      case 'installation':
        return <InstallationPage />;

      // Layout
      case 'card':
        return <CardDocs />;
      case 'separator':
        return <SeparatorDocs />;
      case 'resizable':
        return <ResizableDocs />;
      case 'scroll-area':
        return <ScrollAreaDocs />;
      case 'aspect-ratio':
        return <AspectRatioDocs />;

      // Forms
      case 'button':
        return <ButtonDocs />;
      case 'input':
        return <InputDocs />;
      case 'textarea':
        return <TextareaDocs />;
      case 'label':
        return <LabelDocs />;
      case 'checkbox':
        return <CheckboxDocs />;
      case 'radio-group':
        return <RadioGroupDocs />;
      case 'select':
        return <SelectDocs />;
      case 'switch':
        return <SwitchDocs />;
      case 'slider':
        return <SliderDocs />;
      case 'form':
        return <FormDocs />;

      // Data Display
      case 'badge':
        return <BadgeDocs />;
      case 'avatar':
        return <AvatarDocs />;
      case 'table':
        return <TableDocs />;
      case 'progress':
        return <ProgressDocs />;
      case 'skeleton':
        return <SkeletonDocs />;
      case 'chart':
        return <ChartDocs />;
      case 'calendar':
        return <CalendarDocs />;

      // Navigation
      case 'tabs':
        return <TabsDocs />;
      case 'breadcrumb':
        return <BreadcrumbDocs />;
      case 'pagination':
        return <PaginationDocs />;
      case 'navigation-menu':
        return <NavigationMenuDocs />;
      case 'menubar':
        return <MenubarDocs />;

      // Feedback
      case 'alert':
        return <AlertDocs />;
      case 'alert-dialog':
        return <AlertDialogDocs />;
      case 'dialog':
        return <DialogDocs />;
      case 'toast':
        return <ToastDocs />;
      case 'sonner':
        return <SonnerDocs />;

      // Overlay
      case 'popover':
        return <PopoverDocs />;
      case 'tooltip':
        return <TooltipDocs />;
      case 'hover-card':
        return <HoverCardDocs />;
      case 'dropdown-menu':
        return <DropdownMenuDocs />;
      case 'context-menu':
        return <ContextMenuDocs />;
      case 'command':
        return <CommandDocs />;
      case 'search':
        return <SearchDocs />;
      case 'sheet':
        return <SheetDocs />;
      case 'drawer':
        return <DrawerDocs />;

      // Advanced
      case 'accordion':
        return <AccordionDocs />;
      case 'collapsible':
        return <CollapsibleDocs />;
      case 'carousel':
        return <CarouselDocs />;
      case 'toggle':
        return <ToggleDocs />;
      case 'toggle-group':
        return <ToggleGroupDocs />;
      case 'theme-toggle':
        return <ThemeToggleDocs />;

      default:
        return <GettingStartedPage />;
    }
  };

  return (
    <ThemeProvider>
      <TooltipProvider>
        <div className="flex h-screen bg-background overflow-hidden">
          {/* Desktop Sidebar */}
          <div className="hidden lg:flex h-full shrink-0">
            <Sidebar activeItem={activeItem} onItemSelect={setActiveItem} />
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
            {/* Header */}
            <header className="h-14 border-b flex items-center justify-between px-4 md:px-6 shrink-0 bg-background/50 backdrop-blur-sm sticky top-0 z-10 gap-4">
              <div className="flex items-center gap-2 min-w-0">
                {/* Mobile Menu Toggle */}
                <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="lg:hidden shrink-0">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="p-0 w-72">
                    <SheetHeader className="sr-only">
                      <SheetTitle>Navigation Menu</SheetTitle>
                      <SheetDescription>
                        Explore the components and documentation for GV Tech Design System.
                      </SheetDescription>
                    </SheetHeader>
                    <Sidebar
                      activeItem={activeItem}
                      onItemSelect={(id) => {
                        setActiveItem(id);
                        setIsSidebarOpen(false);
                      }}
                      className="w-full border-none"
                    />
                  </SheetContent>
                </Sheet>

                <Breadcrumb className="hidden md:flex min-w-0">
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink onClick={() => setActiveItem('getting-started')} className="cursor-pointer">
                        Components
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>
                        {navItems.find((i) => i.id === activeItem)?.label || 'Introduction'}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>

                {/* Mobile Breadcrumb (simplified) */}
                <div className="md:hidden font-medium truncate">
                  {navItems.find((i) => i.id === activeItem)?.label || 'Introduction'}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Search open={searchOpen} onOpenChange={setSearchOpen}>
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Components">
                      {navItems.map((item) => (
                        <CommandItem
                          key={item.id}
                          onSelect={() => {
                            setActiveItem(item.id);
                            setSearchOpen(false);
                          }}
                        >
                          {item.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Search>
                <SearchTrigger onClick={() => setSearchOpen(true)} variant="compact" className="md:w-40 lg:w-64" />
                <ThemeToggle variant="ternary" />
              </div>
            </header>

            {/* Content Area */}
            <ScrollArea className="flex-1 [&>[data-radix-scroll-area-viewport]]:h-full">
              <div className="flex-1 flex flex-col min-h-full">
                <main className="flex-1 p-4 md:p-8 w-full max-w-4xl mx-auto">{renderContent()}</main>
                <Footer />
              </div>
            </ScrollArea>
          </div>
        </div>
        <Toaster />
        <SonnerToaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}
