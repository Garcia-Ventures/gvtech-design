/** Design system color tokens for Garcia Ventures. */
export const tokens = {
  colors: {
    light: {
      background: 'hsl(210 15% 95%)',
      foreground: 'hsl(222 47% 11%)',
      card: 'hsl(0 0% 100%)',
      cardForeground: 'hsl(222 47% 11%)',
      popover: 'hsl(0 0% 100%)',
      popoverForeground: 'hsl(222 47% 11%)',
      primary: 'hsl(225 73% 57%)',
      primaryForeground: 'hsl(0 0% 100%)',
      secondary: 'hsl(93 28% 54%)',
      secondaryForeground: 'hsl(0 0% 100%)',
      muted: 'hsl(210 15% 90%)',
      mutedForeground: 'hsl(215 16% 47%)',
      accent: 'hsl(210 40% 96%)',
      accentForeground: 'hsl(222 47% 11%)',
      destructive: 'hsl(0 84.2% 60.2%)',
      destructiveForeground: 'hsl(210 20% 98%)',
      border: 'hsl(214 32% 91%)',
      input: 'hsl(214 32% 91%)',
      ring: 'hsl(222 47% 11%)',
    },
    dark: {
      background: 'hsl(222 28% 17%)',
      foreground: 'hsl(0 0% 100%)',
      card: 'hsl(222 24% 12%)',
      cardForeground: 'hsl(0 0% 100%)',
      popover: 'hsl(222 28% 17%)',
      popoverForeground: 'hsl(0 0% 100%)',
      primary: 'hsl(227 96% 71%)',
      primaryForeground: 'hsl(222 28% 17%)',
      secondary: 'hsl(96 44% 61%)',
      secondaryForeground: 'hsl(222 28% 17%)',
      muted: 'hsl(222 24% 11%)',
      mutedForeground: 'hsl(215 20% 65%)',
      accent: 'hsl(217 33% 17%)',
      accentForeground: 'hsl(0 0% 100%)',
      destructive: 'hsl(0 62.8% 30.6%)',
      destructiveForeground: 'hsl(0 0% 100%)',
      border: 'hsl(217 33% 17%)',
      input: 'hsl(217 33% 17%)',
      ring: 'hsl(213 27% 84%)',
    },
    brand: {
      green: 'hsl(151 66% 27%)',
      blue: 'hsl(225 73% 57%)',
    },
  },
} as const;

export type ThemeTokens = typeof tokens.colors.light;
export type BrandTokens = typeof tokens.colors.brand;
