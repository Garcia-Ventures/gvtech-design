import { track, type PlausibleEventOptions } from '@plausible-analytics/tracker';

export function safeTrack(eventName: string, options: PlausibleEventOptions): void {
  try {
    track(eventName, options);
  } catch (error) {
    if (import.meta.env.DEV) {
      console.debug('Plausible track skipped', { eventName, error });
    }
  }
}
