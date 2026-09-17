import type {
  MessageAvatarBaseProps,
  MessageBaseProps,
  MessageContentBaseProps,
  MessageFooterBaseProps,
  MessageGroupBaseProps,
  MessageHeaderBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { View } from 'react-native';

// Web-first stub: structure-only passthrough until the full native
// chat implementation lands. See docs/reference/parity-matrix.md.
export const MessageGroup: React.FC<MessageGroupBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const Message: React.FC<MessageBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MessageAvatar: React.FC<MessageAvatarBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MessageContent: React.FC<MessageContentBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MessageHeader: React.FC<MessageHeaderBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const MessageFooter: React.FC<MessageFooterBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};
