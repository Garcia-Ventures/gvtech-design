// Border radius tokens for the GV Tech design system.

export const radii = {
  none: '0',
  sm: 'calc(var(--radius) - 4px)',
  md: 'calc(var(--radius) - 2px)',
  lg: 'var(--radius)',
  xl: 'calc(var(--radius) + 4px)',
  '2xl': 'calc(var(--radius) + 8px)',
  full: '9999px',
} as const;

// Numeric radius values (in px) for React Native, which doesn't support CSS calc().
// Based on a default --radius of 0.5rem (8px).
export const radiiNumeric = {
  none: 0,
  sm: 4, // 8 - 4
  md: 6, // 8 - 2
  lg: 8, // base
  xl: 12, // 8 + 4
  '2xl': 16, // 8 + 8
  full: 9999,
} as const;

export type RadiiTokens = typeof radii;
export type RadiiNumericTokens = typeof radiiNumeric;
