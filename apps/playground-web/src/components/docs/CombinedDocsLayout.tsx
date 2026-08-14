import { useDocMetadata } from '@/hooks/useDocMetadata';
import { safeTrack, updateGlobalAnalyticsProperties } from '@/lib/analytics';
import { TableOfContents, Tabs, TabsContent, TabsList, TabsTrigger } from '@gv-tech/ui-web';
import { Info } from 'lucide-react';
import React from 'react';

interface CombinedDocsLayoutProps {
  title?: string;
  description?: string;
  web?: React.ReactNode;
  native?: React.ReactNode;
  flutter?: React.ReactNode;
}

export const PlatformContext = React.createContext<'web' | 'native' | 'flutter'>('web');

export function CombinedDocsLayout({ title, description, web, native, flutter }: CombinedDocsLayoutProps) {
  useDocMetadata({
    title: title || 'Documentation',
    description: description || 'GV Tech Design System documentation.',
  });
  // Use localStorage to persist platform preference
  const [activeTab, setActiveTab] = React.useState<'web' | 'native' | 'flutter'>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('gv-docs-platform') : null;
    if (saved === 'web' && web) {
      return 'web';
    }
    if (saved === 'native' && native) {
      return 'native';
    }
    if (saved === 'flutter' && flutter) {
      return 'flutter';
    }
    if (web) {
      return 'web';
    }
    if (native) {
      return 'native';
    }
    if (flutter) {
      return 'flutter';
    }
    return 'web';
  });

  React.useEffect(() => {
    if (activeTab === 'flutter' && !flutter) {
      setActiveTab(web ? 'web' : native ? 'native' : 'flutter');
    } else if (activeTab === 'native' && !native) {
      setActiveTab(web ? 'web' : flutter ? 'flutter' : 'native');
    } else if (activeTab === 'web' && !web) {
      setActiveTab(flutter ? 'flutter' : native ? 'native' : 'web');
    }
  }, [web, native, flutter, activeTab]);

  const onTabChange = (value: string) => {
    const newTab = value as 'web' | 'native' | 'flutter';
    if (newTab === activeTab) {
      return;
    }

    safeTrack('docs_platform_switch', {
      props: {
        doc_title: title || 'Documentation',
        from_platform: activeTab,
        to_platform: newTab,
      },
    });

    setActiveTab(newTab);
    localStorage.setItem('gv-docs-platform', newTab);
    updateGlobalAnalyticsProperties({ platformTab: newTab });
  };

  const activeCount = [web, native, flutter].filter(Boolean).length;
  const showTabs = activeCount > 1;

  return (
    <TableOfContents minLevel={1} maxLevel={4}>
      <div className="flex flex-col xl:flex-row xl:gap-14">
        <div className="min-w-0 flex-1 space-y-6">
          {/* Mobile Table of Contents */}
          <TableOfContents.List className="-mx-4 -mt-4 mb-6 border-t-0 xl:hidden" />

          <TableOfContents.Content className="space-y-6">
            <h1 id="overview" className="px-4 text-2xl font-bold tracking-tight md:px-0 md:text-3xl">
              {title}
            </h1>
            {description && <p className="text-muted-foreground px-4 text-base md:px-0 md:text-lg">{description}</p>}

            {showTabs ? (
              <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
                <TabsList variant="line" className="h-10 w-full justify-start border-b px-4 py-0 md:px-0">
                  {web && (
                    <TabsTrigger value="web" className="data-[state=active]:after:bg-primary px-2 font-semibold">
                      Web
                    </TabsTrigger>
                  )}
                  {native && (
                    <TabsTrigger value="native" className="data-[state=active]:after:bg-primary px-2 font-semibold">
                      React Native
                    </TabsTrigger>
                  )}
                  {flutter && (
                    <TabsTrigger value="flutter" className="data-[state=active]:after:bg-primary px-2 font-semibold">
                      Flutter
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
                {flutter && (
                  <TabsContent value="flutter" className="mt-8 border-none p-0 outline-none md:mt-10">
                    <PlatformContext.Provider value="flutter">
                      <div className="mx-4 mb-6 flex gap-3 rounded-lg border border-sky-500/20 bg-sky-500/10 p-4 text-sky-500 md:mx-0">
                        <Info className="h-5 w-5 shrink-0" />
                        <div className="text-sm">
                          <p className="font-semibold">Flutter Implementation (`@gv-tech/ui-flutter`)</p>
                          <p className="opacity-90">
                            These components are compiled from Dart for Flutter Web, iOS, Android, and desktop targets.
                            Previews below show live Flutter Web widgets and Dart code snippets.
                          </p>
                        </div>
                      </div>
                      <div className="space-y-10 md:space-y-12">{flutter}</div>
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
                {flutter && (
                  <PlatformContext.Provider value="flutter">
                    <div className="space-y-10 md:space-y-12">{flutter}</div>
                  </PlatformContext.Provider>
                )}
              </div>
            )}
          </TableOfContents.Content>
        </div>

        {/* Right Sidebar for TOC (Desktop Only) */}
        <div className="hidden w-64 shrink-0 xl:block">
          <div className="sticky top-20">
            <p className="mb-4 text-sm font-semibold tracking-tight uppercase">On This Page</p>
            <TableOfContents.List className="border-none bg-transparent p-0 text-sm" />
          </div>
        </div>
      </div>
    </TableOfContents>
  );
}
