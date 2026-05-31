import { docConfig } from '@/config/docs';
import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { safeTrack } from './analytics';

const DEFAULT_DOMAIN = 'garciaericn.com';
const DEFAULT_ENDPOINT = 'https://stats.garciaericn.com/api/event';
const OPTOUT_KEY = 'plausible_ignore';

let cachedPathname = '';
let cachedTitle: string | null = null;

function getPageTitle() {
  if (typeof window === 'undefined') {
    return '';
  }
  if (window.location.pathname === cachedPathname && cachedTitle !== null) {
    return cachedTitle;
  }
  cachedPathname = window.location.pathname;
  cachedTitle = document.querySelector('h1')?.textContent?.trim() || document.title;
  return cachedTitle;
}

function getDocItem(slug: string) {
  for (const category of docConfig) {
    const found = category.items.find((item) => item.href === slug);
    if (found) {
      return {
        category: category.title,
        item: found,
      };
    }
  }
  return null;
}

export function PlausibleProvider({ children }: { children: React.ReactNode }): React.ReactElement {
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
      const enabled = import.meta.env.NEXT_PUBLIC_ANALYTICS_ENABLED ?? import.meta.env.VITE_ANALYTICS_ENABLED;
      if (enabled == null || enabled === '') {
        return true;
      }
      return enabled !== 'false' && enabled !== '0';
    };

    const initPlausible = async () => {
      if (!shouldInitialize()) {
        return;
      }

      const domain =
        import.meta.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || import.meta.env.VITE_PLAUSIBLE_DOMAIN || DEFAULT_DOMAIN;
      const endpoint =
        import.meta.env.NEXT_PUBLIC_PLAUSIBLE_ENDPOINT || import.meta.env.VITE_PLAUSIBLE_ENDPOINT || DEFAULT_ENDPOINT;

      try {
        const plausible = await import('@plausible-analytics/tracker');
        if (!isMounted) {
          return;
        }

        plausible.init({
          domain,
          endpoint,
          autoCapturePageviews: true,
          formSubmissions: true,
          outboundLinks: true,
          fileDownloads: true,
          customProperties: () => ({
            page_title: getPageTitle(),
          }),
        });

        setIsReady(true);
      } catch {
        setIsReady(false);
      }
    };

    void initPlausible();

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
      props: {
        path: location.pathname,
        doc_slug: slug,
        doc_title: doc?.item.title || slug,
        doc_category: doc?.category || 'Unknown',
        page_title: getPageTitle(),
      },
    });
  }, [isReady, location.pathname]);

  return <>{children}</>;
}
