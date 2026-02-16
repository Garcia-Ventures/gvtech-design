/**
 * Design system tokens for Garcia Ventures.
 * This file defines the core palette and semantic tokens for the theme system.
 */

export const palette = {
  brand: {
    blue: 'hsl(225 73% 57%)', // Royal Blue (Intellect)
    green: 'hsl(151 66% 27%)', // #177245 (Stability)
    floralWhite: 'hsl(40 100% 97%)', // Light Neutral / Floral White
  },
  neutral: {
    white: 'hsl(0 0% 100%)',
    black: 'hsl(0 0% 0%)', // Pure Black
    gray50: 'hsl(0 0% 96%)', // White Smoke
    gray100: 'hsl(0 0% 92%)', // Gainsboro
    gray200: 'hsl(0 0% 89%)', // Light Gray
    gray300: 'hsl(0 0% 88%)', // French Gray
    gray400: 'hsl(0 0% 70%)', // Silver
    gray500: 'hsl(215 16% 47%)', // Steel Blue
    gray600: 'hsl(222 47% 11%)', // Oxford Blue
    gray700: 'hsl(0 0% 18%)', // Raisin Black
    gray800: 'hsl(0 0% 15%)', // Jet
    gray900: 'hsl(0 0% 14%)', // Eerie Black
    gray950: 'hsl(0 0% 11%)', // Night (alt)
    gray975: 'hsl(0 0% 9%)', // Night
    gray990: 'hsl(0 0% 6%)', // Black (almost)
  },
  semantic: {
    success: 'hsl(93 28% 54%)', // Asparagus / Pistachio
    successDark: 'hsl(96 44% 61%)',
    destructive: 'hsl(0 84.2% 60.2%)', // Vivid Red
    destructiveDark: 'hsl(0 62.8% 30.6%)', // Blood Red
  },
} as const;

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

export const tokens = {
  palette,
  theme,
} as const;

export type ThemeTokens = typeof theme.light;
export type PaletteTokens = typeof palette;
