import * as React from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { Footer, Sidebar } from './components/docs';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './components/ui/breadcrumb';
import { ScrollArea } from './components/ui/scroll-area';
import { Toaster as SonnerToaster } from './components/ui/sonner';
import { ThemeProvider } from './components/ui/theme-provider';
import { ThemeToggle } from './components/ui/theme-toggle';
import { Toaster } from './components/ui/toaster';
import { TooltipProvider } from './components/ui/tooltip';
import { DocPlatform, docConfig } from './config/docs';
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

function DocumentationLayout() {
  const { platform } = useParams<{ platform: DocPlatform }>();
  const navigate = useNavigate();
  const location = useLocation();
  const currentPlatform = platform === 'native' ? 'native' : 'web';

  // Find current doc based on URL path
  // Path is like /web/button or /native/inputs
  const pathParts = location.pathname.split('/');
  const docSlug = pathParts[2] || 'getting-started';

  const currentDoc = React.useMemo(() => {
    for (const category of docConfig) {
      const found = category.items.find((item) => item.href === docSlug);
      if (found) return found;
    }
    return null;
  }, [docSlug]);

  React.useEffect(() => {
    if (!platform || (platform !== 'web' && platform !== 'native')) {
      navigate('/web/getting-started', { replace: true });
    }
  }, [platform, navigate]);

  return (
    <div className="flex h-screen bg-background text-foreground">
      <Sidebar platform={currentPlatform} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-14 border-b flex items-center justify-between px-6 shrink-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="capitalize">{currentPlatform}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{currentDoc?.title || 'Documentation'}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 border-r pr-4 mr-2">
              <select
                value={currentPlatform}
                onChange={(e) => {
                  const newPlatform = e.target.value;
                  // Try to stay on the same page if possible
                  const supportsNewPlatform = currentDoc?.platforms.includes(newPlatform as DocPlatform);
                  if (supportsNewPlatform) {
                    navigate(`/${newPlatform}/${docSlug}`);
                  } else {
                    navigate(`/${newPlatform}/getting-started`);
                  }
                }}
                className="bg-transparent text-sm font-medium focus:outline-none cursor-pointer"
              >
                <option value="web">Web</option>
                <option value="native">Native</option>
              </select>
            </div>
            <ThemeToggle variant="ternary" />
          </div>
        </header>
        <ScrollArea className="flex-1">
          <main className="flex-1 p-8 max-w-4xl mx-auto w-full">
            <Routes>
              {/* Getting Started */}
              <Route path="getting-started" element={<GettingStartedPage />} />
              <Route path="installation" element={<InstallationPage />} />
              <Route path="theming" element={<ColorTokensDocs />} />
              <Route path="color-tokens" element={<Navigate to={`/${currentPlatform}/theming`} replace />} />

              {/* Layout */}
              <Route path="aspect-ratio" element={<AspectRatioDocs />} />
              <Route path="resizable" element={<ResizableDocs />} />
              <Route path="scroll-area" element={<ScrollAreaDocs />} />
              <Route path="separator" element={<SeparatorDocs />} />
              <Route path="card" element={<CardDocs />} />

              {/* Forms */}
              <Route path="button" element={<ButtonDocs platform={currentPlatform} />} />
              <Route path="checkbox" element={<CheckboxDocs />} />
              <Route path="form" element={<FormDocs />} />
              <Route path="input" element={<InputDocs platform={currentPlatform} />} />
              <Route path="label" element={<LabelDocs platform={currentPlatform} />} />
              <Route path="radio-group" element={<RadioGroupDocs />} />
              <Route path="select" element={<SelectDocs />} />
              <Route path="slider" element={<SliderDocs />} />
              <Route path="switch" element={<SwitchDocs />} />
              <Route path="textarea" element={<TextareaDocs />} />
              <Route path="toggle" element={<ToggleDocs />} />
              <Route path="toggle-group" element={<ToggleGroupDocs />} />

              {/* Data Display */}
              <Route path="accordion" element={<AccordionDocs platform={currentPlatform} />} />
              <Route path="alert" element={<AlertDocs platform={currentPlatform} />} />
              <Route path="avatar" element={<AvatarDocs platform={currentPlatform} />} />
              <Route path="badge" element={<BadgeDocs platform={currentPlatform} />} />
              <Route path="calendar" element={<CalendarDocs />} />
              <Route path="carousel" element={<CarouselDocs />} />
              <Route path="chart" element={<ChartDocs />} />
              <Route path="collapsible" element={<CollapsibleDocs />} />
              <Route path="table" element={<TableDocs />} />

              {/* Feedback */}
              <Route path="alert-dialog" element={<AlertDialogDocs />} />
              <Route path="dialog" element={<DialogDocs />} />
              <Route path="hover-card" element={<HoverCardDocs />} />
              <Route path="popover" element={<PopoverDocs />} />
              <Route path="progress" element={<ProgressDocs />} />
              <Route path="skeleton" element={<SkeletonDocs />} />
              <Route path="sonner" element={<SonnerDocs />} />
              <Route path="toast" element={<ToastDocs />} />
              <Route path="tooltip" element={<TooltipDocs />} />

              {/* Navigation */}
              <Route path="breadcrumb" element={<BreadcrumbDocs />} />
              <Route path="command" element={<CommandDocs />} />
              <Route path="context-menu" element={<ContextMenuDocs />} />
              <Route path="drawer" element={<DrawerDocs />} />
              <Route path="dropdown-menu" element={<DropdownMenuDocs />} />
              <Route path="menubar" element={<MenubarDocs />} />
              <Route path="navigation-menu" element={<NavigationMenuDocs />} />
              <Route path="pagination" element={<PaginationDocs />} />
              <Route path="sheet" element={<SheetDocs />} />
              <Route path="tabs" element={<TabsDocs />} />
              <Route path="theme-toggle" element={<ThemeToggleDocs />} />
              <Route path="search" element={<SearchDocs />} />
            </Routes>
            <Footer />
          </main>
        </ScrollArea>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/web/getting-started" replace />} />
            <Route path="/:platform/*" element={<DocumentationLayout />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
        <SonnerToaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
