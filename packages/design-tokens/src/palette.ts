// Primitive color palette for the GV Tech design system.
// These are the raw color values. They should NOT be used directly in components —
// use semantic tokens from `theme.ts` instead.
//
// The neutral ramp is a warm beige/ink scale (hue 30–35, with green ink in the
// mid steps). Higher gray numbers are darker. Brand greens are the UI primary
// and supporting accents; `blue` stays available as a separate accent.

export const palette = {
  brand: {
    blue: 'hsl(225 73% 57%)', // Royal Blue — retained accent, not the UI primary
    green: 'hsl(150 50% 28%)', // Primary light — logo, CTAs, key accents
    greenBright: 'hsl(150 40% 55%)', // Primary dark
    greenMuted: 'hsl(150 25% 40%)', // Secondary light — supporting accent
    greenSoft: 'hsl(150 30% 65%)', // Secondary dark
    ink: 'hsl(150 50% 22%)', // Foreground light — primary text
    inkDeep: 'hsl(150 45% 10%)', // Text on bright green (dark primary/secondary)
    cream: 'hsl(35 20% 92%)', // Foreground dark — warm primary text
    floralWhite: 'hsl(35 28% 96%)', // Warm highlight above the light card surface
  },
  neutral: {
    white: 'hsl(35 33% 97%)', // Warm paper — text on dark green
    black: 'hsl(30 18% 6%)',
    gray50: 'hsl(35 20% 94%)', // Card / surface light
    gray100: 'hsl(35 25% 88%)', // Background light
    gray200: 'hsl(35 18% 82%)', // Accent / hover light
    gray300: 'hsl(35 15% 80%)', // Muted, borders, inputs light
    gray400: 'hsl(35 12% 70%)', // Muted foreground dark
    gray500: 'hsl(150 15% 32%)', // Muted foreground light
    gray600: 'hsl(150 20% 28%)',
    gray700: 'hsl(30 10% 22%)', // Muted, borders, inputs dark
    gray800: 'hsl(30 12% 18%)', // Accent / hover dark
    gray900: 'hsl(30 12% 16%)', // Card / surface dark
    gray950: 'hsl(30 14% 14%)',
    gray975: 'hsl(30 15% 12%)', // Background dark
    gray990: 'hsl(30 18% 8%)', // Recessed sidebar dark
  },
  semantic: {
    success: 'hsl(93 28% 54%)', // Yellow-green, distinct from the brand secondary
    successDark: 'hsl(96 44% 61%)',
    destructive: 'hsl(0 84.2% 60.2%)',
    destructiveDark: 'hsl(0 62.8% 30.6%)',
  },
} as const;

export type PaletteTokens = typeof palette;
