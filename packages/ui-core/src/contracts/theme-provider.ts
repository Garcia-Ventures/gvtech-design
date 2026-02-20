import * as React from 'react';

export interface ThemeProviderBaseProps {
  children?: React.ReactNode;
  attribute?: string | string[];
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
  themes?: string[];
  forcedTheme?: string;
  storageKey?: string;
  nonce?: string;
  [key: string]: unknown;
}
