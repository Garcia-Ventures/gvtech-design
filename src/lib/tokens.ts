/** Design system color tokens for Garcia Ventures. */
export const tokens = {
  colors: {
    light: {
      background: 'hsl(0 0% 96%)',
      foreground: 'hsl(222 47% 11%)',
      card: 'hsl(0 0% 100%)',
      cardForeground: 'hsl(222 47% 11%)',
      popover: 'hsl(0 0% 100%)',
      popoverForeground: 'hsl(222 47% 11%)',
      primary: 'hsl(225 73% 57%)',
      primaryForeground: 'hsl(0 0% 100%)',
      secondary: 'hsl(93 28% 54%)',
      secondaryForeground: 'hsl(0 0% 100%)',
      muted: 'hsl(0 0% 92%)',
      mutedForeground: 'hsl(215 16% 47%)',
      accent: 'hsl(0 0% 88%)',
      accentForeground: 'hsl(222 47% 11%)',
      destructive: 'hsl(0 84.2% 60.2%)',
      destructiveForeground: 'hsl(0 0% 100%)',
      border: 'hsl(0 0% 89%)',
      input: 'hsl(0 0% 89%)',
      ring: 'hsl(222 47% 11%)',
    },
    dark: {
      background: 'hsl(0 0% 9%)',
      foreground: 'hsl(0 0% 100%)',
      card: 'hsl(0 0% 14%)',
      cardForeground: 'hsl(0 0% 100%)',
      popover: 'hsl(0 0% 11%)',
      popoverForeground: 'hsl(0 0% 100%)',
      primary: 'hsl(227 96% 71%)',
      primaryForeground: 'hsl(0 0% 9%)',
      secondary: 'hsl(96 44% 61%)',
      secondaryForeground: 'hsl(0 0% 9%)',
      muted: 'hsl(0 0% 6%)',
      mutedForeground: 'hsl(0 0% 70%)',
      accent: 'hsl(0 0% 15%)',
      accentForeground: 'hsl(0 0% 100%)',
      destructive: 'hsl(0 62.8% 30.6%)',
      destructiveForeground: 'hsl(0 0% 100%)',
      border: 'hsl(0 0% 18%)',
      input: 'hsl(0 0% 18%)',
      ring: 'hsl(0 0% 90%)',
    },
    brand: {
      green: 'hsl(151 66% 27%)',
      blue: 'hsl(225 73% 57%)',
    },
  },
} as const;

export type ThemeTokens = typeof tokens.colors.light;
export type BrandTokens = typeof tokens.colors.brand;
