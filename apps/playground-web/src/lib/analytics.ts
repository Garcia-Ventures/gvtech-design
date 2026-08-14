import { OpenPanel } from '@openpanel/web';

export interface AnalyticsTrackOptions {
  props?: Record<string, unknown>;
  [key: string]: unknown;
}

let openPanelInstance: OpenPanel | null = null;

export function getOpenPanelInstance(): OpenPanel | null {
  return openPanelInstance;
}

export function updateGlobalAnalyticsProperties(context?: {
  theme?: string;
  packageManager?: string;
  platformTab?: string;
}): void {
  if (!openPanelInstance || typeof window === 'undefined') {
    return;
  }

  try {
    const isDark = document.documentElement.classList.contains('dark');
    openPanelInstance.setGlobalProperties({
      active_theme: context?.theme || (isDark ? 'dark' : 'light'),
      package_manager: context?.packageManager || localStorage.getItem('gv-docs-package-manager') || 'bun',
      active_platform: context?.platformTab || localStorage.getItem('gv-docs-platform') || 'web',
      domain: window.location.hostname,
      environment:
        window.location.hostname === 'design.gventureshq.com'
          ? 'production'
          : window.location.hostname.includes('pages.dev')
            ? 'preview'
            : window.location.hostname === 'design.garciaericn.com'
              ? 'legacy'
              : 'development',
      viewport: `${window.innerWidth}x${window.innerHeight}`,
      screen_resolution: `${window.screen.width}x${window.screen.height}`,
    });
  } catch (error) {
    if (import.meta.env.DEV) {
      console.debug('OpenPanel setGlobalProperties skipped', error);
    }
  }
}

export function initOpenPanel(clientId: string, apiUrl: string): OpenPanel {
  if (!openPanelInstance) {
    openPanelInstance = new OpenPanel({
      clientId,
      apiUrl,
      trackScreenViews: false,
      trackOutgoingLinks: true,
      trackAttributes: true,
      trackHashChanges: true,
      sessionReplay: {
        enabled: true,
        maskAllInputs: true,
        maskAllText: false,
        flushIntervalMs: 5000,
      },
    });

    updateGlobalAnalyticsProperties();
  }
  return openPanelInstance;
}

export function safeTrack(eventName: string, options?: AnalyticsTrackOptions | Record<string, unknown>): void {
  try {
    const rawProps = options && 'props' in options && typeof options.props === 'object' ? options.props : options;
    const properties = {
      ...(rawProps || {}),
      domain: typeof window !== 'undefined' ? window.location.hostname : 'unknown',
      environment:
        typeof window !== 'undefined'
          ? window.location.hostname === 'design.gventureshq.com'
            ? 'production'
            : window.location.hostname.includes('pages.dev')
              ? 'preview'
              : window.location.hostname === 'design.garciaericn.com'
                ? 'legacy'
                : 'development'
          : 'server',
    };
    if (openPanelInstance) {
      void openPanelInstance.track(eventName, properties);
    }
  } catch (error) {
    if (import.meta.env.DEV) {
      console.debug('OpenPanel track skipped', { eventName, error });
    }
  }
}
