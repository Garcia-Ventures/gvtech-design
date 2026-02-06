import { ThemeProvider } from 'next-themes';
import * as React from 'react';
import { Sidebar, ThemeToggle } from './components/docs';
import { ScrollArea } from './components/ui/scroll-area';
import { Toaster } from './components/ui/sonner';
import { TooltipProvider } from './components/ui/tooltip';
import {
  // Advanced
  AccordionDocs,
  // Feedback
  AlertDocs,
  AvatarDocs,
  // Data Display
  BadgeDocs,
  BreadcrumbDocs,
  // Forms
  ButtonDocs,
  // Layout
  CardDocs,
  CheckboxDocs,
  DialogDocs,
  DropdownMenuDocs,
  GettingStartedPage,
  InputDocs,
  InstallationPage,
  LabelDocs,
  // Overlay
  PopoverDocs,
  ProgressDocs,
  RadioGroupDocs,
  SelectDocs,
  SeparatorDocs,
  SkeletonDocs,
  SliderDocs,
  SwitchDocs,
  // Navigation
  TabsDocs,
  TextareaDocs,
  ToggleDocs,
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
        return <PlaceholderDocs name="Scroll Area" />;
      case 'aspect-ratio':
        return <PlaceholderDocs name="Aspect Ratio" />;

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
        return <PlaceholderDocs name="Table" />;
      case 'progress':
        return <ProgressDocs />;
      case 'skeleton':
        return <SkeletonDocs />;
      case 'chart':
        return <PlaceholderDocs name="Chart" />;
      case 'calendar':
        return <PlaceholderDocs name="Calendar" />;

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
        return <PlaceholderDocs name="Alert Dialog" />;
      case 'dialog':
        return <DialogDocs />;
      case 'toast':
        return <PlaceholderDocs name="Toast" />;
      case 'sonner':
        return <PlaceholderDocs name="Sonner" />;

      // Overlay
      case 'popover':
        return <PopoverDocs />;
      case 'tooltip':
        return <TooltipDocs />;
      case 'hover-card':
        return <PlaceholderDocs name="Hover Card" />;
      case 'dropdown-menu':
        return <DropdownMenuDocs />;
      case 'context-menu':
        return <PlaceholderDocs name="Context Menu" />;
      case 'command':
        return <PlaceholderDocs name="Command" />;
      case 'sheet':
        return <PlaceholderDocs name="Sheet" />;
      case 'drawer':
        return <PlaceholderDocs name="Drawer" />;

      // Advanced
      case 'accordion':
        return <AccordionDocs />;
      case 'collapsible':
        return <PlaceholderDocs name="Collapsible" />;
      case 'carousel':
        return <PlaceholderDocs name="Carousel" />;
      case 'toggle':
        return <ToggleDocs />;
      case 'toggle-group':
        return <PlaceholderDocs name="Toggle Group" />;

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
            <ScrollArea className="flex-1">
              <main className="p-8 max-w-4xl">{renderContent()}</main>
            </ScrollArea>
          </div>
        </div>
        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
