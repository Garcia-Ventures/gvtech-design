// Shared Button variant and size contracts.
// Both ui-web and ui-native implementations must satisfy these types.

export const buttonVariantValues = ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as const;
export type ButtonVariant = (typeof buttonVariantValues)[number];

export const buttonSizeValues = ['default', 'sm', 'lg', 'icon'] as const;
export type ButtonSize = (typeof buttonSizeValues)[number];

// Platform-agnostic props shared by every Button implementation.
// Does NOT include variant/size — those come from platform-specific CVA bindings
// to avoid type conflicts with VariantProps.
export interface ButtonBaseProps {
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}
