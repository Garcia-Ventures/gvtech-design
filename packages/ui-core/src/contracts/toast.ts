// Shared Toast contracts.
// Feedback pattern — web uses shadcn/sonner, native uses a custom View.

export const toastVariantValues = ['default', 'destructive'] as const;
export type ToastVariant = (typeof toastVariantValues)[number];

// Platform-agnostic props shared by every Toast implementation.
export interface ToastBaseProps {
  variant?: ToastVariant;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
  onDismiss?: () => void;
}
