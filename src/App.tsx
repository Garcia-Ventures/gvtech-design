import { ThemeProvider } from 'next-themes';
import * as React from 'react';
import { Footer, Sidebar, ThemeToggle } from './components/docs';
import { ScrollArea } from './components/ui/scroll-area';
import { Toaster } from './components/ui/sonner';
import { TooltipProvider } from './components/ui/tooltip';
import {
  // Advanced
  AccordionDocs,
  AlertDialogDocs,
  // Feedback
  AlertDocs,
  AspectRatioDocs,
  AvatarDocs,
  // Data Display
  BadgeDocs,
  BreadcrumbDocs,
  // Forms
  ButtonDocs,
  CalendarDocs,
  // Layout
  CardDocs,
  CheckboxDocs,
  CollapsibleDocs,
  CommandDocs,
  ContextMenuDocs,
  DialogDocs,
  DrawerDocs,
  DropdownMenuDocs,
  // Getting Started
  GettingStartedPage,
  HoverCardDocs,
  InputDocs,
  InstallationPage,
  LabelDocs,
  // Overlay
  PopoverDocs,
  ProgressDocs,
  RadioGroupDocs,
  ScrollAreaDocs,
  SelectDocs,
  SeparatorDocs,
  SheetDocs,
  SkeletonDocs,
  SliderDocs,
  SonnerDocs,
  SwitchDocs,
  TableDocs,
  // Navigation
  TabsDocs,
  TextareaDocs,
  ToggleDocs,
  ToggleGroupDocs,
  TooltipDocs,
} from './pages';

// Placeholder component for pages not yet implemented
function PlaceholderDocs({ name }: { name: string }) {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
      <p className="text-muted-foreground">Documentation coming soon.</p>
    </div>
  );
}

function App() {
  const [activeItem, setActiveItem] = React.useState('getting-started');

  const renderContent = () => {
    switch (activeItem) {
      // Getting Started
      case 'getting-started':
        return <GettingStartedPage />;
      case 'installation':
        return <InstallationPage />;

      // Layout
      case 'card':
        return <CardDocs />;
      case 'separator':
        return <SeparatorDocs />;
      case 'resizable':
        return <PlaceholderDocs name="Resizable" />;
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
        return <PlaceholderDocs name="Form" />;

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
        return <PlaceholderDocs name="Chart" />;
      case 'calendar':
        return <CalendarDocs />;

      // Navigation
      case 'tabs':
        return <TabsDocs />;
      case 'breadcrumb':
        return <BreadcrumbDocs />;
      case 'pagination':
        return <PlaceholderDocs name="Pagination" />;
      case 'navigation-menu':
        return <PlaceholderDocs name="Navigation Menu" />;
      case 'menubar':
        return <PlaceholderDocs name="Menubar" />;

      // Feedback
      case 'alert':
        return <AlertDocs />;
      case 'alert-dialog':
        return <AlertDialogDocs />;
      case 'dialog':
        return <DialogDocs />;
      case 'toast':
        return <PlaceholderDocs name="Toast" />;
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
        return <PlaceholderDocs name="Carousel" />;
      case 'toggle':
        return <ToggleDocs />;
      case 'toggle-group':
        return <ToggleGroupDocs />;

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
                <ThemeToggle />
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
