import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  ScrollArea,
  ScrollToTop,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SonnerToaster,
  SupportFab,
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

function PageLoader() {
  return (
    <div className="flex h-[400px] w-full items-center justify-center">
      <Loader2 className="text-muted-foreground h-8 w-8 animate-spin" />
    </div>
  );
}

function DocumentationLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const [docsScrollViewport, setDocsScrollViewport] = React.useState<HTMLElement | null>(null);
  const docsScrollAreaRef = React.useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const docSlug = location.pathname.split('/').pop() || 'getting-started';

  const activeRoute = React.useMemo(() => {
    for (const category of docConfig) {
      const found = category.items.find((item) => item.href === docSlug);
      if (found) {
        return found;
      }
    }
    return null;
  }, [docSlug]);

  React.useEffect(() => {
    if (activeRoute?.title) {
      document.title = `${activeRoute.title} | GV Tech Design`;
    }
  }, [activeRoute]);

  React.useEffect(() => {
    if (location.pathname === '/docs' || location.pathname === '/docs/') {
      navigate('/docs/getting-started', { replace: true });
    }
  }, [location.pathname, navigate]);

  React.useEffect(() => {
    const viewport = docsScrollAreaRef.current?.querySelector<HTMLElement>('[data-radix-scroll-area-viewport]') ?? null;
    setDocsScrollViewport(viewport);
  }, [location.pathname]);

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
                      <BreadcrumbPage>{activeRoute?.title || 'Documentation'}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              <div className="flex shrink-0 items-center gap-2 md:gap-4">
                <DocSearch variant="compact" responsive />
                <ThemeToggle variant="ternary" />
              </div>
            </header>
            <ScrollArea ref={docsScrollAreaRef} className="flex-1">
              <div className="flex min-h-full flex-col">
                <main className="flex w-full flex-1 flex-col p-4 md:p-8">
                  <div className="mx-auto w-full max-w-[1400px]">
                    <div className="flex-1">
                      <ErrorBoundary>
                        <React.Suspense fallback={<PageLoader />}>
                          <Routes>
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
                  </div>
                  <Footer />
                </main>
              </div>
            </ScrollArea>

            <SupportFab supportUrl="https://www.buymeacoffee.com" creatorId="eng618" />
            <ScrollToTop scrollTarget={docsScrollViewport} threshold={180} className="right-6 bottom-24" />
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
