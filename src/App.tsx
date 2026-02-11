import { ThemeProvider } from 'next-themes';
import * as React from 'react';
import { Footer, Sidebar } from './components/docs';
import { ScrollArea } from './components/ui/scroll-area';
import { Toaster } from './components/ui/sonner';
import { ThemeToggle } from './components/ui/theme-toggle';
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

function App() {
  const [activeItem, setActiveItem] = React.useState('getting-started');

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
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <TooltipProvider>
        <div className="flex h-screen bg-background">
          {/* Sidebar */}
          <Sidebar activeItem={activeItem} onItemSelect={setActiveItem} />

          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <header className="h-14 border-b flex items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <h1 className="text-sm font-medium text-muted-foreground">Components</h1>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle variant="ternary" />
              </div>
            </header>

            {/* Content Area */}
            <ScrollArea className="flex-1 [&>[data-radix-scroll-area-viewport]]:h-full">
              <div className="flex-1 flex flex-col min-h-full">
                <main className="flex-1 p-8 max-w-4xl">{renderContent()}</main>
                <Footer />
              </div>
            </ScrollArea>
          </div>
        </div>
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
