import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  ScrollArea,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SonnerToaster,
  ThemeProvider,
  ThemeToggle,
  Toaster,
  TooltipProvider,
} from '@gv-tech/ui-web';
import { Loader2, Menu } from 'lucide-react';
import * as React from 'react';
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CombinedDocsLayout, DocSearch, DocSearchProvider, ErrorBoundary, Footer, Sidebar } from './components/docs';
import { docConfig } from './config/docs';

import { docRoutes } from './routes/doc-routes';

// Lazy load docs pages
import { PackageManagerProvider } from './hooks/usePackageManager';

const ColorTokensDocs = React.lazy(() => import('./pages').then((m) => ({ default: m.ColorTokensDocs })));
const GettingStartedPage = React.lazy(() => import('./pages').then((m) => ({ default: m.GettingStartedPage })));
const InstallationPage = React.lazy(() => import('./pages').then((m) => ({ default: m.InstallationPage })));

function PageLoader() {
  return (
    <div className="flex h-[400px] w-full items-center justify-center">
      <Loader2 className="text-muted-foreground h-8 w-8 animate-spin" />
    </div>
  );
}

function DocumentationLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  // Find current doc based on URL path
  const pathParts = location.pathname.split('/');
  const docSlug = pathParts[2] || 'getting-started';

  const currentDoc = React.useMemo(() => {
    for (const category of docConfig) {
      const found = category.items.find((item) => item.href === docSlug);
      if (found) {
        return found;
      }
    }
    return null;
  }, [docSlug]);

  React.useEffect(() => {
    if (!location.pathname.startsWith('/docs')) {
      navigate('/docs/getting-started', { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <DocSearchProvider>
      <PackageManagerProvider>
        <div className="bg-background text-foreground flex h-screen">
          {/* Desktop Sidebar */}
          <div className="hidden h-full shrink-0 lg:flex">
            <Sidebar />
          </div>

          <div className="flex flex-1 flex-col overflow-hidden">
            <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 flex h-14 shrink-0 items-center justify-between border-b px-4 backdrop-blur md:px-6">
              <div className="flex min-w-0 items-center gap-2">
                {/* Mobile Menu Toggle */}
                <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="shrink-0 lg:hidden">
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-72 p-0">
                    <SheetHeader className="sr-only">
                      <SheetTitle>Navigation Menu</SheetTitle>
                      <SheetDescription>
                        Explore the components and documentation for GV Tech Design System.
                      </SheetDescription>
                    </SheetHeader>
                    <Sidebar className="w-full border-none" onLinkClick={() => setIsSidebarOpen(false)} />
                  </SheetContent>
                </Sheet>

                <Breadcrumb className="hidden min-w-0 md:flex">
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink asChild>
                        <Link to="/docs/getting-started">Docs</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{currentDoc?.title || 'Documentation'}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              <div className="flex shrink-0 items-center gap-2 md:gap-4">
                <DocSearch variant="compact" />
                <ThemeToggle variant="ternary" />
              </div>
            </header>
            <ScrollArea className="flex-1">
              <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col p-4 md:p-8">
                <div className="flex-1">
                  <ErrorBoundary>
                    <React.Suspense fallback={<PageLoader />}>
                      <Routes>
                        {/* Getting Started */}
                        <Route path="getting-started" element={<GettingStartedPage />} />
                        <Route path="installation" element={<InstallationPage />} />
                        <Route path="theming" element={<ColorTokensDocs />} />
                        <Route path="color-tokens" element={<Navigate to="/docs/theming" replace />} />

                        {/* Dynamic Component Routes */}
                        {docRoutes.map((route) => (
                          <Route
                            key={route.path}
                            path={route.path}
                            element={
                              <CombinedDocsLayout
                                title={route.title}
                                description={route.description}
                                web={route.web ? <route.web /> : undefined}
                                native={route.native ? <route.native /> : undefined}
                              />
                            }
                          />
                        ))}

                        <Route path="*" element={<Navigate to="/docs/getting-started" replace />} />
                      </Routes>
                    </React.Suspense>
                  </ErrorBoundary>
                </div>
                <Footer />
              </main>
            </ScrollArea>
          </div>
        </div>
      </PackageManagerProvider>
    </DocSearchProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/docs/getting-started" replace />} />
            <Route path="/docs/*" element={<DocumentationLayout />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
        <SonnerToaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
