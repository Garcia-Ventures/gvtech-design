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
  // Additional primitives can be added here
} as const;

export const theme = {
  light: {
    background: 'hsl(0 0% 96%)', // White Smoke
    foreground: 'hsl(222 47% 11%)', // Oxford Blue
    card: 'hsl(0 0% 100%)', // White
    cardForeground: 'hsl(222 47% 11%)', // Oxford Blue
    popover: 'hsl(0 0% 100%)', // White
    popoverForeground: 'hsl(222 47% 11%)', // Oxford Blue
    primary: palette.brand.blue, // Royal Blue (Intellect)
    primaryForeground: 'hsl(0 0% 100%)', // White
    secondary: 'hsl(93 28% 54%)', // Asparagus / Pistachio
    secondaryForeground: 'hsl(0 0% 100%)', // White
    muted: 'hsl(0 0% 92%)', // Gainsboro
    mutedForeground: 'hsl(215 16% 47%)', // Steel Blue
    accent: 'hsl(0 0% 88%)', // French Gray
    accentForeground: 'hsl(222 47% 11%)', // Oxford Blue
    destructive: 'hsl(0 84.2% 60.2%)', // Vivid Red
    destructiveForeground: 'hsl(0 0% 100%)', // White
    border: 'hsl(0 0% 89%)', // Light Gray
    input: 'hsl(0 0% 89%)', // Light Gray
    ring: 'hsl(222 47% 11%)', // Oxford Blue
    radius: '0.5rem',
  },
  dark: {
    background: 'hsl(0 0% 9%)', // Night
    foreground: 'hsl(0 0% 100%)', // White
    card: 'hsl(0 0% 14%)', // Eerie Black
    cardForeground: 'hsl(0 0% 100%)', // White
    popover: 'hsl(0 0% 11%)', // Night (alt)
    popoverForeground: 'hsl(0 0% 100%)', // White
    primary: 'hsl(227 96% 71%)', // Baby Blue
    primaryForeground: 'hsl(0 0% 9%)', // Night
    secondary: 'hsl(96 44% 61%)', // Celadon
    secondaryForeground: 'hsl(0 0% 9%)', // Night
    muted: 'hsl(0 0% 6%)', // Black
    mutedForeground: 'hsl(0 0% 70%)', // Silver
    accent: 'hsl(0 0% 15%)', // Jet
    accentForeground: 'hsl(0 0% 100%)', // White
    destructive: 'hsl(0 62.8% 30.6%)', // Blood Red
    destructiveForeground: 'hsl(0 0% 100%)', // White
    border: 'hsl(0 0% 18%)', // Raisin Black
    input: 'hsl(0 0% 18%)', // Raisin Black
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
