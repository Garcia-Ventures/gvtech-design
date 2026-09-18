// Shared Attachment contracts.
// Both ui-web and ui-native implementations must satisfy these types.

export const attachmentStateValues = ['idle', 'uploading', 'processing', 'error', 'done'] as const;
export type AttachmentState = (typeof attachmentStateValues)[number];

export const attachmentSizeValues = ['default', 'sm', 'xs'] as const;
export type AttachmentSize = (typeof attachmentSizeValues)[number];

export const attachmentOrientationValues = ['horizontal', 'vertical'] as const;
export type AttachmentOrientation = (typeof attachmentOrientationValues)[number];

export const attachmentMediaVariantValues = ['icon', 'image'] as const;
export type AttachmentMediaVariant = (typeof attachmentMediaVariantValues)[number];

// Platform-agnostic props shared by every Attachment sub-component.
// Does NOT include size/orientation/variant — those come from platform-specific
// CVA bindings to avoid type conflicts with VariantProps.
export interface AttachmentBaseProps {
  className?: string;
  state?: AttachmentState;
  children?: React.ReactNode;
}

export interface AttachmentMediaBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AttachmentContentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AttachmentTitleBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AttachmentDescriptionBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AttachmentActionsBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AttachmentActionBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface AttachmentTriggerBaseProps {
  className?: string;
  asChild?: boolean;
  children?: React.ReactNode;
}

export interface AttachmentGroupBaseProps {
  className?: string;
  children?: React.ReactNode;
}

// Attachment exports the same sub-components on both platforms.
export type AttachmentSubComponent =
  | 'Attachment'
  | 'AttachmentAction'
  | 'AttachmentActions'
  | 'AttachmentContent'
  | 'AttachmentDescription'
  | 'AttachmentGroup'
  | 'AttachmentMedia'
  | 'AttachmentTitle'
  | 'AttachmentTrigger';
