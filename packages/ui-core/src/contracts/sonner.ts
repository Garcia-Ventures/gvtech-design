export interface SonnerBaseProps {
  theme?: 'light' | 'dark' | 'system';
  className?: string;
  toastOptions?: {
    classNames?: unknown;
  };
}
