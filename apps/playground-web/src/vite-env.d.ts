/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly NEXT_PUBLIC_PLAUSIBLE_DOMAIN?: string;
  readonly NEXT_PUBLIC_PLAUSIBLE_ENDPOINT?: string;
  readonly NEXT_PUBLIC_ANALYTICS_ENABLED?: string;
  readonly VITE_PLAUSIBLE_DOMAIN?: string;
  readonly VITE_PLAUSIBLE_ENDPOINT?: string;
  readonly VITE_ANALYTICS_ENABLED?: string;
  readonly VITE_ANALYTICS_DEBUG?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
