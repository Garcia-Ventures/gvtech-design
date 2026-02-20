// Semantic theme tokens for the GV Tech design system.
// These map primitive palette values to semantic roles (background, foreground, etc.)
// for both light and dark modes. Components should reference these tokens, not palette directly.

import { palette } from './palette';

export const theme = {
  light: {
    background: palette.neutral.gray50,
    foreground: palette.neutral.gray600,
    card: palette.neutral.white,
    cardForeground: palette.neutral.gray600,
    popover: palette.neutral.white,
    popoverForeground: palette.neutral.gray600,
    primary: palette.brand.blue,
    primaryForeground: palette.neutral.white,
    secondary: palette.semantic.success,
    secondaryForeground: palette.neutral.white,
    muted: palette.neutral.gray100,
    mutedForeground: palette.neutral.gray500,
    accent: palette.neutral.gray300,
    accentForeground: palette.neutral.gray600,
    destructive: palette.semantic.destructive,
    destructiveForeground: palette.neutral.white,
    border: palette.neutral.gray200,
    input: palette.neutral.gray200,
    ring: palette.neutral.gray600,
    radius: '0.5rem',
  },
  dark: {
    background: palette.neutral.gray975,
    foreground: palette.neutral.white,
    card: palette.neutral.gray900,
    cardForeground: palette.neutral.white,
    popover: palette.neutral.gray950,
    popoverForeground: palette.neutral.white,
    primary: 'hsl(227 96% 71%)', // Keeping as specific HSL to match original
    primaryForeground: palette.neutral.gray975,
    secondary: palette.semantic.successDark,
    secondaryForeground: palette.neutral.gray975,
    muted: palette.neutral.gray990,
    mutedForeground: palette.neutral.gray400,
    accent: palette.neutral.gray800,
    accentForeground: palette.neutral.white,
    destructive: palette.semantic.destructiveDark,
    destructiveForeground: palette.neutral.white,
    border: palette.neutral.gray700,
    input: palette.neutral.gray700,
    ring: 'hsl(0 0% 90%)', // Platinum
    radius: '0.5rem',
  },
} as const;

export type ThemeTokens = typeof theme.light;
