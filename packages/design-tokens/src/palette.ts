// Primitive color palette for the GV Tech design system.
// These are the raw color values. They should NOT be used directly in components —
// use semantic tokens from `theme.ts` instead.

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

export type PaletteTokens = typeof palette;
