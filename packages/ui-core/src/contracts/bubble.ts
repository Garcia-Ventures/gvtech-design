// Shared Bubble contracts.
// Both ui-web and ui-native implementations must satisfy these types.

export const bubbleVariantValues = [
  'default',
  'secondary',
  'muted',
  'tinted',
  'outline',
  'ghost',
  'destructive',
] as const;
export type BubbleVariant = (typeof bubbleVariantValues)[number];

export const bubbleAlignValues = ['start', 'end'] as const;
export type BubbleAlign = (typeof bubbleAlignValues)[number];

export const bubbleReactionsSideValues = ['top', 'bottom'] as const;
export type BubbleReactionsSide = (typeof bubbleReactionsSideValues)[number];

// Platform-agnostic props shared by every Bubble sub-component.
// Does NOT include variant/side — those come from platform-specific CVA bindings
// to avoid type conflicts with VariantProps.
export interface BubbleGroupBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface BubbleBaseProps {
  className?: string;
  align?: BubbleAlign;
  children?: React.ReactNode;
}

export interface BubbleContentBaseProps {
  className?: string;
  asChild?: boolean;
  children?: React.ReactNode;
}

export interface BubbleReactionsBaseProps {
  className?: string;
  align?: BubbleAlign;
  side?: BubbleReactionsSide;
  children?: React.ReactNode;
}

// Bubble exports the same sub-components on both platforms.
export type BubbleSubComponent = 'Bubble' | 'BubbleContent' | 'BubbleGroup' | 'BubbleReactions';
