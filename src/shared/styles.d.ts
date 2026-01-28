/**
 * Type declarations for shared/styles.js
 */

import { FlattenSimpleInterpolation } from 'styled-components';

export interface BackgroundColors {
  app: string;
  appInverse: string;
  positive: string;
  negative: string;
  warning: string;
}

export interface ColorPalette {
  // Palette
  primary: string;
  secondary: string;
  tertiary: string;
  orange: string;
  gold: string;
  green: string;
  seafoam: string;
  purple: string;
  ultraviolet: string;
  // Monochrome
  lightest: string;
  lighter: string;
  light: string;
  mediumlight: string;
  medium: string;
  mediumdark: string;
  dark: string;
  darker: string;
  darkest: string;
  // Status
  positive: string;
  negative: string;
  warning: string;
  border: string;
}

export interface Spacing {
  padding: {
    small: number;
    medium: number;
    large: number;
  };
  borderRadius: {
    small: number;
    default: number;
  };
}

export interface Typography {
  type: {
    primary: string;
    code: string;
  };
  weight: {
    regular: string;
    bold: string;
    extrabold: string;
    black: string;
  };
  size: {
    s1: string;
    s2: string;
    s3: string;
    m1: string;
    m2: string;
    m3: string;
    l1: string;
    l2: string;
    l3: string;
    code: string;
  };
}

export declare const background: BackgroundColors;
export declare const color: ColorPalette;
export declare const spacing: Spacing;
export declare const typography: Typography;
export declare const breakpoint: number;
export declare const pageMargin: string;
export declare const pageMargins: FlattenSimpleInterpolation;
