/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPENPANEL_CLIENT_ID?: string;
  readonly VITE_OPENPANEL_API_URL?: string;
  readonly VITE_ANALYTICS_ENABLED?: string;
  readonly VITE_ANALYTICS_DEBUG?: string;
  readonly NEXT_PUBLIC_ANALYTICS_ENABLED?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
