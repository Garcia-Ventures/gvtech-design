// Shared Marker contracts.
// Both ui-web and ui-native implementations must satisfy these types.

export const markerVariantValues = ['default', 'separator', 'border'] as const;
export type MarkerVariant = (typeof markerVariantValues)[number];

// Platform-agnostic props shared by every Marker sub-component.
// Does NOT include variant — that comes from platform-specific CVA bindings
// to avoid type conflicts with VariantProps.
export interface MarkerBaseProps {
  className?: string;
  asChild?: boolean;
  children?: React.ReactNode;
}

export interface MarkerIconBaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface MarkerContentBaseProps {
  className?: string;
  children?: React.ReactNode;
}

// Marker exports the same sub-components on both platforms.
export type MarkerSubComponent = 'Marker' | 'MarkerContent' | 'MarkerIcon';
