/**
 * Shared TypeScript types and utilities for the GVTech Design System
 */

import React from 'react';

// =============================================================================
// COMMON TYPES
// =============================================================================

/**
 * Common HTML element attributes that can be extended by components
 */
export type HTMLAttributes<T = HTMLElement> = React.HTMLAttributes<T>;

/**
 * Common button element attributes
 */
export type ButtonHTMLAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Common anchor element attributes
 */
export type AnchorHTMLAttributes = React.AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Common input element attributes
 */
export type InputHTMLAttributes = React.InputHTMLAttributes<HTMLInputElement>;

// =============================================================================
// DESIGN SYSTEM CONSTANTS & TYPES
// =============================================================================

/**
 * Available color values in the design system
 */
export type ColorValue =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'positive'
  | 'negative'
  | 'warning'
  | 'error'
  | 'neutral';

/**
 * Available size variants
 */
export type SizeVariant = 'small' | 'medium' | 'large' | 'tiny';

/**
 * Available appearance variants for buttons and similar components
 */
export type AppearanceVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outline'
  | 'primaryOutline'
  | 'secondaryOutline';

/**
 * Status variants for badges and status indicators
 */
export type StatusVariant = 'positive' | 'negative' | 'neutral' | 'error' | 'warning';

// =============================================================================
// BRANDED TYPES
// =============================================================================

/**
 * Branded type for icon names to ensure type safety
 */
export type IconName = string & { readonly __brand: 'IconName' };

/**
 * Branded type for CSS color values
 */
export type CSSColor = string & { readonly __brand: 'CSSColor' };

/**
 * Branded type for pixel values
 */
export type PixelValue = number & { readonly __brand: 'PixelValue' };

// =============================================================================
// UTILITY TYPES
// =============================================================================

/**
 * Extract the props type from a React component
 */
export type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;

/**
 * Make all properties of T optional except for K
 */
export type RequiredKeys<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

/**
 * Make all properties of T nullable
 */
export type Nullable<T> = { [P in keyof T]: T[P] | null };

/**
 * Extract the children prop type
 */
export type ChildrenType = React.ReactNode;

/**
 * Common props that most components should accept
 */
export interface CommonProps {
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Child elements */
  children?: ChildrenType;
}

/**
 * Props for components that can be disabled
 */
export interface DisableableProps {
  /** Whether the component is disabled */
  disabled?: boolean;
}

/**
 * Props for components that can show loading state
 */
export interface LoadableProps {
  /** Whether the component is in a loading state */
  loading?: boolean;
  /** Text to display while loading */
  loadingText?: string;
}

// =============================================================================
// COMPONENT-SPECIFIC TYPES
// =============================================================================

/**
 * Props for styled components that need size information
 */
export interface SizeableProps {
  size?: SizeVariant;
}

/**
 * Props for styled components that need appearance information
 */
export interface AppearanceProps {
  appearance?: AppearanceVariant;
}

/**
 * Props for styled components that need status information
 */
export interface StatusProps {
  status?: StatusVariant;
}

/**
 * Props for icon components
 */
export interface IconProps extends CommonProps {
  /** The icon name/key */
  icon: IconName;
  /** Whether to display as a block element */
  block?: boolean;
}

/**
 * Props for avatar components
 */
export interface AvatarProps extends CommonProps, HTMLAttributes<HTMLDivElement> {
  /** Whether the avatar is in a loading state */
  loading?: boolean;
  /** The username to display (used for initials or alt text) */
  username?: string;
  /** Image source URL for the avatar */
  src?: string;
  /** Size variant of the avatar */
  size?: SizeVariant;
}

/**
 * Props for badge components
 */
export interface BadgeProps extends CommonProps, HTMLAttributes<HTMLDivElement> {
  /** Status variant that determines the badge styling */
  status?: StatusVariant;
}

/**
 * Props for button components
 */
export interface ButtonProps extends CommonProps, ButtonHTMLAttributes, DisableableProps, LoadableProps {
  /** Visual appearance variant */
  appearance?: AppearanceVariant;
  /** Size variant */
  size?: SizeVariant;
  /** Whether the button contains only an icon */
  containsIcon?: boolean;
  /** Whether the button should render as a link */
  isLink?: boolean;
  /** Custom wrapper component */
  ButtonWrapper?: React.ComponentType<Record<string, unknown>>;
}

/**
 * Props for link components
 */
export interface LinkProps extends CommonProps, AnchorHTMLAttributes {
  /** Whether the link should render as a button */
  isButton?: boolean;
  /** Whether to show an arrow icon */
  withArrow?: boolean;
  /** Whether to use secondary styling */
  secondary?: boolean;
  /** Whether to use tertiary styling */
  tertiary?: boolean;
  /** Whether to remove default chrome/styling */
  nochrome?: boolean;
  /** Whether to use inverse colors */
  inverse?: boolean;
  /** Whether the link contains only an icon */
  containsIcon?: boolean;
  /** Custom wrapper component */
  LinkWrapper?: React.ComponentType<Record<string, unknown>>;
}

// =============================================================================
// CONSTANTS WITH PROPER TYPING
// =============================================================================

/**
 * Button appearance constants
 */
export const BUTTON_APPEARANCES = {
  PRIMARY: 'primary',
  PRIMARY_OUTLINE: 'primaryOutline',
  SECONDARY: 'secondary',
  SECONDARY_OUTLINE: 'secondaryOutline',
  TERTIARY: 'tertiary',
  OUTLINE: 'outline',
} as const;

/**
 * Button size constants
 */
export const BUTTON_SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
} as const;

/**
 * Badge status constants
 */
export const BADGE_STATUSES = {
  POSITIVE: 'positive',
  NEGATIVE: 'negative',
  NEUTRAL: 'neutral',
  ERROR: 'error',
  WARNING: 'warning',
} as const;

/**
 * Avatar size constants with pixel values
 */
export const AVATAR_SIZES = {
  large: 40,
  medium: 28,
  small: 20,
  tiny: 16,
} as const;

// =============================================================================
// TYPE GUARDS
// =============================================================================

/**
 * Type guard to check if a value is a valid size variant
 */
export function isSizeVariant(value: unknown): value is SizeVariant {
  return typeof value === 'string' && ['small', 'medium', 'large', 'tiny'].includes(value);
}

/**
 * Type guard to check if a value is a valid appearance variant
 */
export function isAppearanceVariant(value: unknown): value is AppearanceVariant {
  return (
    typeof value === 'string' &&
    ['primary', 'secondary', 'tertiary', 'outline', 'primaryOutline', 'secondaryOutline'].includes(value)
  );
}

/**
 * Type guard to check if a value is a valid status variant
 */
export function isStatusVariant(value: unknown): value is StatusVariant {
  return typeof value === 'string' && ['positive', 'negative', 'neutral', 'error', 'warning'].includes(value);
}
