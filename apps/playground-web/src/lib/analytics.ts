import type { CustomProperties, PlausibleConfig, PlausibleEventOptions } from '@plausible-analytics/tracker';

type TrackFn = (eventName: string, options: PlausibleEventOptions) => void;
type InitFn = (config: PlausibleConfig) => void;

const DEFAULT_DOMAIN = 'gvtech-design.pages.dev';
const DEFAULT_ENDPOINT = 'https://stats.garciaericn.com/api/event';
const OPTOUT_KEY = 'plausible_ignore';

let tracker: { init: InitFn; track: TrackFn } | null = null;
let initAttempted = false;
let pendingEvents: Array<{ eventName: string; props?: CustomProperties }> = [];

function isDebug(): boolean {
  return import.meta.env.VITE_ANALYTICS_DEBUG === 'true';
}

function log(...args: unknown[]): void {
  if (isDebug()) {
    console.log('[Analytics]', ...args);
  }
}

function warn(...args: unknown[]): void {
  if (isDebug()) {
    console.warn('[Analytics]', ...args);
  }
}

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

function isEnabled(): boolean {
  const raw = import.meta.env.VITE_ANALYTICS_ENABLED;
  if (raw == null || raw === '') {
    return true;
  }
  return raw !== 'false' && raw !== '0';
}

function isOptedOut(): boolean {
  if (!isBrowser()) {
    return true;
  }
  return window.localStorage.getItem(OPTOUT_KEY) === 'true';
}

function isLocalhost(): boolean {
  if (!isBrowser()) {
    return true;
  }
  const host = window.location.hostname;
  return host === 'localhost' || host === '127.0.0.1' || host === '::1';
}

function getDomain(): string {
  return import.meta.env.VITE_PLAUSIBLE_DOMAIN || DEFAULT_DOMAIN;
}

function getEndpoint(): string {
  return import.meta.env.VITE_PLAUSIBLE_ENDPOINT || DEFAULT_ENDPOINT;
}

function readPageTitle(): string {
  if (!isBrowser()) {
    return '';
  }
  const h1 = document.querySelector('h1')?.textContent?.trim();
  return h1 || document.title || '';
}

export function initAnalytics(): void {
  if (!isBrowser()) {
    warn('Skipping init: not a browser environment.');
    return;
  }
  if (initAttempted) {
    log('Skipping init: already attempted.');
    return;
  }
  if (!isEnabled()) {
    warn('Skipping init: VITE_ANALYTICS_ENABLED is false.');
    return;
  }
  if (isOptedOut()) {
    warn('Skipping init: user opted out (localStorage.plausible_ignore = true).');
    return;
  }
  if (isLocalhost()) {
    warn('Skipping init: running on localhost.');
    return;
  }

  initAttempted = true;
  const domain = getDomain();
  const endpoint = getEndpoint();
  log('Initializing with', { domain, endpoint });

  void import('@plausible-analytics/tracker')
    .then((mod) => {
      tracker = {
        init: mod.init,
        track: mod.track,
      };

      tracker.init({
        domain,
        endpoint,
        autoCapturePageviews: true,
        formSubmissions: true,
        outboundLinks: true,
        fileDownloads: true,
        customProperties: () => ({
          page_title: readPageTitle(),
        }),
      });

      log('Tracker ready. Flushing', pendingEvents.length, 'queued event(s).');
      for (const event of pendingEvents) {
        log('Flushing queued event:', event.eventName, event.props);
        tracker.track(event.eventName, { props: event.props });
      }
      pendingEvents = [];
    })
    .catch((err) => {
      tracker = null;
      warn('Failed to load tracker:', err);
    });
}

export function trackEvent(eventName: string, props?: CustomProperties): void {
  if (!isBrowser() || !isEnabled() || isOptedOut() || isLocalhost()) {
    return;
  }

  if (!tracker) {
    log('Queuing event (tracker not ready):', eventName, props);
    pendingEvents.push({ eventName, props });
    return;
  }

  log('Tracking event:', eventName, props);
  tracker.track(eventName, { props });
}

export function trackPageView(props?: CustomProperties): void {
  trackEvent('docs_pageview', props);
}

export function getDocMetadataFromPath(pathname: string): {
  slug: string;
  title: string;
} {
  const slug = pathname.split('/').filter(Boolean).pop() || 'getting-started';

  return {
    slug,
    title: slug
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' '),
  };
}

export function getAnalyticsOptOutKey(): string {
  return OPTOUT_KEY;
}
