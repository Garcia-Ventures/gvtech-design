import type {
  AttachmentActionBaseProps,
  AttachmentActionsBaseProps,
  AttachmentBaseProps,
  AttachmentContentBaseProps,
  AttachmentDescriptionBaseProps,
  AttachmentGroupBaseProps,
  AttachmentMediaBaseProps,
  AttachmentTitleBaseProps,
  AttachmentTriggerBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { Pressable, View } from 'react-native';

// Web-first stub: structure-only passthrough until the full native
// implementation lands. See docs/reference/parity-matrix.md.
export const Attachment: React.FC<AttachmentBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const AttachmentMedia: React.FC<AttachmentMediaBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const AttachmentContent: React.FC<AttachmentContentBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const AttachmentTitle: React.FC<AttachmentTitleBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const AttachmentDescription: React.FC<AttachmentDescriptionBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const AttachmentActions: React.FC<AttachmentActionsBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const AttachmentAction: React.FC<AttachmentActionBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const AttachmentTrigger: React.FC<AttachmentTriggerBaseProps> = ({ children, className }) => {
  return <Pressable className={className}>{children}</Pressable>;
};

export const AttachmentGroup: React.FC<AttachmentGroupBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};
