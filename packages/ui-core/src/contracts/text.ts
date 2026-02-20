// Shared Text contracts.
// Foundation typography component for cross-platform text rendering.

export const textVariantValues = ['h1', 'h2', 'h3', 'h4', 'body', 'bodySmall', 'caption', 'label', 'overline'] as const;
export type TextVariant = (typeof textVariantValues)[number];

// Platform-agnostic props shared by every Text implementation.
// Does NOT include variant — that comes from platform-specific CVA bindings.
export interface TextBaseProps {
  className?: string;
  children?: React.ReactNode;
}
