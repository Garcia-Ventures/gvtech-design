import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';

export const PACKAGEMANAGERS = ['npm', 'bun', 'pnpm', 'yarn', 'yarn-classic'] as const;
export type PackageManager = (typeof PACKAGEMANAGERS)[number];

interface PackageManagerContextType {
  packageManager: PackageManager;
  setPackageManager: (pm: PackageManager) => void;
}

const PackageManagerContext = createContext<PackageManagerContextType | undefined>(undefined);

export function PackageManagerProvider({ children }: { children: ReactNode }): React.ReactElement {
  const [packageManager, setPackageManagerState] = useState<PackageManager>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('gv-docs-package-manager');
      if (saved && (PACKAGEMANAGERS as readonly string[]).includes(saved)) {
        return saved as PackageManager;
      }
    }
    return 'bun';
  });

  const setPackageManager = useCallback((pm: PackageManager) => {
    setPackageManagerState(pm);
    localStorage.setItem('gv-docs-package-manager', pm);
  }, []);

  return (
    <PackageManagerContext.Provider value={{ packageManager, setPackageManager }}>
      {children}
    </PackageManagerContext.Provider>
  );
}

export function usePackageManager() {
  const context = useContext(PackageManagerContext);
  if (context === undefined) {
    throw new Error('usePackageManager must be used within a PackageManagerProvider');
  }
  return context;
}
