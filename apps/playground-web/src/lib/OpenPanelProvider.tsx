import { docItemsMap } from '@/config/docs';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { initOpenPanel, safeTrack } from './analytics';

const DEFAULT_CLIENT_ID = '3316e353-e491-472e-84ff-7830c595a872';
const DEFAULT_API_URL = 'https://openpanel.gventureshq.com/api';
const OPTOUT_KEY = 'openpanel_ignore';

function getDocItem(slug: string) {
  return docItemsMap.get(slug) || null;
}

export function OpenPanelProvider({ children }: { children: React.ReactNode }): React.ReactElement {
  const location = useLocation();
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;

    const shouldInitialize = () => {
      if (typeof window === 'undefined') {
        return false;
      }
      const host = window.location.hostname;
      if (host === 'localhost' || host === '127.0.0.1' || host === '::1') {
        return false;
      }
      if (window.localStorage.getItem(OPTOUT_KEY) === 'true') {
        return false;
      }
      const enabled = import.meta.env.VITE_ANALYTICS_ENABLED ?? import.meta.env.NEXT_PUBLIC_ANALYTICS_ENABLED;
      if (enabled == null || enabled === '') {
        return true;
      }
      return enabled !== 'false' && enabled !== '0';
    };

    const setupOpenPanel = () => {
      if (!shouldInitialize()) {
        return;
      }

      const clientId = import.meta.env.VITE_OPENPANEL_CLIENT_ID || DEFAULT_CLIENT_ID;
      const apiUrl = import.meta.env.VITE_OPENPANEL_API_URL || DEFAULT_API_URL;

      try {
        initOpenPanel(clientId, apiUrl);

        if (isMounted) {
          setIsReady(true);
        }
      } catch (error) {
        if (import.meta.env.DEV) {
          console.error('OpenPanel initialization failed:', error);
        }
        if (isMounted) {
          setIsReady(false);
        }
      }
    };

    setupOpenPanel();

    return () => {
      isMounted = false;
      setIsReady(false);
    };
  }, []);

  React.useEffect(() => {
    if (!isReady || !location.pathname.startsWith('/docs')) {
      return;
    }

    const slug = location.pathname.split('/').filter(Boolean).pop() || 'getting-started';
    const doc = getDocItem(slug);

    safeTrack('docs_pageview', {
      path: location.pathname,
      doc_slug: slug,
      doc_title: doc?.item.title || slug,
      doc_category: doc?.category || 'Unknown',
      page_title: document.querySelector('h1')?.textContent?.trim() || document.title,
    });
  }, [isReady, location.pathname]);

  return <>{children}</>;
}
