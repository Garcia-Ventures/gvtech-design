import '@testing-library/jest-dom';
import * as matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';

// React Native libraries (for example reanimated) read this global in test environments.
if (!('__DEV__' in globalThis)) {
  Object.defineProperty(globalThis, '__DEV__', {
    value: false,
    writable: true,
    configurable: true,
  });
}

expect.extend(matchers);

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // Deprecated
    removeListener: () => {}, // Deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});

// Mock ResizeObserver
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.ResizeObserver = ResizeObserver;

// Mock IntersectionObserver
class IntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
//  -next-line @typescript-eslint/no-explicit-any
window.IntersectionObserver = IntersectionObserver as any;

// Mock scrollIntoView
window.HTMLElement.prototype.scrollIntoView = function () {};

// Mock Pointer Capture
window.HTMLElement.prototype.setPointerCapture = function () {};
window.HTMLElement.prototype.releasePointerCapture = function () {};
window.HTMLElement.prototype.hasPointerCapture = function () {
  return false;
};
