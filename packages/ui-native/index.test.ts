import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

const indexSource = readFileSync(resolve(dirname(fileURLToPath(import.meta.url)), 'src/index.ts'), 'utf8');

const withheld = [
  './chart',
  './command',
  './resizable',
  './sonner',
  './attachment',
  './bubble',
  './marker',
  './message',
  './message-scroller',
  './questionnaire',
];

describe('@gv-tech/ui-native public entry', () => {
  it('keeps implemented controls exported', () => {
    expect(indexSource).toContain("from './slider'");
    expect(indexSource).toContain("from './scroll-area'");
    expect(indexSource).toContain("from './button-group'");
    expect(indexSource).toContain("from './toast'");
  });

  it('does not export web-only or planned stubs', () => {
    for (const specifier of withheld) {
      expect(indexSource).not.toContain(`from '${specifier}'`);
    }
  });
});
