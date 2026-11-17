import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

// We use a dynamic import or relative require because we are running with tsx
// and want to avoid complex tsconfig path issues for a simple script.
import { palette } from '../packages/design-tokens/src/palette';
import { radiiNumeric } from '../packages/design-tokens/src/radii';
import { theme } from '../packages/design-tokens/src/theme';

const OUTPUT_CSS_PATH = path.join(process.cwd(), 'packages/design-tokens/src/theme.css');
const OUTPUT_NATIVE_CSS_PATH = path.join(process.cwd(), 'packages/design-tokens/src/native.css');
const OUTPUT_NATIVE_PRESET_PATH = path.join(process.cwd(), 'packages/design-tokens/src/native-preset.cjs');
const OUTPUT_DART_PATH = path.join(process.cwd(), 'packages/ui-flutter/lib/src/tokens/gv_tokens.g.dart');
// Vendored shadcn Tailwind primitives (@custom-variant definitions, scroll-fade
// + shimmer utilities). Upstream components reference these bare `data-*:`
// variants and utilities, which are NOT Tailwind CSS core — without them the
// classes compile to nothing (or never match) and layouts silently break.
// Appended verbatim to the generated theme.css so every consumer gets them
// through the documented `@import '@gv-tech/design-tokens/theme.css'` entrypoint.
const VENDOR_CSS_PATH = path.join(process.cwd(), 'packages/design-tokens/src/vendor/shadcn.css');

/** Strips hsl() wrapper and commas to match Tailwind/shadcn expectation of "H S L" */
function formatTokenValue(value: string) {
  if (typeof value !== 'string') {
    return value;
  }
  if (value.includes('hsl')) {
    return value.replace(/hsl\((.*)\)/, '$1').replace(/,/g, '');
  }
  return value;
}

/** Wraps value in hsl() if it's a raw H S L string */
function toColorValue(value: string) {
  if (typeof value !== 'string') {
    return value;
  }
  if (value.includes('hsl')) {
    return value;
  }
  if (value.includes('rem') || value.includes('px')) {
    return value;
  }
  // If it looks like "H S L", wrap it
  if (/^\d+/.test(value)) {
    return `hsl(${value})`;
  }
  return value;
}

/** Converts HSL or color string to Dart Color constructor string e.g. Color(0xFF177245) */
function parseHslToDartColor(hslStr: string): string {
  if (typeof hslStr !== 'string') {
    return 'Color(0xFF000000)';
  }

  const clean = hslStr.trim();
  const match =
    clean.match(/hsl\(\s*([\d.]+)[,\s]+([\d.]+)%?[,\s]+([\d.]+)%?\s*\)/) ||
    clean.match(/^\s*([\d.]+)[,\s]+([\d.]+)%?[,\s]+([\d.]+)%?\s*$/);
  if (!match) {
    if (clean.startsWith('#')) {
      const hex = clean.replace('#', '').toUpperCase();
      return `Color(0xFF${
        hex.length === 3
          ? hex
              .split('')
              .map((c) => c + c)
              .join('')
          : hex
      })`;
    }
    return 'Color(0xFF000000)';
  }

  const h = parseFloat(match[1]);
  const s = parseFloat(match[2]) / 100;
  const l = parseFloat(match[3]) / 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;
  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  const rInt = Math.round((r + m) * 255);
  const gInt = Math.round((g + m) * 255);
  const bInt = Math.round((b + m) * 255);

  const hex = ((1 << 24) + (rInt << 16) + (gInt << 8) + bInt).toString(16).slice(1).toUpperCase();
  return `Color(0xFF${hex})`;
}

/** Converts camelCase to kebab-case */
function toKebabCase(str: string) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}

/** Channel variables for :root and .dark. Web theme.css and native.css share this block. */
function generateBaseLayer() {
  let css = '@layer base {\n';
  css += '  :root {\n';

  for (const [key, value] of Object.entries(theme.light)) {
    const kebabKey = toKebabCase(key);
    const rawVal = formatTokenValue(value as string);
    css += `    --${kebabKey}: ${rawVal};\n`;
    if (kebabKey !== 'radius') {
      css += `    --color-${kebabKey}: ${toColorValue(rawVal)};\n`;
    }
  }

  css += '\n    /* Brand Tokens */\n';
  for (const [category, tokens] of Object.entries(palette)) {
    for (const [key, value] of Object.entries(tokens)) {
      const kebabCat = toKebabCase(category);
      const kebabKey = toKebabCase(key);
      const rawVal = formatTokenValue(value as string);
      css += `    --${kebabCat}-${kebabKey}: ${rawVal};\n`;
      css += `    --color-${kebabCat}-${kebabKey}: ${toColorValue(rawVal)};\n`;
    }
  }

  css += '  }\n\n  .dark {\n';

  for (const [key, value] of Object.entries(theme.dark)) {
    const kebabKey = toKebabCase(key);
    const rawVal = formatTokenValue(value as string);
    css += `    --${kebabKey}: ${rawVal};\n`;
    if (kebabKey !== 'radius') {
      css += `    --color-${kebabKey}: ${toColorValue(rawVal)};\n`;
    }
  }

  css += '  }\n}\n';
  return css;
}

