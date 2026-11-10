/// <reference types="node" />

import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { buttonSizeValues, buttonVariantValues } from '@gv-tech/ui-core';
import { describe, expect, it } from 'vitest';

import { buttonSizeType, buttonVariantType } from './button-contract-docs';

const pagesDir = resolve(dirname(fileURLToPath(import.meta.url)), '../pages');
const buttonDocPages = [resolve(pagesDir, 'web/ButtonDocs.tsx'), resolve(pagesDir, 'native/ButtonDocs.tsx')];

describe('button contract docs', () => {
  it('lists every contract size and variant', () => {
    for (const size of buttonSizeValues) {
      expect(buttonSizeType).toContain(`"${size}"`);
    }
    for (const variant of buttonVariantValues) {
      expect(buttonVariantType).toContain(`"${variant}"`);
    }
  });

  it('builds both Button pages from the contract arrays', () => {
    for (const page of buttonDocPages) {
      const source = readFileSync(page, 'utf8');
      expect(source).toContain('buttonSizeValues');
      expect(source).toContain('buttonSizeType');
      expect(source).toContain('buttonVariantType');
    }
  });
});
