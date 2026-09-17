// Shared MessageScroller contracts.
// Both ui-web and ui-native implementations must satisfy these types.
// The web implementation is backed by the `@shadcn/react/message-scroller`
// headless primitive; native stubs preserve the same export surface.

import type { ButtonSize, ButtonVariant } from './button';

export const messageScrollerDirectionValues = ['start', 'end'] as const;
export type MessageScrollerDirection = (typeof messageScrollerDirectionValues)[number];

// Platform-agnostic props shared by every MessageScroller sub-component.
export interface MessageScrollerProviderBaseProps {
  children?: React.ReactNode;
}

export interface MessageScrollerBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface MessageScrollerViewportBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface MessageScrollerContentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface MessageScrollerItemBaseProps {
  className?: string;
  scrollAnchor?: boolean;
  children?: React.ReactNode;
}

export interface MessageScrollerButtonBaseProps {
  className?: string;
  direction?: MessageScrollerDirection;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: React.ReactNode;
}

// MessageScroller exports the same sub-components on both platforms.
export type MessageScrollerSubComponent =
  | 'MessageScroller'
  | 'MessageScrollerButton'
  | 'MessageScrollerContent'
  | 'MessageScrollerItem'
  | 'MessageScrollerProvider'
  | 'MessageScrollerViewport';
