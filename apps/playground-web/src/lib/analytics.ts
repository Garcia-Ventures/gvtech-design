import { OpenPanel } from '@openpanel/web';

export interface AnalyticsTrackOptions {
  props?: Record<string, unknown>;
  [key: string]: unknown;
}

let openPanelInstance: OpenPanel | null = null;

export function getOpenPanelInstance(): OpenPanel | null {
  return openPanelInstance;
}

export function initOpenPanel(clientId: string, apiUrl: string): OpenPanel {
  if (!openPanelInstance) {
    openPanelInstance = new OpenPanel({
      clientId,
      apiUrl,
      trackScreenViews: false,
      trackOutgoingLinks: true,
      trackAttributes: true,
    });
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
