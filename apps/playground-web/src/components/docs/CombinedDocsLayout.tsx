import { useDocMetadata } from '@/hooks/useDocMetadata';
import { TableOfContents, Tabs, TabsContent, TabsList, TabsTrigger } from '@gv-tech/ui-web';
import { Info } from 'lucide-react';
import React from 'react';

interface CombinedDocsLayoutProps {
  title?: string;
  description?: string;
  web?: React.ReactNode;
  native?: React.ReactNode;
}

export const PlatformContext = React.createContext<'web' | 'native'>('web');

export function CombinedDocsLayout({ title, description, web, native }: CombinedDocsLayoutProps) {
  useDocMetadata({
    title: title || 'Documentation',
    description: description || 'GV Tech Design System documentation.',
  });
  // Use localStorage to persist platform preference
  const [activeTab, setActiveTab] = React.useState<'web' | 'native'>(() => {
    // Check if there is a saved preference
    const saved = typeof window !== 'undefined' ? localStorage.getItem('gv-docs-platform') : null;
    if (saved === 'web' || saved === 'native') {
      // Ensure the saved preference is actually available for this component
      if (saved === 'web' && web) {
        return 'web';
      }
      if (saved === 'native' && native) {
        return 'native';
      }
    }
    // Default to web if available, otherwise native
    return web ? 'web' : 'native';
  });

  // When navigating between pages, React Router reuses this component without
  // remounting, so the useState initializer won't re-run. Sync activeTab
  // whenever the set of available platforms changes to avoid showing a blank tab.
  React.useEffect(() => {
    if (activeTab === 'native' && !native) {
      setActiveTab(web ? 'web' : 'native');
    } else if (activeTab === 'web' && !web && native) {
      setActiveTab('native');
    }
  }, [web, native, activeTab]);

  const onTabChange = (value: string) => {
    const newTab = value as 'web' | 'native';
    setActiveTab(newTab);
    localStorage.setItem('gv-docs-platform', newTab);
  };

  const showTabs = !!(web && native);

  return (
    <TableOfContents minLevel={1} maxLevel={4}>
      <div className="flex flex-col xl:flex-row xl:gap-10">
        <div className="max-w-4xl min-w-0 flex-1 space-y-6">
          {/* Mobile Table of Contents */}
          <TableOfContents.List className="-mx-4 -mt-4 mb-6 border-t-0 xl:hidden" />

          <TableOfContents.Content className="space-y-6">
            <h1 id="overview" className="px-4 text-2xl font-bold tracking-tight md:px-0 md:text-3xl">
              {title}
            </h1>
            {description && <p className="text-muted-foreground px-4 text-base md:px-0 md:text-lg">{description}</p>}

            {showTabs ? (
              <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
                <TabsList className="w-full justify-start rounded-none border-b bg-transparent px-4 md:px-0">
                  {web && (
                    <TabsTrigger
                      value="web"
                      className="text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 pt-2 pb-3 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
                    >
                      Web
                    </TabsTrigger>
                  )}
                  {native && (
                    <TabsTrigger
                      value="native"
                      className="text-muted-foreground data-[state=active]:border-primary data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-transparent bg-transparent px-4 pt-2 pb-3 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
                    >
                      Native
                    </TabsTrigger>
                  )}
                </TabsList>
                {web && (
                  <TabsContent value="web" className="mt-8 border-none p-0 outline-none md:mt-10">
                    <PlatformContext.Provider value="web">
                      <div className="space-y-10 md:space-y-12">{web}</div>
                    </PlatformContext.Provider>
                  </TabsContent>
                )}
                {native && (
                  <TabsContent value="native" className="mt-8 border-none p-0 outline-none md:mt-10">
                    <PlatformContext.Provider value="native">
                      <div className="mx-4 mb-6 flex gap-3 rounded-lg border border-blue-500/20 bg-blue-500/10 p-4 text-blue-500 md:mx-0">
                        <Info className="h-5 w-5 shrink-0" />
                        <div className="text-sm">
                          <p className="font-semibold">Native Implementation</p>
                          <p className="opacity-90">
                            These components are built for React Native environments. Previews below show implementation
                            details and code samples.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-10 md:space-y-12">{native}</div>
                    </PlatformContext.Provider>
                  </TabsContent>
                )}
              </Tabs>
            ) : (
              <div className="mt-8 px-4 md:mt-10 md:px-0">
                {web && (
                  <PlatformContext.Provider value="web">
                    <div className="space-y-10 md:space-y-12">{web}</div>
                  </PlatformContext.Provider>
                )}
                {native && (
                  <PlatformContext.Provider value="native">
                    <div className="space-y-10 md:space-y-12">{native}</div>
                  </PlatformContext.Provider>
                )}
              </div>
            )}
          </TableOfContents.Content>
        </div>

        {/* Right Sidebar for TOC (Desktop Only) */}
        <div className="hidden w-64 shrink-0 xl:block">
          <div className="sticky top-0 pt-4">
            <p className="mb-4 text-sm font-medium">On This Page</p>
            <TableOfContents.List />
          </div>
        </div>
      </div>
    </TableOfContents>
  );
}
