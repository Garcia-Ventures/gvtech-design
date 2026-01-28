/**
 * Type declarations for shared/animation.js
 */

import { Keyframes, FlattenSimpleInterpolation } from 'styled-components';

export interface Easing {
  rubber: string;
}

export declare const easing: Easing;

export declare const rotate360: Keyframes;
export declare const glow: Keyframes;
export declare const float: Keyframes;
export declare const jiggle: Keyframes;
export declare const shake: Keyframes;
export declare const inlineGlow: FlattenSimpleInterpolation;
