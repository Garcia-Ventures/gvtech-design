import type {
  MessageScrollerBaseProps,
  MessageScrollerButtonBaseProps,
  MessageScrollerContentBaseProps,
  MessageScrollerItemBaseProps,
  MessageScrollerProviderBaseProps,
  MessageScrollerViewportBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { Pressable, ScrollView, View } from 'react-native';

// Web-first stub: the web implementation is backed by the
// `@shadcn/react/message-scroller` headless primitive, which has no native
// equivalent. Until a Reanimated-based implementation lands, these preserve
// the export surface with ScrollView semantics.
// See docs/reference/parity-matrix.md.
export const MessageScrollerProvider: React.FC<MessageScrollerProviderBaseProps> = ({ children }) => {
  return <>{children}</>;
};

export const MessageScroller: React.FC<MessageScrollerBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MessageScrollerViewport: React.FC<MessageScrollerViewportBaseProps> = ({ children, className }) => {
  return <ScrollView className={className}>{children}</ScrollView>;
};

export const MessageScrollerContent: React.FC<MessageScrollerContentBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MessageScrollerItem: React.FC<MessageScrollerItemBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MessageScrollerButton: React.FC<MessageScrollerButtonBaseProps> = ({ children, className }) => {
  return <Pressable className={className}>{children}</Pressable>;
};
