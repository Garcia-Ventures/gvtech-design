// @gv-tech/design-tokens
// Single source of truth for all design tokens in the GV Tech design system.
// Consumed by both web (ui-web) and native (ui-native) implementations.

// Color tokens
export { palette } from './palette';
export type { PaletteTokens } from './palette';

export { theme } from './theme';
export type { ThemeTokens } from './theme';

// Layout tokens
export { spacing } from './spacing';
export type { SpacingTokens } from './spacing';

export { radii, radiiNumeric } from './radii';
export type { RadiiNumericTokens, RadiiTokens } from './radii';

// Typography tokens
export { typography } from './typography';
export type { TypographyTokens } from './typography';

// Elevation tokens
export { shadows } from './shadows';
export type { ShadowTokens } from './shadows';

// Convenience re-export of all tokens as a single object.
// Mirrors the legacy `tokens` export from `src/theme/tokens.ts`.
import { palette } from './palette';
import { theme } from './theme';

export const tokens = {
  palette,
  theme,
} as const;
