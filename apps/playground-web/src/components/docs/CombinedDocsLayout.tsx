import { useDocMetadata } from '@/hooks/useDocMetadata';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@gv-tech/ui-web';
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

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{title}</h1>
        {description && <p className="text-muted-foreground text-base md:text-lg">{description}</p>}
      </div>

      <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
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
              <div className="mb-6 flex gap-3 rounded-lg border border-blue-500/20 bg-blue-500/10 p-4 text-blue-500">
                <Info className="h-5 w-5 shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold">Native Implementation</p>
                  <p className="opacity-90">
                    These components are built for React Native environments. Previews below show implementation details
                    and code samples.
                  </p>
                </div>
              </div>
              <div className="space-y-10 md:space-y-12">{native}</div>
            </PlatformContext.Provider>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
