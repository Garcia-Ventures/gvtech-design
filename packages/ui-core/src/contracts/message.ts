// Shared Message contracts.
// Both ui-web and ui-native implementations must satisfy these types.

export const messageAlignValues = ['start', 'end'] as const;
export type MessageAlign = (typeof messageAlignValues)[number];

// Platform-agnostic props shared by every Message sub-component.
export interface MessageGroupBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface MessageBaseProps {
  className?: string;
  align?: MessageAlign;
  children?: React.ReactNode;
}

export interface MessageAvatarBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface MessageContentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface MessageHeaderBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface MessageFooterBaseProps {
  className?: string;
  children?: React.ReactNode;
}

// Message exports the same sub-components on both platforms.
export type MessageSubComponent =
  | 'Message'
  | 'MessageAvatar'
  | 'MessageContent'
  | 'MessageFooter'
  | 'MessageGroup'
  | 'MessageHeader';
