// Tailwind CSS configuration preset for GV Tech design system.
// This registers our colors, shadows, border radii, and animations natively.

export const preset = {
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',

        // Primitive palette tokens exported dynamically via CSS variable mappings
        brand: {
          blue: 'hsl(var(--brand-blue) / <alpha-value>)',
          green: 'hsl(var(--brand-green) / <alpha-value>)',
          'floral-white': 'hsl(var(--brand-floral-white) / <alpha-value>)',
        },
        neutral: {
          white: 'hsl(var(--neutral-white) / <alpha-value>)',
          black: 'hsl(var(--neutral-black) / <alpha-value>)',
          gray50: 'hsl(var(--neutral-gray50) / <alpha-value>)',
          gray100: 'hsl(var(--neutral-gray100) / <alpha-value>)',
          gray200: 'hsl(var(--neutral-gray200) / <alpha-value>)',
          gray300: 'hsl(var(--neutral-gray300) / <alpha-value>)',
          gray400: 'hsl(var(--neutral-gray400) / <alpha-value>)',
          gray500: 'hsl(var(--neutral-gray500) / <alpha-value>)',
          gray600: 'hsl(var(--neutral-gray600) / <alpha-value>)',
          gray700: 'hsl(var(--neutral-gray700) / <alpha-value>)',
          gray800: 'hsl(var(--neutral-gray800) / <alpha-value>)',
          gray900: 'hsl(var(--neutral-gray900) / <alpha-value>)',
          gray950: 'hsl(var(--neutral-gray950) / <alpha-value>)',
          gray975: 'hsl(var(--neutral-gray975) / <alpha-value>)',
          gray990: 'hsl(var(--neutral-gray990) / <alpha-value>)',
        },
        semantic: {
          success: 'hsl(var(--semantic-success) / <alpha-value>)',
          'success-dark': 'hsl(var(--semantic-success-dark) / <alpha-value>)',
          destructive: 'hsl(var(--semantic-destructive) / <alpha-value>)',
          'destructive-dark': 'hsl(var(--semantic-destructive-dark) / <alpha-value>)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        xl: 'calc(var(--radius) + 4px)',
        '2xl': 'calc(var(--radius) + 8px)',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
};
