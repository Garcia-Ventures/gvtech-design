/** Design system color tokens for Garcia Ventures. These tokens follow the "Structured Growth" theme. */
export const tokens = {
  colors: {
    light: {
      background: 'hsl(210 29% 98%)',
      foreground: 'hsl(215 28% 17%)',
      card: 'hsl(210 29% 98%)',
      cardForeground: 'hsl(215 28% 17%)',
      popover: 'hsl(210 29% 98%)',
      popoverForeground: 'hsl(215 28% 17%)',
      primary: 'hsl(225 73% 57%)',
      primaryForeground: 'hsl(210 29% 98%)',
      secondary: 'hsl(93 28% 54%)',
      secondaryForeground: 'hsl(210 29% 98%)',
      muted: 'hsl(220 9% 46%)',
      mutedForeground: 'hsl(220 9% 25%)',
      accent: 'hsl(228 78% 75%)',
      accentForeground: 'hsl(225 73% 57%)',
      destructive: 'hsl(0 84.2% 60.2%)',
      destructiveForeground: 'hsl(210 29% 98%)',
      border: 'hsl(220 9% 46% / 0.2)',
      input: 'hsl(220 9% 46% / 0.1)',
      ring: 'hsl(225 73% 57%)',
    },
    dark: {
      background: 'hsl(146 41% 9%)',
      foreground: 'hsl(40 100% 97%)',
      card: 'hsl(146 41% 9%)',
      cardForeground: 'hsl(40 100% 97%)',
      popover: 'hsl(146 41% 9%)',
      popoverForeground: 'hsl(40 100% 97%)',
      primary: 'hsl(227 96% 71%)',
      primaryForeground: 'hsl(146 41% 9%)',
      secondary: 'hsl(96 44% 61%)',
      secondaryForeground: 'hsl(146 41% 9%)',
      muted: 'hsl(40 100% 97%)',
      mutedForeground: 'hsl(40 10% 70%)',
      accent: 'hsl(93 31% 73%)',
      accentForeground: 'hsl(227 96% 71%)',
      destructive: 'hsl(0 62.8% 30.6%)',
      destructiveForeground: 'hsl(40 100% 97%)',
      border: 'hsl(40 100% 97% / 0.2)',
      input: 'hsl(40 100% 97% / 0.1)',
      ring: 'hsl(227 96% 71%)',
    },
    brand: {
      green: 'hsl(151 66% 27%)',
      blue: 'hsl(225 73% 57%)',
    },
  },
} as const;

export type ThemeTokens = typeof tokens.colors.light;
export type BrandTokens = typeof tokens.colors.brand;
