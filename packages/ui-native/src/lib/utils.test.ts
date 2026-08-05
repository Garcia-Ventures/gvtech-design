import { describe, expect, it } from 'vitest';
import { cn, slugify } from './utils';

describe('utils (Native Implementation)', () => {
  describe('cn', () => {
    it('should merge simple class names', () => {
      expect(cn('class1', 'class2')).toBe('class1 class2');
    });

    it('should handle conditional class names', () => {
      expect(cn('class1', true && 'class2', false && 'class3')).toBe('class1 class2');
    });

    it('should resolve conflicts using tailwind-merge', () => {
      expect(cn('px-2 py-1', 'px-4')).toBe('py-1 px-4');
    });

    it('should handle array inputs', () => {
      expect(cn(['class1', 'class2'])).toBe('class1 class2');
      expect(cn(['class1', false && 'class2', 'class3'])).toBe('class1 class3');
    });

    it('should handle nested structures', () => {
      expect(cn('class1', ['class2', ['class3', 'class4']])).toBe('class1 class2 class3 class4');
    });

    it('should filter out undefined, null, and empty/falsy values', () => {
      expect(cn('class1', undefined, null, '', 'class2')).toBe('class1 class2');
    });
  });

  describe('slugify', () => {
    it('should convert text to lowercase and replace spaces with hyphens', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    it('should trim surrounding whitespace', () => {
      expect(slugify('  hello world  ')).toBe('hello-world');
    });

    it('should remove special characters', () => {
      expect(slugify('Hello World!!!')).toBe('hello-world');
    });

    it('should reduce multiple hyphens to a single hyphen', () => {
      expect(slugify('hello---world')).toBe('hello-world');
    });

    it('should handle non-string values gracefully when cast to string', () => {
      expect(slugify('123')).toBe('123');
    });
  });
});
