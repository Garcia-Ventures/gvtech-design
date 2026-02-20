// Shared Dialog / Sheet contracts.
// Maps to Dialog on web, BottomSheet / Modal on native.

// Platform-agnostic props shared by every Dialog implementation.
export interface DialogBaseProps {
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: React.ReactNode;
}

// Platform-agnostic props for Dialog content area.
export interface DialogContentBaseProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  description?: string;
}

// Dialog exports the same sub-components on both platforms.
export type DialogSubComponent =
  | 'Dialog'
  | 'DialogTrigger'
  | 'DialogContent'
  | 'DialogHeader'
  | 'DialogTitle'
  | 'DialogDescription'
  | 'DialogFooter'
  | 'DialogClose';
