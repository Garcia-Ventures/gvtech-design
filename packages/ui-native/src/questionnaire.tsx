import type {
  QuestionnaireActionsBaseProps,
  QuestionnaireBaseProps,
  QuestionnaireChoiceBaseProps,
  QuestionnaireChoiceDescriptionBaseProps,
  QuestionnaireChoicesBaseProps,
  QuestionnaireDescriptionBaseProps,
  QuestionnaireErrorBaseProps,
  QuestionnaireInputBaseProps,
  QuestionnaireItemBaseProps,
  QuestionnaireNextBaseProps,
  QuestionnairePreviousBaseProps,
  QuestionnaireProgressBaseProps,
  QuestionnaireSkipBaseProps,
  QuestionnaireSubmitBaseProps,
  QuestionnaireTitleBaseProps,
} from '@gv-tech/ui-core';
import * as React from 'react';
import { Pressable, View } from 'react-native';

// Web-first stub: the web implementation is backed by the
// `@shadcn/react/questionnaire` headless primitive, which has no native
// equivalent. Until a native implementation lands, these preserve the export
// surface with basic View/Pressable semantics.
// See docs/reference/parity-matrix.md.
export const Questionnaire: React.FC<QuestionnaireBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const QuestionnaireProgress: React.FC<QuestionnaireProgressBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const QuestionnaireItem: React.FC<QuestionnaireItemBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const QuestionnaireTitle: React.FC<QuestionnaireTitleBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const QuestionnaireDescription: React.FC<QuestionnaireDescriptionBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const QuestionnaireChoices: React.FC<QuestionnaireChoicesBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const QuestionnaireChoice: React.FC<QuestionnaireChoiceBaseProps> = ({ children, className }) => {
  return <Pressable className={className}>{children}</Pressable>;
};

export const QuestionnaireChoiceDescription: React.FC<QuestionnaireChoiceDescriptionBaseProps> = ({
  children,
  className,
}) => {
  return <View className={className}>{children}</View>;
};

export const QuestionnaireInput: React.FC<QuestionnaireInputBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const QuestionnaireError: React.FC<QuestionnaireErrorBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const QuestionnaireActions: React.FC<QuestionnaireActionsBaseProps> = ({ children, className }) => {
  return <View className={className}>{children}</View>;
};

export const QuestionnairePrevious: React.FC<QuestionnairePreviousBaseProps> = ({ children, className }) => {
  return <Pressable className={className}>{children}</Pressable>;
};

export const QuestionnaireSkip: React.FC<QuestionnaireSkipBaseProps> = ({ children, className }) => {
  return <Pressable className={className}>{children}</Pressable>;
};

export const QuestionnaireNext: React.FC<QuestionnaireNextBaseProps> = ({ children, className }) => {
  return <Pressable className={className}>{children}</Pressable>;
};

export const QuestionnaireSubmit: React.FC<QuestionnaireSubmitBaseProps> = ({ children, className }) => {
  return <Pressable className={className}>{children}</Pressable>;
};
