import { describe, expect, it } from 'vitest';
import { cn, slugify } from './utils';

describe('utils', () => {
  describe('cn', () => {
    it('should join class names', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2');
    });

    it('should merge tailwind classes correctly', () => {
      expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
    });

    it('should handle conditional classes', () => {
      expect(cn('class1', { class2: true, class3: false })).toBe('class1 class2');
    });

    it('should handle falsy values', () => {
      expect(cn('class1', null, undefined, false, '')).toBe('class1');
    });

    it('should handle arrays of classes', () => {
      expect(cn(['class1', 'class2'], 'class3')).toBe('class1 class2 class3');
    });
  });

  describe('slugify', () => {
    it('should convert text to lowercase and replace spaces with hyphens', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    it('should remove special characters', () => {
      expect(slugify('Hello World!!!')).toBe('hello-world');
    });

    it('should handle multiple spaces and dashes', () => {
      expect(slugify('Hello   World--Test')).toBe('hello-world-test');
    });

    it('should trim leading and trailing spaces', () => {
      expect(slugify('   Hello World   ')).toBe('hello-world');
    });
  });
});