function generateCss() {
  let css = '/* Generated by scripts/sync-tokens.ts - Do not edit manually */\n';

  css += '@theme {\n';
  for (const [key] of Object.entries(theme.light)) {
    const kebabKey = toKebabCase(key);
    if (kebabKey !== 'radius') {
      css += `  --color-${kebabKey}: hsl(var(--${kebabKey}));\n`;
    }
  }
  for (const [category, tokens] of Object.entries(palette)) {
    for (const [key] of Object.entries(tokens)) {
      const kebabCat = toKebabCase(category);
      const kebabKey = toKebabCase(key);
      css += `  --color-${kebabCat}-${kebabKey}: hsl(var(--${kebabCat}-${kebabKey}));\n`;
    }
  }
  css += '}\n\n';
  css += generateBaseLayer();

  css += '\n/* shadcn vendor primitives (see src/vendor/shadcn.css) */\n';
  css +=
    fs
      .readFileSync(VENDOR_CSS_PATH, 'utf8')
      .replace(/^\/\*\*[\s\S]*?\*\//, '')
      .trim() + '\n';

  return css;
}

interface NativeColor {
  name: string;
  lightRaw: string;
  lightColor: string;
  darkRaw?: string;
  darkColor?: string;
}

/** Semantic theme colors plus palette colors. Dark overrides exist only for theme roles. */
function nativeColors(): NativeColor[] {
  const darkByKey = new Map<string, string>();
  for (const [key, value] of Object.entries(theme.dark)) {
    if (key === 'radius') {
      continue;
    }
    darkByKey.set(toKebabCase(key), formatTokenValue(value as string));
  }

  const colors: NativeColor[] = [];
  for (const [key, value] of Object.entries(theme.light)) {
    if (key === 'radius') {
      continue;
    }
    const name = toKebabCase(key);
    const lightRaw = formatTokenValue(value as string);
    const darkRaw = darkByKey.get(name);
    colors.push({
      name,
      lightRaw,
      lightColor: toColorValue(lightRaw),
      darkRaw,
      darkColor: darkRaw ? toColorValue(darkRaw) : undefined,
    });
  }

  for (const [category, tokens] of Object.entries(palette)) {
    const kebabCat = toKebabCase(category);
    for (const [key, value] of Object.entries(tokens)) {
      const lightRaw = formatTokenValue(value as string);
      colors.push({
        name: `${kebabCat}-${toKebabCase(key)}`,
        lightRaw,
        lightColor: toColorValue(lightRaw),
      });
    }
  }

  return colors;
}

/**
 * NativeWind v5 is CSS-first. `@theme` registers utilities such as `bg-primary`.
 * Dark values live under `prefers-color-scheme`, which `ThemeProvider` drives
 * through `Appearance`. The native compiler rejects a `.dark` class selector.
 * This file does not include the web shadcn `@custom-variant` sheet.
 */
function generateNativeCss() {
  const colors = nativeColors();
  let css = '/* Generated by scripts/sync-tokens.ts - Do not edit manually */\n';

  css += '@theme {\n';
  for (const color of colors) {
    css += `  --color-${color.name}: ${color.lightColor};\n`;
  }
  for (const [key, value] of Object.entries(radiiNumeric)) {
    css += `  --radius-${key}: ${value}px;\n`;
  }
  css += '}\n\n';

  css += '@layer base {\n';
  css += '  :root {\n';
  for (const color of colors) {
    css += `    --${color.name}: ${color.lightRaw};\n`;
    css += `    --color-${color.name}: ${color.lightColor};\n`;
  }
  css += '  }\n\n';

  css += '  @media (prefers-color-scheme: dark) {\n';
  css += '    :root {\n';
  for (const color of colors) {
    if (!color.darkRaw || !color.darkColor) {
      continue;
    }
    css += `      --${color.name}: ${color.darkRaw};\n`;
    css += `      --color-${color.name}: ${color.darkColor};\n`;
  }
  css += '    }\n';
  css += '  }\n';
  css += '}\n';

  return css;
}

function hslVar(token: string) {
  return `hsl(var(--${token}))`;
}

/**
 * Nest theme keys the way Tailwind utilities expect:
 * `primary` + `primary-foreground` become `{ primary: { DEFAULT, foreground } }`.
 * `sidebar-primary-foreground` nests under `sidebar.primary.foreground`.
 */
function buildThemeColors(keys: string[]) {
  const keySet = new Set(keys);

  function fill(prefix: string): Record<string, unknown> | string {
    const headPrefix = prefix.length > 0 ? `${prefix}-` : '';
    const heads = new Set<string>();
    let hasSelf = prefix.length > 0 && keySet.has(prefix);

    for (const key of keys) {
      if (prefix.length === 0) {
        const head = key.split('-')[0];
        if (head) {
          heads.add(head);
        }
      } else if (key === prefix) {
        hasSelf = true;
      } else if (key.startsWith(headPrefix)) {
        const rest = key.slice(headPrefix.length);
        const head = rest.split('-')[0];
        if (head) {
          heads.add(head);
        }
      }
    }

    if (prefix.length > 0 && heads.size === 0) {
      return hslVar(prefix);
    }

    const node: Record<string, unknown> = {};
    if (hasSelf) {
      node.DEFAULT = hslVar(prefix);
    }

    for (const head of heads) {
      const child = prefix.length === 0 ? head : `${prefix}-${head}`;
      const hasChild = keySet.has(child);
      const hasDescendant = keys.some((key) => key.startsWith(`${child}-`));
      if (!hasChild && !hasDescendant) {
        continue;
      }
      node[head] = hasDescendant ? fill(child) : hslVar(child);
    }

    return node;
  }

  return fill('') as Record<string, unknown>;
}

function buildPaletteColors() {
  const colors: Record<string, Record<string, string>> = {};
  for (const [category, tokens] of Object.entries(palette)) {
    const group: Record<string, string> = {};
    const kebabCat = toKebabCase(category);
    for (const key of Object.keys(tokens)) {
      const kebabKey = toKebabCase(key);
      group[kebabKey] = hslVar(`${kebabCat}-${kebabKey}`);
    }
    colors[kebabCat] = group;
  }
  return colors;
}

/**
 * JS mirror of the native color map, plus the Metro `inlineVariables.exclude`
 * list. NativeWind inlines CSS variables unless they are excluded, which would
 * bake the light color into `bg-primary` and ignore the dark media query.
 */
function generateNativePreset() {
  const themeKeys = Object.keys(theme.light)
    .filter((key) => key !== 'radius')
    .map((key) => toKebabCase(key));
  const borderRadius: Record<string, string> = {};
  for (const [key, value] of Object.entries(radiiNumeric)) {
    borderRadius[key] = `${value}px`;
  }

  const colors = nativeColors();
  const preset = {
    theme: {
      extend: {
        colors: {
          ...buildThemeColors(themeKeys),
          ...buildPaletteColors(),
        },
        borderRadius,
      },
    },
    inlineVariables: {
      exclude: colors.map((color) => `--color-${color.name}`),
    },
  };

  return `/* Generated by scripts/sync-tokens.ts - Do not edit manually */\nmodule.exports = ${JSON.stringify(preset, null, 2)};\n`;
}

function generateDart() {
  let dart = '// Generated by scripts/sync-tokens.ts - Do not edit manually\n';
  dart += "import 'package:flutter/material.dart';\n\n";

  dart += '/// GV Tech Design System Color Tokens\n';
  dart += 'abstract class GVColors {\n';
  dart += '  // Palette Tokens\n';
  for (const [category, tokens] of Object.entries(palette)) {
    for (const [key, value] of Object.entries(tokens)) {
      const fieldName = `${category}${key.charAt(0).toUpperCase()}${key.slice(1)}`;
      const dartColor = parseHslToDartColor(value as string);
      dart += `  static const Color ${fieldName} = ${dartColor};\n`;
    }
  }

  dart += '\n  // Light Theme Semantic Colors\n';
  for (const [key, value] of Object.entries(theme.light)) {
    if (key === 'radius') {
      continue;
    }
    const dartColor = parseHslToDartColor(value as string);
    dart += `  static const Color light${key.charAt(0).toUpperCase()}${key.slice(1)} = ${dartColor};\n`;
  }

  dart += '\n  // Dark Theme Semantic Colors\n';
  for (const [key, value] of Object.entries(theme.dark)) {
    if (key === 'radius') {
      continue;
    }
    const dartColor = parseHslToDartColor(value as string);
    dart += `  static const Color dark${key.charAt(0).toUpperCase()}${key.slice(1)} = ${dartColor};\n`;
  }
  dart += '}\n\n';

  dart += '/// GV Tech Design System Spacing Tokens (in logical pixels)\n';
  dart += 'abstract class GVSpacing {\n';
  dart += '  static const double s0 = 0.0;\n';
  dart += '  static const double s1 = 4.0;\n';
  dart += '  static const double s2 = 8.0;\n';
  dart += '  static const double s3 = 12.0;\n';
  dart += '  static const double s4 = 16.0;\n';
  dart += '  static const double s5 = 20.0;\n';
  dart += '  static const double s6 = 24.0;\n';
  dart += '  static const double s8 = 32.0;\n';
  dart += '  static const double s10 = 40.0;\n';
  dart += '  static const double s12 = 48.0;\n';
  dart += '  static const double s16 = 64.0;\n';
  dart += '  static const double s20 = 80.0;\n';
  dart += '  static const double s24 = 96.0;\n';
  dart += '  static const double s32 = 128.0;\n';
  dart += '}\n\n';

  dart += '/// GV Tech Design System Border Radius Tokens\n';
  dart += 'abstract class GVRadii {\n';
  dart += '  static const double none = 0.0;\n';
  dart += '  static const double sm = 4.0;\n';
  dart += '  static const double md = 6.0;\n';
  dart += '  static const double lg = 8.0;\n';
  dart += '  static const double xl = 12.0;\n';
  dart += '  static const double x2l = 16.0;\n';
  dart += '  static const double full = 9999.0;\n';
  dart += '}\n\n';

  dart += '/// GV Tech Design System Flutter ThemeData Factory\n';
  dart += 'abstract class GVThemeData {\n';
  dart += '  static ThemeData light() {\n';
  dart += '    return ThemeData(\n';
  dart += '      brightness: Brightness.light,\n';
  dart += '      scaffoldBackgroundColor: GVColors.lightBackground,\n';
  dart += '      colorScheme: const ColorScheme.light(\n';
  dart += '        primary: GVColors.lightPrimary,\n';
  dart += '        onPrimary: GVColors.lightPrimaryForeground,\n';
  dart += '        secondary: GVColors.lightSecondary,\n';
  dart += '        onSecondary: GVColors.lightSecondaryForeground,\n';
  dart += '        error: GVColors.lightDestructive,\n';
  dart += '        onError: GVColors.lightDestructiveForeground,\n';
  dart += '        surface: GVColors.lightCard,\n';
  dart += '        onSurface: GVColors.lightCardForeground,\n';
  dart += '      ),\n';
  dart += '    );\n';
  dart += '  }\n\n';
  dart += '  static ThemeData dark() {\n';
  dart += '    return ThemeData(\n';
  dart += '      brightness: Brightness.dark,\n';
  dart += '      scaffoldBackgroundColor: GVColors.darkBackground,\n';
  dart += '      colorScheme: const ColorScheme.dark(\n';
  dart += '        primary: GVColors.darkPrimary,\n';
  dart += '        onPrimary: GVColors.darkPrimaryForeground,\n';
  dart += '        secondary: GVColors.darkSecondary,\n';
  dart += '        onSecondary: GVColors.darkSecondaryForeground,\n';
  dart += '        error: GVColors.darkDestructive,\n';
  dart += '        onError: GVColors.darkDestructiveForeground,\n';
  dart += '        surface: GVColors.darkCard,\n';
  dart += '        onSurface: GVColors.darkCardForeground,\n';
  dart += '      ),\n';
  dart += '    );\n';
  dart += '  }\n';
  dart += '}\n';

  return dart;
}

function syncTokens() {
  try {
    const cssContent = generateCss();
    fs.writeFileSync(OUTPUT_CSS_PATH, cssContent);
    console.log(`✅ Tokens synchronized successfully. Generated ${path.relative(process.cwd(), OUTPUT_CSS_PATH)}`);

    fs.writeFileSync(OUTPUT_NATIVE_CSS_PATH, generateNativeCss());
    console.log(
      `✅ Tokens synchronized successfully. Generated ${path.relative(process.cwd(), OUTPUT_NATIVE_CSS_PATH)}`,
    );

    fs.writeFileSync(OUTPUT_NATIVE_PRESET_PATH, generateNativePreset());
    execFileSync('bunx', ['oxfmt', '--write', OUTPUT_NATIVE_PRESET_PATH], { stdio: 'inherit' });
    console.log(
      `✅ Tokens synchronized successfully. Generated ${path.relative(process.cwd(), OUTPUT_NATIVE_PRESET_PATH)}`,
    );

    const dartDir = path.dirname(OUTPUT_DART_PATH);
    if (!fs.existsSync(dartDir)) {
      fs.mkdirSync(dartDir, { recursive: true });
    }
    const dartContent = generateDart();
    fs.writeFileSync(OUTPUT_DART_PATH, dartContent);
    console.log(`✅ Tokens synchronized successfully. Generated ${path.relative(process.cwd(), OUTPUT_DART_PATH)}`);
  } catch (error) {
    console.error(`❌ Error generating tokens:`, error);
  }
}

syncTokens();
