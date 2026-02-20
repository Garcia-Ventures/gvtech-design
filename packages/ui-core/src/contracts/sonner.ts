export interface SonnerBaseProps {
  theme?: 'light' | 'dark' | 'system';
  className?: string;
  toastOptions?: {
    classNames?: {
      toast?: string;
      description?: string;
      actionButton?: string;
      cancelButton?: string;
      [key: string]: string | undefined;
    };
    [key: string]: unknown;
  };
  [key: string]: unknown;
}
