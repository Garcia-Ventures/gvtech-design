// Shared Questionnaire contracts.
// Both ui-web and ui-native implementations must satisfy these types.
// The web implementation is backed by the `@shadcn/react/questionnaire`
// headless primitive; native stubs preserve the same export surface.

import type { ButtonSize, ButtonVariant } from './button';

// Platform-agnostic props shared by every Questionnaire sub-component.
export interface QuestionnaireBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface QuestionnaireProgressBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface QuestionnaireItemBaseProps {
  className?: string;
  name: string;
  children?: React.ReactNode;
}

export interface QuestionnaireTitleBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface QuestionnaireDescriptionBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface QuestionnaireChoicesBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface QuestionnaireChoiceBaseProps {
  className?: string;
  value?: string;
  children?: React.ReactNode;
}

export interface QuestionnaireChoiceDescriptionBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface QuestionnaireInputBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface QuestionnaireErrorBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface QuestionnaireActionsBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface QuestionnairePreviousBaseProps {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: React.ReactNode;
}

export interface QuestionnaireSkipBaseProps {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: React.ReactNode;
}

export interface QuestionnaireNextBaseProps {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: React.ReactNode;
}

export interface QuestionnaireSubmitBaseProps {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: React.ReactNode;
}

// Questionnaire exports the same sub-components on both platforms.
export type QuestionnaireSubComponent =
  | 'Questionnaire'
  | 'QuestionnaireActions'
  | 'QuestionnaireChoice'
  | 'QuestionnaireChoiceDescription'
  | 'QuestionnaireChoices'
  | 'QuestionnaireDescription'
  | 'QuestionnaireError'
  | 'QuestionnaireInput'
  | 'QuestionnaireItem'
  | 'QuestionnaireNext'
  | 'QuestionnairePrevious'
  | 'QuestionnaireProgress'
  | 'QuestionnaireSkip'
  | 'QuestionnaireSubmit'
  | 'QuestionnaireTitle';
